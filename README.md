# Sauce Security Action

A GitHub action to run security scans on your applications.

## Example

```yaml
jobs:
    test:
        runs-on: ubuntu-latest
        name: Action Test
        steps:
            # ...
            - name: sauce-security-test
              uses: saucelabs/sauce-security-action@v1
              with:
                  username: ${{ secrets.SAUCE_USERNAME }}
                  accessKey: ${{ secrets.SAUCE_ACCESS_KEY }}
                  url: https://my-app.com
                  allowedSevereVulnerabilties: 0
                  downloadReports: true
            - name: Upload Report
              uses: actions/upload-artifact@master
              with:
                  name: security-scan-log
                  path: ${{ steps.sauce-security-test.outputs.reports-folder-path }}
            # ...
```

## Inputs

### `username`:

**Required** Sauce Labs user name.

### `accessKey`:

**Required** Sauce Labs API Key.

### `url`:

Url to the application under test.

### `allowedSevereVulnerabilties`:

Amount of severe vulnerabilities that are allowed to be discovered - if set to `-1` these will be ignored. (Default: 0)

### `allowedMediumVulnerabilties`:

Amount of severe vulnerabilities that are allowed to be discovered - if set to `-1` these will be ignored. (Default: 0)

### `allowedLowVulnerabilties`:

Amount of low vulnerabilities that are allowed to be discovered - if set to `-1` these will be ignored. (Default: 0)

### `allowedInformationalVulnerabilties`:

Amount of informational vulnerabilities that are allowed to be discovered - if set to `-1` these will be ignored. (Default: `-1`)

### `downloadReports`:

If set to true, this action will download Zap reports for you. (Default: `false`)

### `downloadJobAssets`:

If set to true, this action will download all Sauce Labs job assets for you. (Default: `false`)

## Outputs

### `reports-folder-path`:
Path of the directory to which all Zap reports got downloaded to. This output is only set if `downloadReports` is set to `true`.

### `assets-folder-path`:

Path of the directory to which all Sauce job assets got downloaded to. This output is only set if `downloadJobAssets` is set to `true`.
