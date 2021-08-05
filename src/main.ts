import {getInput, saveState, setFailed, warning} from '@actions/core'


async function run(): Promise<void> {
    const username = getInput('username')
    const accessKey = getInput('accessKey')
    const url = getInput('url')
    const asv = parseInt(getInput('allowedSevereVulnerabilties'), 10) || 0
    const amv = parseInt(getInput('allowedMediumVulnerabilties'), 10) || 0
    const alv = parseInt(getInput('allowedLowVulnerabilties'), 10) || 0
    const aiv = parseInt(getInput('allowedInformationalVulnerabilties'), 10) || -1
    const startTime = Date.now()

}

// eslint-disable-next-line github/no-then
run().catch(error => setFailed(error.message))
