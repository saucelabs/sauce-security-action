import fs from 'fs'
import path from 'path'

import {
    endGroup,
    getInput,
    info,
    error,
    setFailed,
    setOutput,
    startGroup
} from '@actions/core'
import SauceZap from '@saucelabs/zap'

import {waitUntilScanFinished} from './utils'
import {JOB_ASSETS, REPORT_EXTENSIONS} from './constants'
import type {REPORT} from './types'

const getAlertByRisk = (
    alerts: any[],
    risk: 'severe' | 'medium' | 'low' | 'informational'
) => alerts.filter(alert => alert.risk.toLowerCase() === risk)

let teardown = () => {}

async function run(): Promise<void> {
    const startTime = Date.now()
    const username = getInput('username') || process.env.SAUCE_USERNAME
    const accessKey = getInput('accessKey') || process.env.SAUCE_ACCESS_KEY
    const targetToScan = getInput('target')
    const openAPISpec = getInput('openapi')
    const graphqlDefinition = getInput('graphql')
    const downloadReports = Boolean(getInput('downloadReports'))
    const downloadJobAssets = Boolean(getInput('downloadJobAssets'))
    const asv = parseInt(getInput('allowedSevereVulnerabilties'), 10) || 0
    const amv = parseInt(getInput('allowedMediumVulnerabilties'), 10) || 0
    const alv = parseInt(getInput('allowedLowVulnerabilties'), 10) || 0
    const aiv =
        parseInt(getInput('allowedInformationalVulnerabilties'), 10) || -1

    if (!username || !accessKey) {
        return setFailed(
            'Missing "username" or "accessKey" GitHub Action parameter'
        )
    }

    if (!targetToScan) {
        return setFailed('Missing GitHub Action parameter "url"')
    }

    const zaproxy = new SauceZap({
        user: username,
        key: accessKey
    })

    /**
     * start Sauce Labs Zap session
     */
    await zaproxy.session.newSession({commandTimeout: 1000 * 60})
    teardown = async () => zaproxy.session.deleteSession()
    const {scan} = await zaproxy.spider.scan({url: targetToScan})

    const apiSpec =
        (openAPISpec && {
            type: 'openapi' as const,
            params: {url: openAPISpec}
        }) ||
        (graphqlDefinition && {
            type: 'graphql',
            params: {endurl: graphqlDefinition}
        })
    if (apiSpec) {
        info(
            `Importing ${apiSpec.type} API definition from ${targetToScan} ...`
        )
        await zaproxy[apiSpec.type].importUrl(apiSpec.params)
    }

    info(`Exploring application ${targetToScan} ...`)
    await waitUntilScanFinished(zaproxy.spider, scan)

    info('Start analyzing application ...')
    const {scan: ascan} = await zaproxy.ascan.scan({
        url: targetToScan,
        scanPolicyName: 'Default Policy'
    })
    await waitUntilScanFinished(zaproxy.ascan, ascan)

    info('Computing vulnerabilities ...')
    const {alerts} = await zaproxy.alert.alerts()
    info(`\nComputed scan results after ${(Date.now() - startTime) / 1000}s`)
    startGroup(`Vulnerability results`)
    for (const alert of alerts) {
        const url = new URL(alert.url)
        info(
            `${targetToScan}${url.pathname} (${alert.risk}): ${alert.name}\n` +
                `Description: ${alert.description.trim()}\n` +
                `Solution: ${alert.solution.trim()}\n\n`
        )
    }
    endGroup()

    const severeVulnerabilities = getAlertByRisk(alerts, 'severe')
    const mediumVulnerabilities = getAlertByRisk(alerts, 'medium')
    const lowVulnerabilities = getAlertByRisk(alerts, 'low')
    const informationalVulnerabilities = getAlertByRisk(alerts, 'informational')
    info(
        '\nVulnerabilities found:\n' +
            `Severe: ${severeVulnerabilities.length}\n` +
            `Medium: ${mediumVulnerabilities.length}\n` +
            `Low: ${lowVulnerabilities.length}\n` +
            `Informational: ${informationalVulnerabilities.length}\n`
    )

    if (asv !== -1 && severeVulnerabilities.length > asv)
        setFailed(
            `Found ${severeVulnerabilities.length} severe vulnerabilities, allowed are ${asv}`
        )
    if (amv !== -1 && mediumVulnerabilities.length > amv)
        setFailed(
            `Found ${mediumVulnerabilities.length} medium vulnerabilities, allowed are ${amv}`
        )
    if (alv !== -1 && lowVulnerabilities.length > alv)
        setFailed(
            `Found ${lowVulnerabilities.length} low vulnerabilities, allowed are ${alv}`
        )
    if (aiv !== -1 && informationalVulnerabilities.length > aiv)
        setFailed(
            `Found ${informationalVulnerabilities.length} informational vulnerabilities, allowed are ${aiv}`
        )

    /**
     * Store Zap report if desired
     */
    if (downloadReports) {
        try {
            info('\nDownloading Zap Reports ...')
            const reportPath = path.join(process.cwd(), '__zap-reports__')
            await fs.promises.mkdir(reportPath)

            await Promise.all(
                REPORT_EXTENSIONS.map(async ext => {
                    const report = await zaproxy.core[
                        `${ext}report` as REPORT
                    ]()

                    const reportName = `report.${ext}`
                    await fs.promises.writeFile(
                        path.join(reportPath, reportName),
                        report.toString(),
                        'utf-8'
                    )
                })
            )
            info(`Zap reports downloaded to ${reportPath}`)
            setOutput('reports-folder-path', reportPath)
        } catch (err: any) {
            return error(
                `An error was encountered when downloading: ${err.message}.`
            )
        }
    }

    /**
     * Store Zap session if desired
     */
    if (downloadJobAssets) {
        try {
            info('\nDownloading Sauce Job Assets ...')
            const assetPath = path.join(process.cwd(), '__sauce-assets__')
            await fs.promises.mkdir(assetPath)

            await Promise.all(
                JOB_ASSETS.map(async asset => {
                    const assetBuffer = await zaproxy.session.getAsset({
                        name: asset
                    })
                    await fs.promises.writeFile(
                        path.join(assetPath, asset),
                        assetBuffer,
                        'utf-8'
                    )
                })
            )
            info(`Sauce job assets downloaded to ${assetPath}`)
            setOutput('assets-folder-path', assetPath)
        } catch (err: any) {
            return error(
                `An error was encountered when downloading: ${err.message}.`
            )
        }
    }

    await zaproxy.session.deleteSession()
    teardown = () => {}
}

// eslint-disable-next-line github/no-then
run().catch(async err => {
    setFailed(err.message)
    return teardown()
})
