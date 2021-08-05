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
            - uses: saucelabs/sauce-security-action@v1
              with:
                  username: ${{ secrets.SAUCE_USERNAME }}
                  accessKey: ${{ secrets.SAUCE_ACCESS_KEY }}
                  url: https://my-app.com
                  allowedSevereVulnerabilties: 0
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
