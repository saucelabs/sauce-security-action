import {getInput, setFailed, info, startGroup, endGroup} from '@actions/core'
import SauceZap from '@saucelabs/zap'

const sleep = async (time = 100) =>
    new Promise(resolve => setTimeout(resolve, time))

const getAlertByRisk = (
    alerts: any[],
    risk: 'severe' | 'medium' | 'low' | 'informational'
) => alerts.filter(alert => alert.risk.toLowerCase() === risk)

let teardown = () => {}

async function run(): Promise<void> {
    const username = getInput('username') || process.env.SAUCE_USERNAME
    const accessKey = getInput('accessKey') || process.env.SAUCE_ACCESS_KEY
    const urlToScan = getInput('url')
    const asv = parseInt(getInput('allowedSevereVulnerabilties'), 10) || 0
    const amv = parseInt(getInput('allowedMediumVulnerabilties'), 10) || 0
    const alv = parseInt(getInput('allowedLowVulnerabilties'), 10) || 0
    const aiv =
        parseInt(getInput('allowedInformationalVulnerabilties'), 10) || -1
    const startTime = Date.now()

    if (!username || !accessKey) {
        return setFailed(
            'Missing "username" or "accessKey" GitHub Action parameter'
        )
    }

    if (!urlToScan) {
        return setFailed('Missing GitHub Action parameter "url"')
    }

    // @ts-expect-error https://github.com/saucelabs/node-zap/issues/2
    const zaproxy = new SauceZap({
        user: username,
        key: accessKey
    })

    /**
     * start Sauce Labs Zap session
     */
    await zaproxy.session.newSession({commandTimeout: 1000 * 60})
    teardown = async () => zaproxy.session.deleteSession()
    const {scan} = await zaproxy.spider.scan({url: urlToScan})

    info(`Exploring application ${urlToScan} ...`)
    while (true) {
        const {status} = await zaproxy.spider.status({
            scanId: parseInt(scan, 10)
        })
        if (status === '100') {
            break
        }

        await sleep()
    }

    info('Start analyzing application ...')
    const {scan: ascan} = await zaproxy.ascan.scan({
        url: urlToScan,
        scanPolicyName: 'Default Policy'
    })
    while (true) {
        const {status} = await zaproxy.ascan.status({
            scanId: parseInt(ascan, 10)
        })
        if (status === '100') {
            break
        }

        await sleep()
    }

    info('Computing vulnerabilities ...')
    const {alerts} = await zaproxy.alert.alerts()
    info(`\nComputed scan results after ${(Date.now() - startTime) / 1000}s`)
    startGroup(`Vulnerability results`)
    for (const alert of alerts) {
        const url = new URL(alert.url)
        info(
            `${urlToScan}${url.pathname} (${alert.risk}): ${alert.name}\n` +
                `Description: ${alert.description.trim()}\n` +
                `Solution: ${alert.solution.trim()}\n\n`
        )
    }
    endGroup()

    await zaproxy.session.deleteSession()
    teardown = () => {}

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
}

// eslint-disable-next-line github/no-then
run().catch(async error => {
    setFailed(error.message)
    teardown()
})
