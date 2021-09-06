const sleep = async (time = 1000) =>
    new Promise(resolve => setTimeout(resolve, time))

export async function waitUntilScanFinished(api: any, scanNumber: number) {
    while (true) {
        const {status} = await api.status(scanNumber)
        if (status === '100') {
            break
        }

        await sleep()
    }
}
