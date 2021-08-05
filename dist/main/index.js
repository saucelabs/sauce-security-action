/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6963:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"openapi":"3.0.2","info":{"title":"Sauce ZAP API","description":"Extended Zap API to run Owasp Zap in the cloud.","contact":{"name":"Open Source Program Office","url":"https://opensource.saucelabs.com","email":"opensource@saucelabs.com"},"license":{"name":"Apache 2.0","url":"https://www.apache.org/licenses/LICENSE-2.0.html"},"version":"Dev Build"},"servers":[{"url":"http://sauce","description":"The URL while proxying through ZAP."}],"components":{"securitySchemes":{"apiKeyHeader":{"type":"apiKey","name":"X-ZAP-API-Key","in":"header"},"apiKeyQuery":{"type":"apiKey","name":"apikey","in":"query"}},"schemas":{"Error":{"type":"object","required":["message","code"],"properties":{"message":{"type":"string"},"code":{"type":"integer","minimum":100,"maximum":600}}},"SessionResponse":{"type":"object","required":["sessionId"],"properties":{"sessionId":{"type":"string"}}}}},"security":[{"apiKeyHeader":[]},{"apiKeyQuery":[]}],"paths":{"/session/":{"post":{"description":"Create an Owasp Zap session in the cloud","operationId":"newSession","tags":["session"],"responses":{"500":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}},"default":{"description":"session response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/SessionResponse"}}}}}},"parameters":[{"name":"commandTimeout","in":"body","required":false,"deprecated":false,"description":"timeout to close the session when no command was received","schema":{"type":"integer"}},{"name":"loadFromSessionId","in":"body","required":false,"deprecated":false,"description":"initiate session with existing Zap session","schema":{"type":"string"}}]},"/session/{sessionId}":{"delete":{"description":"Delete a Owasp Zap session in the cloud","operationId":"deleteSession","tags":["session"],"responses":{"500":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}},"default":{"description":"unexpected error","content":{"application/json":{"schema":{"type":"object","properties":{}}}}}}}}}}');

/***/ }),

/***/ 3791:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"openapi":"3.0.2","info":{"title":"ZAP API","description":"The HTTP API for controlling and accessing ZAP.","contact":{"name":"OWASP ZAP User Group","url":"https://groups.google.com/group/zaproxy-users","email":"zaproxy-users@googlegroups.com"},"license":{"name":"Apache 2.0","url":"https://www.apache.org/licenses/LICENSE-2.0.html"},"version":"Dev Build"},"servers":[{"url":"http://zap","description":"The URL while proxying through ZAP."},{"url":"http://{address}:{port}","description":"The URL of a Local Proxy of ZAP.","variables":{"address":{"default":"127.0.0.1","description":"The address ZAP is listening on."},"port":{"default":"8080","description":"The port ZAP is bound to."}}}],"components":{"securitySchemes":{"apiKeyHeader":{"type":"apiKey","name":"X-ZAP-API-Key","in":"header"},"apiKeyQuery":{"type":"apiKey","name":"apikey","in":"query"}},"schemas":{"Error":{"type":"object","required":["message","code"],"properties":{"message":{"type":"string"},"code":{"type":"integer","minimum":100,"maximum":600}}}}},"security":[{"apiKeyHeader":[]},{"apiKeyQuery":[]}],"paths":{"/JSON/alert/view/alert/":{"get":{"description":"Gets the alert with the given ID, the corresponding HTTP message can be obtained with the \'messageId\' field and \'message\' API method","operationId":"alertViewAlert","tags":["alert"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"id","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/alert/view/alerts/":{"get":{"description":"Gets the alerts raised by ZAP, optionally filtering by URL or riskId, and paginating with \'start\' position and \'count\' of alerts","operationId":"alertViewAlerts","tags":["alert"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"start","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"count","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"riskId","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/alert/view/alertsSummary/":{"get":{"description":"Gets number of alerts grouped by each risk level, optionally filtering by URL","operationId":"alertViewAlertsSummary","tags":["alert"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/alert/view/numberOfAlerts/":{"get":{"description":"Gets the number of alerts, optionally filtering by URL or riskId","operationId":"alertViewNumberOfAlerts","tags":["alert"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"riskId","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/alert/view/alertsByRisk/":{"get":{"description":"Gets a summary of the alerts, optionally filtered by a \'url\'. If \'recurse\' is true then all alerts that apply to urls that start with the specified \'url\' will be returned, otherwise only those on exactly the same \'url\' (ignoring url parameters)","operationId":"alertViewAlertsByRisk","tags":["alert"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"url","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"recurse","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/alert/view/alertCountsByRisk/":{"get":{"description":"Gets a count of the alerts, optionally filtered as per alertsPerRisk","operationId":"alertViewAlertCountsByRisk","tags":["alert"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"url","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"recurse","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/alert/action/deleteAllAlerts/":{"get":{"description":"Deletes all alerts of the current session.","operationId":"alertActionDeleteAllAlerts","tags":["alert"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/alert/action/deleteAlert/":{"get":{"description":"Deletes the alert with the given ID. ","operationId":"alertActionDeleteAlert","tags":["alert"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"id","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/acsrf/view/optionTokensNames/":{"get":{"description":"Lists the names of all anti-CSRF tokens","operationId":"acsrfViewOptionTokensNames","tags":["acsrf"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/acsrf/action/addOptionToken/":{"get":{"description":"Adds an anti-CSRF token with the given name, enabled by default","operationId":"acsrfActionAddOptionToken","tags":["acsrf"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"String","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/acsrf/action/removeOptionToken/":{"get":{"description":"Removes the anti-CSRF token with the given name","operationId":"acsrfActionRemoveOptionToken","tags":["acsrf"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"String","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/OTHER/acsrf/other/genForm/":{"get":{"description":"Generate a form for testing lack of anti-CSRF tokens - typically invoked via ZAP","operationId":"acsrfOtherGenForm","tags":["acsrf"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"hrefId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/pscan/view/scanOnlyInScope/":{"get":{"description":"Tells whether or not the passive scan should be performed only on messages that are in scope.","operationId":"pscanViewScanOnlyInScope","tags":["pscan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/pscan/view/recordsToScan/":{"get":{"description":"The number of records the passive scanner still has to scan","operationId":"pscanViewRecordsToScan","tags":["pscan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/pscan/view/scanners/":{"get":{"description":"Lists all passive scanners with its ID, name, enabled state and alert threshold.","operationId":"pscanViewScanners","tags":["pscan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/pscan/view/currentRule/":{"get":{"description":"Show information about the passive scan rule currently being run (if any).","operationId":"pscanViewCurrentRule","tags":["pscan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/pscan/view/maxAlertsPerRule/":{"get":{"description":"Gets the maximum number of alerts a passive scan rule should raise.","operationId":"pscanViewMaxAlertsPerRule","tags":["pscan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/pscan/action/setEnabled/":{"get":{"description":"Sets whether or not the passive scanning is enabled (Note: the enabled state is not persisted).","operationId":"pscanActionSetEnabled","tags":["pscan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"enabled","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/pscan/action/setScanOnlyInScope/":{"get":{"description":"Sets whether or not the passive scan should be performed only on messages that are in scope.","operationId":"pscanActionSetScanOnlyInScope","tags":["pscan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"onlyInScope","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/pscan/action/enableAllScanners/":{"get":{"description":"Enables all passive scanners","operationId":"pscanActionEnableAllScanners","tags":["pscan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/pscan/action/disableAllScanners/":{"get":{"description":"Disables all passive scanners","operationId":"pscanActionDisableAllScanners","tags":["pscan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/pscan/action/enableScanners/":{"get":{"description":"Enables all passive scanners with the given IDs (comma separated list of IDs)","operationId":"pscanActionEnableScanners","tags":["pscan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"ids","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/pscan/action/disableScanners/":{"get":{"description":"Disables all passive scanners with the given IDs (comma separated list of IDs)","operationId":"pscanActionDisableScanners","tags":["pscan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"ids","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/pscan/action/setScannerAlertThreshold/":{"get":{"description":"Sets the alert threshold of the passive scanner with the given ID, accepted values for alert threshold: OFF, DEFAULT, LOW, MEDIUM and HIGH","operationId":"pscanActionSetScannerAlertThreshold","tags":["pscan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"id","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"alertThreshold","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/pscan/action/setMaxAlertsPerRule/":{"get":{"description":"Sets the maximum number of alerts a passive scan rule should raise.","operationId":"pscanActionSetMaxAlertsPerRule","tags":["pscan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"maxAlerts","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/search/view/urlsByUrlRegex/":{"get":{"description":"Returns the URLs of the HTTP messages that match the given regular expression in the URL optionally filtered by URL and paginated with \'start\' position and \'count\' of messages.","operationId":"searchViewUrlsByUrlRegex","tags":["search"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"regex","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"start","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"count","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/search/view/urlsByRequestRegex/":{"get":{"description":"Returns the URLs of the HTTP messages that match the given regular expression in the request optionally filtered by URL and paginated with \'start\' position and \'count\' of messages.","operationId":"searchViewUrlsByRequestRegex","tags":["search"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"regex","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"start","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"count","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/search/view/urlsByResponseRegex/":{"get":{"description":"Returns the URLs of the HTTP messages that match the given regular expression in the response optionally filtered by URL and paginated with \'start\' position and \'count\' of messages.","operationId":"searchViewUrlsByResponseRegex","tags":["search"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"regex","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"start","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"count","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/search/view/urlsByHeaderRegex/":{"get":{"description":"Returns the URLs of the HTTP messages that match the given regular expression in the header(s) optionally filtered by URL and paginated with \'start\' position and \'count\' of messages.","operationId":"searchViewUrlsByHeaderRegex","tags":["search"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"regex","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"start","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"count","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/search/view/messagesByUrlRegex/":{"get":{"description":"Returns the HTTP messages that match the given regular expression in the URL optionally filtered by URL and paginated with \'start\' position and \'count\' of messages.","operationId":"searchViewMessagesByUrlRegex","tags":["search"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"regex","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"start","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"count","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/search/view/messagesByRequestRegex/":{"get":{"description":"Returns the HTTP messages that match the given regular expression in the request optionally filtered by URL and paginated with \'start\' position and \'count\' of messages.","operationId":"searchViewMessagesByRequestRegex","tags":["search"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"regex","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"start","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"count","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/search/view/messagesByResponseRegex/":{"get":{"description":"Returns the HTTP messages that match the given regular expression in the response optionally filtered by URL and paginated with \'start\' position and \'count\' of messages.","operationId":"searchViewMessagesByResponseRegex","tags":["search"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"regex","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"start","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"count","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/search/view/messagesByHeaderRegex/":{"get":{"description":"Returns the HTTP messages that match the given regular expression in the header(s) optionally filtered by URL and paginated with \'start\' position and \'count\' of messages.","operationId":"searchViewMessagesByHeaderRegex","tags":["search"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"regex","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"start","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"count","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/OTHER/search/other/harByUrlRegex/":{"get":{"description":"Returns the HTTP messages, in HAR format, that match the given regular expression in the URL optionally filtered by URL and paginated with \'start\' position and \'count\' of messages.","operationId":"searchOtherHarByUrlRegex","tags":["search"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"regex","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"start","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"count","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/OTHER/search/other/harByRequestRegex/":{"get":{"description":"Returns the HTTP messages, in HAR format, that match the given regular expression in the request optionally filtered by URL and paginated with \'start\' position and \'count\' of messages.","operationId":"searchOtherHarByRequestRegex","tags":["search"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"regex","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"start","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"count","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/OTHER/search/other/harByResponseRegex/":{"get":{"description":"Returns the HTTP messages, in HAR format, that match the given regular expression in the response optionally filtered by URL and paginated with \'start\' position and \'count\' of messages.","operationId":"searchOtherHarByResponseRegex","tags":["search"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"regex","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"start","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"count","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/OTHER/search/other/harByHeaderRegex/":{"get":{"description":"Returns the HTTP messages, in HAR format, that match the given regular expression in the header(s) optionally filtered by URL and paginated with \'start\' position and \'count\' of messages.","operationId":"searchOtherHarByHeaderRegex","tags":["search"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"regex","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"start","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"count","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/autoupdate/view/latestVersionNumber/":{"get":{"description":"Returns the latest version number","operationId":"autoupdateViewLatestVersionNumber","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/view/isLatestVersion/":{"get":{"description":"Returns \'true\' if ZAP is on the latest version","operationId":"autoupdateViewIsLatestVersion","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/view/installedAddons/":{"get":{"description":"Return a list of all of the installed add-ons","operationId":"autoupdateViewInstalledAddons","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/view/localAddons/":{"get":{"description":"Returns a list with all local add-ons, installed or not.","operationId":"autoupdateViewLocalAddons","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/view/newAddons/":{"get":{"description":"Return a list of any add-ons that have been added to the Marketplace since the last check for updates","operationId":"autoupdateViewNewAddons","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/view/updatedAddons/":{"get":{"description":"Return a list of any add-ons that have been changed in the Marketplace since the last check for updates","operationId":"autoupdateViewUpdatedAddons","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/view/marketplaceAddons/":{"get":{"description":"Return a list of all of the add-ons on the ZAP Marketplace (this information is read once and then cached)","operationId":"autoupdateViewMarketplaceAddons","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/view/optionAddonDirectories/":{"get":{"description":"","operationId":"autoupdateViewOptionAddonDirectories","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/view/optionDayLastChecked/":{"get":{"description":"","operationId":"autoupdateViewOptionDayLastChecked","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/view/optionDayLastInstallWarned/":{"get":{"description":"","operationId":"autoupdateViewOptionDayLastInstallWarned","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/view/optionDayLastUpdateWarned/":{"get":{"description":"","operationId":"autoupdateViewOptionDayLastUpdateWarned","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/view/optionDownloadDirectory/":{"get":{"description":"","operationId":"autoupdateViewOptionDownloadDirectory","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/view/optionCheckAddonUpdates/":{"get":{"description":"","operationId":"autoupdateViewOptionCheckAddonUpdates","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/view/optionCheckOnStart/":{"get":{"description":"","operationId":"autoupdateViewOptionCheckOnStart","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/view/optionDownloadNewRelease/":{"get":{"description":"","operationId":"autoupdateViewOptionDownloadNewRelease","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/view/optionInstallAddonUpdates/":{"get":{"description":"","operationId":"autoupdateViewOptionInstallAddonUpdates","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/view/optionInstallScannerRules/":{"get":{"description":"","operationId":"autoupdateViewOptionInstallScannerRules","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/view/optionReportAlphaAddons/":{"get":{"description":"","operationId":"autoupdateViewOptionReportAlphaAddons","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/view/optionReportBetaAddons/":{"get":{"description":"","operationId":"autoupdateViewOptionReportBetaAddons","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/view/optionReportReleaseAddons/":{"get":{"description":"","operationId":"autoupdateViewOptionReportReleaseAddons","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/action/downloadLatestRelease/":{"get":{"description":"Downloads the latest release, if any ","operationId":"autoupdateActionDownloadLatestRelease","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/autoupdate/action/installAddon/":{"get":{"description":"Installs or updates the specified add-on, returning when complete (ie not asynchronously)","operationId":"autoupdateActionInstallAddon","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"id","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/autoupdate/action/installLocalAddon/":{"get":{"description":"","operationId":"autoupdateActionInstallLocalAddon","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"file","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/autoupdate/action/uninstallAddon/":{"get":{"description":"Uninstalls the specified add-on ","operationId":"autoupdateActionUninstallAddon","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"id","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/autoupdate/action/setOptionCheckAddonUpdates/":{"get":{"description":"","operationId":"autoupdateActionSetOptionCheckAddonUpdates","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/autoupdate/action/setOptionCheckOnStart/":{"get":{"description":"","operationId":"autoupdateActionSetOptionCheckOnStart","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/autoupdate/action/setOptionDownloadNewRelease/":{"get":{"description":"","operationId":"autoupdateActionSetOptionDownloadNewRelease","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/autoupdate/action/setOptionInstallAddonUpdates/":{"get":{"description":"","operationId":"autoupdateActionSetOptionInstallAddonUpdates","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/autoupdate/action/setOptionInstallScannerRules/":{"get":{"description":"","operationId":"autoupdateActionSetOptionInstallScannerRules","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/autoupdate/action/setOptionReportAlphaAddons/":{"get":{"description":"","operationId":"autoupdateActionSetOptionReportAlphaAddons","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/autoupdate/action/setOptionReportBetaAddons/":{"get":{"description":"","operationId":"autoupdateActionSetOptionReportBetaAddons","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/autoupdate/action/setOptionReportReleaseAddons/":{"get":{"description":"","operationId":"autoupdateActionSetOptionReportReleaseAddons","tags":["autoupdate"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/spider/view/status/":{"get":{"description":"","operationId":"spiderViewStatus","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanId","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/spider/view/results/":{"get":{"description":"","operationId":"spiderViewResults","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanId","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/spider/view/fullResults/":{"get":{"description":"","operationId":"spiderViewFullResults","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/spider/view/scans/":{"get":{"description":"","operationId":"spiderViewScans","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/excludedFromScan/":{"get":{"description":"Gets the regexes of URLs excluded from the spider scans.","operationId":"spiderViewExcludedFromScan","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/allUrls/":{"get":{"description":"Returns a list of unique URLs from the history table based on HTTP messages added by the Spider.","operationId":"spiderViewAllUrls","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/addedNodes/":{"get":{"description":"Returns a list of the names of the nodes added to the Sites tree by the specified scan.","operationId":"spiderViewAddedNodes","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanId","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/spider/view/domainsAlwaysInScope/":{"get":{"description":"Gets all the domains that are always in scope. For each domain the following are shown: the index, the value (domain), if enabled, and if specified as a regex.","operationId":"spiderViewDomainsAlwaysInScope","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionDomainsAlwaysInScope/":{"get":{"description":"Use view domainsAlwaysInScope instead.","deprecated":true,"operationId":"spiderViewOptionDomainsAlwaysInScope","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionDomainsAlwaysInScopeEnabled/":{"get":{"description":"Use view domainsAlwaysInScope instead.","deprecated":true,"operationId":"spiderViewOptionDomainsAlwaysInScopeEnabled","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionHandleParameters/":{"get":{"description":"","operationId":"spiderViewOptionHandleParameters","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionMaxChildren/":{"get":{"description":"Gets the maximum number of child nodes (per node) that can be crawled, 0 means no limit.","operationId":"spiderViewOptionMaxChildren","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionMaxDepth/":{"get":{"description":"Gets the maximum depth the spider can crawl, 0 if unlimited.","operationId":"spiderViewOptionMaxDepth","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionMaxDuration/":{"get":{"description":"","operationId":"spiderViewOptionMaxDuration","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionMaxParseSizeBytes/":{"get":{"description":"Gets the maximum size, in bytes, that a response might have to be parsed.","operationId":"spiderViewOptionMaxParseSizeBytes","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionMaxScansInUI/":{"get":{"description":"","operationId":"spiderViewOptionMaxScansInUI","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionRequestWaitTime/":{"get":{"description":"","operationId":"spiderViewOptionRequestWaitTime","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionScope/":{"get":{"description":"","operationId":"spiderViewOptionScope","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionScopeText/":{"get":{"description":"","operationId":"spiderViewOptionScopeText","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionSkipURLString/":{"get":{"description":"","operationId":"spiderViewOptionSkipURLString","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionThreadCount/":{"get":{"description":"","operationId":"spiderViewOptionThreadCount","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionUserAgent/":{"get":{"description":"","operationId":"spiderViewOptionUserAgent","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionAcceptCookies/":{"get":{"description":"Gets whether or not a spider process should accept cookies while spidering.","operationId":"spiderViewOptionAcceptCookies","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionHandleODataParametersVisited/":{"get":{"description":"","operationId":"spiderViewOptionHandleODataParametersVisited","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionParseComments/":{"get":{"description":"","operationId":"spiderViewOptionParseComments","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionParseGit/":{"get":{"description":"","operationId":"spiderViewOptionParseGit","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionParseRobotsTxt/":{"get":{"description":"","operationId":"spiderViewOptionParseRobotsTxt","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionParseSVNEntries/":{"get":{"description":"","operationId":"spiderViewOptionParseSVNEntries","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionParseSitemapXml/":{"get":{"description":"","operationId":"spiderViewOptionParseSitemapXml","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionPostForm/":{"get":{"description":"","operationId":"spiderViewOptionPostForm","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionProcessForm/":{"get":{"description":"","operationId":"spiderViewOptionProcessForm","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionSendRefererHeader/":{"get":{"description":"Gets whether or not the \'Referer\' header should be sent while spidering.","operationId":"spiderViewOptionSendRefererHeader","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/view/optionShowAdvancedDialog/":{"get":{"description":"","operationId":"spiderViewOptionShowAdvancedDialog","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/action/scan/":{"get":{"description":"Runs the spider against the given URL (or context). Optionally, the \'maxChildren\' parameter can be set to limit the number of children scanned, the \'recurse\' parameter can be used to prevent the spider from seeding recursively, the parameter \'contextName\' can be used to constrain the scan to a Context and the parameter \'subtreeOnly\' allows to restrict the spider under a site\'s subtree (using the specified \'url\').","operationId":"spiderActionScan","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"url","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"maxChildren","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"recurse","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}},{"name":"contextName","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"subtreeOnly","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/spider/action/scanAsUser/":{"get":{"description":"Runs the spider from the perspective of a User, obtained using the given Context ID and User ID. See \'scan\' action for more details.","operationId":"spiderActionScanAsUser","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"userId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"url","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"maxChildren","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"recurse","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}},{"name":"subtreeOnly","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/spider/action/pause/":{"get":{"description":"","operationId":"spiderActionPause","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/spider/action/resume/":{"get":{"description":"","operationId":"spiderActionResume","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/spider/action/stop/":{"get":{"description":"","operationId":"spiderActionStop","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanId","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/spider/action/removeScan/":{"get":{"description":"","operationId":"spiderActionRemoveScan","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/spider/action/pauseAllScans/":{"get":{"description":"","operationId":"spiderActionPauseAllScans","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/action/resumeAllScans/":{"get":{"description":"","operationId":"spiderActionResumeAllScans","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/action/stopAllScans/":{"get":{"description":"","operationId":"spiderActionStopAllScans","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/action/removeAllScans/":{"get":{"description":"","operationId":"spiderActionRemoveAllScans","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/action/clearExcludedFromScan/":{"get":{"description":"Clears the regexes of URLs excluded from the spider scans.","operationId":"spiderActionClearExcludedFromScan","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/action/excludeFromScan/":{"get":{"description":"Adds a regex of URLs that should be excluded from the spider scans.","operationId":"spiderActionExcludeFromScan","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"regex","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/spider/action/addDomainAlwaysInScope/":{"get":{"description":"Adds a new domain that\'s always in scope, using the specified value. Optionally sets if the new entry is enabled (default, true) and whether or not the new value is specified as a regex (default, false).","operationId":"spiderActionAddDomainAlwaysInScope","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"value","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"isRegex","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}},{"name":"isEnabled","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/spider/action/modifyDomainAlwaysInScope/":{"get":{"description":"Modifies a domain that\'s always in scope. Allows to modify the value, if enabled or if a regex. The domain is selected with its index, which can be obtained with the view domainsAlwaysInScope.","operationId":"spiderActionModifyDomainAlwaysInScope","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"idx","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"value","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"isRegex","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}},{"name":"isEnabled","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/spider/action/removeDomainAlwaysInScope/":{"get":{"description":"Removes a domain that\'s always in scope, with the given index. The index can be obtained with the view domainsAlwaysInScope.","operationId":"spiderActionRemoveDomainAlwaysInScope","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"idx","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/spider/action/enableAllDomainsAlwaysInScope/":{"get":{"description":"Enables all domains that are always in scope.","operationId":"spiderActionEnableAllDomainsAlwaysInScope","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/action/disableAllDomainsAlwaysInScope/":{"get":{"description":"Disables all domains that are always in scope.","operationId":"spiderActionDisableAllDomainsAlwaysInScope","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/spider/action/setOptionHandleParameters/":{"get":{"description":"","operationId":"spiderActionSetOptionHandleParameters","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"String","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/spider/action/setOptionScopeString/":{"get":{"description":"Use actions [add|modify|remove]DomainAlwaysInScope instead.","operationId":"spiderActionSetOptionScopeString","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"String","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/spider/action/setOptionSkipURLString/":{"get":{"description":"","operationId":"spiderActionSetOptionSkipURLString","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"String","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/spider/action/setOptionUserAgent/":{"get":{"description":"","operationId":"spiderActionSetOptionUserAgent","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"String","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/spider/action/setOptionAcceptCookies/":{"get":{"description":"Sets whether or not a spider process should accept cookies while spidering.","operationId":"spiderActionSetOptionAcceptCookies","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/spider/action/setOptionHandleODataParametersVisited/":{"get":{"description":"","operationId":"spiderActionSetOptionHandleODataParametersVisited","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/spider/action/setOptionMaxChildren/":{"get":{"description":"Sets the maximum number of child nodes (per node) that can be crawled, 0 means no limit.","operationId":"spiderActionSetOptionMaxChildren","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/spider/action/setOptionMaxDepth/":{"get":{"description":"Sets the maximum depth the spider can crawl, 0 for unlimited depth.","operationId":"spiderActionSetOptionMaxDepth","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/spider/action/setOptionMaxDuration/":{"get":{"description":"","operationId":"spiderActionSetOptionMaxDuration","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/spider/action/setOptionMaxParseSizeBytes/":{"get":{"description":"Sets the maximum size, in bytes, that a response might have to be parsed. This allows the spider to skip big responses/files.","operationId":"spiderActionSetOptionMaxParseSizeBytes","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/spider/action/setOptionMaxScansInUI/":{"get":{"description":"","operationId":"spiderActionSetOptionMaxScansInUI","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/spider/action/setOptionParseComments/":{"get":{"description":"","operationId":"spiderActionSetOptionParseComments","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/spider/action/setOptionParseGit/":{"get":{"description":"","operationId":"spiderActionSetOptionParseGit","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/spider/action/setOptionParseRobotsTxt/":{"get":{"description":"","operationId":"spiderActionSetOptionParseRobotsTxt","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/spider/action/setOptionParseSVNEntries/":{"get":{"description":"","operationId":"spiderActionSetOptionParseSVNEntries","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/spider/action/setOptionParseSitemapXml/":{"get":{"description":"","operationId":"spiderActionSetOptionParseSitemapXml","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/spider/action/setOptionPostForm/":{"get":{"description":"","operationId":"spiderActionSetOptionPostForm","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/spider/action/setOptionProcessForm/":{"get":{"description":"","operationId":"spiderActionSetOptionProcessForm","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/spider/action/setOptionRequestWaitTime/":{"get":{"description":"","operationId":"spiderActionSetOptionRequestWaitTime","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/spider/action/setOptionSendRefererHeader/":{"get":{"description":"Sets whether or not the \'Referer\' header should be sent while spidering.","operationId":"spiderActionSetOptionSendRefererHeader","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/spider/action/setOptionShowAdvancedDialog/":{"get":{"description":"","operationId":"spiderActionSetOptionShowAdvancedDialog","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/spider/action/setOptionThreadCount/":{"get":{"description":"","operationId":"spiderActionSetOptionThreadCount","tags":["spider"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/core/view/hosts/":{"get":{"description":"Gets the name of the hosts accessed through/by ZAP","operationId":"coreViewHosts","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/sites/":{"get":{"description":"Gets the sites accessed through/by ZAP (scheme and domain)","operationId":"coreViewSites","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/urls/":{"get":{"description":"Gets the URLs accessed through/by ZAP, optionally filtering by (base) URL.","operationId":"coreViewUrls","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/view/childNodes/":{"get":{"description":"Gets the child nodes underneath the specified URL in the Sites tree","operationId":"coreViewChildNodes","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"url","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/view/message/":{"get":{"description":"Gets the HTTP message with the given ID. Returns the ID, request/response headers and bodies, cookies, note, type, RTT, and timestamp.","operationId":"coreViewMessage","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"id","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/core/view/messages/":{"get":{"description":"Gets the HTTP messages sent by ZAP, request and response, optionally filtered by URL and paginated with \'start\' position and \'count\' of messages","operationId":"coreViewMessages","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"start","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"count","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/core/view/messagesById/":{"get":{"description":"Gets the HTTP messages with the given IDs.","operationId":"coreViewMessagesById","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"ids","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/view/numberOfMessages/":{"get":{"description":"Gets the number of messages, optionally filtering by URL","operationId":"coreViewNumberOfMessages","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/view/mode/":{"get":{"description":"Gets the mode","operationId":"coreViewMode","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/version/":{"get":{"description":"Gets ZAP version","operationId":"coreViewVersion","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/excludedFromProxy/":{"get":{"description":"Gets the regular expressions, applied to URLs, to exclude from the local proxies.","operationId":"coreViewExcludedFromProxy","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/homeDirectory/":{"get":{"description":"","operationId":"coreViewHomeDirectory","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/sessionLocation/":{"get":{"description":"Gets the location of the current session file","operationId":"coreViewSessionLocation","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/proxyChainExcludedDomains/":{"get":{"description":"Gets all the domains that are excluded from the outgoing proxy. For each domain the following are shown: the index, the value (domain), if enabled, and if specified as a regex.","operationId":"coreViewProxyChainExcludedDomains","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/optionProxyChainSkipName/":{"get":{"description":"Use view proxyChainExcludedDomains instead.","deprecated":true,"operationId":"coreViewOptionProxyChainSkipName","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/optionProxyExcludedDomains/":{"get":{"description":"Use view proxyChainExcludedDomains instead.","deprecated":true,"operationId":"coreViewOptionProxyExcludedDomains","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/optionProxyExcludedDomainsEnabled/":{"get":{"description":"Use view proxyChainExcludedDomains instead.","deprecated":true,"operationId":"coreViewOptionProxyExcludedDomainsEnabled","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/zapHomePath/":{"get":{"description":"Gets the path to ZAP\'s home directory.","operationId":"coreViewZapHomePath","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/optionMaximumAlertInstances/":{"get":{"description":"Gets the maximum number of alert instances to include in a report.","operationId":"coreViewOptionMaximumAlertInstances","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/optionMergeRelatedAlerts/":{"get":{"description":"Gets whether or not related alerts will be merged in any reports generated.","operationId":"coreViewOptionMergeRelatedAlerts","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/optionAlertOverridesFilePath/":{"get":{"description":"Gets the path to the file with alert overrides.","operationId":"coreViewOptionAlertOverridesFilePath","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/alert/":{"get":{"description":"Gets the alert with the given ID, the corresponding HTTP message can be obtained with the \'messageId\' field and \'message\' API method","deprecated":true,"operationId":"coreViewAlert","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"id","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/core/view/alerts/":{"get":{"description":"Gets the alerts raised by ZAP, optionally filtering by URL or riskId, and paginating with \'start\' position and \'count\' of alerts","deprecated":true,"operationId":"coreViewAlerts","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"start","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"count","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"riskId","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/view/alertsSummary/":{"get":{"description":"Gets number of alerts grouped by each risk level, optionally filtering by URL","deprecated":true,"operationId":"coreViewAlertsSummary","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/view/numberOfAlerts/":{"get":{"description":"Gets the number of alerts, optionally filtering by URL or riskId","deprecated":true,"operationId":"coreViewNumberOfAlerts","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"riskId","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/view/optionDefaultUserAgent/":{"get":{"description":"Gets the user agent that ZAP should use when creating HTTP messages (for example, spider messages or CONNECT requests to outgoing proxy).","operationId":"coreViewOptionDefaultUserAgent","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/optionDnsTtlSuccessfulQueries/":{"get":{"description":"Gets the TTL (in seconds) of successful DNS queries.","operationId":"coreViewOptionDnsTtlSuccessfulQueries","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/optionHttpState/":{"get":{"description":"","operationId":"coreViewOptionHttpState","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/optionProxyChainName/":{"get":{"description":"","operationId":"coreViewOptionProxyChainName","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/optionProxyChainPassword/":{"get":{"description":"","operationId":"coreViewOptionProxyChainPassword","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/optionProxyChainPort/":{"get":{"description":"","operationId":"coreViewOptionProxyChainPort","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/optionProxyChainRealm/":{"get":{"description":"","operationId":"coreViewOptionProxyChainRealm","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/optionProxyChainUserName/":{"get":{"description":"","operationId":"coreViewOptionProxyChainUserName","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/optionTimeoutInSecs/":{"get":{"description":"Gets the connection time out, in seconds.","operationId":"coreViewOptionTimeoutInSecs","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/optionHttpStateEnabled/":{"get":{"description":"","operationId":"coreViewOptionHttpStateEnabled","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/optionProxyChainPrompt/":{"get":{"description":"","operationId":"coreViewOptionProxyChainPrompt","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/optionSingleCookieRequestHeader/":{"get":{"description":"","operationId":"coreViewOptionSingleCookieRequestHeader","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/optionUseProxyChain/":{"get":{"description":"","operationId":"coreViewOptionUseProxyChain","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/view/optionUseProxyChainAuth/":{"get":{"description":"","operationId":"coreViewOptionUseProxyChainAuth","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/action/accessUrl/":{"get":{"description":"Convenient and simple action to access a URL, optionally following redirections. Returns the request sent and response received and followed redirections, if any. Other actions are available which offer more control on what is sent, like, \'sendRequest\' or \'sendHarRequest\'.","operationId":"coreActionAccessUrl","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"url","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"followRedirects","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/core/action/shutdown/":{"get":{"description":"Shuts down ZAP","operationId":"coreActionShutdown","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/action/newSession/":{"get":{"description":"Creates a new session, optionally overwriting existing files. If a relative path is specified it will be resolved against the \\"session\\" directory in ZAP \\"home\\" dir.","operationId":"coreActionNewSession","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"name","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"overwrite","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/core/action/loadSession/":{"get":{"description":"Loads the session with the given name. If a relative path is specified it will be resolved against the \\"session\\" directory in ZAP \\"home\\" dir.","operationId":"coreActionLoadSession","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"name","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/action/saveSession/":{"get":{"description":"Saves the session with the name supplied, optionally overwriting existing files. If a relative path is specified it will be resolved against the \\"session\\" directory in ZAP \\"home\\" dir.","operationId":"coreActionSaveSession","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"name","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"overwrite","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/core/action/snapshotSession/":{"get":{"description":"Snapshots the session, optionally with the given name, and overwriting existing files. If no name is specified the name of the current session with a timestamp appended is used. If a relative path is specified it will be resolved against the \\"session\\" directory in ZAP \\"home\\" dir.","operationId":"coreActionSnapshotSession","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"name","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"overwrite","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/core/action/clearExcludedFromProxy/":{"get":{"description":"Clears the regexes of URLs excluded from the local proxies.","operationId":"coreActionClearExcludedFromProxy","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/action/excludeFromProxy/":{"get":{"description":"Adds a regex of URLs that should be excluded from the local proxies.","operationId":"coreActionExcludeFromProxy","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"regex","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/action/setHomeDirectory/":{"get":{"description":"","operationId":"coreActionSetHomeDirectory","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"dir","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/action/setMode/":{"get":{"description":"Sets the mode, which may be one of [safe, protect, standard, attack]","operationId":"coreActionSetMode","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"mode","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/action/generateRootCA/":{"get":{"description":"Generates a new Root CA certificate for the local proxies.","operationId":"coreActionGenerateRootCA","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/action/sendRequest/":{"get":{"description":"Sends the HTTP request, optionally following redirections. Returns the request sent and response received and followed redirections, if any. The Mode is enforced when sending the request (and following redirections), custom manual requests are not allowed in \'Safe\' mode nor in \'Protected\' mode if out of scope.","operationId":"coreActionSendRequest","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"request","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"followRedirects","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/core/action/runGarbageCollection/":{"get":{"description":"","operationId":"coreActionRunGarbageCollection","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/action/deleteSiteNode/":{"get":{"description":"Deletes the site node found in the Sites Tree on the basis of the URL, HTTP method, and post data (if applicable and specified). ","operationId":"coreActionDeleteSiteNode","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"url","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"method","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"postData","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/action/addProxyChainExcludedDomain/":{"get":{"description":"Adds a domain to be excluded from the outgoing proxy, using the specified value. Optionally sets if the new entry is enabled (default, true) and whether or not the new value is specified as a regex (default, false).","operationId":"coreActionAddProxyChainExcludedDomain","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"value","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"isRegex","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}},{"name":"isEnabled","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/core/action/modifyProxyChainExcludedDomain/":{"get":{"description":"Modifies a domain excluded from the outgoing proxy. Allows to modify the value, if enabled or if a regex. The domain is selected with its index, which can be obtained with the view proxyChainExcludedDomains.","operationId":"coreActionModifyProxyChainExcludedDomain","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"idx","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"value","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"isRegex","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}},{"name":"isEnabled","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/core/action/removeProxyChainExcludedDomain/":{"get":{"description":"Removes a domain excluded from the outgoing proxy, with the given index. The index can be obtained with the view proxyChainExcludedDomains.","operationId":"coreActionRemoveProxyChainExcludedDomain","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"idx","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/core/action/enableAllProxyChainExcludedDomains/":{"get":{"description":"Enables all domains excluded from the outgoing proxy.","operationId":"coreActionEnableAllProxyChainExcludedDomains","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/action/disableAllProxyChainExcludedDomains/":{"get":{"description":"Disables all domains excluded from the outgoing proxy.","operationId":"coreActionDisableAllProxyChainExcludedDomains","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/action/setOptionMaximumAlertInstances/":{"get":{"description":"Sets the maximum number of alert instances to include in a report. A value of zero is treated as unlimited.","operationId":"coreActionSetOptionMaximumAlertInstances","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"numberOfInstances","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/core/action/setOptionMergeRelatedAlerts/":{"get":{"description":"Sets whether or not related alerts will be merged in any reports generated.","operationId":"coreActionSetOptionMergeRelatedAlerts","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"enabled","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/core/action/setOptionAlertOverridesFilePath/":{"get":{"description":"Sets (or clears, if empty) the path to the file with alert overrides.","operationId":"coreActionSetOptionAlertOverridesFilePath","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"filePath","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/action/enablePKCS12ClientCertificate/":{"get":{"description":"Enables use of a PKCS12 client certificate for the certificate with the given file system path, password, and optional index.","operationId":"coreActionEnablePKCS12ClientCertificate","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"filePath","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"password","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"index","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/action/disableClientCertificate/":{"get":{"description":"Disables the option for use of client certificates.","operationId":"coreActionDisableClientCertificate","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/action/deleteAllAlerts/":{"get":{"description":"Deletes all alerts of the current session.","deprecated":true,"operationId":"coreActionDeleteAllAlerts","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/core/action/deleteAlert/":{"get":{"description":"Deletes the alert with the given ID. ","deprecated":true,"operationId":"coreActionDeleteAlert","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"id","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/core/action/setOptionDefaultUserAgent/":{"get":{"description":"Sets the user agent that ZAP should use when creating HTTP messages (for example, spider messages or CONNECT requests to outgoing proxy).","operationId":"coreActionSetOptionDefaultUserAgent","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"String","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/action/setOptionProxyChainName/":{"get":{"description":"","operationId":"coreActionSetOptionProxyChainName","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"String","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/action/setOptionProxyChainPassword/":{"get":{"description":"","operationId":"coreActionSetOptionProxyChainPassword","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"String","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/action/setOptionProxyChainRealm/":{"get":{"description":"","operationId":"coreActionSetOptionProxyChainRealm","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"String","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/action/setOptionProxyChainSkipName/":{"get":{"description":"Use actions [add|modify|remove]ProxyChainExcludedDomain instead.","operationId":"coreActionSetOptionProxyChainSkipName","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"String","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/action/setOptionProxyChainUserName/":{"get":{"description":"","operationId":"coreActionSetOptionProxyChainUserName","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"String","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/action/setOptionDnsTtlSuccessfulQueries/":{"get":{"description":"Sets the TTL (in seconds) of successful DNS queries (applies after ZAP restart).","operationId":"coreActionSetOptionDnsTtlSuccessfulQueries","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/core/action/setOptionHttpStateEnabled/":{"get":{"description":"","operationId":"coreActionSetOptionHttpStateEnabled","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/action/setOptionProxyChainPort/":{"get":{"description":"","operationId":"coreActionSetOptionProxyChainPort","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/core/action/setOptionProxyChainPrompt/":{"get":{"description":"","operationId":"coreActionSetOptionProxyChainPrompt","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/action/setOptionSingleCookieRequestHeader/":{"get":{"description":"","operationId":"coreActionSetOptionSingleCookieRequestHeader","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/action/setOptionTimeoutInSecs/":{"get":{"description":"Sets the connection time out, in seconds.","operationId":"coreActionSetOptionTimeoutInSecs","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/core/action/setOptionUseProxyChain/":{"get":{"description":"Sets whether or not the outgoing proxy should be used. The address/hostname of the outgoing proxy must be set to enable this option.","operationId":"coreActionSetOptionUseProxyChain","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/core/action/setOptionUseProxyChainAuth/":{"get":{"description":"","operationId":"coreActionSetOptionUseProxyChainAuth","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/OTHER/core/other/proxy.pac/":{"get":{"description":"","operationId":"coreOtherProxy.pac","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/OTHER/core/other/rootcert/":{"get":{"description":"Gets the Root CA certificate used by the local proxies.","operationId":"coreOtherRootcert","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/OTHER/core/other/setproxy/":{"get":{"description":"","operationId":"coreOtherSetproxy","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"proxy","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/OTHER/core/other/xmlreport/":{"get":{"description":"Generates a report in XML format","operationId":"coreOtherXmlreport","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/OTHER/core/other/htmlreport/":{"get":{"description":"Generates a report in HTML format","operationId":"coreOtherHtmlreport","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/OTHER/core/other/jsonreport/":{"get":{"description":"Generates a report in JSON format","operationId":"coreOtherJsonreport","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/OTHER/core/other/mdreport/":{"get":{"description":"Generates a report in Markdown format","operationId":"coreOtherMdreport","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/OTHER/core/other/messageHar/":{"get":{"description":"Gets the message with the given ID in HAR format","operationId":"coreOtherMessageHar","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"id","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/OTHER/core/other/messagesHar/":{"get":{"description":"Gets the HTTP messages sent through/by ZAP, in HAR format, optionally filtered by URL and paginated with \'start\' position and \'count\' of messages","operationId":"coreOtherMessagesHar","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"baseurl","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"start","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"count","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/OTHER/core/other/messagesHarById/":{"get":{"description":"Gets the HTTP messages with the given IDs, in HAR format.","operationId":"coreOtherMessagesHarById","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"ids","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/OTHER/core/other/sendHarRequest/":{"get":{"description":"Sends the first HAR request entry, optionally following redirections. Returns, in HAR format, the request sent and response received and followed redirections, if any. The Mode is enforced when sending the request (and following redirections), custom manual requests are not allowed in \'Safe\' mode nor in \'Protected\' mode if out of scope.","operationId":"coreOtherSendHarRequest","tags":["core"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"request","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"followRedirects","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/params/view/params/":{"get":{"description":"Shows the parameters for the specified site, or for all sites if the site is not specified","operationId":"paramsViewParams","tags":["params"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"site","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/view/status/":{"get":{"description":"","operationId":"ascanViewStatus","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanId","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/view/scanProgress/":{"get":{"description":"","operationId":"ascanViewScanProgress","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanId","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/view/messagesIds/":{"get":{"description":"Gets the IDs of the messages sent during the scan with the given ID. A message can be obtained with \'message\' core view.","operationId":"ascanViewMessagesIds","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/view/alertsIds/":{"get":{"description":"Gets the IDs of the alerts raised during the scan with the given ID. An alert can be obtained with \'alert\' core view.","operationId":"ascanViewAlertsIds","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/view/scans/":{"get":{"description":"","operationId":"ascanViewScans","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/scanPolicyNames/":{"get":{"description":"","operationId":"ascanViewScanPolicyNames","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/excludedFromScan/":{"get":{"description":"Gets the regexes of URLs excluded from the active scans.","operationId":"ascanViewExcludedFromScan","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/scanners/":{"get":{"description":"Gets the scanners, optionally, of the given scan policy and/or scanner policy/category ID.","operationId":"ascanViewScanners","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanPolicyName","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"policyId","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/view/policies/":{"get":{"description":"","operationId":"ascanViewPolicies","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanPolicyName","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"policyId","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/view/attackModeQueue/":{"get":{"description":"","operationId":"ascanViewAttackModeQueue","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/excludedParams/":{"get":{"description":"Gets all the parameters that are excluded. For each parameter the following are shown: the name, the URL, and the parameter type.","operationId":"ascanViewExcludedParams","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionExcludedParamList/":{"get":{"description":"Use view excludedParams instead.","deprecated":true,"operationId":"ascanViewOptionExcludedParamList","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/excludedParamTypes/":{"get":{"description":"Gets all the types of excluded parameters. For each type the following are shown: the ID and the name.","operationId":"ascanViewExcludedParamTypes","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionAttackPolicy/":{"get":{"description":"","operationId":"ascanViewOptionAttackPolicy","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionDefaultPolicy/":{"get":{"description":"","operationId":"ascanViewOptionDefaultPolicy","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionDelayInMs/":{"get":{"description":"","operationId":"ascanViewOptionDelayInMs","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionHandleAntiCSRFTokens/":{"get":{"description":"","operationId":"ascanViewOptionHandleAntiCSRFTokens","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionHostPerScan/":{"get":{"description":"","operationId":"ascanViewOptionHostPerScan","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionMaxChartTimeInMins/":{"get":{"description":"","operationId":"ascanViewOptionMaxChartTimeInMins","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionMaxResultsToList/":{"get":{"description":"","operationId":"ascanViewOptionMaxResultsToList","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionMaxRuleDurationInMins/":{"get":{"description":"","operationId":"ascanViewOptionMaxRuleDurationInMins","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionMaxScanDurationInMins/":{"get":{"description":"","operationId":"ascanViewOptionMaxScanDurationInMins","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionMaxScansInUI/":{"get":{"description":"","operationId":"ascanViewOptionMaxScansInUI","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionTargetParamsEnabledRPC/":{"get":{"description":"","operationId":"ascanViewOptionTargetParamsEnabledRPC","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionTargetParamsInjectable/":{"get":{"description":"","operationId":"ascanViewOptionTargetParamsInjectable","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionThreadPerHost/":{"get":{"description":"","operationId":"ascanViewOptionThreadPerHost","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionAddQueryParam/":{"get":{"description":"Tells whether or not the active scanner should add a query parameter to GET request that don\'t have parameters to start with.","operationId":"ascanViewOptionAddQueryParam","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionAllowAttackOnStart/":{"get":{"description":"","operationId":"ascanViewOptionAllowAttackOnStart","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionInjectPluginIdInHeader/":{"get":{"description":"Tells whether or not the active scanner should inject the HTTP request header X-ZAP-Scan-ID, with the ID of the scanner that\'s sending the requests.","operationId":"ascanViewOptionInjectPluginIdInHeader","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionPromptInAttackMode/":{"get":{"description":"","operationId":"ascanViewOptionPromptInAttackMode","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionPromptToClearFinishedScans/":{"get":{"description":"","operationId":"ascanViewOptionPromptToClearFinishedScans","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionRescanInAttackMode/":{"get":{"description":"","operationId":"ascanViewOptionRescanInAttackMode","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionScanHeadersAllRequests/":{"get":{"description":"Tells whether or not the HTTP Headers of all requests should be scanned. Not just requests that send parameters, through the query or request body.","operationId":"ascanViewOptionScanHeadersAllRequests","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/view/optionShowAdvancedDialog/":{"get":{"description":"","operationId":"ascanViewOptionShowAdvancedDialog","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/action/scan/":{"get":{"description":"Runs the active scanner against the given URL and/or Context. Optionally, the \'recurse\' parameter can be used to scan URLs under the given URL, the parameter \'inScopeOnly\' can be used to constrain the scan to URLs that are in scope (ignored if a Context is specified), the parameter \'scanPolicyName\' allows to specify the scan policy (if none is given it uses the default scan policy), the parameters \'method\' and \'postData\' allow to select a given request in conjunction with the given URL.","operationId":"ascanActionScan","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"url","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"recurse","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}},{"name":"inScopeOnly","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}},{"name":"scanPolicyName","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"method","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"postData","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"contextId","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/action/scanAsUser/":{"get":{"description":"Active Scans from the perspective of a User, obtained using the given Context ID and User ID. See \'scan\' action for more details.","operationId":"ascanActionScanAsUser","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"url","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"contextId","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"userId","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"recurse","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}},{"name":"scanPolicyName","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"method","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"postData","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/pause/":{"get":{"description":"","operationId":"ascanActionPause","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/action/resume/":{"get":{"description":"","operationId":"ascanActionResume","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/action/stop/":{"get":{"description":"","operationId":"ascanActionStop","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/action/removeScan/":{"get":{"description":"","operationId":"ascanActionRemoveScan","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/action/pauseAllScans/":{"get":{"description":"","operationId":"ascanActionPauseAllScans","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/action/resumeAllScans/":{"get":{"description":"","operationId":"ascanActionResumeAllScans","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/action/stopAllScans/":{"get":{"description":"","operationId":"ascanActionStopAllScans","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/action/removeAllScans/":{"get":{"description":"","operationId":"ascanActionRemoveAllScans","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/action/clearExcludedFromScan/":{"get":{"description":"Clears the regexes of URLs excluded from the active scans.","operationId":"ascanActionClearExcludedFromScan","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ascan/action/excludeFromScan/":{"get":{"description":"Adds a regex of URLs that should be excluded from the active scans.","operationId":"ascanActionExcludeFromScan","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"regex","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/enableAllScanners/":{"get":{"description":"Enables all scanners of the scan policy with the given name, or the default if none given.","operationId":"ascanActionEnableAllScanners","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanPolicyName","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/disableAllScanners/":{"get":{"description":"Disables all scanners of the scan policy with the given name, or the default if none given.","operationId":"ascanActionDisableAllScanners","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanPolicyName","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/enableScanners/":{"get":{"description":"Enables the scanners with the given IDs (comma separated list of IDs) of the scan policy with the given name, or the default if none given.","operationId":"ascanActionEnableScanners","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"ids","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"scanPolicyName","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/disableScanners/":{"get":{"description":"Disables the scanners with the given IDs (comma separated list of IDs) of the scan policy with the given name, or the default if none given.","operationId":"ascanActionDisableScanners","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"ids","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"scanPolicyName","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/setEnabledPolicies/":{"get":{"description":"","operationId":"ascanActionSetEnabledPolicies","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"ids","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"scanPolicyName","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/setPolicyAttackStrength/":{"get":{"description":"","operationId":"ascanActionSetPolicyAttackStrength","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"id","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"attackStrength","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"scanPolicyName","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/setPolicyAlertThreshold/":{"get":{"description":"","operationId":"ascanActionSetPolicyAlertThreshold","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"id","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"alertThreshold","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"scanPolicyName","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/setScannerAttackStrength/":{"get":{"description":"","operationId":"ascanActionSetScannerAttackStrength","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"id","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"attackStrength","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"scanPolicyName","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/setScannerAlertThreshold/":{"get":{"description":"","operationId":"ascanActionSetScannerAlertThreshold","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"id","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"alertThreshold","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"scanPolicyName","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/addScanPolicy/":{"get":{"description":"","operationId":"ascanActionAddScanPolicy","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanPolicyName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"alertThreshold","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"attackStrength","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/removeScanPolicy/":{"get":{"description":"","operationId":"ascanActionRemoveScanPolicy","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanPolicyName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/updateScanPolicy/":{"get":{"description":"","operationId":"ascanActionUpdateScanPolicy","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanPolicyName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"alertThreshold","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"attackStrength","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/importScanPolicy/":{"get":{"description":"Imports a Scan Policy using the given file system path.","operationId":"ascanActionImportScanPolicy","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"path","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/addExcludedParam/":{"get":{"description":"Adds a new parameter excluded from the scan, using the specified name. Optionally sets if the new entry applies to a specific URL (default, all URLs) and sets the ID of the type of the parameter (default, ID of any type). The type IDs can be obtained with the view excludedParamTypes. ","operationId":"ascanActionAddExcludedParam","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"name","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"type","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"url","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/modifyExcludedParam/":{"get":{"description":"Modifies a parameter excluded from the scan. Allows to modify the name, the URL and the type of parameter. The parameter is selected with its index, which can be obtained with the view excludedParams.","operationId":"ascanActionModifyExcludedParam","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"idx","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"name","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"type","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"url","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/removeExcludedParam/":{"get":{"description":"Removes a parameter excluded from the scan, with the given index. The index can be obtained with the view excludedParams.","operationId":"ascanActionRemoveExcludedParam","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"idx","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/action/skipScanner/":{"get":{"description":"Skips the scanner using the given IDs of the scan and the scanner.","operationId":"ascanActionSkipScanner","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scanId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"scannerId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/action/setOptionAttackPolicy/":{"get":{"description":"","operationId":"ascanActionSetOptionAttackPolicy","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"String","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/setOptionDefaultPolicy/":{"get":{"description":"","operationId":"ascanActionSetOptionDefaultPolicy","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"String","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/setOptionAddQueryParam/":{"get":{"description":"Sets whether or not the active scanner should add a query param to GET requests which do not have parameters to start with.","operationId":"ascanActionSetOptionAddQueryParam","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/setOptionAllowAttackOnStart/":{"get":{"description":"","operationId":"ascanActionSetOptionAllowAttackOnStart","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/setOptionDelayInMs/":{"get":{"description":"","operationId":"ascanActionSetOptionDelayInMs","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/action/setOptionHandleAntiCSRFTokens/":{"get":{"description":"","operationId":"ascanActionSetOptionHandleAntiCSRFTokens","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/setOptionHostPerScan/":{"get":{"description":"","operationId":"ascanActionSetOptionHostPerScan","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/action/setOptionInjectPluginIdInHeader/":{"get":{"description":"Sets whether or not the active scanner should inject the HTTP request header X-ZAP-Scan-ID, with the ID of the scanner that\'s sending the requests.","operationId":"ascanActionSetOptionInjectPluginIdInHeader","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/setOptionMaxChartTimeInMins/":{"get":{"description":"","operationId":"ascanActionSetOptionMaxChartTimeInMins","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/action/setOptionMaxResultsToList/":{"get":{"description":"","operationId":"ascanActionSetOptionMaxResultsToList","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/action/setOptionMaxRuleDurationInMins/":{"get":{"description":"","operationId":"ascanActionSetOptionMaxRuleDurationInMins","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/action/setOptionMaxScanDurationInMins/":{"get":{"description":"","operationId":"ascanActionSetOptionMaxScanDurationInMins","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/action/setOptionMaxScansInUI/":{"get":{"description":"","operationId":"ascanActionSetOptionMaxScansInUI","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/action/setOptionPromptInAttackMode/":{"get":{"description":"","operationId":"ascanActionSetOptionPromptInAttackMode","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/setOptionPromptToClearFinishedScans/":{"get":{"description":"","operationId":"ascanActionSetOptionPromptToClearFinishedScans","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/setOptionRescanInAttackMode/":{"get":{"description":"","operationId":"ascanActionSetOptionRescanInAttackMode","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/setOptionScanHeadersAllRequests/":{"get":{"description":"Sets whether or not the HTTP Headers of all requests should be scanned. Not just requests that send parameters, through the query or request body.","operationId":"ascanActionSetOptionScanHeadersAllRequests","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/setOptionShowAdvancedDialog/":{"get":{"description":"","operationId":"ascanActionSetOptionShowAdvancedDialog","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ascan/action/setOptionTargetParamsEnabledRPC/":{"get":{"description":"","operationId":"ascanActionSetOptionTargetParamsEnabledRPC","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/action/setOptionTargetParamsInjectable/":{"get":{"description":"","operationId":"ascanActionSetOptionTargetParamsInjectable","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ascan/action/setOptionThreadPerHost/":{"get":{"description":"","operationId":"ascanActionSetOptionThreadPerHost","tags":["ascan"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/context/view/contextList/":{"get":{"description":"List context names of current session","operationId":"contextViewContextList","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/context/view/excludeRegexs/":{"get":{"description":"List excluded regexs for context","operationId":"contextViewExcludeRegexs","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/context/view/includeRegexs/":{"get":{"description":"List included regexs for context","operationId":"contextViewIncludeRegexs","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/context/view/context/":{"get":{"description":"List the information about the named context","operationId":"contextViewContext","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/context/view/technologyList/":{"get":{"description":"Lists the names of all built in technologies","operationId":"contextViewTechnologyList","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/context/view/includedTechnologyList/":{"get":{"description":"Lists the names of all technologies included in a context","operationId":"contextViewIncludedTechnologyList","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/context/view/excludedTechnologyList/":{"get":{"description":"Lists the names of all technologies excluded from a context","operationId":"contextViewExcludedTechnologyList","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/context/view/urls/":{"get":{"description":"Lists the URLs accessed through/by ZAP, that belong to the context with the given name.","operationId":"contextViewUrls","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/context/action/excludeFromContext/":{"get":{"description":"Add exclude regex to context","operationId":"contextActionExcludeFromContext","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"regex","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/context/action/includeInContext/":{"get":{"description":"Add include regex to context","operationId":"contextActionIncludeInContext","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"regex","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/context/action/setContextRegexs/":{"get":{"description":"Set the regexs to include and exclude for a context, both supplied as JSON string arrays","operationId":"contextActionSetContextRegexs","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"incRegexs","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"excRegexs","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/context/action/newContext/":{"get":{"description":"Creates a new context with the given name in the current session","operationId":"contextActionNewContext","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/context/action/removeContext/":{"get":{"description":"Removes a context in the current session","operationId":"contextActionRemoveContext","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/context/action/exportContext/":{"get":{"description":"Exports the context with the given name to a file. If a relative file path is specified it will be resolved against the \\"contexts\\" directory in ZAP \\"home\\" dir.","operationId":"contextActionExportContext","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"contextFile","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/context/action/importContext/":{"get":{"description":"Imports a context from a file. If a relative file path is specified it will be resolved against the \\"contexts\\" directory in ZAP \\"home\\" dir.","operationId":"contextActionImportContext","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextFile","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/context/action/includeContextTechnologies/":{"get":{"description":"Includes technologies with the given names, separated by a comma, to a context","operationId":"contextActionIncludeContextTechnologies","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"technologyNames","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/context/action/includeAllContextTechnologies/":{"get":{"description":"Includes all built in technologies in to a context","operationId":"contextActionIncludeAllContextTechnologies","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/context/action/excludeContextTechnologies/":{"get":{"description":"Excludes technologies with the given names, separated by a comma, from a context","operationId":"contextActionExcludeContextTechnologies","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"technologyNames","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/context/action/excludeAllContextTechnologies/":{"get":{"description":"Excludes all built in technologies from a context","operationId":"contextActionExcludeAllContextTechnologies","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/context/action/setContextInScope/":{"get":{"description":"Sets a context to in scope (contexts are in scope by default)","operationId":"contextActionSetContextInScope","tags":["context"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"booleanInScope","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/httpSessions/view/sites/":{"get":{"description":"Gets all of the sites that have sessions.","operationId":"httpSessionsViewSites","tags":["httpSessions"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/httpSessions/view/sessions/":{"get":{"description":"Gets the sessions for the given site. Optionally returning just the session with the given name.","operationId":"httpSessionsViewSessions","tags":["httpSessions"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"site","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"session","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/httpSessions/view/activeSession/":{"get":{"description":"Gets the name of the active session for the given site.","operationId":"httpSessionsViewActiveSession","tags":["httpSessions"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"site","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/httpSessions/view/sessionTokens/":{"get":{"description":"Gets the names of the session tokens for the given site.","operationId":"httpSessionsViewSessionTokens","tags":["httpSessions"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"site","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/httpSessions/view/defaultSessionTokens/":{"get":{"description":"Gets the default session tokens.","operationId":"httpSessionsViewDefaultSessionTokens","tags":["httpSessions"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/httpSessions/action/createEmptySession/":{"get":{"description":"Creates an empty session for the given site. Optionally with the given name.","operationId":"httpSessionsActionCreateEmptySession","tags":["httpSessions"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"site","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"session","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/httpSessions/action/removeSession/":{"get":{"description":"Removes the session from the given site.","operationId":"httpSessionsActionRemoveSession","tags":["httpSessions"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"site","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"session","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/httpSessions/action/setActiveSession/":{"get":{"description":"Sets the given session as active for the given site.","operationId":"httpSessionsActionSetActiveSession","tags":["httpSessions"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"site","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"session","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/httpSessions/action/unsetActiveSession/":{"get":{"description":"Unsets the active session of the given site.","operationId":"httpSessionsActionUnsetActiveSession","tags":["httpSessions"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"site","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/httpSessions/action/addSessionToken/":{"get":{"description":"Adds the session token to the given site.","operationId":"httpSessionsActionAddSessionToken","tags":["httpSessions"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"site","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"sessionToken","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/httpSessions/action/removeSessionToken/":{"get":{"description":"Removes the session token from the given site.","operationId":"httpSessionsActionRemoveSessionToken","tags":["httpSessions"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"site","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"sessionToken","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/httpSessions/action/setSessionTokenValue/":{"get":{"description":"Sets the value of the session token of the given session for the given site.","operationId":"httpSessionsActionSetSessionTokenValue","tags":["httpSessions"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"site","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"session","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"sessionToken","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"tokenValue","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/httpSessions/action/renameSession/":{"get":{"description":"Renames the session of the given site.","operationId":"httpSessionsActionRenameSession","tags":["httpSessions"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"site","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"oldSessionName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"newSessionName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/httpSessions/action/addDefaultSessionToken/":{"get":{"description":"Adds a default session token with the given name and enabled state.","operationId":"httpSessionsActionAddDefaultSessionToken","tags":["httpSessions"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"sessionToken","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"tokenEnabled","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/httpSessions/action/setDefaultSessionTokenEnabled/":{"get":{"description":"Sets whether or not the default session token with the given name is enabled.","operationId":"httpSessionsActionSetDefaultSessionTokenEnabled","tags":["httpSessions"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"sessionToken","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"tokenEnabled","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/httpSessions/action/removeDefaultSessionToken/":{"get":{"description":"Removes the default session token with the given name.","operationId":"httpSessionsActionRemoveDefaultSessionToken","tags":["httpSessions"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"sessionToken","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/break/view/isBreakAll/":{"get":{"description":"Returns True if ZAP will break on both requests and responses","operationId":"breakViewIsBreakAll","tags":["break"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/break/view/isBreakRequest/":{"get":{"description":"Returns True if ZAP will break on requests","operationId":"breakViewIsBreakRequest","tags":["break"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/break/view/isBreakResponse/":{"get":{"description":"Returns True if ZAP will break on responses","operationId":"breakViewIsBreakResponse","tags":["break"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/break/view/httpMessage/":{"get":{"description":"Returns the HTTP message currently intercepted (if any)","operationId":"breakViewHttpMessage","tags":["break"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/break/action/break/":{"get":{"description":"Controls the global break functionality. The type may be one of: http-all, http-request or http-response. The state may be true (for turning break on for the specified type) or false (for turning break off). Scope is not currently used.","operationId":"breakActionBreak","tags":["break"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"type","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"state","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"scope","in":"query","required":false,"deprecated":true,"description":"","schema":{"type":"string"}}]},"/JSON/break/action/setHttpMessage/":{"get":{"description":"Overwrites the currently intercepted message with the data provided","operationId":"breakActionSetHttpMessage","tags":["break"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"httpHeader","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"httpBody","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/break/action/continue/":{"get":{"description":"Submits the currently intercepted message and unsets the global request/response break points","operationId":"breakActionContinue","tags":["break"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/break/action/step/":{"get":{"description":"Submits the currently intercepted message, the next request or response will automatically be intercepted","operationId":"breakActionStep","tags":["break"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/break/action/drop/":{"get":{"description":"Drops the currently intercepted message","operationId":"breakActionDrop","tags":["break"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/break/action/addHttpBreakpoint/":{"get":{"description":"Adds a custom HTTP breakpoint. The string is the string to match. Location may be one of: url, request_header, request_body, response_header or response_body. Match may be: contains or regex. Inverse (match) may be true or false. Lastly, ignorecase (when matching the string) may be true or false.  ","operationId":"breakActionAddHttpBreakpoint","tags":["break"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"string","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"location","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"match","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"inverse","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"boolean"}},{"name":"ignorecase","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/break/action/removeHttpBreakpoint/":{"get":{"description":"Removes the specified break point","operationId":"breakActionRemoveHttpBreakpoint","tags":["break"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"string","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"location","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"match","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"inverse","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"boolean"}},{"name":"ignorecase","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/authentication/view/getSupportedAuthenticationMethods/":{"get":{"description":"Gets the name of the authentication methods.","operationId":"authenticationViewGetSupportedAuthenticationMethods","tags":["authentication"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/authentication/view/getAuthenticationMethodConfigParams/":{"get":{"description":"Gets the configuration parameters for the authentication method with the given name.","operationId":"authenticationViewGetAuthenticationMethodConfigParams","tags":["authentication"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"authMethodName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/authentication/view/getAuthenticationMethod/":{"get":{"description":"Gets the name of the authentication method for the context with the given ID.","operationId":"authenticationViewGetAuthenticationMethod","tags":["authentication"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/authentication/view/getLoggedInIndicator/":{"get":{"description":"Gets the logged in indicator for the context with the given ID.","operationId":"authenticationViewGetLoggedInIndicator","tags":["authentication"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/authentication/view/getLoggedOutIndicator/":{"get":{"description":"Gets the logged out indicator for the context with the given ID.","operationId":"authenticationViewGetLoggedOutIndicator","tags":["authentication"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/authentication/action/setAuthenticationMethod/":{"get":{"description":"Sets the authentication method for the context with the given ID.","operationId":"authenticationActionSetAuthenticationMethod","tags":["authentication"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"authMethodName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"authMethodConfigParams","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/authentication/action/setLoggedInIndicator/":{"get":{"description":"Sets the logged in indicator for the context with the given ID.","operationId":"authenticationActionSetLoggedInIndicator","tags":["authentication"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"loggedInIndicatorRegex","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/authentication/action/setLoggedOutIndicator/":{"get":{"description":"Sets the logged out indicator for the context with the given ID.","operationId":"authenticationActionSetLoggedOutIndicator","tags":["authentication"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"loggedOutIndicatorRegex","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/authorization/view/getAuthorizationDetectionMethod/":{"get":{"description":"Obtains all the configuration of the authorization detection method that is currently set for a context.","operationId":"authorizationViewGetAuthorizationDetectionMethod","tags":["authorization"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/authorization/action/setBasicAuthorizationDetectionMethod/":{"get":{"description":"Sets the authorization detection method for a context as one that identifies un-authorized messages based on: the message\'s status code or a regex pattern in the response\'s header or body. Also, whether all conditions must match or just some can be specified via the logicalOperator parameter, which accepts two values: \\"AND\\" (default), \\"OR\\".  ","operationId":"authorizationActionSetBasicAuthorizationDetectionMethod","tags":["authorization"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"headerRegex","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"bodyRegex","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"statusCode","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"logicalOperator","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/localProxies/view/additionalProxies/":{"get":{"description":"Gets all of the additional proxies that have been configured.","operationId":"localProxiesViewAdditionalProxies","tags":["localProxies"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/localProxies/action/addAdditionalProxy/":{"get":{"description":"Adds an new proxy using the details supplied.","operationId":"localProxiesActionAddAdditionalProxy","tags":["localProxies"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"address","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"port","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"behindNat","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}},{"name":"alwaysDecodeZip","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}},{"name":"removeUnsupportedEncodings","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/localProxies/action/removeAdditionalProxy/":{"get":{"description":"Removes the additional proxy with the specified address and port.","operationId":"localProxiesActionRemoveAdditionalProxy","tags":["localProxies"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"address","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"port","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/ruleConfig/view/ruleConfigValue/":{"get":{"description":"Show the specified rule configuration","operationId":"ruleConfigViewRuleConfigValue","tags":["ruleConfig"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"key","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ruleConfig/view/allRuleConfigs/":{"get":{"description":"Show all of the rule configurations","operationId":"ruleConfigViewAllRuleConfigs","tags":["ruleConfig"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ruleConfig/action/resetRuleConfigValue/":{"get":{"description":"Reset the specified rule configuration, which must already exist","operationId":"ruleConfigActionResetRuleConfigValue","tags":["ruleConfig"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"key","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/ruleConfig/action/resetAllRuleConfigValues/":{"get":{"description":"Reset all of the rule configurations","operationId":"ruleConfigActionResetAllRuleConfigValues","tags":["ruleConfig"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/ruleConfig/action/setRuleConfigValue/":{"get":{"description":"Set the specified rule configuration, which must already exist","operationId":"ruleConfigActionSetRuleConfigValue","tags":["ruleConfig"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"key","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"value","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/sessionManagement/view/getSupportedSessionManagementMethods/":{"get":{"description":"Gets the name of the session management methods.","operationId":"sessionManagementViewGetSupportedSessionManagementMethods","tags":["sessionManagement"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/sessionManagement/view/getSessionManagementMethodConfigParams/":{"get":{"description":"Gets the configuration parameters for the session management method with the given name.","operationId":"sessionManagementViewGetSessionManagementMethodConfigParams","tags":["sessionManagement"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"methodName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/sessionManagement/view/getSessionManagementMethod/":{"get":{"description":"Gets the name of the session management method for the context with the given ID.","operationId":"sessionManagementViewGetSessionManagementMethod","tags":["sessionManagement"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/sessionManagement/action/setSessionManagementMethod/":{"get":{"description":"Sets the session management method for the context with the given ID.","operationId":"sessionManagementActionSetSessionManagementMethod","tags":["sessionManagement"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"methodName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"methodConfigParams","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/users/view/usersList/":{"get":{"description":"Gets a list of users that belong to the context with the given ID, or all users if none provided.","operationId":"usersViewUsersList","tags":["users"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/users/view/getUserById/":{"get":{"description":"Gets the data of the user with the given ID that belongs to the context with the given ID.","operationId":"usersViewGetUserById","tags":["users"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"userId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/users/view/getAuthenticationCredentialsConfigParams/":{"get":{"description":"Gets the configuration parameters for the credentials of the context with the given ID.","operationId":"usersViewGetAuthenticationCredentialsConfigParams","tags":["users"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/users/view/getAuthenticationCredentials/":{"get":{"description":"Gets the authentication credentials of the user with given ID that belongs to the context with the given ID.","operationId":"usersViewGetAuthenticationCredentials","tags":["users"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"userId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/users/action/newUser/":{"get":{"description":"Creates a new user with the given name for the context with the given ID.","operationId":"usersActionNewUser","tags":["users"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"name","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/users/action/removeUser/":{"get":{"description":"Removes the user with the given ID that belongs to the context with the given ID.","operationId":"usersActionRemoveUser","tags":["users"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"userId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/users/action/setUserEnabled/":{"get":{"description":"Sets whether or not the user, with the given ID that belongs to the context with the given ID, should be enabled.","operationId":"usersActionSetUserEnabled","tags":["users"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"userId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"enabled","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/users/action/setUserName/":{"get":{"description":"Renames the user with the given ID that belongs to the context with the given ID.","operationId":"usersActionSetUserName","tags":["users"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"userId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"name","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/users/action/setAuthenticationCredentials/":{"get":{"description":"Sets the authentication credentials for the user with the given ID that belongs to the context with the given ID.","operationId":"usersActionSetAuthenticationCredentials","tags":["users"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"userId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"authCredentialsConfigParams","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/forcedUser/view/isForcedUserModeEnabled/":{"get":{"description":"Returns \'true\' if \'forced user\' mode is enabled, \'false\' otherwise","operationId":"forcedUserViewIsForcedUserModeEnabled","tags":["forcedUser"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/forcedUser/view/getForcedUser/":{"get":{"description":"Gets the user (ID) set as \'forced user\' for the given context (ID)","operationId":"forcedUserViewGetForcedUser","tags":["forcedUser"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/forcedUser/action/setForcedUser/":{"get":{"description":"Sets the user (ID) that should be used in \'forced user\' mode for the given context (ID)","operationId":"forcedUserActionSetForcedUser","tags":["forcedUser"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"contextId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}},{"name":"userId","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]},"/JSON/forcedUser/action/setForcedUserModeEnabled/":{"get":{"description":"Sets if \'forced user\' mode should be enabled or not","operationId":"forcedUserActionSetForcedUserModeEnabled","tags":["forcedUser"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"boolean"}}]},"/JSON/script/view/listEngines/":{"get":{"description":"Lists the script engines available","operationId":"scriptViewListEngines","tags":["script"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/script/view/listTypes/":{"get":{"description":"Lists the script types available.","operationId":"scriptViewListTypes","tags":["script"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/script/view/listScripts/":{"get":{"description":"Lists the scripts available, with its engine, name, description, type and error state.","operationId":"scriptViewListScripts","tags":["script"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/script/view/globalVar/":{"get":{"description":"Gets the value of the global variable with the given key. Returns an API error (DOES_NOT_EXIST) if no value was previously set.","operationId":"scriptViewGlobalVar","tags":["script"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"varKey","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/script/view/globalVars/":{"get":{"description":"Gets all the global variables (key/value pairs).","operationId":"scriptViewGlobalVars","tags":["script"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/script/view/scriptVar/":{"get":{"description":"Gets the value of the variable with the given key for the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists or if no value was previously set.","operationId":"scriptViewScriptVar","tags":["script"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scriptName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"varKey","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/script/view/scriptVars/":{"get":{"description":"Gets all the variables (key/value pairs) of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists.","operationId":"scriptViewScriptVars","tags":["script"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scriptName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/script/action/enable/":{"get":{"description":"Enables the script with the given name","operationId":"scriptActionEnable","tags":["script"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scriptName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/script/action/disable/":{"get":{"description":"Disables the script with the given name","operationId":"scriptActionDisable","tags":["script"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scriptName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/script/action/load/":{"get":{"description":"Loads a script into ZAP from the given local file, with the given name, type and engine, optionally with a description, and a charset name to read the script (the charset name is required if the script is not in UTF-8, for example, in ISO-8859-1).","operationId":"scriptActionLoad","tags":["script"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scriptName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"scriptType","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"scriptEngine","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"fileName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"scriptDescription","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"charset","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string","default":"UTF-8"}}]},"/JSON/script/action/remove/":{"get":{"description":"Removes the script with the given name","operationId":"scriptActionRemove","tags":["script"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scriptName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/script/action/runStandAloneScript/":{"get":{"description":"Runs the stand alone script with the given name","operationId":"scriptActionRunStandAloneScript","tags":["script"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scriptName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/script/action/clearGlobalVar/":{"get":{"description":"Clears the global variable with the given key.","operationId":"scriptActionClearGlobalVar","tags":["script"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"varKey","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/script/action/clearGlobalVars/":{"get":{"description":"Clears the global variables.","operationId":"scriptActionClearGlobalVars","tags":["script"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/script/action/clearScriptVar/":{"get":{"description":"Clears the variable with the given key of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists.","operationId":"scriptActionClearScriptVar","tags":["script"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scriptName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"varKey","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/script/action/clearScriptVars/":{"get":{"description":"Clears the variables of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists.","operationId":"scriptActionClearScriptVars","tags":["script"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scriptName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/script/action/setScriptVar/":{"get":{"description":"Sets the value of the variable with the given key of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists.","operationId":"scriptActionSetScriptVar","tags":["script"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"scriptName","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"varKey","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"varValue","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/script/action/setGlobalVar/":{"get":{"description":"Sets the value of the global variable with the given key.","operationId":"scriptActionSetGlobalVar","tags":["script"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"varKey","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"varValue","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/stats/view/stats/":{"get":{"description":"Statistics","operationId":"statsViewStats","tags":["stats"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"keyPrefix","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/stats/view/allSitesStats/":{"get":{"description":"Gets all of the site based statistics, optionally filtered by a key prefix","operationId":"statsViewAllSitesStats","tags":["stats"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"keyPrefix","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/stats/view/siteStats/":{"get":{"description":"Gets all of the global statistics, optionally filtered by a key prefix","operationId":"statsViewSiteStats","tags":["stats"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"site","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}},{"name":"keyPrefix","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/stats/view/optionStatsdHost/":{"get":{"description":"Gets the Statsd service hostname","operationId":"statsViewOptionStatsdHost","tags":["stats"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/stats/view/optionStatsdPort/":{"get":{"description":"Gets the Statsd service port","operationId":"statsViewOptionStatsdPort","tags":["stats"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/stats/view/optionStatsdPrefix/":{"get":{"description":"Gets the prefix to be applied to all stats sent to the configured Statsd service","operationId":"statsViewOptionStatsdPrefix","tags":["stats"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/stats/view/optionInMemoryEnabled/":{"get":{"description":"Returns \'true\' if in memory statistics are enabled, otherwise returns \'false\'","operationId":"statsViewOptionInMemoryEnabled","tags":["stats"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/stats/view/optionStatsdEnabled/":{"get":{"description":"Returns \'true\' if a Statsd server has been correctly configured, otherwise returns \'false\'","operationId":"statsViewOptionStatsdEnabled","tags":["stats"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}},"/JSON/stats/action/clearStats/":{"get":{"description":"Clears all of the statistics","operationId":"statsActionClearStats","tags":["stats"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"keyPrefix","in":"query","required":false,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/stats/action/setOptionStatsdHost/":{"get":{"description":"Sets the Statsd service hostname, supply an empty string to stop using a Statsd service","operationId":"statsActionSetOptionStatsdHost","tags":["stats"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"String","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/stats/action/setOptionStatsdPrefix/":{"get":{"description":"Sets the prefix to be applied to all stats sent to the configured Statsd service","operationId":"statsActionSetOptionStatsdPrefix","tags":["stats"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"String","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/stats/action/setOptionInMemoryEnabled/":{"get":{"description":"Sets whether in memory statistics are enabled","operationId":"statsActionSetOptionInMemoryEnabled","tags":["stats"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Boolean","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"string"}}]},"/JSON/stats/action/setOptionStatsdPort/":{"get":{"description":"Sets the Statsd service port","operationId":"statsActionSetOptionStatsdPort","tags":["stats"],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}},"parameters":[{"name":"Integer","in":"query","required":true,"deprecated":false,"description":"","schema":{"type":"integer"}}]}}}');

/***/ }),

/***/ 7838:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"_from":"@saucelabs/zap","_id":"@saucelabs/zap@0.1.1","_inBundle":false,"_integrity":"sha512-NOWo327eWmtL1+uKGxn/6zlWigwSfSUbkEmMuPeCvXa6gEiXj4HRH0e7RE7KDABmoz8QOulhocPDe3ux6GOU1Q==","_location":"/@saucelabs/zap","_phantomChildren":{"escalade":"3.1.1","get-caller-file":"2.0.5","require-directory":"2.1.1","string-width":"4.2.2","strip-ansi":"6.0.0"},"_requested":{"type":"tag","registry":true,"raw":"@saucelabs/zap","name":"@saucelabs/zap","escapedName":"@saucelabs%2fzap","scope":"@saucelabs","rawSpec":"","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["#DEV:/","#USER"],"_resolved":"https://registry.npmjs.org/@saucelabs/zap/-/zap-0.1.1.tgz","_shasum":"270fc12adda5d1185ea532792c038d06bc490895","_spec":"@saucelabs/zap","_where":"/Users/christianbromann/Sites/SauceLabs/projects/sauce-security-action","author":{"name":"Christian Bromann","email":"christian@saucelabs.com"},"bin":{"zap":"bin/zap"},"bugs":{"url":"https://github.com/saucelabs/node-zap/issues"},"bundleDependencies":false,"contributors":[{"name":"christian-bromann","email":"christian@saucelabs.com"}],"dependencies":{"change-case":"^4.1.1","ejs":"^3.1.6","got":"^11.7.0","js-yaml":"^4.1.0","tunnel":"0.0.6","yargs":"^16.0.3"},"deprecated":false,"description":"OWASP ZapProxy bindings for Node.js","devDependencies":{"@types/jest":"^26.0.23","@types/tunnel":"0.0.2","@typescript-eslint/eslint-plugin":"^4.28.0","@typescript-eslint/parser":"^4.28.0","eslint":"^7.29.0","eslint-plugin-import":"^2.23.4","jest":"^27.0.5","npm-run-all":"^4.1.5","openapi-types":"^9.0.3","release-it":"^14.10.0","rimraf":"^3.0.2","source-map-support":"^0.5.19","swagger-typescript-codegen":"^3.2.3","ts-jest":"^27.0.3","ts-node":"^10.0.0","typescript":"^4.3.4"},"homepage":"https://github.com/saucelabs/node-zap","license":"Apache-2.0","main":"./build/index","name":"@saucelabs/zap","repository":{"type":"git","url":"git://github.com/saucelabs/node-zap.git"},"scripts":{"build":"run-s clean compile postinstall","clean":"rimraf tsconfig.tsbuildinfo ./build ./coverage","compile":"tsc -p ./tsconfig.json","eslint":"eslint -c ./.eslintrc.js ./src/**/*.ts ./tests/**/*.ts","postinstall":"./scripts/setup.js","prepublishOnly":"NODE_ENV=production run-s build","release":"release-it --github.release","release:ci":"npm run release -- --ci --npm.skipChecks --no-git.requireCleanWorkingDir","release:major":"npm run release -- major","release:minor":"npm run release -- minor","release:patch":"npm run release -- patch","test":"run-s build eslint test:unit","test:unit":"cp -r build/api src/api && jest --coverage","watch":"npm run compile -- --watch"},"typings":"./build/index.d.ts","version":"0.1.1"}');

/***/ }),

/***/ 7351:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__nccwpck_require__(2087));
const utils_1 = __nccwpck_require__(5278);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 2186:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(7351);
const file_command_1 = __nccwpck_require__(717);
const utils_1 = __nccwpck_require__(5278);
const os = __importStar(__nccwpck_require__(2087));
const path = __importStar(__nccwpck_require__(5622));
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    return inputs;
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    process.stdout.write(os.EOL);
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 */
function error(message) {
    command_1.issue('error', message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds an warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 */
function warning(message) {
    command_1.issue('warning', message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issueCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__nccwpck_require__(5747));
const os = __importStar(__nccwpck_require__(2087));
const utils_1 = __nccwpck_require__(5278);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 5278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 9281:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CLI_PARAMS = exports.EPILOG = exports.USAGE = exports.TO_STRING_TAG = exports.SYMBOL_ITERATOR = exports.SYMBOL_TOSTRING = exports.SYMBOL_INSPECT = exports.DEFAULT_OPTIONS = exports.PROTOCOL_MAP = exports.API_DOMAINS = exports.BINDING_VERSION_NOTE = void 0;
const change_case_1 = __nccwpck_require__(9091);
const os_1 = __importDefault(__nccwpck_require__(2087));
const { version } = __nccwpck_require__(7838);
exports.BINDING_VERSION_NOTE = `node-zap v${version}`;
const protocols = [
    __nccwpck_require__(3791),
    __nccwpck_require__(6963)
];
exports.API_DOMAINS = new Set();
const protocolFlattened = new Map();
for (const { paths, servers, info, components } of protocols) {
    if (!servers) {
        throw new Error(`No "servers" property found in API ${info.title}`);
    }
    for (const [endpoint, methods] of Object.entries(paths)) {
        for (const [method, description] of Object.entries(methods)) {
            if (method === 'parameters') {
                continue;
            }
            const commandParams = [];
            let params = [
                ...((methods === null || methods === void 0 ? void 0 : methods.parameters) || []),
                ...(description.parameters || [])
            ];
            for (const param of params) {
                /**
                 * parameter is referenced, e.g. #/components/parameters/FooBar
                 */
                const refParam = param.$ref;
                if (refParam && (components === null || components === void 0 ? void 0 : components.parameters)) {
                    const paramName = refParam.split('/').pop();
                    if (paramName) {
                        commandParams.push(components.parameters[paramName]);
                    }
                }
                commandParams.push(param);
            }
            if (!description.operationId) {
                throw new Error(`No "operationId" found in endpoint ${endpoint}`);
            }
            if (!description.tags || !description.tags[0]) {
                throw new Error(`Expected command "${description.operationId}" to be tagged with its domain`);
            }
            exports.API_DOMAINS.add(description.tags[0]);
            let commandName = change_case_1.camelCase(description.operationId);
            /**
             * mark commands as depcrecated in the command names
             */
            if (description.deprecated) {
                commandName += 'Deprecated';
            }
            /**
             * ensure we don't double register commands
             */
            /* istanbul ignore if */
            if (protocolFlattened.has(commandName)) {
                throw new Error(`command ${commandName} already registered`);
            }
            const sanitizedParams = commandParams
                .map((param) => {
                const newParam = {
                    nameCamelCased: change_case_1.camelCase(param.name),
                    ...param
                };
                return newParam;
            });
            protocolFlattened.set(commandName, { method: method, endpoint, description, parameters: sanitizedParams });
        }
    }
}
exports.PROTOCOL_MAP = protocolFlattened;
exports.DEFAULT_OPTIONS = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'apac',
    headers: { 'User-Agent': `zap/v${version} (nodejs ${os_1.default.platform()})` },
};
exports.SYMBOL_INSPECT = Symbol.for('nodejs.util.inspect.custom');
exports.SYMBOL_TOSTRING = Symbol.toStringTag;
exports.SYMBOL_ITERATOR = Symbol.iterator;
exports.TO_STRING_TAG = 'ZapProxy API Client';
exports.USAGE = `ZapProxy Sauce Labs API CLI

Usage: zap <command> [options]`;
exports.EPILOG = `Copyright ${(new Date()).getUTCFullYear()} © Sauce Labs`;
exports.CLI_PARAMS = [{
        alias: 'h',
        name: 'help',
        description: 'prints help menu'
    }, {
        alias: 'u',
        name: 'user',
        description: 'your Sauce Labs username'
    }, {
        alias: 'k',
        name: 'key',
        description: 'your Sauce Labs user key'
    }, {
        alias: 'r',
        name: 'region',
        default: exports.DEFAULT_OPTIONS.region,
        description: 'your Sauce Labs datacenter region, the following regions are available: `us-west-1` (short `us`), `eu-central-1` (short `eu`)'
    }];


/***/ }),

/***/ 5227:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const got_1 = __importDefault(__nccwpck_require__(3061));
const tunnel_1 = __importDefault(__nccwpck_require__(4294));
const change_case_1 = __nccwpck_require__(9091);
const utils_1 = __nccwpck_require__(2325);
const constants_1 = __nccwpck_require__(9281);
class Zap {
    constructor(options) {
        this.options = options;
        const opts = Object.assign({}, constants_1.DEFAULT_OPTIONS, options || {});
        if (!opts.user || !opts.key) {
            throw new Error('"user" or "key" parameters missing');
        }
        this._options = opts;
        this.region = opts.region;
        this.user = opts.user;
        this._accessKey = this._options.key;
        this._api = got_1.default.extend({
            headers: opts.headers,
            username: opts.user,
            password: opts.key,
            agent: {
                http: tunnel_1.default.httpsOverHttps({
                    proxy: {
                        host: `zap.${utils_1.getRegionSubDomain(this._options)}.saucelabs.com`,
                        port: 443
                    }
                })
            },
            /**
             * ToDo(Christian): eventually remove
             * Seems that CloudRun functions have random problems connecting.
             */
            retry: {
                statusCodes: [401]
            }
        });
        this._proxy = new Proxy({
            user: this.user,
            key: `XXXXXXXX-XXXX-XXXX-XXXX-XXXXXX${(this._accessKey || '').slice(-6)}`,
            region: this._options.region,
            headers: this._options.headers
        }, { get: this._get.bind(this) });
        // @ts-ignore
        return this._proxy;
    }
    _get(scope, propName) {
        /**
         * print to string output
         * https://nodejs.org/api/util.html#util_util_inspect_custom
         */
        /* istanbul ignore next */
        if (propName === constants_1.SYMBOL_INSPECT || propName === 'inspect') {
            return () => utils_1.toString(this);
        }
        /**
         * print to string tag
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
         */
        if (propName === constants_1.SYMBOL_TOSTRING) {
            return constants_1.TO_STRING_TAG;
        }
        /**
         * return instance iterator
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
         */
        if (propName === constants_1.SYMBOL_ITERATOR || typeof propName !== 'string') {
            return;
        }
        /**
         * allow to return publicly registered class properties
         */
        if (this[propName]) {
            return !propName.startsWith('_') ? this[propName] : undefined;
        }
        /**
         * check if domain is being accessed
         */
        if (constants_1.API_DOMAINS.has(propName)) {
            return new Proxy({ domain: propName }, { get: this._get.bind(this) });
        }
        const commandNameAsView = change_case_1.camelCase(`${scope.domain}-view-${propName}`);
        const commandNameAsAction = change_case_1.camelCase(`${scope.domain}-action-${propName}`);
        const commandName = constants_1.PROTOCOL_MAP.has(commandNameAsView)
            ? commandNameAsView
            : constants_1.PROTOCOL_MAP.has(commandNameAsAction)
                ? commandNameAsAction
                : scope.domain === 'session' ? propName : null;
        if (!commandName) {
            /**
             * just return if propName is a symbol (Node 8 and lower)
             */
            /* istanbul ignore next */
            if (typeof propName !== 'string') {
                return;
            }
            throw new Error(`Couldn't find API endpoint for command "${propName}"`);
        }
        /**
         * ensure user is authenticated
         */
        // if (scope.domain !== 'session' && !this.sessionId) {
        //     throw new Error(`Couldn't call command "${propName}", reason: not authenticated! Please call \`zap.session.new({ ... })\` first to authenticate with Sauce Labs cloud.`)
        // }
        return async (args = {}) => {
            const { method, endpoint, parameters } = constants_1.PROTOCOL_MAP.get(commandName);
            /**
             * validate parameters
             */
            const bodyMap = new Map();
            for (const param of parameters) {
                const userParam = args[param.nameCamelCased];
                const type = param.schema.type.replace('integer', 'number');
                /**
                 * skip param if not set
                 */
                if (typeof userParam === 'undefined') {
                    if (param.required) {
                        throw new Error(`Missing required parameter "${param.name}" for command "${commandName}"`);
                    }
                    continue;
                }
                if (typeof userParam !== type) {
                    throw new Error(`Expected parameter for param '${param.name}' from type '${type}', found '${typeof userParam}'`);
                }
                bodyMap.set(param.name, userParam);
            }
            /**
             * get request body by using the body parameter or convert the parameter
             * map into json object
             */
            const body = [...bodyMap.entries()].reduce((e, [k, v]) => {
                e[k] = v;
                return e;
            }, {});
            /**
             * make request
             */
            const uri = `https://zap.${utils_1.getRegionSubDomain(this._options)}.saucelabs.com${endpoint}`;
            try {
                const response = await this._api[method](uri, {
                    ...(method === 'get'
                        ? { searchParams: body }
                        : { json: body }),
                    responseType: 'json',
                    ...(!this.sessionId ? {} : {
                        headers: { 'x-zap-api-key': this.sessionId }
                    })
                });
                /**
                 * attach session id to the scope
                 */
                if (response && response.body && typeof response.body.sessionId === 'string') {
                    this.sessionId = response.body.sessionId;
                }
                return response.body;
            }
            catch (err) {
                throw new Error(`Failed calling ${propName}: ${err.message}, ${err.response && JSON.stringify(err.response.body)}`);
            }
        };
    }
}
exports.default = Zap;


/***/ }),

/***/ 2325:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toString = exports.getRegionSubDomain = void 0;
const constants_1 = __nccwpck_require__(9281);
/**
 * Translate region shorthandle option into the full region
 * @param  {object}  options  client options
 * @return {string}           full region
 */
function getRegionSubDomain(options = {}) {
    let region = options.region || 'us-west-1';
    if (options.region === 'us')
        region = 'us-west-1';
    if (options.region === 'eu')
        region = 'eu-central-1';
    if (options.region === 'apac')
        region = 'apac-southeast-1';
    return region;
}
exports.getRegionSubDomain = getRegionSubDomain;
/**
 * toString method for proxy instance
 * @param  {object} scope  actual API instance
 * @return {string}        to string output
 */
function toString(scope) {
    return `${constants_1.TO_STRING_TAG} {
  username: '${scope.user}',
  key: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXX${scope['_accessKey'].slice(-6)}',
  region: '${scope['_options'].region}'
}`;
}
exports.toString = toString;


/***/ }),

/***/ 7678:
/***/ ((module, exports) => {

"use strict";

/// <reference lib="es2018"/>
/// <reference lib="dom"/>
/// <reference types="node"/>
Object.defineProperty(exports, "__esModule", ({ value: true }));
const typedArrayTypeNames = [
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Uint16Array',
    'Int32Array',
    'Uint32Array',
    'Float32Array',
    'Float64Array',
    'BigInt64Array',
    'BigUint64Array'
];
function isTypedArrayName(name) {
    return typedArrayTypeNames.includes(name);
}
const objectTypeNames = [
    'Function',
    'Generator',
    'AsyncGenerator',
    'GeneratorFunction',
    'AsyncGeneratorFunction',
    'AsyncFunction',
    'Observable',
    'Array',
    'Buffer',
    'Object',
    'RegExp',
    'Date',
    'Error',
    'Map',
    'Set',
    'WeakMap',
    'WeakSet',
    'ArrayBuffer',
    'SharedArrayBuffer',
    'DataView',
    'Promise',
    'URL',
    'HTMLElement',
    ...typedArrayTypeNames
];
function isObjectTypeName(name) {
    return objectTypeNames.includes(name);
}
const primitiveTypeNames = [
    'null',
    'undefined',
    'string',
    'number',
    'bigint',
    'boolean',
    'symbol'
];
function isPrimitiveTypeName(name) {
    return primitiveTypeNames.includes(name);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isOfType(type) {
    return (value) => typeof value === type;
}
const { toString } = Object.prototype;
const getObjectType = (value) => {
    const objectTypeName = toString.call(value).slice(8, -1);
    if (/HTML\w+Element/.test(objectTypeName) && is.domElement(value)) {
        return 'HTMLElement';
    }
    if (isObjectTypeName(objectTypeName)) {
        return objectTypeName;
    }
    return undefined;
};
const isObjectOfType = (type) => (value) => getObjectType(value) === type;
function is(value) {
    if (value === null) {
        return 'null';
    }
    switch (typeof value) {
        case 'undefined':
            return 'undefined';
        case 'string':
            return 'string';
        case 'number':
            return 'number';
        case 'boolean':
            return 'boolean';
        case 'function':
            return 'Function';
        case 'bigint':
            return 'bigint';
        case 'symbol':
            return 'symbol';
        default:
    }
    if (is.observable(value)) {
        return 'Observable';
    }
    if (is.array(value)) {
        return 'Array';
    }
    if (is.buffer(value)) {
        return 'Buffer';
    }
    const tagType = getObjectType(value);
    if (tagType) {
        return tagType;
    }
    if (value instanceof String || value instanceof Boolean || value instanceof Number) {
        throw new TypeError('Please don\'t use object wrappers for primitive types');
    }
    return 'Object';
}
is.undefined = isOfType('undefined');
is.string = isOfType('string');
const isNumberType = isOfType('number');
is.number = (value) => isNumberType(value) && !is.nan(value);
is.bigint = isOfType('bigint');
// eslint-disable-next-line @typescript-eslint/ban-types
is.function_ = isOfType('function');
is.null_ = (value) => value === null;
is.class_ = (value) => is.function_(value) && value.toString().startsWith('class ');
is.boolean = (value) => value === true || value === false;
is.symbol = isOfType('symbol');
is.numericString = (value) => is.string(value) && !is.emptyStringOrWhitespace(value) && !Number.isNaN(Number(value));
is.array = (value, assertion) => {
    if (!Array.isArray(value)) {
        return false;
    }
    if (!is.function_(assertion)) {
        return true;
    }
    return value.every(assertion);
};
is.buffer = (value) => { var _a, _b, _c, _d; return (_d = (_c = (_b = (_a = value) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.isBuffer) === null || _c === void 0 ? void 0 : _c.call(_b, value)) !== null && _d !== void 0 ? _d : false; };
is.nullOrUndefined = (value) => is.null_(value) || is.undefined(value);
is.object = (value) => !is.null_(value) && (typeof value === 'object' || is.function_(value));
is.iterable = (value) => { var _a; return is.function_((_a = value) === null || _a === void 0 ? void 0 : _a[Symbol.iterator]); };
is.asyncIterable = (value) => { var _a; return is.function_((_a = value) === null || _a === void 0 ? void 0 : _a[Symbol.asyncIterator]); };
is.generator = (value) => is.iterable(value) && is.function_(value.next) && is.function_(value.throw);
is.asyncGenerator = (value) => is.asyncIterable(value) && is.function_(value.next) && is.function_(value.throw);
is.nativePromise = (value) => isObjectOfType('Promise')(value);
const hasPromiseAPI = (value) => {
    var _a, _b;
    return is.function_((_a = value) === null || _a === void 0 ? void 0 : _a.then) &&
        is.function_((_b = value) === null || _b === void 0 ? void 0 : _b.catch);
};
is.promise = (value) => is.nativePromise(value) || hasPromiseAPI(value);
is.generatorFunction = isObjectOfType('GeneratorFunction');
is.asyncGeneratorFunction = (value) => getObjectType(value) === 'AsyncGeneratorFunction';
is.asyncFunction = (value) => getObjectType(value) === 'AsyncFunction';
// eslint-disable-next-line no-prototype-builtins, @typescript-eslint/ban-types
is.boundFunction = (value) => is.function_(value) && !value.hasOwnProperty('prototype');
is.regExp = isObjectOfType('RegExp');
is.date = isObjectOfType('Date');
is.error = isObjectOfType('Error');
is.map = (value) => isObjectOfType('Map')(value);
is.set = (value) => isObjectOfType('Set')(value);
is.weakMap = (value) => isObjectOfType('WeakMap')(value);
is.weakSet = (value) => isObjectOfType('WeakSet')(value);
is.int8Array = isObjectOfType('Int8Array');
is.uint8Array = isObjectOfType('Uint8Array');
is.uint8ClampedArray = isObjectOfType('Uint8ClampedArray');
is.int16Array = isObjectOfType('Int16Array');
is.uint16Array = isObjectOfType('Uint16Array');
is.int32Array = isObjectOfType('Int32Array');
is.uint32Array = isObjectOfType('Uint32Array');
is.float32Array = isObjectOfType('Float32Array');
is.float64Array = isObjectOfType('Float64Array');
is.bigInt64Array = isObjectOfType('BigInt64Array');
is.bigUint64Array = isObjectOfType('BigUint64Array');
is.arrayBuffer = isObjectOfType('ArrayBuffer');
is.sharedArrayBuffer = isObjectOfType('SharedArrayBuffer');
is.dataView = isObjectOfType('DataView');
is.directInstanceOf = (instance, class_) => Object.getPrototypeOf(instance) === class_.prototype;
is.urlInstance = (value) => isObjectOfType('URL')(value);
is.urlString = (value) => {
    if (!is.string(value)) {
        return false;
    }
    try {
        new URL(value); // eslint-disable-line no-new
        return true;
    }
    catch (_a) {
        return false;
    }
};
// TODO: Use the `not` operator with a type guard here when it's available.
// Example: `is.truthy = (value: unknown): value is (not false | not 0 | not '' | not undefined | not null) => Boolean(value);`
is.truthy = (value) => Boolean(value);
// Example: `is.falsy = (value: unknown): value is (not true | 0 | '' | undefined | null) => Boolean(value);`
is.falsy = (value) => !value;
is.nan = (value) => Number.isNaN(value);
is.primitive = (value) => is.null_(value) || isPrimitiveTypeName(typeof value);
is.integer = (value) => Number.isInteger(value);
is.safeInteger = (value) => Number.isSafeInteger(value);
is.plainObject = (value) => {
    // From: https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
    if (toString.call(value) !== '[object Object]') {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.getPrototypeOf({});
};
is.typedArray = (value) => isTypedArrayName(getObjectType(value));
const isValidLength = (value) => is.safeInteger(value) && value >= 0;
is.arrayLike = (value) => !is.nullOrUndefined(value) && !is.function_(value) && isValidLength(value.length);
is.inRange = (value, range) => {
    if (is.number(range)) {
        return value >= Math.min(0, range) && value <= Math.max(range, 0);
    }
    if (is.array(range) && range.length === 2) {
        return value >= Math.min(...range) && value <= Math.max(...range);
    }
    throw new TypeError(`Invalid range: ${JSON.stringify(range)}`);
};
const NODE_TYPE_ELEMENT = 1;
const DOM_PROPERTIES_TO_CHECK = [
    'innerHTML',
    'ownerDocument',
    'style',
    'attributes',
    'nodeValue'
];
is.domElement = (value) => {
    return is.object(value) &&
        value.nodeType === NODE_TYPE_ELEMENT &&
        is.string(value.nodeName) &&
        !is.plainObject(value) &&
        DOM_PROPERTIES_TO_CHECK.every(property => property in value);
};
is.observable = (value) => {
    var _a, _b, _c, _d;
    if (!value) {
        return false;
    }
    // eslint-disable-next-line no-use-extend-native/no-use-extend-native
    if (value === ((_b = (_a = value)[Symbol.observable]) === null || _b === void 0 ? void 0 : _b.call(_a))) {
        return true;
    }
    if (value === ((_d = (_c = value)['@@observable']) === null || _d === void 0 ? void 0 : _d.call(_c))) {
        return true;
    }
    return false;
};
is.nodeStream = (value) => is.object(value) && is.function_(value.pipe) && !is.observable(value);
is.infinite = (value) => value === Infinity || value === -Infinity;
const isAbsoluteMod2 = (remainder) => (value) => is.integer(value) && Math.abs(value % 2) === remainder;
is.evenInteger = isAbsoluteMod2(0);
is.oddInteger = isAbsoluteMod2(1);
is.emptyArray = (value) => is.array(value) && value.length === 0;
is.nonEmptyArray = (value) => is.array(value) && value.length > 0;
is.emptyString = (value) => is.string(value) && value.length === 0;
// TODO: Use `not ''` when the `not` operator is available.
is.nonEmptyString = (value) => is.string(value) && value.length > 0;
const isWhiteSpaceString = (value) => is.string(value) && !/\S/.test(value);
is.emptyStringOrWhitespace = (value) => is.emptyString(value) || isWhiteSpaceString(value);
is.emptyObject = (value) => is.object(value) && !is.map(value) && !is.set(value) && Object.keys(value).length === 0;
// TODO: Use `not` operator here to remove `Map` and `Set` from type guard:
// - https://github.com/Microsoft/TypeScript/pull/29317
is.nonEmptyObject = (value) => is.object(value) && !is.map(value) && !is.set(value) && Object.keys(value).length > 0;
is.emptySet = (value) => is.set(value) && value.size === 0;
is.nonEmptySet = (value) => is.set(value) && value.size > 0;
is.emptyMap = (value) => is.map(value) && value.size === 0;
is.nonEmptyMap = (value) => is.map(value) && value.size > 0;
const predicateOnArray = (method, predicate, values) => {
    if (!is.function_(predicate)) {
        throw new TypeError(`Invalid predicate: ${JSON.stringify(predicate)}`);
    }
    if (values.length === 0) {
        throw new TypeError('Invalid number of values');
    }
    return method.call(values, predicate);
};
is.any = (predicate, ...values) => {
    const predicates = is.array(predicate) ? predicate : [predicate];
    return predicates.some(singlePredicate => predicateOnArray(Array.prototype.some, singlePredicate, values));
};
is.all = (predicate, ...values) => predicateOnArray(Array.prototype.every, predicate, values);
const assertType = (condition, description, value, options = {}) => {
    if (!condition) {
        const { multipleValues } = options;
        const valuesMessage = multipleValues ?
            `received values of types ${[
                ...new Set(value.map(singleValue => `\`${is(singleValue)}\``))
            ].join(', ')}` :
            `received value of type \`${is(value)}\``;
        throw new TypeError(`Expected value which is \`${description}\`, ${valuesMessage}.`);
    }
};
exports.assert = {
    // Unknowns.
    undefined: (value) => assertType(is.undefined(value), 'undefined', value),
    string: (value) => assertType(is.string(value), 'string', value),
    number: (value) => assertType(is.number(value), 'number', value),
    bigint: (value) => assertType(is.bigint(value), 'bigint', value),
    // eslint-disable-next-line @typescript-eslint/ban-types
    function_: (value) => assertType(is.function_(value), 'Function', value),
    null_: (value) => assertType(is.null_(value), 'null', value),
    class_: (value) => assertType(is.class_(value), "Class" /* class_ */, value),
    boolean: (value) => assertType(is.boolean(value), 'boolean', value),
    symbol: (value) => assertType(is.symbol(value), 'symbol', value),
    numericString: (value) => assertType(is.numericString(value), "string with a number" /* numericString */, value),
    array: (value, assertion) => {
        const assert = assertType;
        assert(is.array(value), 'Array', value);
        if (assertion) {
            value.forEach(assertion);
        }
    },
    buffer: (value) => assertType(is.buffer(value), 'Buffer', value),
    nullOrUndefined: (value) => assertType(is.nullOrUndefined(value), "null or undefined" /* nullOrUndefined */, value),
    object: (value) => assertType(is.object(value), 'Object', value),
    iterable: (value) => assertType(is.iterable(value), "Iterable" /* iterable */, value),
    asyncIterable: (value) => assertType(is.asyncIterable(value), "AsyncIterable" /* asyncIterable */, value),
    generator: (value) => assertType(is.generator(value), 'Generator', value),
    asyncGenerator: (value) => assertType(is.asyncGenerator(value), 'AsyncGenerator', value),
    nativePromise: (value) => assertType(is.nativePromise(value), "native Promise" /* nativePromise */, value),
    promise: (value) => assertType(is.promise(value), 'Promise', value),
    generatorFunction: (value) => assertType(is.generatorFunction(value), 'GeneratorFunction', value),
    asyncGeneratorFunction: (value) => assertType(is.asyncGeneratorFunction(value), 'AsyncGeneratorFunction', value),
    // eslint-disable-next-line @typescript-eslint/ban-types
    asyncFunction: (value) => assertType(is.asyncFunction(value), 'AsyncFunction', value),
    // eslint-disable-next-line @typescript-eslint/ban-types
    boundFunction: (value) => assertType(is.boundFunction(value), 'Function', value),
    regExp: (value) => assertType(is.regExp(value), 'RegExp', value),
    date: (value) => assertType(is.date(value), 'Date', value),
    error: (value) => assertType(is.error(value), 'Error', value),
    map: (value) => assertType(is.map(value), 'Map', value),
    set: (value) => assertType(is.set(value), 'Set', value),
    weakMap: (value) => assertType(is.weakMap(value), 'WeakMap', value),
    weakSet: (value) => assertType(is.weakSet(value), 'WeakSet', value),
    int8Array: (value) => assertType(is.int8Array(value), 'Int8Array', value),
    uint8Array: (value) => assertType(is.uint8Array(value), 'Uint8Array', value),
    uint8ClampedArray: (value) => assertType(is.uint8ClampedArray(value), 'Uint8ClampedArray', value),
    int16Array: (value) => assertType(is.int16Array(value), 'Int16Array', value),
    uint16Array: (value) => assertType(is.uint16Array(value), 'Uint16Array', value),
    int32Array: (value) => assertType(is.int32Array(value), 'Int32Array', value),
    uint32Array: (value) => assertType(is.uint32Array(value), 'Uint32Array', value),
    float32Array: (value) => assertType(is.float32Array(value), 'Float32Array', value),
    float64Array: (value) => assertType(is.float64Array(value), 'Float64Array', value),
    bigInt64Array: (value) => assertType(is.bigInt64Array(value), 'BigInt64Array', value),
    bigUint64Array: (value) => assertType(is.bigUint64Array(value), 'BigUint64Array', value),
    arrayBuffer: (value) => assertType(is.arrayBuffer(value), 'ArrayBuffer', value),
    sharedArrayBuffer: (value) => assertType(is.sharedArrayBuffer(value), 'SharedArrayBuffer', value),
    dataView: (value) => assertType(is.dataView(value), 'DataView', value),
    urlInstance: (value) => assertType(is.urlInstance(value), 'URL', value),
    urlString: (value) => assertType(is.urlString(value), "string with a URL" /* urlString */, value),
    truthy: (value) => assertType(is.truthy(value), "truthy" /* truthy */, value),
    falsy: (value) => assertType(is.falsy(value), "falsy" /* falsy */, value),
    nan: (value) => assertType(is.nan(value), "NaN" /* nan */, value),
    primitive: (value) => assertType(is.primitive(value), "primitive" /* primitive */, value),
    integer: (value) => assertType(is.integer(value), "integer" /* integer */, value),
    safeInteger: (value) => assertType(is.safeInteger(value), "integer" /* safeInteger */, value),
    plainObject: (value) => assertType(is.plainObject(value), "plain object" /* plainObject */, value),
    typedArray: (value) => assertType(is.typedArray(value), "TypedArray" /* typedArray */, value),
    arrayLike: (value) => assertType(is.arrayLike(value), "array-like" /* arrayLike */, value),
    domElement: (value) => assertType(is.domElement(value), "HTMLElement" /* domElement */, value),
    observable: (value) => assertType(is.observable(value), 'Observable', value),
    nodeStream: (value) => assertType(is.nodeStream(value), "Node.js Stream" /* nodeStream */, value),
    infinite: (value) => assertType(is.infinite(value), "infinite number" /* infinite */, value),
    emptyArray: (value) => assertType(is.emptyArray(value), "empty array" /* emptyArray */, value),
    nonEmptyArray: (value) => assertType(is.nonEmptyArray(value), "non-empty array" /* nonEmptyArray */, value),
    emptyString: (value) => assertType(is.emptyString(value), "empty string" /* emptyString */, value),
    nonEmptyString: (value) => assertType(is.nonEmptyString(value), "non-empty string" /* nonEmptyString */, value),
    emptyStringOrWhitespace: (value) => assertType(is.emptyStringOrWhitespace(value), "empty string or whitespace" /* emptyStringOrWhitespace */, value),
    emptyObject: (value) => assertType(is.emptyObject(value), "empty object" /* emptyObject */, value),
    nonEmptyObject: (value) => assertType(is.nonEmptyObject(value), "non-empty object" /* nonEmptyObject */, value),
    emptySet: (value) => assertType(is.emptySet(value), "empty set" /* emptySet */, value),
    nonEmptySet: (value) => assertType(is.nonEmptySet(value), "non-empty set" /* nonEmptySet */, value),
    emptyMap: (value) => assertType(is.emptyMap(value), "empty map" /* emptyMap */, value),
    nonEmptyMap: (value) => assertType(is.nonEmptyMap(value), "non-empty map" /* nonEmptyMap */, value),
    // Numbers.
    evenInteger: (value) => assertType(is.evenInteger(value), "even integer" /* evenInteger */, value),
    oddInteger: (value) => assertType(is.oddInteger(value), "odd integer" /* oddInteger */, value),
    // Two arguments.
    directInstanceOf: (instance, class_) => assertType(is.directInstanceOf(instance, class_), "T" /* directInstanceOf */, instance),
    inRange: (value, range) => assertType(is.inRange(value, range), "in range" /* inRange */, value),
    // Variadic functions.
    any: (predicate, ...values) => {
        return assertType(is.any(predicate, ...values), "predicate returns truthy for any value" /* any */, values, { multipleValues: true });
    },
    all: (predicate, ...values) => assertType(is.all(predicate, ...values), "predicate returns truthy for all values" /* all */, values, { multipleValues: true })
};
// Some few keywords are reserved, but we'll populate them for Node.js users
// See https://github.com/Microsoft/TypeScript/issues/2536
Object.defineProperties(is, {
    class: {
        value: is.class_
    },
    function: {
        value: is.function_
    },
    null: {
        value: is.null_
    }
});
Object.defineProperties(exports.assert, {
    class: {
        value: exports.assert.class_
    },
    function: {
        value: exports.assert.function_
    },
    null: {
        value: exports.assert.null_
    }
});
exports.default = is;
// For CommonJS default export support
module.exports = is;
module.exports.default = is;
module.exports.assert = exports.assert;


/***/ }),

/***/ 8097:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const defer_to_connect_1 = __nccwpck_require__(6214);
const util_1 = __nccwpck_require__(1669);
const nodejsMajorVersion = Number(process.versions.node.split('.')[0]);
const timer = (request) => {
    if (request.timings) {
        return request.timings;
    }
    const timings = {
        start: Date.now(),
        socket: undefined,
        lookup: undefined,
        connect: undefined,
        secureConnect: undefined,
        upload: undefined,
        response: undefined,
        end: undefined,
        error: undefined,
        abort: undefined,
        phases: {
            wait: undefined,
            dns: undefined,
            tcp: undefined,
            tls: undefined,
            request: undefined,
            firstByte: undefined,
            download: undefined,
            total: undefined
        }
    };
    request.timings = timings;
    const handleError = (origin) => {
        const emit = origin.emit.bind(origin);
        origin.emit = (event, ...args) => {
            // Catches the `error` event
            if (event === 'error') {
                timings.error = Date.now();
                timings.phases.total = timings.error - timings.start;
                origin.emit = emit;
            }
            // Saves the original behavior
            return emit(event, ...args);
        };
    };
    handleError(request);
    const onAbort = () => {
        timings.abort = Date.now();
        // Let the `end` response event be responsible for setting the total phase,
        // unless the Node.js major version is >= 13.
        if (!timings.response || nodejsMajorVersion >= 13) {
            timings.phases.total = Date.now() - timings.start;
        }
    };
    request.prependOnceListener('abort', onAbort);
    const onSocket = (socket) => {
        timings.socket = Date.now();
        timings.phases.wait = timings.socket - timings.start;
        if (util_1.types.isProxy(socket)) {
            return;
        }
        const lookupListener = () => {
            timings.lookup = Date.now();
            timings.phases.dns = timings.lookup - timings.socket;
        };
        socket.prependOnceListener('lookup', lookupListener);
        defer_to_connect_1.default(socket, {
            connect: () => {
                timings.connect = Date.now();
                if (timings.lookup === undefined) {
                    socket.removeListener('lookup', lookupListener);
                    timings.lookup = timings.connect;
                    timings.phases.dns = timings.lookup - timings.socket;
                }
                timings.phases.tcp = timings.connect - timings.lookup;
                // This callback is called before flushing any data,
                // so we don't need to set `timings.phases.request` here.
            },
            secureConnect: () => {
                timings.secureConnect = Date.now();
                timings.phases.tls = timings.secureConnect - timings.connect;
            }
        });
    };
    if (request.socket) {
        onSocket(request.socket);
    }
    else {
        request.prependOnceListener('socket', onSocket);
    }
    const onUpload = () => {
        var _a;
        timings.upload = Date.now();
        timings.phases.request = timings.upload - ((_a = timings.secureConnect) !== null && _a !== void 0 ? _a : timings.connect);
    };
    const writableFinished = () => {
        if (typeof request.writableFinished === 'boolean') {
            return request.writableFinished;
        }
        // Node.js doesn't have `request.writableFinished` property
        return request.finished && request.outputSize === 0 && (!request.socket || request.socket.writableLength === 0);
    };
    if (writableFinished()) {
        onUpload();
    }
    else {
        request.prependOnceListener('finish', onUpload);
    }
    request.prependOnceListener('response', (response) => {
        timings.response = Date.now();
        timings.phases.firstByte = timings.response - timings.upload;
        response.timings = timings;
        handleError(response);
        response.prependOnceListener('end', () => {
            timings.end = Date.now();
            timings.phases.download = timings.end - timings.response;
            timings.phases.total = timings.end - timings.start;
        });
        response.prependOnceListener('aborted', onAbort);
    });
    return timings;
};
exports.default = timer;
// For CommonJS default export support
module.exports = timer;
module.exports.default = timer;


/***/ }),

/***/ 2286:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const {
	V4MAPPED,
	ADDRCONFIG,
	ALL,
	promises: {
		Resolver: AsyncResolver
	},
	lookup: dnsLookup
} = __nccwpck_require__(881);
const {promisify} = __nccwpck_require__(1669);
const os = __nccwpck_require__(2087);

const kCacheableLookupCreateConnection = Symbol('cacheableLookupCreateConnection');
const kCacheableLookupInstance = Symbol('cacheableLookupInstance');
const kExpires = Symbol('expires');

const supportsALL = typeof ALL === 'number';

const verifyAgent = agent => {
	if (!(agent && typeof agent.createConnection === 'function')) {
		throw new Error('Expected an Agent instance as the first argument');
	}
};

const map4to6 = entries => {
	for (const entry of entries) {
		if (entry.family === 6) {
			continue;
		}

		entry.address = `::ffff:${entry.address}`;
		entry.family = 6;
	}
};

const getIfaceInfo = () => {
	let has4 = false;
	let has6 = false;

	for (const device of Object.values(os.networkInterfaces())) {
		for (const iface of device) {
			if (iface.internal) {
				continue;
			}

			if (iface.family === 'IPv6') {
				has6 = true;
			} else {
				has4 = true;
			}

			if (has4 && has6) {
				return {has4, has6};
			}
		}
	}

	return {has4, has6};
};

const isIterable = map => {
	return Symbol.iterator in map;
};

const ttl = {ttl: true};
const all = {all: true};

class CacheableLookup {
	constructor({
		cache = new Map(),
		maxTtl = Infinity,
		fallbackDuration = 3600,
		errorTtl = 0.15,
		resolver = new AsyncResolver(),
		lookup = dnsLookup
	} = {}) {
		this.maxTtl = maxTtl;
		this.errorTtl = errorTtl;

		this._cache = cache;
		this._resolver = resolver;
		this._dnsLookup = promisify(lookup);

		if (this._resolver instanceof AsyncResolver) {
			this._resolve4 = this._resolver.resolve4.bind(this._resolver);
			this._resolve6 = this._resolver.resolve6.bind(this._resolver);
		} else {
			this._resolve4 = promisify(this._resolver.resolve4.bind(this._resolver));
			this._resolve6 = promisify(this._resolver.resolve6.bind(this._resolver));
		}

		this._iface = getIfaceInfo();

		this._pending = {};
		this._nextRemovalTime = false;
		this._hostnamesToFallback = new Set();

		if (fallbackDuration < 1) {
			this._fallback = false;
		} else {
			this._fallback = true;

			const interval = setInterval(() => {
				this._hostnamesToFallback.clear();
			}, fallbackDuration * 1000);

			/* istanbul ignore next: There is no `interval.unref()` when running inside an Electron renderer */
			if (interval.unref) {
				interval.unref();
			}
		}

		this.lookup = this.lookup.bind(this);
		this.lookupAsync = this.lookupAsync.bind(this);
	}

	set servers(servers) {
		this.clear();

		this._resolver.setServers(servers);
	}

	get servers() {
		return this._resolver.getServers();
	}

	lookup(hostname, options, callback) {
		if (typeof options === 'function') {
			callback = options;
			options = {};
		} else if (typeof options === 'number') {
			options = {
				family: options
			};
		}

		if (!callback) {
			throw new Error('Callback must be a function.');
		}

		// eslint-disable-next-line promise/prefer-await-to-then
		this.lookupAsync(hostname, options).then(result => {
			if (options.all) {
				callback(null, result);
			} else {
				callback(null, result.address, result.family, result.expires, result.ttl);
			}
		}, callback);
	}

	async lookupAsync(hostname, options = {}) {
		if (typeof options === 'number') {
			options = {
				family: options
			};
		}

		let cached = await this.query(hostname);

		if (options.family === 6) {
			const filtered = cached.filter(entry => entry.family === 6);

			if (options.hints & V4MAPPED) {
				if ((supportsALL && options.hints & ALL) || filtered.length === 0) {
					map4to6(cached);
				} else {
					cached = filtered;
				}
			} else {
				cached = filtered;
			}
		} else if (options.family === 4) {
			cached = cached.filter(entry => entry.family === 4);
		}

		if (options.hints & ADDRCONFIG) {
			const {_iface} = this;
			cached = cached.filter(entry => entry.family === 6 ? _iface.has6 : _iface.has4);
		}

		if (cached.length === 0) {
			const error = new Error(`cacheableLookup ENOTFOUND ${hostname}`);
			error.code = 'ENOTFOUND';
			error.hostname = hostname;

			throw error;
		}

		if (options.all) {
			return cached;
		}

		return cached[0];
	}

	async query(hostname) {
		let cached = await this._cache.get(hostname);

		if (!cached) {
			const pending = this._pending[hostname];

			if (pending) {
				cached = await pending;
			} else {
				const newPromise = this.queryAndCache(hostname);
				this._pending[hostname] = newPromise;

				try {
					cached = await newPromise;
				} finally {
					delete this._pending[hostname];
				}
			}
		}

		cached = cached.map(entry => {
			return {...entry};
		});

		return cached;
	}

	async _resolve(hostname) {
		const wrap = async promise => {
			try {
				return await promise;
			} catch (error) {
				if (error.code === 'ENODATA' || error.code === 'ENOTFOUND') {
					return [];
				}

				throw error;
			}
		};

		// ANY is unsafe as it doesn't trigger new queries in the underlying server.
		const [A, AAAA] = await Promise.all([
			this._resolve4(hostname, ttl),
			this._resolve6(hostname, ttl)
		].map(promise => wrap(promise)));

		let aTtl = 0;
		let aaaaTtl = 0;
		let cacheTtl = 0;

		const now = Date.now();

		for (const entry of A) {
			entry.family = 4;
			entry.expires = now + (entry.ttl * 1000);

			aTtl = Math.max(aTtl, entry.ttl);
		}

		for (const entry of AAAA) {
			entry.family = 6;
			entry.expires = now + (entry.ttl * 1000);

			aaaaTtl = Math.max(aaaaTtl, entry.ttl);
		}

		if (A.length > 0) {
			if (AAAA.length > 0) {
				cacheTtl = Math.min(aTtl, aaaaTtl);
			} else {
				cacheTtl = aTtl;
			}
		} else {
			cacheTtl = aaaaTtl;
		}

		return {
			entries: [
				...A,
				...AAAA
			],
			cacheTtl
		};
	}

	async _lookup(hostname) {
		try {
			const entries = await this._dnsLookup(hostname, {
				all: true
			});

			return {
				entries,
				cacheTtl: 0
			};
		} catch (_) {
			return {
				entries: [],
				cacheTtl: 0
			};
		}
	}

	async _set(hostname, data, cacheTtl) {
		if (this.maxTtl > 0 && cacheTtl > 0) {
			cacheTtl = Math.min(cacheTtl, this.maxTtl) * 1000;
			data[kExpires] = Date.now() + cacheTtl;

			try {
				await this._cache.set(hostname, data, cacheTtl);
			} catch (error) {
				this.lookupAsync = async () => {
					const cacheError = new Error('Cache Error. Please recreate the CacheableLookup instance.');
					cacheError.cause = error;

					throw cacheError;
				};
			}

			if (isIterable(this._cache)) {
				this._tick(cacheTtl);
			}
		}
	}

	async queryAndCache(hostname) {
		if (this._hostnamesToFallback.has(hostname)) {
			return this._dnsLookup(hostname, all);
		}

		let query = await this._resolve(hostname);

		if (query.entries.length === 0 && this._fallback) {
			query = await this._lookup(hostname);

			if (query.entries.length !== 0) {
				// Use `dns.lookup(...)` for that particular hostname
				this._hostnamesToFallback.add(hostname);
			}
		}

		const cacheTtl = query.entries.length === 0 ? this.errorTtl : query.cacheTtl;
		await this._set(hostname, query.entries, cacheTtl);

		return query.entries;
	}

	_tick(ms) {
		const nextRemovalTime = this._nextRemovalTime;

		if (!nextRemovalTime || ms < nextRemovalTime) {
			clearTimeout(this._removalTimeout);

			this._nextRemovalTime = ms;

			this._removalTimeout = setTimeout(() => {
				this._nextRemovalTime = false;

				let nextExpiry = Infinity;

				const now = Date.now();

				for (const [hostname, entries] of this._cache) {
					const expires = entries[kExpires];

					if (now >= expires) {
						this._cache.delete(hostname);
					} else if (expires < nextExpiry) {
						nextExpiry = expires;
					}
				}

				if (nextExpiry !== Infinity) {
					this._tick(nextExpiry - now);
				}
			}, ms);

			/* istanbul ignore next: There is no `timeout.unref()` when running inside an Electron renderer */
			if (this._removalTimeout.unref) {
				this._removalTimeout.unref();
			}
		}
	}

	install(agent) {
		verifyAgent(agent);

		if (kCacheableLookupCreateConnection in agent) {
			throw new Error('CacheableLookup has been already installed');
		}

		agent[kCacheableLookupCreateConnection] = agent.createConnection;
		agent[kCacheableLookupInstance] = this;

		agent.createConnection = (options, callback) => {
			if (!('lookup' in options)) {
				options.lookup = this.lookup;
			}

			return agent[kCacheableLookupCreateConnection](options, callback);
		};
	}

	uninstall(agent) {
		verifyAgent(agent);

		if (agent[kCacheableLookupCreateConnection]) {
			if (agent[kCacheableLookupInstance] !== this) {
				throw new Error('The agent is not owned by this CacheableLookup instance');
			}

			agent.createConnection = agent[kCacheableLookupCreateConnection];

			delete agent[kCacheableLookupCreateConnection];
			delete agent[kCacheableLookupInstance];
		}
	}

	updateInterfaceInfo() {
		const {_iface} = this;

		this._iface = getIfaceInfo();

		if ((_iface.has4 && !this._iface.has4) || (_iface.has6 && !this._iface.has6)) {
			this._cache.clear();
		}
	}

	clear(hostname) {
		if (hostname) {
			this._cache.delete(hostname);
			return;
		}

		this._cache.clear();
	}
}

module.exports = CacheableLookup;
module.exports.default = CacheableLookup;


/***/ }),

/***/ 4340:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const {PassThrough: PassThroughStream} = __nccwpck_require__(2413);

module.exports = options => {
	options = {...options};

	const {array} = options;
	let {encoding} = options;
	const isBuffer = encoding === 'buffer';
	let objectMode = false;

	if (array) {
		objectMode = !(encoding || isBuffer);
	} else {
		encoding = encoding || 'utf8';
	}

	if (isBuffer) {
		encoding = null;
	}

	const stream = new PassThroughStream({objectMode});

	if (encoding) {
		stream.setEncoding(encoding);
	}

	let length = 0;
	const chunks = [];

	stream.on('data', chunk => {
		chunks.push(chunk);

		if (objectMode) {
			length = chunks.length;
		} else {
			length += chunk.length;
		}
	});

	stream.getBufferedValue = () => {
		if (array) {
			return chunks;
		}

		return isBuffer ? Buffer.concat(chunks, length) : chunks.join('');
	};

	stream.getBufferedLength = () => length;

	return stream;
};


/***/ }),

/***/ 7040:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const {constants: BufferConstants} = __nccwpck_require__(4293);
const pump = __nccwpck_require__(8341);
const bufferStream = __nccwpck_require__(4340);

class MaxBufferError extends Error {
	constructor() {
		super('maxBuffer exceeded');
		this.name = 'MaxBufferError';
	}
}

async function getStream(inputStream, options) {
	if (!inputStream) {
		return Promise.reject(new Error('Expected a stream'));
	}

	options = {
		maxBuffer: Infinity,
		...options
	};

	const {maxBuffer} = options;

	let stream;
	await new Promise((resolve, reject) => {
		const rejectPromise = error => {
			// Don't retrieve an oversized buffer.
			if (error && stream.getBufferedLength() <= BufferConstants.MAX_LENGTH) {
				error.bufferedData = stream.getBufferedValue();
			}

			reject(error);
		};

		stream = pump(inputStream, bufferStream(options), error => {
			if (error) {
				rejectPromise(error);
				return;
			}

			resolve();
		});

		stream.on('data', () => {
			if (stream.getBufferedLength() > maxBuffer) {
				rejectPromise(new MaxBufferError());
			}
		});
	});

	return stream.getBufferedValue();
}

module.exports = getStream;
// TODO: Remove this for the next major release
module.exports.default = getStream;
module.exports.buffer = (stream, options) => getStream(stream, {...options, encoding: 'buffer'});
module.exports.array = (stream, options) => getStream(stream, {...options, array: true});
module.exports.MaxBufferError = MaxBufferError;


/***/ }),

/***/ 8116:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const EventEmitter = __nccwpck_require__(8614);
const urlLib = __nccwpck_require__(8835);
const normalizeUrl = __nccwpck_require__(7952);
const getStream = __nccwpck_require__(7040);
const CachePolicy = __nccwpck_require__(1002);
const Response = __nccwpck_require__(9004);
const lowercaseKeys = __nccwpck_require__(9662);
const cloneResponse = __nccwpck_require__(1312);
const Keyv = __nccwpck_require__(1531);

class CacheableRequest {
	constructor(request, cacheAdapter) {
		if (typeof request !== 'function') {
			throw new TypeError('Parameter `request` must be a function');
		}

		this.cache = new Keyv({
			uri: typeof cacheAdapter === 'string' && cacheAdapter,
			store: typeof cacheAdapter !== 'string' && cacheAdapter,
			namespace: 'cacheable-request'
		});

		return this.createCacheableRequest(request);
	}

	createCacheableRequest(request) {
		return (opts, cb) => {
			let url;
			if (typeof opts === 'string') {
				url = normalizeUrlObject(urlLib.parse(opts));
				opts = {};
			} else if (opts instanceof urlLib.URL) {
				url = normalizeUrlObject(urlLib.parse(opts.toString()));
				opts = {};
			} else {
				const [pathname, ...searchParts] = (opts.path || '').split('?');
				const search = searchParts.length > 0 ?
					`?${searchParts.join('?')}` :
					'';
				url = normalizeUrlObject({ ...opts, pathname, search });
			}

			opts = {
				headers: {},
				method: 'GET',
				cache: true,
				strictTtl: false,
				automaticFailover: false,
				...opts,
				...urlObjectToRequestOptions(url)
			};
			opts.headers = lowercaseKeys(opts.headers);

			const ee = new EventEmitter();
			const normalizedUrlString = normalizeUrl(
				urlLib.format(url),
				{
					stripWWW: false,
					removeTrailingSlash: false,
					stripAuthentication: false
				}
			);
			const key = `${opts.method}:${normalizedUrlString}`;
			let revalidate = false;
			let madeRequest = false;

			const makeRequest = opts => {
				madeRequest = true;
				let requestErrored = false;
				let requestErrorCallback;

				const requestErrorPromise = new Promise(resolve => {
					requestErrorCallback = () => {
						if (!requestErrored) {
							requestErrored = true;
							resolve();
						}
					};
				});

				const handler = response => {
					if (revalidate && !opts.forceRefresh) {
						response.status = response.statusCode;
						const revalidatedPolicy = CachePolicy.fromObject(revalidate.cachePolicy).revalidatedPolicy(opts, response);
						if (!revalidatedPolicy.modified) {
							const headers = revalidatedPolicy.policy.responseHeaders();
							response = new Response(revalidate.statusCode, headers, revalidate.body, revalidate.url);
							response.cachePolicy = revalidatedPolicy.policy;
							response.fromCache = true;
						}
					}

					if (!response.fromCache) {
						response.cachePolicy = new CachePolicy(opts, response, opts);
						response.fromCache = false;
					}

					let clonedResponse;
					if (opts.cache && response.cachePolicy.storable()) {
						clonedResponse = cloneResponse(response);

						(async () => {
							try {
								const bodyPromise = getStream.buffer(response);

								await Promise.race([
									requestErrorPromise,
									new Promise(resolve => response.once('end', resolve))
								]);

								if (requestErrored) {
									return;
								}

								const body = await bodyPromise;

								const value = {
									cachePolicy: response.cachePolicy.toObject(),
									url: response.url,
									statusCode: response.fromCache ? revalidate.statusCode : response.statusCode,
									body
								};

								let ttl = opts.strictTtl ? response.cachePolicy.timeToLive() : undefined;
								if (opts.maxTtl) {
									ttl = ttl ? Math.min(ttl, opts.maxTtl) : opts.maxTtl;
								}

								await this.cache.set(key, value, ttl);
							} catch (error) {
								ee.emit('error', new CacheableRequest.CacheError(error));
							}
						})();
					} else if (opts.cache && revalidate) {
						(async () => {
							try {
								await this.cache.delete(key);
							} catch (error) {
								ee.emit('error', new CacheableRequest.CacheError(error));
							}
						})();
					}

					ee.emit('response', clonedResponse || response);
					if (typeof cb === 'function') {
						cb(clonedResponse || response);
					}
				};

				try {
					const req = request(opts, handler);
					req.once('error', requestErrorCallback);
					req.once('abort', requestErrorCallback);
					ee.emit('request', req);
				} catch (error) {
					ee.emit('error', new CacheableRequest.RequestError(error));
				}
			};

			(async () => {
				const get = async opts => {
					await Promise.resolve();

					const cacheEntry = opts.cache ? await this.cache.get(key) : undefined;
					if (typeof cacheEntry === 'undefined') {
						return makeRequest(opts);
					}

					const policy = CachePolicy.fromObject(cacheEntry.cachePolicy);
					if (policy.satisfiesWithoutRevalidation(opts) && !opts.forceRefresh) {
						const headers = policy.responseHeaders();
						const response = new Response(cacheEntry.statusCode, headers, cacheEntry.body, cacheEntry.url);
						response.cachePolicy = policy;
						response.fromCache = true;

						ee.emit('response', response);
						if (typeof cb === 'function') {
							cb(response);
						}
					} else {
						revalidate = cacheEntry;
						opts.headers = policy.revalidationHeaders(opts);
						makeRequest(opts);
					}
				};

				const errorHandler = error => ee.emit('error', new CacheableRequest.CacheError(error));
				this.cache.once('error', errorHandler);
				ee.on('response', () => this.cache.removeListener('error', errorHandler));

				try {
					await get(opts);
				} catch (error) {
					if (opts.automaticFailover && !madeRequest) {
						makeRequest(opts);
					}

					ee.emit('error', new CacheableRequest.CacheError(error));
				}
			})();

			return ee;
		};
	}
}

function urlObjectToRequestOptions(url) {
	const options = { ...url };
	options.path = `${url.pathname || '/'}${url.search || ''}`;
	delete options.pathname;
	delete options.search;
	return options;
}

function normalizeUrlObject(url) {
	// If url was parsed by url.parse or new URL:
	// - hostname will be set
	// - host will be hostname[:port]
	// - port will be set if it was explicit in the parsed string
	// Otherwise, url was from request options:
	// - hostname or host may be set
	// - host shall not have port encoded
	return {
		protocol: url.protocol,
		auth: url.auth,
		hostname: url.hostname || url.host || 'localhost',
		port: url.port,
		pathname: url.pathname,
		search: url.search
	};
}

CacheableRequest.RequestError = class extends Error {
	constructor(error) {
		super(error.message);
		this.name = 'RequestError';
		Object.assign(this, error);
	}
};

CacheableRequest.CacheError = class extends Error {
	constructor(error) {
		super(error.message);
		this.name = 'CacheError';
		Object.assign(this, error);
	}
};

module.exports = CacheableRequest;


/***/ }),

/***/ 3638:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.camelCase = exports.camelCaseTransformMerge = exports.camelCaseTransform = void 0;
var tslib_1 = __nccwpck_require__(9646);
var pascal_case_1 = __nccwpck_require__(5995);
function camelCaseTransform(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return pascal_case_1.pascalCaseTransform(input, index);
}
exports.camelCaseTransform = camelCaseTransform;
function camelCaseTransformMerge(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return pascal_case_1.pascalCaseTransformMerge(input);
}
exports.camelCaseTransformMerge = camelCaseTransformMerge;
function camelCase(input, options) {
    if (options === void 0) { options = {}; }
    return pascal_case_1.pascalCase(input, tslib_1.__assign({ transform: camelCaseTransform }, options));
}
exports.camelCase = camelCase;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9646:
/***/ ((module) => {

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if ( true && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || from);
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});


/***/ }),

/***/ 8824:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.capitalCase = exports.capitalCaseTransform = void 0;
var tslib_1 = __nccwpck_require__(5145);
var no_case_1 = __nccwpck_require__(6613);
var upper_case_first_1 = __nccwpck_require__(6256);
function capitalCaseTransform(input) {
    return upper_case_first_1.upperCaseFirst(input.toLowerCase());
}
exports.capitalCaseTransform = capitalCaseTransform;
function capitalCase(input, options) {
    if (options === void 0) { options = {}; }
    return no_case_1.noCase(input, tslib_1.__assign({ delimiter: " ", transform: capitalCaseTransform }, options));
}
exports.capitalCase = capitalCase;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5145:
/***/ ((module) => {

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if ( true && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || from);
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});


/***/ }),

/***/ 9091:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __nccwpck_require__(9220);
tslib_1.__exportStar(__nccwpck_require__(3638), exports);
tslib_1.__exportStar(__nccwpck_require__(8824), exports);
tslib_1.__exportStar(__nccwpck_require__(6878), exports);
tslib_1.__exportStar(__nccwpck_require__(2246), exports);
tslib_1.__exportStar(__nccwpck_require__(3657), exports);
tslib_1.__exportStar(__nccwpck_require__(6613), exports);
tslib_1.__exportStar(__nccwpck_require__(8452), exports);
tslib_1.__exportStar(__nccwpck_require__(5995), exports);
tslib_1.__exportStar(__nccwpck_require__(3553), exports);
tslib_1.__exportStar(__nccwpck_require__(9229), exports);
tslib_1.__exportStar(__nccwpck_require__(6213), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9220:
/***/ ((module) => {

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if ( true && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || from);
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});


/***/ }),

/***/ 1312:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const PassThrough = __nccwpck_require__(2413).PassThrough;
const mimicResponse = __nccwpck_require__(2610);

const cloneResponse = response => {
	if (!(response && response.pipe)) {
		throw new TypeError('Parameter `response` must be a response stream.');
	}

	const clone = new PassThrough();
	mimicResponse(response, clone);

	return response.pipe(clone);
};

module.exports = cloneResponse;


/***/ }),

/***/ 6878:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.constantCase = void 0;
var tslib_1 = __nccwpck_require__(1728);
var no_case_1 = __nccwpck_require__(6613);
var upper_case_1 = __nccwpck_require__(5997);
function constantCase(input, options) {
    if (options === void 0) { options = {}; }
    return no_case_1.noCase(input, tslib_1.__assign({ delimiter: "_", transform: upper_case_1.upperCase }, options));
}
exports.constantCase = constantCase;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1728:
/***/ ((module) => {

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if ( true && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || from);
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});


/***/ }),

/***/ 2391:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const {Transform, PassThrough} = __nccwpck_require__(2413);
const zlib = __nccwpck_require__(8761);
const mimicResponse = __nccwpck_require__(3877);

module.exports = response => {
	const contentEncoding = (response.headers['content-encoding'] || '').toLowerCase();

	if (!['gzip', 'deflate', 'br'].includes(contentEncoding)) {
		return response;
	}

	// TODO: Remove this when targeting Node.js 12.
	const isBrotli = contentEncoding === 'br';
	if (isBrotli && typeof zlib.createBrotliDecompress !== 'function') {
		response.destroy(new Error('Brotli is not supported on Node.js < 12'));
		return response;
	}

	let isEmpty = true;

	const checker = new Transform({
		transform(data, _encoding, callback) {
			isEmpty = false;

			callback(null, data);
		},

		flush(callback) {
			callback();
		}
	});

	const finalStream = new PassThrough({
		autoDestroy: false,
		destroy(error, callback) {
			response.destroy();

			callback(error);
		}
	});

	const decompressStream = isBrotli ? zlib.createBrotliDecompress() : zlib.createUnzip();

	decompressStream.once('error', error => {
		if (isEmpty && !response.readable) {
			finalStream.end();
			return;
		}

		finalStream.destroy(error);
	});

	mimicResponse(response, finalStream);
	response.pipe(checker).pipe(decompressStream).pipe(finalStream);

	return finalStream;
};


/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";


// We define these manually to ensure they're always copied
// even if they would move up the prototype chain
// https://nodejs.org/api/http.html#http_class_http_incomingmessage
const knownProperties = [
	'aborted',
	'complete',
	'headers',
	'httpVersion',
	'httpVersionMinor',
	'httpVersionMajor',
	'method',
	'rawHeaders',
	'rawTrailers',
	'setTimeout',
	'socket',
	'statusCode',
	'statusMessage',
	'trailers',
	'url'
];

module.exports = (fromStream, toStream) => {
	if (toStream._readableState.autoDestroy) {
		throw new Error('The second stream must have the `autoDestroy` option set to `false`');
	}

	const fromProperties = new Set(Object.keys(fromStream).concat(knownProperties));

	const properties = {};

	for (const property of fromProperties) {
		// Don't overwrite existing properties.
		if (property in toStream) {
			continue;
		}

		properties[property] = {
			get() {
				const value = fromStream[property];
				const isFunction = typeof value === 'function';

				return isFunction ? value.bind(fromStream) : value;
			},
			set(value) {
				fromStream[property] = value;
			},
			enumerable: true,
			configurable: false
		};
	}

	Object.defineProperties(toStream, properties);

	fromStream.once('aborted', () => {
		toStream.destroy();

		toStream.emit('aborted');
	});

	fromStream.once('close', () => {
		if (fromStream.complete) {
			if (toStream.readable) {
				toStream.once('end', () => {
					toStream.emit('close');
				});
			} else {
				toStream.emit('close');
			}
		} else {
			toStream.emit('close');
		}
	});

	return toStream;
};


/***/ }),

/***/ 6214:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function isTLSSocket(socket) {
    return socket.encrypted;
}
const deferToConnect = (socket, fn) => {
    let listeners;
    if (typeof fn === 'function') {
        const connect = fn;
        listeners = { connect };
    }
    else {
        listeners = fn;
    }
    const hasConnectListener = typeof listeners.connect === 'function';
    const hasSecureConnectListener = typeof listeners.secureConnect === 'function';
    const hasCloseListener = typeof listeners.close === 'function';
    const onConnect = () => {
        if (hasConnectListener) {
            listeners.connect();
        }
        if (isTLSSocket(socket) && hasSecureConnectListener) {
            if (socket.authorized) {
                listeners.secureConnect();
            }
            else if (!socket.authorizationError) {
                socket.once('secureConnect', listeners.secureConnect);
            }
        }
        if (hasCloseListener) {
            socket.once('close', listeners.close);
        }
    };
    if (socket.writable && !socket.connecting) {
        onConnect();
    }
    else if (socket.connecting) {
        socket.once('connect', onConnect);
    }
    else if (socket.destroyed && hasCloseListener) {
        listeners.close(socket._hadError);
    }
};
exports.default = deferToConnect;
// For CommonJS default export support
module.exports = deferToConnect;
module.exports.default = deferToConnect;


/***/ }),

/***/ 2246:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dotCase = void 0;
var tslib_1 = __nccwpck_require__(1627);
var no_case_1 = __nccwpck_require__(6613);
function dotCase(input, options) {
    if (options === void 0) { options = {}; }
    return no_case_1.noCase(input, tslib_1.__assign({ delimiter: "." }, options));
}
exports.dotCase = dotCase;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1627:
/***/ ((module) => {

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if ( true && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || from);
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});


/***/ }),

/***/ 1205:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var once = __nccwpck_require__(1223);

var noop = function() {};

var isRequest = function(stream) {
	return stream.setHeader && typeof stream.abort === 'function';
};

var isChildProcess = function(stream) {
	return stream.stdio && Array.isArray(stream.stdio) && stream.stdio.length === 3
};

var eos = function(stream, opts, callback) {
	if (typeof opts === 'function') return eos(stream, null, opts);
	if (!opts) opts = {};

	callback = once(callback || noop);

	var ws = stream._writableState;
	var rs = stream._readableState;
	var readable = opts.readable || (opts.readable !== false && stream.readable);
	var writable = opts.writable || (opts.writable !== false && stream.writable);
	var cancelled = false;

	var onlegacyfinish = function() {
		if (!stream.writable) onfinish();
	};

	var onfinish = function() {
		writable = false;
		if (!readable) callback.call(stream);
	};

	var onend = function() {
		readable = false;
		if (!writable) callback.call(stream);
	};

	var onexit = function(exitCode) {
		callback.call(stream, exitCode ? new Error('exited with error code: ' + exitCode) : null);
	};

	var onerror = function(err) {
		callback.call(stream, err);
	};

	var onclose = function() {
		process.nextTick(onclosenexttick);
	};

	var onclosenexttick = function() {
		if (cancelled) return;
		if (readable && !(rs && (rs.ended && !rs.destroyed))) return callback.call(stream, new Error('premature close'));
		if (writable && !(ws && (ws.ended && !ws.destroyed))) return callback.call(stream, new Error('premature close'));
	};

	var onrequest = function() {
		stream.req.on('finish', onfinish);
	};

	if (isRequest(stream)) {
		stream.on('complete', onfinish);
		stream.on('abort', onclose);
		if (stream.req) onrequest();
		else stream.on('request', onrequest);
	} else if (writable && !ws) { // legacy streams
		stream.on('end', onlegacyfinish);
		stream.on('close', onlegacyfinish);
	}

	if (isChildProcess(stream)) stream.on('exit', onexit);

	stream.on('end', onend);
	stream.on('finish', onfinish);
	if (opts.error !== false) stream.on('error', onerror);
	stream.on('close', onclose);

	return function() {
		cancelled = true;
		stream.removeListener('complete', onfinish);
		stream.removeListener('abort', onclose);
		stream.removeListener('request', onrequest);
		if (stream.req) stream.req.removeListener('finish', onfinish);
		stream.removeListener('end', onlegacyfinish);
		stream.removeListener('close', onlegacyfinish);
		stream.removeListener('finish', onfinish);
		stream.removeListener('exit', onexit);
		stream.removeListener('end', onend);
		stream.removeListener('error', onerror);
		stream.removeListener('close', onclose);
	};
};

module.exports = eos;


/***/ }),

/***/ 6457:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const types_1 = __nccwpck_require__(4597);
function createRejection(error, ...beforeErrorGroups) {
    const promise = (async () => {
        if (error instanceof types_1.RequestError) {
            try {
                for (const hooks of beforeErrorGroups) {
                    if (hooks) {
                        for (const hook of hooks) {
                            // eslint-disable-next-line no-await-in-loop
                            error = await hook(error);
                        }
                    }
                }
            }
            catch (error_) {
                error = error_;
            }
        }
        throw error;
    })();
    const returnPromise = () => promise;
    promise.json = returnPromise;
    promise.text = returnPromise;
    promise.buffer = returnPromise;
    promise.on = returnPromise;
    return promise;
}
exports.default = createRejection;


/***/ }),

/***/ 6056:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const events_1 = __nccwpck_require__(8614);
const is_1 = __nccwpck_require__(7678);
const PCancelable = __nccwpck_require__(9072);
const types_1 = __nccwpck_require__(4597);
const parse_body_1 = __nccwpck_require__(8220);
const core_1 = __nccwpck_require__(94);
const proxy_events_1 = __nccwpck_require__(3021);
const get_buffer_1 = __nccwpck_require__(4500);
const is_response_ok_1 = __nccwpck_require__(9298);
const proxiedRequestEvents = [
    'request',
    'response',
    'redirect',
    'uploadProgress',
    'downloadProgress'
];
function asPromise(normalizedOptions) {
    let globalRequest;
    let globalResponse;
    const emitter = new events_1.EventEmitter();
    const promise = new PCancelable((resolve, reject, onCancel) => {
        const makeRequest = (retryCount) => {
            const request = new core_1.default(undefined, normalizedOptions);
            request.retryCount = retryCount;
            request._noPipe = true;
            onCancel(() => request.destroy());
            onCancel.shouldReject = false;
            onCancel(() => reject(new types_1.CancelError(request)));
            globalRequest = request;
            request.once('response', async (response) => {
                var _a;
                response.retryCount = retryCount;
                if (response.request.aborted) {
                    // Canceled while downloading - will throw a `CancelError` or `TimeoutError` error
                    return;
                }
                // Download body
                let rawBody;
                try {
                    rawBody = await get_buffer_1.default(request);
                    response.rawBody = rawBody;
                }
                catch (_b) {
                    // The same error is caught below.
                    // See request.once('error')
                    return;
                }
                if (request._isAboutToError) {
                    return;
                }
                // Parse body
                const contentEncoding = ((_a = response.headers['content-encoding']) !== null && _a !== void 0 ? _a : '').toLowerCase();
                const isCompressed = ['gzip', 'deflate', 'br'].includes(contentEncoding);
                const { options } = request;
                if (isCompressed && !options.decompress) {
                    response.body = rawBody;
                }
                else {
                    try {
                        response.body = parse_body_1.default(response, options.responseType, options.parseJson, options.encoding);
                    }
                    catch (error) {
                        // Fallback to `utf8`
                        response.body = rawBody.toString();
                        if (is_response_ok_1.isResponseOk(response)) {
                            request._beforeError(error);
                            return;
                        }
                    }
                }
                try {
                    for (const [index, hook] of options.hooks.afterResponse.entries()) {
                        // @ts-expect-error TS doesn't notice that CancelableRequest is a Promise
                        // eslint-disable-next-line no-await-in-loop
                        response = await hook(response, async (updatedOptions) => {
                            const typedOptions = core_1.default.normalizeArguments(undefined, {
                                ...updatedOptions,
                                retry: {
                                    calculateDelay: () => 0
                                },
                                throwHttpErrors: false,
                                resolveBodyOnly: false
                            }, options);
                            // Remove any further hooks for that request, because we'll call them anyway.
                            // The loop continues. We don't want duplicates (asPromise recursion).
                            typedOptions.hooks.afterResponse = typedOptions.hooks.afterResponse.slice(0, index);
                            for (const hook of typedOptions.hooks.beforeRetry) {
                                // eslint-disable-next-line no-await-in-loop
                                await hook(typedOptions);
                            }
                            const promise = asPromise(typedOptions);
                            onCancel(() => {
                                promise.catch(() => { });
                                promise.cancel();
                            });
                            return promise;
                        });
                    }
                }
                catch (error) {
                    request._beforeError(new types_1.RequestError(error.message, error, request));
                    return;
                }
                if (!is_response_ok_1.isResponseOk(response)) {
                    request._beforeError(new types_1.HTTPError(response));
                    return;
                }
                globalResponse = response;
                resolve(request.options.resolveBodyOnly ? response.body : response);
            });
            const onError = (error) => {
                if (promise.isCanceled) {
                    return;
                }
                const { options } = request;
                if (error instanceof types_1.HTTPError && !options.throwHttpErrors) {
                    const { response } = error;
                    resolve(request.options.resolveBodyOnly ? response.body : response);
                    return;
                }
                reject(error);
            };
            request.once('error', onError);
            const previousBody = request.options.body;
            request.once('retry', (newRetryCount, error) => {
                var _a, _b;
                if (previousBody === ((_a = error.request) === null || _a === void 0 ? void 0 : _a.options.body) && is_1.default.nodeStream((_b = error.request) === null || _b === void 0 ? void 0 : _b.options.body)) {
                    onError(error);
                    return;
                }
                makeRequest(newRetryCount);
            });
            proxy_events_1.default(request, emitter, proxiedRequestEvents);
        };
        makeRequest(0);
    });
    promise.on = (event, fn) => {
        emitter.on(event, fn);
        return promise;
    };
    const shortcut = (responseType) => {
        const newPromise = (async () => {
            // Wait until downloading has ended
            await promise;
            const { options } = globalResponse.request;
            return parse_body_1.default(globalResponse, responseType, options.parseJson, options.encoding);
        })();
        Object.defineProperties(newPromise, Object.getOwnPropertyDescriptors(promise));
        return newPromise;
    };
    promise.json = () => {
        const { headers } = globalRequest.options;
        if (!globalRequest.writableFinished && headers.accept === undefined) {
            headers.accept = 'application/json';
        }
        return shortcut('json');
    };
    promise.buffer = () => shortcut('buffer');
    promise.text = () => shortcut('text');
    return promise;
}
exports.default = asPromise;
__exportStar(__nccwpck_require__(4597), exports);


/***/ }),

/***/ 1048:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const is_1 = __nccwpck_require__(7678);
const normalizeArguments = (options, defaults) => {
    if (is_1.default.null_(options.encoding)) {
        throw new TypeError('To get a Buffer, set `options.responseType` to `buffer` instead');
    }
    is_1.assert.any([is_1.default.string, is_1.default.undefined], options.encoding);
    is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.resolveBodyOnly);
    is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.methodRewriting);
    is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.isStream);
    is_1.assert.any([is_1.default.string, is_1.default.undefined], options.responseType);
    // `options.responseType`
    if (options.responseType === undefined) {
        options.responseType = 'text';
    }
    // `options.retry`
    const { retry } = options;
    if (defaults) {
        options.retry = { ...defaults.retry };
    }
    else {
        options.retry = {
            calculateDelay: retryObject => retryObject.computedValue,
            limit: 0,
            methods: [],
            statusCodes: [],
            errorCodes: [],
            maxRetryAfter: undefined
        };
    }
    if (is_1.default.object(retry)) {
        options.retry = {
            ...options.retry,
            ...retry
        };
        options.retry.methods = [...new Set(options.retry.methods.map(method => method.toUpperCase()))];
        options.retry.statusCodes = [...new Set(options.retry.statusCodes)];
        options.retry.errorCodes = [...new Set(options.retry.errorCodes)];
    }
    else if (is_1.default.number(retry)) {
        options.retry.limit = retry;
    }
    if (is_1.default.undefined(options.retry.maxRetryAfter)) {
        options.retry.maxRetryAfter = Math.min(
        // TypeScript is not smart enough to handle `.filter(x => is.number(x))`.
        // eslint-disable-next-line unicorn/no-fn-reference-in-iterator
        ...[options.timeout.request, options.timeout.connect].filter(is_1.default.number));
    }
    // `options.pagination`
    if (is_1.default.object(options.pagination)) {
        if (defaults) {
            options.pagination = {
                ...defaults.pagination,
                ...options.pagination
            };
        }
        const { pagination } = options;
        if (!is_1.default.function_(pagination.transform)) {
            throw new Error('`options.pagination.transform` must be implemented');
        }
        if (!is_1.default.function_(pagination.shouldContinue)) {
            throw new Error('`options.pagination.shouldContinue` must be implemented');
        }
        if (!is_1.default.function_(pagination.filter)) {
            throw new TypeError('`options.pagination.filter` must be implemented');
        }
        if (!is_1.default.function_(pagination.paginate)) {
            throw new Error('`options.pagination.paginate` must be implemented');
        }
    }
    // JSON mode
    if (options.responseType === 'json' && options.headers.accept === undefined) {
        options.headers.accept = 'application/json';
    }
    return options;
};
exports.default = normalizeArguments;


/***/ }),

/***/ 8220:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const types_1 = __nccwpck_require__(4597);
const parseBody = (response, responseType, parseJson, encoding) => {
    const { rawBody } = response;
    try {
        if (responseType === 'text') {
            return rawBody.toString(encoding);
        }
        if (responseType === 'json') {
            return rawBody.length === 0 ? '' : parseJson(rawBody.toString());
        }
        if (responseType === 'buffer') {
            return rawBody;
        }
        throw new types_1.ParseError({
            message: `Unknown body type '${responseType}'`,
            name: 'Error'
        }, response);
    }
    catch (error) {
        throw new types_1.ParseError(error, response);
    }
};
exports.default = parseBody;


/***/ }),

/***/ 4597:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CancelError = exports.ParseError = void 0;
const core_1 = __nccwpck_require__(94);
/**
An error to be thrown when server response code is 2xx, and parsing body fails.
Includes a `response` property.
*/
class ParseError extends core_1.RequestError {
    constructor(error, response) {
        const { options } = response.request;
        super(`${error.message} in "${options.url.toString()}"`, error, response.request);
        this.name = 'ParseError';
    }
}
exports.ParseError = ParseError;
/**
An error to be thrown when the request is aborted with `.cancel()`.
*/
class CancelError extends core_1.RequestError {
    constructor(request) {
        super('Promise was canceled', {}, request);
        this.name = 'CancelError';
    }
    get isCanceled() {
        return true;
    }
}
exports.CancelError = CancelError;
__exportStar(__nccwpck_require__(94), exports);


/***/ }),

/***/ 3462:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.retryAfterStatusCodes = void 0;
exports.retryAfterStatusCodes = new Set([413, 429, 503]);
const calculateRetryDelay = ({ attemptCount, retryOptions, error, retryAfter }) => {
    if (attemptCount > retryOptions.limit) {
        return 0;
    }
    const hasMethod = retryOptions.methods.includes(error.options.method);
    const hasErrorCode = retryOptions.errorCodes.includes(error.code);
    const hasStatusCode = error.response && retryOptions.statusCodes.includes(error.response.statusCode);
    if (!hasMethod || (!hasErrorCode && !hasStatusCode)) {
        return 0;
    }
    if (error.response) {
        if (retryAfter) {
            if (retryOptions.maxRetryAfter === undefined || retryAfter > retryOptions.maxRetryAfter) {
                return 0;
            }
            return retryAfter;
        }
        if (error.response.statusCode === 413) {
            return 0;
        }
    }
    const noise = Math.random() * 100;
    return ((2 ** (attemptCount - 1)) * 1000) + noise;
};
exports.default = calculateRetryDelay;


/***/ }),

/***/ 94:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnsupportedProtocolError = exports.ReadError = exports.TimeoutError = exports.UploadError = exports.CacheError = exports.HTTPError = exports.MaxRedirectsError = exports.RequestError = exports.setNonEnumerableProperties = exports.knownHookEvents = exports.withoutBody = exports.kIsNormalizedAlready = void 0;
const util_1 = __nccwpck_require__(1669);
const stream_1 = __nccwpck_require__(2413);
const fs_1 = __nccwpck_require__(5747);
const url_1 = __nccwpck_require__(8835);
const http = __nccwpck_require__(8605);
const http_1 = __nccwpck_require__(8605);
const https = __nccwpck_require__(7211);
const http_timer_1 = __nccwpck_require__(8097);
const cacheable_lookup_1 = __nccwpck_require__(2286);
const CacheableRequest = __nccwpck_require__(8116);
const decompressResponse = __nccwpck_require__(2391);
// @ts-expect-error Missing types
const http2wrapper = __nccwpck_require__(4645);
const lowercaseKeys = __nccwpck_require__(9662);
const is_1 = __nccwpck_require__(7678);
const get_body_size_1 = __nccwpck_require__(4564);
const is_form_data_1 = __nccwpck_require__(40);
const proxy_events_1 = __nccwpck_require__(3021);
const timed_out_1 = __nccwpck_require__(2454);
const url_to_options_1 = __nccwpck_require__(8026);
const options_to_url_1 = __nccwpck_require__(9219);
const weakable_map_1 = __nccwpck_require__(7288);
const get_buffer_1 = __nccwpck_require__(4500);
const dns_ip_version_1 = __nccwpck_require__(4993);
const is_response_ok_1 = __nccwpck_require__(9298);
const deprecation_warning_1 = __nccwpck_require__(397);
const normalize_arguments_1 = __nccwpck_require__(1048);
const calculate_retry_delay_1 = __nccwpck_require__(3462);
let globalDnsCache;
const kRequest = Symbol('request');
const kResponse = Symbol('response');
const kResponseSize = Symbol('responseSize');
const kDownloadedSize = Symbol('downloadedSize');
const kBodySize = Symbol('bodySize');
const kUploadedSize = Symbol('uploadedSize');
const kServerResponsesPiped = Symbol('serverResponsesPiped');
const kUnproxyEvents = Symbol('unproxyEvents');
const kIsFromCache = Symbol('isFromCache');
const kCancelTimeouts = Symbol('cancelTimeouts');
const kStartedReading = Symbol('startedReading');
const kStopReading = Symbol('stopReading');
const kTriggerRead = Symbol('triggerRead');
const kBody = Symbol('body');
const kJobs = Symbol('jobs');
const kOriginalResponse = Symbol('originalResponse');
const kRetryTimeout = Symbol('retryTimeout');
exports.kIsNormalizedAlready = Symbol('isNormalizedAlready');
const supportsBrotli = is_1.default.string(process.versions.brotli);
exports.withoutBody = new Set(['GET', 'HEAD']);
exports.knownHookEvents = [
    'init',
    'beforeRequest',
    'beforeRedirect',
    'beforeError',
    'beforeRetry',
    // Promise-Only
    'afterResponse'
];
function validateSearchParameters(searchParameters) {
    // eslint-disable-next-line guard-for-in
    for (const key in searchParameters) {
        const value = searchParameters[key];
        if (!is_1.default.string(value) && !is_1.default.number(value) && !is_1.default.boolean(value) && !is_1.default.null_(value) && !is_1.default.undefined(value)) {
            throw new TypeError(`The \`searchParams\` value '${String(value)}' must be a string, number, boolean or null`);
        }
    }
}
function isClientRequest(clientRequest) {
    return is_1.default.object(clientRequest) && !('statusCode' in clientRequest);
}
const cacheableStore = new weakable_map_1.default();
const waitForOpenFile = async (file) => new Promise((resolve, reject) => {
    const onError = (error) => {
        reject(error);
    };
    // Node.js 12 has incomplete types
    if (!file.pending) {
        resolve();
    }
    file.once('error', onError);
    file.once('ready', () => {
        file.off('error', onError);
        resolve();
    });
});
const redirectCodes = new Set([300, 301, 302, 303, 304, 307, 308]);
const nonEnumerableProperties = [
    'context',
    'body',
    'json',
    'form'
];
exports.setNonEnumerableProperties = (sources, to) => {
    // Non enumerable properties shall not be merged
    const properties = {};
    for (const source of sources) {
        if (!source) {
            continue;
        }
        for (const name of nonEnumerableProperties) {
            if (!(name in source)) {
                continue;
            }
            properties[name] = {
                writable: true,
                configurable: true,
                enumerable: false,
                // @ts-expect-error TS doesn't see the check above
                value: source[name]
            };
        }
    }
    Object.defineProperties(to, properties);
};
/**
An error to be thrown when a request fails.
Contains a `code` property with error class code, like `ECONNREFUSED`.
*/
class RequestError extends Error {
    constructor(message, error, self) {
        var _a;
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.name = 'RequestError';
        this.code = error.code;
        if (self instanceof Request) {
            Object.defineProperty(this, 'request', {
                enumerable: false,
                value: self
            });
            Object.defineProperty(this, 'response', {
                enumerable: false,
                value: self[kResponse]
            });
            Object.defineProperty(this, 'options', {
                // This fails because of TS 3.7.2 useDefineForClassFields
                // Ref: https://github.com/microsoft/TypeScript/issues/34972
                enumerable: false,
                value: self.options
            });
        }
        else {
            Object.defineProperty(this, 'options', {
                // This fails because of TS 3.7.2 useDefineForClassFields
                // Ref: https://github.com/microsoft/TypeScript/issues/34972
                enumerable: false,
                value: self
            });
        }
        this.timings = (_a = this.request) === null || _a === void 0 ? void 0 : _a.timings;
        // Recover the original stacktrace
        if (is_1.default.string(error.stack) && is_1.default.string(this.stack)) {
            const indexOfMessage = this.stack.indexOf(this.message) + this.message.length;
            const thisStackTrace = this.stack.slice(indexOfMessage).split('\n').reverse();
            const errorStackTrace = error.stack.slice(error.stack.indexOf(error.message) + error.message.length).split('\n').reverse();
            // Remove duplicated traces
            while (errorStackTrace.length !== 0 && errorStackTrace[0] === thisStackTrace[0]) {
                thisStackTrace.shift();
            }
            this.stack = `${this.stack.slice(0, indexOfMessage)}${thisStackTrace.reverse().join('\n')}${errorStackTrace.reverse().join('\n')}`;
        }
    }
}
exports.RequestError = RequestError;
/**
An error to be thrown when the server redirects you more than ten times.
Includes a `response` property.
*/
class MaxRedirectsError extends RequestError {
    constructor(request) {
        super(`Redirected ${request.options.maxRedirects} times. Aborting.`, {}, request);
        this.name = 'MaxRedirectsError';
    }
}
exports.MaxRedirectsError = MaxRedirectsError;
/**
An error to be thrown when the server response code is not 2xx nor 3xx if `options.followRedirect` is `true`, but always except for 304.
Includes a `response` property.
*/
class HTTPError extends RequestError {
    constructor(response) {
        super(`Response code ${response.statusCode} (${response.statusMessage})`, {}, response.request);
        this.name = 'HTTPError';
    }
}
exports.HTTPError = HTTPError;
/**
An error to be thrown when a cache method fails.
For example, if the database goes down or there's a filesystem error.
*/
class CacheError extends RequestError {
    constructor(error, request) {
        super(error.message, error, request);
        this.name = 'CacheError';
    }
}
exports.CacheError = CacheError;
/**
An error to be thrown when the request body is a stream and an error occurs while reading from that stream.
*/
class UploadError extends RequestError {
    constructor(error, request) {
        super(error.message, error, request);
        this.name = 'UploadError';
    }
}
exports.UploadError = UploadError;
/**
An error to be thrown when the request is aborted due to a timeout.
Includes an `event` and `timings` property.
*/
class TimeoutError extends RequestError {
    constructor(error, timings, request) {
        super(error.message, error, request);
        this.name = 'TimeoutError';
        this.event = error.event;
        this.timings = timings;
    }
}
exports.TimeoutError = TimeoutError;
/**
An error to be thrown when reading from response stream fails.
*/
class ReadError extends RequestError {
    constructor(error, request) {
        super(error.message, error, request);
        this.name = 'ReadError';
    }
}
exports.ReadError = ReadError;
/**
An error to be thrown when given an unsupported protocol.
*/
class UnsupportedProtocolError extends RequestError {
    constructor(options) {
        super(`Unsupported protocol "${options.url.protocol}"`, {}, options);
        this.name = 'UnsupportedProtocolError';
    }
}
exports.UnsupportedProtocolError = UnsupportedProtocolError;
const proxiedRequestEvents = [
    'socket',
    'connect',
    'continue',
    'information',
    'upgrade',
    'timeout'
];
class Request extends stream_1.Duplex {
    constructor(url, options = {}, defaults) {
        super({
            // This must be false, to enable throwing after destroy
            // It is used for retry logic in Promise API
            autoDestroy: false,
            // It needs to be zero because we're just proxying the data to another stream
            highWaterMark: 0
        });
        this[kDownloadedSize] = 0;
        this[kUploadedSize] = 0;
        this.requestInitialized = false;
        this[kServerResponsesPiped] = new Set();
        this.redirects = [];
        this[kStopReading] = false;
        this[kTriggerRead] = false;
        this[kJobs] = [];
        this.retryCount = 0;
        // TODO: Remove this when targeting Node.js >= 12
        this._progressCallbacks = [];
        const unlockWrite = () => this._unlockWrite();
        const lockWrite = () => this._lockWrite();
        this.on('pipe', (source) => {
            source.prependListener('data', unlockWrite);
            source.on('data', lockWrite);
            source.prependListener('end', unlockWrite);
            source.on('end', lockWrite);
        });
        this.on('unpipe', (source) => {
            source.off('data', unlockWrite);
            source.off('data', lockWrite);
            source.off('end', unlockWrite);
            source.off('end', lockWrite);
        });
        this.on('pipe', source => {
            if (source instanceof http_1.IncomingMessage) {
                this.options.headers = {
                    ...source.headers,
                    ...this.options.headers
                };
            }
        });
        const { json, body, form } = options;
        if (json || body || form) {
            this._lockWrite();
        }
        if (exports.kIsNormalizedAlready in options) {
            this.options = options;
        }
        else {
            try {
                // @ts-expect-error Common TypeScript bug saying that `this.constructor` is not accessible
                this.options = this.constructor.normalizeArguments(url, options, defaults);
            }
            catch (error) {
                // TODO: Move this to `_destroy()`
                if (is_1.default.nodeStream(options.body)) {
                    options.body.destroy();
                }
                this.destroy(error);
                return;
            }
        }
        (async () => {
            var _a;
            try {
                if (this.options.body instanceof fs_1.ReadStream) {
                    await waitForOpenFile(this.options.body);
                }
                const { url: normalizedURL } = this.options;
                if (!normalizedURL) {
                    throw new TypeError('Missing `url` property');
                }
                this.requestUrl = normalizedURL.toString();
                decodeURI(this.requestUrl);
                await this._finalizeBody();
                await this._makeRequest();
                if (this.destroyed) {
                    (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.destroy();
                    return;
                }
                // Queued writes etc.
                for (const job of this[kJobs]) {
                    job();
                }
                // Prevent memory leak
                this[kJobs].length = 0;
                this.requestInitialized = true;
            }
            catch (error) {
                if (error instanceof RequestError) {
                    this._beforeError(error);
                    return;
                }
                // This is a workaround for https://github.com/nodejs/node/issues/33335
                if (!this.destroyed) {
                    this.destroy(error);
                }
            }
        })();
    }
    static normalizeArguments(url, options, defaults) {
        var _a, _b, _c, _d, _e;
        const rawOptions = options;
        if (is_1.default.object(url) && !is_1.default.urlInstance(url)) {
            options = { ...defaults, ...url, ...options };
        }
        else {
            if (url && options && options.url !== undefined) {
                throw new TypeError('The `url` option is mutually exclusive with the `input` argument');
            }
            options = { ...defaults, ...options };
            if (url !== undefined) {
                options.url = url;
            }
            if (is_1.default.urlInstance(options.url)) {
                options.url = new url_1.URL(options.url.toString());
            }
        }
        // TODO: Deprecate URL options in Got 12.
        // Support extend-specific options
        if (options.cache === false) {
            options.cache = undefined;
        }
        if (options.dnsCache === false) {
            options.dnsCache = undefined;
        }
        // Nice type assertions
        is_1.assert.any([is_1.default.string, is_1.default.undefined], options.method);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.headers);
        is_1.assert.any([is_1.default.string, is_1.default.urlInstance, is_1.default.undefined], options.prefixUrl);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.cookieJar);
        is_1.assert.any([is_1.default.object, is_1.default.string, is_1.default.undefined], options.searchParams);
        is_1.assert.any([is_1.default.object, is_1.default.string, is_1.default.undefined], options.cache);
        is_1.assert.any([is_1.default.object, is_1.default.number, is_1.default.undefined], options.timeout);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.context);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.hooks);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.decompress);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.ignoreInvalidCookies);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.followRedirect);
        is_1.assert.any([is_1.default.number, is_1.default.undefined], options.maxRedirects);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.throwHttpErrors);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.http2);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.allowGetBody);
        is_1.assert.any([is_1.default.string, is_1.default.undefined], options.localAddress);
        is_1.assert.any([dns_ip_version_1.isDnsLookupIpVersion, is_1.default.undefined], options.dnsLookupIpVersion);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.https);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.rejectUnauthorized);
        if (options.https) {
            is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.https.rejectUnauthorized);
            is_1.assert.any([is_1.default.function_, is_1.default.undefined], options.https.checkServerIdentity);
            is_1.assert.any([is_1.default.string, is_1.default.object, is_1.default.array, is_1.default.undefined], options.https.certificateAuthority);
            is_1.assert.any([is_1.default.string, is_1.default.object, is_1.default.array, is_1.default.undefined], options.https.key);
            is_1.assert.any([is_1.default.string, is_1.default.object, is_1.default.array, is_1.default.undefined], options.https.certificate);
            is_1.assert.any([is_1.default.string, is_1.default.undefined], options.https.passphrase);
            is_1.assert.any([is_1.default.string, is_1.default.buffer, is_1.default.array, is_1.default.undefined], options.https.pfx);
        }
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.cacheOptions);
        // `options.method`
        if (is_1.default.string(options.method)) {
            options.method = options.method.toUpperCase();
        }
        else {
            options.method = 'GET';
        }
        // `options.headers`
        if (options.headers === (defaults === null || defaults === void 0 ? void 0 : defaults.headers)) {
            options.headers = { ...options.headers };
        }
        else {
            options.headers = lowercaseKeys({ ...(defaults === null || defaults === void 0 ? void 0 : defaults.headers), ...options.headers });
        }
        // Disallow legacy `url.Url`
        if ('slashes' in options) {
            throw new TypeError('The legacy `url.Url` has been deprecated. Use `URL` instead.');
        }
        // `options.auth`
        if ('auth' in options) {
            throw new TypeError('Parameter `auth` is deprecated. Use `username` / `password` instead.');
        }
        // `options.searchParams`
        if ('searchParams' in options) {
            if (options.searchParams && options.searchParams !== (defaults === null || defaults === void 0 ? void 0 : defaults.searchParams)) {
                let searchParameters;
                if (is_1.default.string(options.searchParams) || (options.searchParams instanceof url_1.URLSearchParams)) {
                    searchParameters = new url_1.URLSearchParams(options.searchParams);
                }
                else {
                    validateSearchParameters(options.searchParams);
                    searchParameters = new url_1.URLSearchParams();
                    // eslint-disable-next-line guard-for-in
                    for (const key in options.searchParams) {
                        const value = options.searchParams[key];
                        if (value === null) {
                            searchParameters.append(key, '');
                        }
                        else if (value !== undefined) {
                            searchParameters.append(key, value);
                        }
                    }
                }
                // `normalizeArguments()` is also used to merge options
                (_a = defaults === null || defaults === void 0 ? void 0 : defaults.searchParams) === null || _a === void 0 ? void 0 : _a.forEach((value, key) => {
                    // Only use default if one isn't already defined
                    if (!searchParameters.has(key)) {
                        searchParameters.append(key, value);
                    }
                });
                options.searchParams = searchParameters;
            }
        }
        // `options.username` & `options.password`
        options.username = (_b = options.username) !== null && _b !== void 0 ? _b : '';
        options.password = (_c = options.password) !== null && _c !== void 0 ? _c : '';
        // `options.prefixUrl` & `options.url`
        if (is_1.default.undefined(options.prefixUrl)) {
            options.prefixUrl = (_d = defaults === null || defaults === void 0 ? void 0 : defaults.prefixUrl) !== null && _d !== void 0 ? _d : '';
        }
        else {
            options.prefixUrl = options.prefixUrl.toString();
            if (options.prefixUrl !== '' && !options.prefixUrl.endsWith('/')) {
                options.prefixUrl += '/';
            }
        }
        if (is_1.default.string(options.url)) {
            if (options.url.startsWith('/')) {
                throw new Error('`input` must not start with a slash when using `prefixUrl`');
            }
            options.url = options_to_url_1.default(options.prefixUrl + options.url, options);
        }
        else if ((is_1.default.undefined(options.url) && options.prefixUrl !== '') || options.protocol) {
            options.url = options_to_url_1.default(options.prefixUrl, options);
        }
        if (options.url) {
            if ('port' in options) {
                delete options.port;
            }
            // Make it possible to change `options.prefixUrl`
            let { prefixUrl } = options;
            Object.defineProperty(options, 'prefixUrl', {
                set: (value) => {
                    const url = options.url;
                    if (!url.href.startsWith(value)) {
                        throw new Error(`Cannot change \`prefixUrl\` from ${prefixUrl} to ${value}: ${url.href}`);
                    }
                    options.url = new url_1.URL(value + url.href.slice(prefixUrl.length));
                    prefixUrl = value;
                },
                get: () => prefixUrl
            });
            // Support UNIX sockets
            let { protocol } = options.url;
            if (protocol === 'unix:') {
                protocol = 'http:';
                options.url = new url_1.URL(`http://unix${options.url.pathname}${options.url.search}`);
            }
            // Set search params
            if (options.searchParams) {
                // eslint-disable-next-line @typescript-eslint/no-base-to-string
                options.url.search = options.searchParams.toString();
            }
            // Protocol check
            if (protocol !== 'http:' && protocol !== 'https:') {
                throw new UnsupportedProtocolError(options);
            }
            // Update `username`
            if (options.username === '') {
                options.username = options.url.username;
            }
            else {
                options.url.username = options.username;
            }
            // Update `password`
            if (options.password === '') {
                options.password = options.url.password;
            }
            else {
                options.url.password = options.password;
            }
        }
        // `options.cookieJar`
        const { cookieJar } = options;
        if (cookieJar) {
            let { setCookie, getCookieString } = cookieJar;
            is_1.assert.function_(setCookie);
            is_1.assert.function_(getCookieString);
            /* istanbul ignore next: Horrible `tough-cookie` v3 check */
            if (setCookie.length === 4 && getCookieString.length === 0) {
                setCookie = util_1.promisify(setCookie.bind(options.cookieJar));
                getCookieString = util_1.promisify(getCookieString.bind(options.cookieJar));
                options.cookieJar = {
                    setCookie,
                    getCookieString: getCookieString
                };
            }
        }
        // `options.cache`
        const { cache } = options;
        if (cache) {
            if (!cacheableStore.has(cache)) {
                cacheableStore.set(cache, new CacheableRequest(((requestOptions, handler) => {
                    const result = requestOptions[kRequest](requestOptions, handler);
                    // TODO: remove this when `cacheable-request` supports async request functions.
                    if (is_1.default.promise(result)) {
                        // @ts-expect-error
                        // We only need to implement the error handler in order to support HTTP2 caching.
                        // The result will be a promise anyway.
                        result.once = (event, handler) => {
                            if (event === 'error') {
                                result.catch(handler);
                            }
                            else if (event === 'abort') {
                                // The empty catch is needed here in case when
                                // it rejects before it's `await`ed in `_makeRequest`.
                                (async () => {
                                    try {
                                        const request = (await result);
                                        request.once('abort', handler);
                                    }
                                    catch (_a) { }
                                })();
                            }
                            else {
                                /* istanbul ignore next: safety check */
                                throw new Error(`Unknown HTTP2 promise event: ${event}`);
                            }
                            return result;
                        };
                    }
                    return result;
                }), cache));
            }
        }
        // `options.cacheOptions`
        options.cacheOptions = { ...options.cacheOptions };
        // `options.dnsCache`
        if (options.dnsCache === true) {
            if (!globalDnsCache) {
                globalDnsCache = new cacheable_lookup_1.default();
            }
            options.dnsCache = globalDnsCache;
        }
        else if (!is_1.default.undefined(options.dnsCache) && !options.dnsCache.lookup) {
            throw new TypeError(`Parameter \`dnsCache\` must be a CacheableLookup instance or a boolean, got ${is_1.default(options.dnsCache)}`);
        }
        // `options.timeout`
        if (is_1.default.number(options.timeout)) {
            options.timeout = { request: options.timeout };
        }
        else if (defaults && options.timeout !== defaults.timeout) {
            options.timeout = {
                ...defaults.timeout,
                ...options.timeout
            };
        }
        else {
            options.timeout = { ...options.timeout };
        }
        // `options.context`
        if (!options.context) {
            options.context = {};
        }
        // `options.hooks`
        const areHooksDefault = options.hooks === (defaults === null || defaults === void 0 ? void 0 : defaults.hooks);
        options.hooks = { ...options.hooks };
        for (const event of exports.knownHookEvents) {
            if (event in options.hooks) {
                if (is_1.default.array(options.hooks[event])) {
                    // See https://github.com/microsoft/TypeScript/issues/31445#issuecomment-576929044
                    options.hooks[event] = [...options.hooks[event]];
                }
                else {
                    throw new TypeError(`Parameter \`${event}\` must be an Array, got ${is_1.default(options.hooks[event])}`);
                }
            }
            else {
                options.hooks[event] = [];
            }
        }
        if (defaults && !areHooksDefault) {
            for (const event of exports.knownHookEvents) {
                const defaultHooks = defaults.hooks[event];
                if (defaultHooks.length > 0) {
                    // See https://github.com/microsoft/TypeScript/issues/31445#issuecomment-576929044
                    options.hooks[event] = [
                        ...defaults.hooks[event],
                        ...options.hooks[event]
                    ];
                }
            }
        }
        // DNS options
        if ('family' in options) {
            deprecation_warning_1.default('"options.family" was never documented, please use "options.dnsLookupIpVersion"');
        }
        // HTTPS options
        if (defaults === null || defaults === void 0 ? void 0 : defaults.https) {
            options.https = { ...defaults.https, ...options.https };
        }
        if ('rejectUnauthorized' in options) {
            deprecation_warning_1.default('"options.rejectUnauthorized" is now deprecated, please use "options.https.rejectUnauthorized"');
        }
        if ('checkServerIdentity' in options) {
            deprecation_warning_1.default('"options.checkServerIdentity" was never documented, please use "options.https.checkServerIdentity"');
        }
        if ('ca' in options) {
            deprecation_warning_1.default('"options.ca" was never documented, please use "options.https.certificateAuthority"');
        }
        if ('key' in options) {
            deprecation_warning_1.default('"options.key" was never documented, please use "options.https.key"');
        }
        if ('cert' in options) {
            deprecation_warning_1.default('"options.cert" was never documented, please use "options.https.certificate"');
        }
        if ('passphrase' in options) {
            deprecation_warning_1.default('"options.passphrase" was never documented, please use "options.https.passphrase"');
        }
        if ('pfx' in options) {
            deprecation_warning_1.default('"options.pfx" was never documented, please use "options.https.pfx"');
        }
        // Other options
        if ('followRedirects' in options) {
            throw new TypeError('The `followRedirects` option does not exist. Use `followRedirect` instead.');
        }
        if (options.agent) {
            for (const key in options.agent) {
                if (key !== 'http' && key !== 'https' && key !== 'http2') {
                    throw new TypeError(`Expected the \`options.agent\` properties to be \`http\`, \`https\` or \`http2\`, got \`${key}\``);
                }
            }
        }
        options.maxRedirects = (_e = options.maxRedirects) !== null && _e !== void 0 ? _e : 0;
        // Set non-enumerable properties
        exports.setNonEnumerableProperties([defaults, rawOptions], options);
        return normalize_arguments_1.default(options, defaults);
    }
    _lockWrite() {
        const onLockedWrite = () => {
            throw new TypeError('The payload has been already provided');
        };
        this.write = onLockedWrite;
        this.end = onLockedWrite;
    }
    _unlockWrite() {
        this.write = super.write;
        this.end = super.end;
    }
    async _finalizeBody() {
        const { options } = this;
        const { headers } = options;
        const isForm = !is_1.default.undefined(options.form);
        const isJSON = !is_1.default.undefined(options.json);
        const isBody = !is_1.default.undefined(options.body);
        const hasPayload = isForm || isJSON || isBody;
        const cannotHaveBody = exports.withoutBody.has(options.method) && !(options.method === 'GET' && options.allowGetBody);
        this._cannotHaveBody = cannotHaveBody;
        if (hasPayload) {
            if (cannotHaveBody) {
                throw new TypeError(`The \`${options.method}\` method cannot be used with a body`);
            }
            if ([isBody, isForm, isJSON].filter(isTrue => isTrue).length > 1) {
                throw new TypeError('The `body`, `json` and `form` options are mutually exclusive');
            }
            if (isBody &&
                !(options.body instanceof stream_1.Readable) &&
                !is_1.default.string(options.body) &&
                !is_1.default.buffer(options.body) &&
                !is_form_data_1.default(options.body)) {
                throw new TypeError('The `body` option must be a stream.Readable, string or Buffer');
            }
            if (isForm && !is_1.default.object(options.form)) {
                throw new TypeError('The `form` option must be an Object');
            }
            {
                // Serialize body
                const noContentType = !is_1.default.string(headers['content-type']);
                if (isBody) {
                    // Special case for https://github.com/form-data/form-data
                    if (is_form_data_1.default(options.body) && noContentType) {
                        headers['content-type'] = `multipart/form-data; boundary=${options.body.getBoundary()}`;
                    }
                    this[kBody] = options.body;
                }
                else if (isForm) {
                    if (noContentType) {
                        headers['content-type'] = 'application/x-www-form-urlencoded';
                    }
                    this[kBody] = (new url_1.URLSearchParams(options.form)).toString();
                }
                else {
                    if (noContentType) {
                        headers['content-type'] = 'application/json';
                    }
                    this[kBody] = options.stringifyJson(options.json);
                }
                const uploadBodySize = await get_body_size_1.default(this[kBody], options.headers);
                // See https://tools.ietf.org/html/rfc7230#section-3.3.2
                // A user agent SHOULD send a Content-Length in a request message when
                // no Transfer-Encoding is sent and the request method defines a meaning
                // for an enclosed payload body.  For example, a Content-Length header
                // field is normally sent in a POST request even when the value is 0
                // (indicating an empty payload body).  A user agent SHOULD NOT send a
                // Content-Length header field when the request message does not contain
                // a payload body and the method semantics do not anticipate such a
                // body.
                if (is_1.default.undefined(headers['content-length']) && is_1.default.undefined(headers['transfer-encoding'])) {
                    if (!cannotHaveBody && !is_1.default.undefined(uploadBodySize)) {
                        headers['content-length'] = String(uploadBodySize);
                    }
                }
            }
        }
        else if (cannotHaveBody) {
            this._lockWrite();
        }
        else {
            this._unlockWrite();
        }
        this[kBodySize] = Number(headers['content-length']) || undefined;
    }
    async _onResponseBase(response) {
        const { options } = this;
        const { url } = options;
        this[kOriginalResponse] = response;
        if (options.decompress) {
            response = decompressResponse(response);
        }
        const statusCode = response.statusCode;
        const typedResponse = response;
        typedResponse.statusMessage = typedResponse.statusMessage ? typedResponse.statusMessage : http.STATUS_CODES[statusCode];
        typedResponse.url = options.url.toString();
        typedResponse.requestUrl = this.requestUrl;
        typedResponse.redirectUrls = this.redirects;
        typedResponse.request = this;
        typedResponse.isFromCache = response.fromCache || false;
        typedResponse.ip = this.ip;
        typedResponse.retryCount = this.retryCount;
        this[kIsFromCache] = typedResponse.isFromCache;
        this[kResponseSize] = Number(response.headers['content-length']) || undefined;
        this[kResponse] = response;
        response.once('end', () => {
            this[kResponseSize] = this[kDownloadedSize];
            this.emit('downloadProgress', this.downloadProgress);
        });
        response.once('error', (error) => {
            // Force clean-up, because some packages don't do this.
            // TODO: Fix decompress-response
            response.destroy();
            this._beforeError(new ReadError(error, this));
        });
        response.once('aborted', () => {
            this._beforeError(new ReadError({
                name: 'Error',
                message: 'The server aborted pending request',
                code: 'ECONNRESET'
            }, this));
        });
        this.emit('downloadProgress', this.downloadProgress);
        const rawCookies = response.headers['set-cookie'];
        if (is_1.default.object(options.cookieJar) && rawCookies) {
            let promises = rawCookies.map(async (rawCookie) => options.cookieJar.setCookie(rawCookie, url.toString()));
            if (options.ignoreInvalidCookies) {
                promises = promises.map(async (p) => p.catch(() => { }));
            }
            try {
                await Promise.all(promises);
            }
            catch (error) {
                this._beforeError(error);
                return;
            }
        }
        if (options.followRedirect && response.headers.location && redirectCodes.has(statusCode)) {
            // We're being redirected, we don't care about the response.
            // It'd be best to abort the request, but we can't because
            // we would have to sacrifice the TCP connection. We don't want that.
            response.resume();
            if (this[kRequest]) {
                this[kCancelTimeouts]();
                // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                delete this[kRequest];
                this[kUnproxyEvents]();
            }
            const shouldBeGet = statusCode === 303 && options.method !== 'GET' && options.method !== 'HEAD';
            if (shouldBeGet || !options.methodRewriting) {
                // Server responded with "see other", indicating that the resource exists at another location,
                // and the client should request it from that location via GET or HEAD.
                options.method = 'GET';
                if ('body' in options) {
                    delete options.body;
                }
                if ('json' in options) {
                    delete options.json;
                }
                if ('form' in options) {
                    delete options.form;
                }
                this[kBody] = undefined;
                delete options.headers['content-length'];
            }
            if (this.redirects.length >= options.maxRedirects) {
                this._beforeError(new MaxRedirectsError(this));
                return;
            }
            try {
                // Do not remove. See https://github.com/sindresorhus/got/pull/214
                const redirectBuffer = Buffer.from(response.headers.location, 'binary').toString();
                // Handles invalid URLs. See https://github.com/sindresorhus/got/issues/604
                const redirectUrl = new url_1.URL(redirectBuffer, url);
                const redirectString = redirectUrl.toString();
                decodeURI(redirectString);
                // Redirecting to a different site, clear sensitive data.
                if (redirectUrl.hostname !== url.hostname || redirectUrl.port !== url.port) {
                    if ('host' in options.headers) {
                        delete options.headers.host;
                    }
                    if ('cookie' in options.headers) {
                        delete options.headers.cookie;
                    }
                    if ('authorization' in options.headers) {
                        delete options.headers.authorization;
                    }
                    if (options.username || options.password) {
                        options.username = '';
                        options.password = '';
                    }
                }
                else {
                    redirectUrl.username = options.username;
                    redirectUrl.password = options.password;
                }
                this.redirects.push(redirectString);
                options.url = redirectUrl;
                for (const hook of options.hooks.beforeRedirect) {
                    // eslint-disable-next-line no-await-in-loop
                    await hook(options, typedResponse);
                }
                this.emit('redirect', typedResponse, options);
                await this._makeRequest();
            }
            catch (error) {
                this._beforeError(error);
                return;
            }
            return;
        }
        if (options.isStream && options.throwHttpErrors && !is_response_ok_1.isResponseOk(typedResponse)) {
            this._beforeError(new HTTPError(typedResponse));
            return;
        }
        response.on('readable', () => {
            if (this[kTriggerRead]) {
                this._read();
            }
        });
        this.on('resume', () => {
            response.resume();
        });
        this.on('pause', () => {
            response.pause();
        });
        response.once('end', () => {
            this.push(null);
        });
        this.emit('response', response);
        for (const destination of this[kServerResponsesPiped]) {
            if (destination.headersSent) {
                continue;
            }
            // eslint-disable-next-line guard-for-in
            for (const key in response.headers) {
                const isAllowed = options.decompress ? key !== 'content-encoding' : true;
                const value = response.headers[key];
                if (isAllowed) {
                    destination.setHeader(key, value);
                }
            }
            destination.statusCode = statusCode;
        }
    }
    async _onResponse(response) {
        try {
            await this._onResponseBase(response);
        }
        catch (error) {
            /* istanbul ignore next: better safe than sorry */
            this._beforeError(error);
        }
    }
    _onRequest(request) {
        const { options } = this;
        const { timeout, url } = options;
        http_timer_1.default(request);
        this[kCancelTimeouts] = timed_out_1.default(request, timeout, url);
        const responseEventName = options.cache ? 'cacheableResponse' : 'response';
        request.once(responseEventName, (response) => {
            void this._onResponse(response);
        });
        request.once('error', (error) => {
            var _a;
            // Force clean-up, because some packages (e.g. nock) don't do this.
            request.destroy();
            // Node.js <= 12.18.2 mistakenly emits the response `end` first.
            (_a = request.res) === null || _a === void 0 ? void 0 : _a.removeAllListeners('end');
            error = error instanceof timed_out_1.TimeoutError ? new TimeoutError(error, this.timings, this) : new RequestError(error.message, error, this);
            this._beforeError(error);
        });
        this[kUnproxyEvents] = proxy_events_1.default(request, this, proxiedRequestEvents);
        this[kRequest] = request;
        this.emit('uploadProgress', this.uploadProgress);
        // Send body
        const body = this[kBody];
        const currentRequest = this.redirects.length === 0 ? this : request;
        if (is_1.default.nodeStream(body)) {
            body.pipe(currentRequest);
            body.once('error', (error) => {
                this._beforeError(new UploadError(error, this));
            });
        }
        else {
            this._unlockWrite();
            if (!is_1.default.undefined(body)) {
                this._writeRequest(body, undefined, () => { });
                currentRequest.end();
                this._lockWrite();
            }
            else if (this._cannotHaveBody || this._noPipe) {
                currentRequest.end();
                this._lockWrite();
            }
        }
        this.emit('request', request);
    }
    async _createCacheableRequest(url, options) {
        return new Promise((resolve, reject) => {
            // TODO: Remove `utils/url-to-options.ts` when `cacheable-request` is fixed
            Object.assign(options, url_to_options_1.default(url));
            // `http-cache-semantics` checks this
            // TODO: Fix this ignore.
            // @ts-expect-error
            delete options.url;
            let request;
            // This is ugly
            const cacheRequest = cacheableStore.get(options.cache)(options, async (response) => {
                // TODO: Fix `cacheable-response`
                response._readableState.autoDestroy = false;
                if (request) {
                    (await request).emit('cacheableResponse', response);
                }
                resolve(response);
            });
            // Restore options
            options.url = url;
            cacheRequest.once('error', reject);
            cacheRequest.once('request', async (requestOrPromise) => {
                request = requestOrPromise;
                resolve(request);
            });
        });
    }
    async _makeRequest() {
        var _a, _b, _c, _d, _e;
        const { options } = this;
        const { headers } = options;
        for (const key in headers) {
            if (is_1.default.undefined(headers[key])) {
                // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                delete headers[key];
            }
            else if (is_1.default.null_(headers[key])) {
                throw new TypeError(`Use \`undefined\` instead of \`null\` to delete the \`${key}\` header`);
            }
        }
        if (options.decompress && is_1.default.undefined(headers['accept-encoding'])) {
            headers['accept-encoding'] = supportsBrotli ? 'gzip, deflate, br' : 'gzip, deflate';
        }
        // Set cookies
        if (options.cookieJar) {
            const cookieString = await options.cookieJar.getCookieString(options.url.toString());
            if (is_1.default.nonEmptyString(cookieString)) {
                options.headers.cookie = cookieString;
            }
        }
        for (const hook of options.hooks.beforeRequest) {
            // eslint-disable-next-line no-await-in-loop
            const result = await hook(options);
            if (!is_1.default.undefined(result)) {
                // @ts-expect-error Skip the type mismatch to support abstract responses
                options.request = () => result;
                break;
            }
        }
        if (options.body && this[kBody] !== options.body) {
            this[kBody] = options.body;
        }
        const { agent, request, timeout, url } = options;
        if (options.dnsCache && !('lookup' in options)) {
            options.lookup = options.dnsCache.lookup;
        }
        // UNIX sockets
        if (url.hostname === 'unix') {
            const matches = /(?<socketPath>.+?):(?<path>.+)/.exec(`${url.pathname}${url.search}`);
            if (matches === null || matches === void 0 ? void 0 : matches.groups) {
                const { socketPath, path } = matches.groups;
                Object.assign(options, {
                    socketPath,
                    path,
                    host: ''
                });
            }
        }
        const isHttps = url.protocol === 'https:';
        // Fallback function
        let fallbackFn;
        if (options.http2) {
            fallbackFn = http2wrapper.auto;
        }
        else {
            fallbackFn = isHttps ? https.request : http.request;
        }
        const realFn = (_a = options.request) !== null && _a !== void 0 ? _a : fallbackFn;
        // Cache support
        const fn = options.cache ? this._createCacheableRequest : realFn;
        // Pass an agent directly when HTTP2 is disabled
        if (agent && !options.http2) {
            options.agent = agent[isHttps ? 'https' : 'http'];
        }
        // Prepare plain HTTP request options
        options[kRequest] = realFn;
        delete options.request;
        // TODO: Fix this ignore.
        // @ts-expect-error
        delete options.timeout;
        const requestOptions = options;
        requestOptions.shared = (_b = options.cacheOptions) === null || _b === void 0 ? void 0 : _b.shared;
        requestOptions.cacheHeuristic = (_c = options.cacheOptions) === null || _c === void 0 ? void 0 : _c.cacheHeuristic;
        requestOptions.immutableMinTimeToLive = (_d = options.cacheOptions) === null || _d === void 0 ? void 0 : _d.immutableMinTimeToLive;
        requestOptions.ignoreCargoCult = (_e = options.cacheOptions) === null || _e === void 0 ? void 0 : _e.ignoreCargoCult;
        // If `dnsLookupIpVersion` is not present do not override `family`
        if (options.dnsLookupIpVersion !== undefined) {
            try {
                requestOptions.family = dns_ip_version_1.dnsLookupIpVersionToFamily(options.dnsLookupIpVersion);
            }
            catch (_f) {
                throw new Error('Invalid `dnsLookupIpVersion` option value');
            }
        }
        // HTTPS options remapping
        if (options.https) {
            if ('rejectUnauthorized' in options.https) {
                requestOptions.rejectUnauthorized = options.https.rejectUnauthorized;
            }
            if (options.https.checkServerIdentity) {
                requestOptions.checkServerIdentity = options.https.checkServerIdentity;
            }
            if (options.https.certificateAuthority) {
                requestOptions.ca = options.https.certificateAuthority;
            }
            if (options.https.certificate) {
                requestOptions.cert = options.https.certificate;
            }
            if (options.https.key) {
                requestOptions.key = options.https.key;
            }
            if (options.https.passphrase) {
                requestOptions.passphrase = options.https.passphrase;
            }
            if (options.https.pfx) {
                requestOptions.pfx = options.https.pfx;
            }
        }
        try {
            let requestOrResponse = await fn(url, requestOptions);
            if (is_1.default.undefined(requestOrResponse)) {
                requestOrResponse = fallbackFn(url, requestOptions);
            }
            // Restore options
            options.request = request;
            options.timeout = timeout;
            options.agent = agent;
            // HTTPS options restore
            if (options.https) {
                if ('rejectUnauthorized' in options.https) {
                    delete requestOptions.rejectUnauthorized;
                }
                if (options.https.checkServerIdentity) {
                    // @ts-expect-error - This one will be removed when we remove the alias.
                    delete requestOptions.checkServerIdentity;
                }
                if (options.https.certificateAuthority) {
                    delete requestOptions.ca;
                }
                if (options.https.certificate) {
                    delete requestOptions.cert;
                }
                if (options.https.key) {
                    delete requestOptions.key;
                }
                if (options.https.passphrase) {
                    delete requestOptions.passphrase;
                }
                if (options.https.pfx) {
                    delete requestOptions.pfx;
                }
            }
            if (isClientRequest(requestOrResponse)) {
                this._onRequest(requestOrResponse);
                // Emit the response after the stream has been ended
            }
            else if (this.writable) {
                this.once('finish', () => {
                    void this._onResponse(requestOrResponse);
                });
                this._unlockWrite();
                this.end();
                this._lockWrite();
            }
            else {
                void this._onResponse(requestOrResponse);
            }
        }
        catch (error) {
            if (error instanceof CacheableRequest.CacheError) {
                throw new CacheError(error, this);
            }
            throw new RequestError(error.message, error, this);
        }
    }
    async _error(error) {
        try {
            for (const hook of this.options.hooks.beforeError) {
                // eslint-disable-next-line no-await-in-loop
                error = await hook(error);
            }
        }
        catch (error_) {
            error = new RequestError(error_.message, error_, this);
        }
        this.destroy(error);
    }
    _beforeError(error) {
        if (this[kStopReading]) {
            return;
        }
        const { options } = this;
        const retryCount = this.retryCount + 1;
        this[kStopReading] = true;
        if (!(error instanceof RequestError)) {
            error = new RequestError(error.message, error, this);
        }
        const typedError = error;
        const { response } = typedError;
        void (async () => {
            if (response && !response.body) {
                response.setEncoding(this._readableState.encoding);
                try {
                    response.rawBody = await get_buffer_1.default(response);
                    response.body = response.rawBody.toString();
                }
                catch (_a) { }
            }
            if (this.listenerCount('retry') !== 0) {
                let backoff;
                try {
                    let retryAfter;
                    if (response && 'retry-after' in response.headers) {
                        retryAfter = Number(response.headers['retry-after']);
                        if (Number.isNaN(retryAfter)) {
                            retryAfter = Date.parse(response.headers['retry-after']) - Date.now();
                            if (retryAfter <= 0) {
                                retryAfter = 1;
                            }
                        }
                        else {
                            retryAfter *= 1000;
                        }
                    }
                    backoff = await options.retry.calculateDelay({
                        attemptCount: retryCount,
                        retryOptions: options.retry,
                        error: typedError,
                        retryAfter,
                        computedValue: calculate_retry_delay_1.default({
                            attemptCount: retryCount,
                            retryOptions: options.retry,
                            error: typedError,
                            retryAfter,
                            computedValue: 0
                        })
                    });
                }
                catch (error_) {
                    void this._error(new RequestError(error_.message, error_, this));
                    return;
                }
                if (backoff) {
                    const retry = async () => {
                        try {
                            for (const hook of this.options.hooks.beforeRetry) {
                                // eslint-disable-next-line no-await-in-loop
                                await hook(this.options, typedError, retryCount);
                            }
                        }
                        catch (error_) {
                            void this._error(new RequestError(error_.message, error, this));
                            return;
                        }
                        // Something forced us to abort the retry
                        if (this.destroyed) {
                            return;
                        }
                        this.destroy();
                        this.emit('retry', retryCount, error);
                    };
                    this[kRetryTimeout] = setTimeout(retry, backoff);
                    return;
                }
            }
            void this._error(typedError);
        })();
    }
    _read() {
        this[kTriggerRead] = true;
        const response = this[kResponse];
        if (response && !this[kStopReading]) {
            // We cannot put this in the `if` above
            // because `.read()` also triggers the `end` event
            if (response.readableLength) {
                this[kTriggerRead] = false;
            }
            let data;
            while ((data = response.read()) !== null) {
                this[kDownloadedSize] += data.length;
                this[kStartedReading] = true;
                const progress = this.downloadProgress;
                if (progress.percent < 1) {
                    this.emit('downloadProgress', progress);
                }
                this.push(data);
            }
        }
    }
    // Node.js 12 has incorrect types, so the encoding must be a string
    _write(chunk, encoding, callback) {
        const write = () => {
            this._writeRequest(chunk, encoding, callback);
        };
        if (this.requestInitialized) {
            write();
        }
        else {
            this[kJobs].push(write);
        }
    }
    _writeRequest(chunk, encoding, callback) {
        if (this[kRequest].destroyed) {
            // Probably the `ClientRequest` instance will throw
            return;
        }
        this._progressCallbacks.push(() => {
            this[kUploadedSize] += Buffer.byteLength(chunk, encoding);
            const progress = this.uploadProgress;
            if (progress.percent < 1) {
                this.emit('uploadProgress', progress);
            }
        });
        // TODO: What happens if it's from cache? Then this[kRequest] won't be defined.
        this[kRequest].write(chunk, encoding, (error) => {
            if (!error && this._progressCallbacks.length > 0) {
                this._progressCallbacks.shift()();
            }
            callback(error);
        });
    }
    _final(callback) {
        const endRequest = () => {
            // FIX: Node.js 10 calls the write callback AFTER the end callback!
            while (this._progressCallbacks.length !== 0) {
                this._progressCallbacks.shift()();
            }
            // We need to check if `this[kRequest]` is present,
            // because it isn't when we use cache.
            if (!(kRequest in this)) {
                callback();
                return;
            }
            if (this[kRequest].destroyed) {
                callback();
                return;
            }
            this[kRequest].end((error) => {
                if (!error) {
                    this[kBodySize] = this[kUploadedSize];
                    this.emit('uploadProgress', this.uploadProgress);
                    this[kRequest].emit('upload-complete');
                }
                callback(error);
            });
        };
        if (this.requestInitialized) {
            endRequest();
        }
        else {
            this[kJobs].push(endRequest);
        }
    }
    _destroy(error, callback) {
        var _a;
        this[kStopReading] = true;
        // Prevent further retries
        clearTimeout(this[kRetryTimeout]);
        if (kRequest in this) {
            this[kCancelTimeouts]();
            // TODO: Remove the next `if` when these get fixed:
            // - https://github.com/nodejs/node/issues/32851
            if (!((_a = this[kResponse]) === null || _a === void 0 ? void 0 : _a.complete)) {
                this[kRequest].destroy();
            }
        }
        if (error !== null && !is_1.default.undefined(error) && !(error instanceof RequestError)) {
            error = new RequestError(error.message, error, this);
        }
        callback(error);
    }
    get _isAboutToError() {
        return this[kStopReading];
    }
    /**
    The remote IP address.
    */
    get ip() {
        var _a;
        return (_a = this.socket) === null || _a === void 0 ? void 0 : _a.remoteAddress;
    }
    /**
    Indicates whether the request has been aborted or not.
    */
    get aborted() {
        var _a, _b, _c;
        return ((_b = (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.destroyed) !== null && _b !== void 0 ? _b : this.destroyed) && !((_c = this[kOriginalResponse]) === null || _c === void 0 ? void 0 : _c.complete);
    }
    get socket() {
        var _a, _b;
        return (_b = (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.socket) !== null && _b !== void 0 ? _b : undefined;
    }
    /**
    Progress event for downloading (receiving a response).
    */
    get downloadProgress() {
        let percent;
        if (this[kResponseSize]) {
            percent = this[kDownloadedSize] / this[kResponseSize];
        }
        else if (this[kResponseSize] === this[kDownloadedSize]) {
            percent = 1;
        }
        else {
            percent = 0;
        }
        return {
            percent,
            transferred: this[kDownloadedSize],
            total: this[kResponseSize]
        };
    }
    /**
    Progress event for uploading (sending a request).
    */
    get uploadProgress() {
        let percent;
        if (this[kBodySize]) {
            percent = this[kUploadedSize] / this[kBodySize];
        }
        else if (this[kBodySize] === this[kUploadedSize]) {
            percent = 1;
        }
        else {
            percent = 0;
        }
        return {
            percent,
            transferred: this[kUploadedSize],
            total: this[kBodySize]
        };
    }
    /**
    The object contains the following properties:

    - `start` - Time when the request started.
    - `socket` - Time when a socket was assigned to the request.
    - `lookup` - Time when the DNS lookup finished.
    - `connect` - Time when the socket successfully connected.
    - `secureConnect` - Time when the socket securely connected.
    - `upload` - Time when the request finished uploading.
    - `response` - Time when the request fired `response` event.
    - `end` - Time when the response fired `end` event.
    - `error` - Time when the request fired `error` event.
    - `abort` - Time when the request fired `abort` event.
    - `phases`
        - `wait` - `timings.socket - timings.start`
        - `dns` - `timings.lookup - timings.socket`
        - `tcp` - `timings.connect - timings.lookup`
        - `tls` - `timings.secureConnect - timings.connect`
        - `request` - `timings.upload - (timings.secureConnect || timings.connect)`
        - `firstByte` - `timings.response - timings.upload`
        - `download` - `timings.end - timings.response`
        - `total` - `(timings.end || timings.error || timings.abort) - timings.start`

    If something has not been measured yet, it will be `undefined`.

    __Note__: The time is a `number` representing the milliseconds elapsed since the UNIX epoch.
    */
    get timings() {
        var _a;
        return (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.timings;
    }
    /**
    Whether the response was retrieved from the cache.
    */
    get isFromCache() {
        return this[kIsFromCache];
    }
    pipe(destination, options) {
        if (this[kStartedReading]) {
            throw new Error('Failed to pipe. The response has been emitted already.');
        }
        if (destination instanceof http_1.ServerResponse) {
            this[kServerResponsesPiped].add(destination);
        }
        return super.pipe(destination, options);
    }
    unpipe(destination) {
        if (destination instanceof http_1.ServerResponse) {
            this[kServerResponsesPiped].delete(destination);
        }
        super.unpipe(destination);
        return this;
    }
}
exports.default = Request;


/***/ }),

/***/ 4993:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dnsLookupIpVersionToFamily = exports.isDnsLookupIpVersion = void 0;
const conversionTable = {
    auto: 0,
    ipv4: 4,
    ipv6: 6
};
exports.isDnsLookupIpVersion = (value) => {
    return value in conversionTable;
};
exports.dnsLookupIpVersionToFamily = (dnsLookupIpVersion) => {
    if (exports.isDnsLookupIpVersion(dnsLookupIpVersion)) {
        return conversionTable[dnsLookupIpVersion];
    }
    throw new Error('Invalid DNS lookup IP version');
};


/***/ }),

/***/ 4564:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const fs_1 = __nccwpck_require__(5747);
const util_1 = __nccwpck_require__(1669);
const is_1 = __nccwpck_require__(7678);
const is_form_data_1 = __nccwpck_require__(40);
const statAsync = util_1.promisify(fs_1.stat);
exports.default = async (body, headers) => {
    if (headers && 'content-length' in headers) {
        return Number(headers['content-length']);
    }
    if (!body) {
        return 0;
    }
    if (is_1.default.string(body)) {
        return Buffer.byteLength(body);
    }
    if (is_1.default.buffer(body)) {
        return body.length;
    }
    if (is_form_data_1.default(body)) {
        return util_1.promisify(body.getLength.bind(body))();
    }
    if (body instanceof fs_1.ReadStream) {
        const { size } = await statAsync(body.path);
        if (size === 0) {
            return undefined;
        }
        return size;
    }
    return undefined;
};


/***/ }),

/***/ 4500:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// TODO: Update https://github.com/sindresorhus/get-stream
const getBuffer = async (stream) => {
    const chunks = [];
    let length = 0;
    for await (const chunk of stream) {
        chunks.push(chunk);
        length += Buffer.byteLength(chunk);
    }
    if (Buffer.isBuffer(chunks[0])) {
        return Buffer.concat(chunks, length);
    }
    return Buffer.from(chunks.join(''));
};
exports.default = getBuffer;


/***/ }),

/***/ 40:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const is_1 = __nccwpck_require__(7678);
exports.default = (body) => is_1.default.nodeStream(body) && is_1.default.function_(body.getBoundary);


/***/ }),

/***/ 9298:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isResponseOk = void 0;
exports.isResponseOk = (response) => {
    const { statusCode } = response;
    const limitStatusCode = response.request.options.followRedirect ? 299 : 399;
    return (statusCode >= 200 && statusCode <= limitStatusCode) || statusCode === 304;
};


/***/ }),

/***/ 9219:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/* istanbul ignore file: deprecated */
const url_1 = __nccwpck_require__(8835);
const keys = [
    'protocol',
    'host',
    'hostname',
    'port',
    'pathname',
    'search'
];
exports.default = (origin, options) => {
    var _a, _b;
    if (options.path) {
        if (options.pathname) {
            throw new TypeError('Parameters `path` and `pathname` are mutually exclusive.');
        }
        if (options.search) {
            throw new TypeError('Parameters `path` and `search` are mutually exclusive.');
        }
        if (options.searchParams) {
            throw new TypeError('Parameters `path` and `searchParams` are mutually exclusive.');
        }
    }
    if (options.search && options.searchParams) {
        throw new TypeError('Parameters `search` and `searchParams` are mutually exclusive.');
    }
    if (!origin) {
        if (!options.protocol) {
            throw new TypeError('No URL protocol specified');
        }
        origin = `${options.protocol}//${(_b = (_a = options.hostname) !== null && _a !== void 0 ? _a : options.host) !== null && _b !== void 0 ? _b : ''}`;
    }
    const url = new url_1.URL(origin);
    if (options.path) {
        const searchIndex = options.path.indexOf('?');
        if (searchIndex === -1) {
            options.pathname = options.path;
        }
        else {
            options.pathname = options.path.slice(0, searchIndex);
            options.search = options.path.slice(searchIndex + 1);
        }
        delete options.path;
    }
    for (const key of keys) {
        if (options[key]) {
            url[key] = options[key].toString();
        }
    }
    return url;
};


/***/ }),

/***/ 3021:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function default_1(from, to, events) {
    const fns = {};
    for (const event of events) {
        fns[event] = (...args) => {
            to.emit(event, ...args);
        };
        from.on(event, fns[event]);
    }
    return () => {
        for (const event of events) {
            from.off(event, fns[event]);
        }
    };
}
exports.default = default_1;


/***/ }),

/***/ 2454:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TimeoutError = void 0;
const net = __nccwpck_require__(1631);
const unhandle_1 = __nccwpck_require__(1593);
const reentry = Symbol('reentry');
const noop = () => { };
class TimeoutError extends Error {
    constructor(threshold, event) {
        super(`Timeout awaiting '${event}' for ${threshold}ms`);
        this.event = event;
        this.name = 'TimeoutError';
        this.code = 'ETIMEDOUT';
    }
}
exports.TimeoutError = TimeoutError;
exports.default = (request, delays, options) => {
    if (reentry in request) {
        return noop;
    }
    request[reentry] = true;
    const cancelers = [];
    const { once, unhandleAll } = unhandle_1.default();
    const addTimeout = (delay, callback, event) => {
        var _a;
        const timeout = setTimeout(callback, delay, delay, event);
        (_a = timeout.unref) === null || _a === void 0 ? void 0 : _a.call(timeout);
        const cancel = () => {
            clearTimeout(timeout);
        };
        cancelers.push(cancel);
        return cancel;
    };
    const { host, hostname } = options;
    const timeoutHandler = (delay, event) => {
        request.destroy(new TimeoutError(delay, event));
    };
    const cancelTimeouts = () => {
        for (const cancel of cancelers) {
            cancel();
        }
        unhandleAll();
    };
    request.once('error', error => {
        cancelTimeouts();
        // Save original behavior
        /* istanbul ignore next */
        if (request.listenerCount('error') === 0) {
            throw error;
        }
    });
    request.once('close', cancelTimeouts);
    once(request, 'response', (response) => {
        once(response, 'end', cancelTimeouts);
    });
    if (typeof delays.request !== 'undefined') {
        addTimeout(delays.request, timeoutHandler, 'request');
    }
    if (typeof delays.socket !== 'undefined') {
        const socketTimeoutHandler = () => {
            timeoutHandler(delays.socket, 'socket');
        };
        request.setTimeout(delays.socket, socketTimeoutHandler);
        // `request.setTimeout(0)` causes a memory leak.
        // We can just remove the listener and forget about the timer - it's unreffed.
        // See https://github.com/sindresorhus/got/issues/690
        cancelers.push(() => {
            request.removeListener('timeout', socketTimeoutHandler);
        });
    }
    once(request, 'socket', (socket) => {
        var _a;
        const { socketPath } = request;
        /* istanbul ignore next: hard to test */
        if (socket.connecting) {
            const hasPath = Boolean(socketPath !== null && socketPath !== void 0 ? socketPath : net.isIP((_a = hostname !== null && hostname !== void 0 ? hostname : host) !== null && _a !== void 0 ? _a : '') !== 0);
            if (typeof delays.lookup !== 'undefined' && !hasPath && typeof socket.address().address === 'undefined') {
                const cancelTimeout = addTimeout(delays.lookup, timeoutHandler, 'lookup');
                once(socket, 'lookup', cancelTimeout);
            }
            if (typeof delays.connect !== 'undefined') {
                const timeConnect = () => addTimeout(delays.connect, timeoutHandler, 'connect');
                if (hasPath) {
                    once(socket, 'connect', timeConnect());
                }
                else {
                    once(socket, 'lookup', (error) => {
                        if (error === null) {
                            once(socket, 'connect', timeConnect());
                        }
                    });
                }
            }
            if (typeof delays.secureConnect !== 'undefined' && options.protocol === 'https:') {
                once(socket, 'connect', () => {
                    const cancelTimeout = addTimeout(delays.secureConnect, timeoutHandler, 'secureConnect');
                    once(socket, 'secureConnect', cancelTimeout);
                });
            }
        }
        if (typeof delays.send !== 'undefined') {
            const timeRequest = () => addTimeout(delays.send, timeoutHandler, 'send');
            /* istanbul ignore next: hard to test */
            if (socket.connecting) {
                once(socket, 'connect', () => {
                    once(request, 'upload-complete', timeRequest());
                });
            }
            else {
                once(request, 'upload-complete', timeRequest());
            }
        }
    });
    if (typeof delays.response !== 'undefined') {
        once(request, 'upload-complete', () => {
            const cancelTimeout = addTimeout(delays.response, timeoutHandler, 'response');
            once(request, 'response', cancelTimeout);
        });
    }
    return cancelTimeouts;
};


/***/ }),

/***/ 1593:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// When attaching listeners, it's very easy to forget about them.
// Especially if you do error handling and set timeouts.
// So instead of checking if it's proper to throw an error on every timeout ever,
// use this simple tool which will remove all listeners you have attached.
exports.default = () => {
    const handlers = [];
    return {
        once(origin, event, fn) {
            origin.once(event, fn);
            handlers.push({ origin, event, fn });
        },
        unhandleAll() {
            for (const handler of handlers) {
                const { origin, event, fn } = handler;
                origin.removeListener(event, fn);
            }
            handlers.length = 0;
        }
    };
};


/***/ }),

/***/ 8026:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const is_1 = __nccwpck_require__(7678);
exports.default = (url) => {
    // Cast to URL
    url = url;
    const options = {
        protocol: url.protocol,
        hostname: is_1.default.string(url.hostname) && url.hostname.startsWith('[') ? url.hostname.slice(1, -1) : url.hostname,
        host: url.host,
        hash: url.hash,
        search: url.search,
        pathname: url.pathname,
        href: url.href,
        path: `${url.pathname || ''}${url.search || ''}`
    };
    if (is_1.default.string(url.port) && url.port.length > 0) {
        options.port = Number(url.port);
    }
    if (url.username || url.password) {
        options.auth = `${url.username || ''}:${url.password || ''}`;
    }
    return options;
};


/***/ }),

/***/ 7288:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class WeakableMap {
    constructor() {
        this.weakMap = new WeakMap();
        this.map = new Map();
    }
    set(key, value) {
        if (typeof key === 'object') {
            this.weakMap.set(key, value);
        }
        else {
            this.map.set(key, value);
        }
    }
    get(key) {
        if (typeof key === 'object') {
            return this.weakMap.get(key);
        }
        return this.map.get(key);
    }
    has(key) {
        if (typeof key === 'object') {
            return this.weakMap.has(key);
        }
        return this.map.has(key);
    }
}
exports.default = WeakableMap;


/***/ }),

/***/ 4337:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultHandler = void 0;
const is_1 = __nccwpck_require__(7678);
const as_promise_1 = __nccwpck_require__(6056);
const create_rejection_1 = __nccwpck_require__(6457);
const core_1 = __nccwpck_require__(94);
const deep_freeze_1 = __nccwpck_require__(285);
const errors = {
    RequestError: as_promise_1.RequestError,
    CacheError: as_promise_1.CacheError,
    ReadError: as_promise_1.ReadError,
    HTTPError: as_promise_1.HTTPError,
    MaxRedirectsError: as_promise_1.MaxRedirectsError,
    TimeoutError: as_promise_1.TimeoutError,
    ParseError: as_promise_1.ParseError,
    CancelError: as_promise_1.CancelError,
    UnsupportedProtocolError: as_promise_1.UnsupportedProtocolError,
    UploadError: as_promise_1.UploadError
};
// The `delay` package weighs 10KB (!)
const delay = async (ms) => new Promise(resolve => {
    setTimeout(resolve, ms);
});
const { normalizeArguments } = core_1.default;
const mergeOptions = (...sources) => {
    let mergedOptions;
    for (const source of sources) {
        mergedOptions = normalizeArguments(undefined, source, mergedOptions);
    }
    return mergedOptions;
};
const getPromiseOrStream = (options) => options.isStream ? new core_1.default(undefined, options) : as_promise_1.default(options);
const isGotInstance = (value) => ('defaults' in value && 'options' in value.defaults);
const aliases = [
    'get',
    'post',
    'put',
    'patch',
    'head',
    'delete'
];
exports.defaultHandler = (options, next) => next(options);
const callInitHooks = (hooks, options) => {
    if (hooks) {
        for (const hook of hooks) {
            hook(options);
        }
    }
};
const create = (defaults) => {
    // Proxy properties from next handlers
    defaults._rawHandlers = defaults.handlers;
    defaults.handlers = defaults.handlers.map(fn => ((options, next) => {
        // This will be assigned by assigning result
        let root;
        const result = fn(options, newOptions => {
            root = next(newOptions);
            return root;
        });
        if (result !== root && !options.isStream && root) {
            const typedResult = result;
            const { then: promiseThen, catch: promiseCatch, finally: promiseFianlly } = typedResult;
            Object.setPrototypeOf(typedResult, Object.getPrototypeOf(root));
            Object.defineProperties(typedResult, Object.getOwnPropertyDescriptors(root));
            // These should point to the new promise
            // eslint-disable-next-line promise/prefer-await-to-then
            typedResult.then = promiseThen;
            typedResult.catch = promiseCatch;
            typedResult.finally = promiseFianlly;
        }
        return result;
    }));
    // Got interface
    const got = ((url, options = {}, _defaults) => {
        var _a, _b;
        let iteration = 0;
        const iterateHandlers = (newOptions) => {
            return defaults.handlers[iteration++](newOptions, iteration === defaults.handlers.length ? getPromiseOrStream : iterateHandlers);
        };
        // TODO: Remove this in Got 12.
        if (is_1.default.plainObject(url)) {
            const mergedOptions = {
                ...url,
                ...options
            };
            core_1.setNonEnumerableProperties([url, options], mergedOptions);
            options = mergedOptions;
            url = undefined;
        }
        try {
            // Call `init` hooks
            let initHookError;
            try {
                callInitHooks(defaults.options.hooks.init, options);
                callInitHooks((_a = options.hooks) === null || _a === void 0 ? void 0 : _a.init, options);
            }
            catch (error) {
                initHookError = error;
            }
            // Normalize options & call handlers
            const normalizedOptions = normalizeArguments(url, options, _defaults !== null && _defaults !== void 0 ? _defaults : defaults.options);
            normalizedOptions[core_1.kIsNormalizedAlready] = true;
            if (initHookError) {
                throw new as_promise_1.RequestError(initHookError.message, initHookError, normalizedOptions);
            }
            return iterateHandlers(normalizedOptions);
        }
        catch (error) {
            if (options.isStream) {
                throw error;
            }
            else {
                return create_rejection_1.default(error, defaults.options.hooks.beforeError, (_b = options.hooks) === null || _b === void 0 ? void 0 : _b.beforeError);
            }
        }
    });
    got.extend = (...instancesOrOptions) => {
        const optionsArray = [defaults.options];
        let handlers = [...defaults._rawHandlers];
        let isMutableDefaults;
        for (const value of instancesOrOptions) {
            if (isGotInstance(value)) {
                optionsArray.push(value.defaults.options);
                handlers.push(...value.defaults._rawHandlers);
                isMutableDefaults = value.defaults.mutableDefaults;
            }
            else {
                optionsArray.push(value);
                if ('handlers' in value) {
                    handlers.push(...value.handlers);
                }
                isMutableDefaults = value.mutableDefaults;
            }
        }
        handlers = handlers.filter(handler => handler !== exports.defaultHandler);
        if (handlers.length === 0) {
            handlers.push(exports.defaultHandler);
        }
        return create({
            options: mergeOptions(...optionsArray),
            handlers,
            mutableDefaults: Boolean(isMutableDefaults)
        });
    };
    // Pagination
    const paginateEach = (async function* (url, options) {
        // TODO: Remove this `@ts-expect-error` when upgrading to TypeScript 4.
        // Error: Argument of type 'Merge<Options, PaginationOptions<T, R>> | undefined' is not assignable to parameter of type 'Options | undefined'.
        // @ts-expect-error
        let normalizedOptions = normalizeArguments(url, options, defaults.options);
        normalizedOptions.resolveBodyOnly = false;
        const pagination = normalizedOptions.pagination;
        if (!is_1.default.object(pagination)) {
            throw new TypeError('`options.pagination` must be implemented');
        }
        const all = [];
        let { countLimit } = pagination;
        let numberOfRequests = 0;
        while (numberOfRequests < pagination.requestLimit) {
            if (numberOfRequests !== 0) {
                // eslint-disable-next-line no-await-in-loop
                await delay(pagination.backoff);
            }
            // @ts-expect-error FIXME!
            // TODO: Throw when result is not an instance of Response
            // eslint-disable-next-line no-await-in-loop
            const result = (await got(undefined, undefined, normalizedOptions));
            // eslint-disable-next-line no-await-in-loop
            const parsed = await pagination.transform(result);
            const current = [];
            for (const item of parsed) {
                if (pagination.filter(item, all, current)) {
                    if (!pagination.shouldContinue(item, all, current)) {
                        return;
                    }
                    yield item;
                    if (pagination.stackAllItems) {
                        all.push(item);
                    }
                    current.push(item);
                    if (--countLimit <= 0) {
                        return;
                    }
                }
            }
            const optionsToMerge = pagination.paginate(result, all, current);
            if (optionsToMerge === false) {
                return;
            }
            if (optionsToMerge === result.request.options) {
                normalizedOptions = result.request.options;
            }
            else if (optionsToMerge !== undefined) {
                normalizedOptions = normalizeArguments(undefined, optionsToMerge, normalizedOptions);
            }
            numberOfRequests++;
        }
    });
    got.paginate = paginateEach;
    got.paginate.all = (async (url, options) => {
        const results = [];
        for await (const item of paginateEach(url, options)) {
            results.push(item);
        }
        return results;
    });
    // For those who like very descriptive names
    got.paginate.each = paginateEach;
    // Stream API
    got.stream = ((url, options) => got(url, { ...options, isStream: true }));
    // Shortcuts
    for (const method of aliases) {
        got[method] = ((url, options) => got(url, { ...options, method }));
        got.stream[method] = ((url, options) => {
            return got(url, { ...options, method, isStream: true });
        });
    }
    Object.assign(got, errors);
    Object.defineProperty(got, 'defaults', {
        value: defaults.mutableDefaults ? defaults : deep_freeze_1.default(defaults),
        writable: defaults.mutableDefaults,
        configurable: defaults.mutableDefaults,
        enumerable: true
    });
    got.mergeOptions = mergeOptions;
    return got;
};
exports.default = create;
__exportStar(__nccwpck_require__(2613), exports);


/***/ }),

/***/ 3061:
/***/ (function(module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const url_1 = __nccwpck_require__(8835);
const create_1 = __nccwpck_require__(4337);
const defaults = {
    options: {
        method: 'GET',
        retry: {
            limit: 2,
            methods: [
                'GET',
                'PUT',
                'HEAD',
                'DELETE',
                'OPTIONS',
                'TRACE'
            ],
            statusCodes: [
                408,
                413,
                429,
                500,
                502,
                503,
                504,
                521,
                522,
                524
            ],
            errorCodes: [
                'ETIMEDOUT',
                'ECONNRESET',
                'EADDRINUSE',
                'ECONNREFUSED',
                'EPIPE',
                'ENOTFOUND',
                'ENETUNREACH',
                'EAI_AGAIN'
            ],
            maxRetryAfter: undefined,
            calculateDelay: ({ computedValue }) => computedValue
        },
        timeout: {},
        headers: {
            'user-agent': 'got (https://github.com/sindresorhus/got)'
        },
        hooks: {
            init: [],
            beforeRequest: [],
            beforeRedirect: [],
            beforeRetry: [],
            beforeError: [],
            afterResponse: []
        },
        cache: undefined,
        dnsCache: undefined,
        decompress: true,
        throwHttpErrors: true,
        followRedirect: true,
        isStream: false,
        responseType: 'text',
        resolveBodyOnly: false,
        maxRedirects: 10,
        prefixUrl: '',
        methodRewriting: true,
        ignoreInvalidCookies: false,
        context: {},
        // TODO: Set this to `true` when Got 12 gets released
        http2: false,
        allowGetBody: false,
        https: undefined,
        pagination: {
            transform: (response) => {
                if (response.request.options.responseType === 'json') {
                    return response.body;
                }
                return JSON.parse(response.body);
            },
            paginate: response => {
                if (!Reflect.has(response.headers, 'link')) {
                    return false;
                }
                const items = response.headers.link.split(',');
                let next;
                for (const item of items) {
                    const parsed = item.split(';');
                    if (parsed[1].includes('next')) {
                        next = parsed[0].trimStart().trim();
                        next = next.slice(1, -1);
                        break;
                    }
                }
                if (next) {
                    const options = {
                        url: new url_1.URL(next)
                    };
                    return options;
                }
                return false;
            },
            filter: () => true,
            shouldContinue: () => true,
            countLimit: Infinity,
            backoff: 0,
            requestLimit: 10000,
            stackAllItems: true
        },
        parseJson: (text) => JSON.parse(text),
        stringifyJson: (object) => JSON.stringify(object),
        cacheOptions: {}
    },
    handlers: [create_1.defaultHandler],
    mutableDefaults: false
};
const got = create_1.default(defaults);
exports.default = got;
// For CommonJS default export support
module.exports = got;
module.exports.default = got;
module.exports.__esModule = true; // Workaround for TS issue: https://github.com/sindresorhus/got/pull/1267
__exportStar(__nccwpck_require__(4337), exports);
__exportStar(__nccwpck_require__(6056), exports);


/***/ }),

/***/ 2613:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 285:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const is_1 = __nccwpck_require__(7678);
function deepFreeze(object) {
    for (const value of Object.values(object)) {
        if (is_1.default.plainObject(value) || is_1.default.array(value)) {
            deepFreeze(value);
        }
    }
    return Object.freeze(object);
}
exports.default = deepFreeze;


/***/ }),

/***/ 397:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const alreadyWarned = new Set();
exports.default = (message) => {
    if (alreadyWarned.has(message)) {
        return;
    }
    alreadyWarned.add(message);
    // @ts-expect-error Missing types.
    process.emitWarning(`Got: ${message}`, {
        type: 'DeprecationWarning'
    });
};


/***/ }),

/***/ 3657:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.headerCase = void 0;
var tslib_1 = __nccwpck_require__(6288);
var capital_case_1 = __nccwpck_require__(8824);
function headerCase(input, options) {
    if (options === void 0) { options = {}; }
    return capital_case_1.capitalCase(input, tslib_1.__assign({ delimiter: "-" }, options));
}
exports.headerCase = headerCase;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6288:
/***/ ((module) => {

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if ( true && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || from);
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});


/***/ }),

/***/ 1002:
/***/ ((module) => {

"use strict";

// rfc7231 6.1
const statusCodeCacheableByDefault = new Set([
    200,
    203,
    204,
    206,
    300,
    301,
    404,
    405,
    410,
    414,
    501,
]);

// This implementation does not understand partial responses (206)
const understoodStatuses = new Set([
    200,
    203,
    204,
    300,
    301,
    302,
    303,
    307,
    308,
    404,
    405,
    410,
    414,
    501,
]);

const errorStatusCodes = new Set([
    500,
    502,
    503, 
    504,
]);

const hopByHopHeaders = {
    date: true, // included, because we add Age update Date
    connection: true,
    'keep-alive': true,
    'proxy-authenticate': true,
    'proxy-authorization': true,
    te: true,
    trailer: true,
    'transfer-encoding': true,
    upgrade: true,
};

const excludedFromRevalidationUpdate = {
    // Since the old body is reused, it doesn't make sense to change properties of the body
    'content-length': true,
    'content-encoding': true,
    'transfer-encoding': true,
    'content-range': true,
};

function toNumberOrZero(s) {
    const n = parseInt(s, 10);
    return isFinite(n) ? n : 0;
}

// RFC 5861
function isErrorResponse(response) {
    // consider undefined response as faulty
    if(!response) {
        return true
    }
    return errorStatusCodes.has(response.status);
}

function parseCacheControl(header) {
    const cc = {};
    if (!header) return cc;

    // TODO: When there is more than one value present for a given directive (e.g., two Expires header fields, multiple Cache-Control: max-age directives),
    // the directive's value is considered invalid. Caches are encouraged to consider responses that have invalid freshness information to be stale
    const parts = header.trim().split(/\s*,\s*/); // TODO: lame parsing
    for (const part of parts) {
        const [k, v] = part.split(/\s*=\s*/, 2);
        cc[k] = v === undefined ? true : v.replace(/^"|"$/g, ''); // TODO: lame unquoting
    }

    return cc;
}

function formatCacheControl(cc) {
    let parts = [];
    for (const k in cc) {
        const v = cc[k];
        parts.push(v === true ? k : k + '=' + v);
    }
    if (!parts.length) {
        return undefined;
    }
    return parts.join(', ');
}

module.exports = class CachePolicy {
    constructor(
        req,
        res,
        {
            shared,
            cacheHeuristic,
            immutableMinTimeToLive,
            ignoreCargoCult,
            _fromObject,
        } = {}
    ) {
        if (_fromObject) {
            this._fromObject(_fromObject);
            return;
        }

        if (!res || !res.headers) {
            throw Error('Response headers missing');
        }
        this._assertRequestHasHeaders(req);

        this._responseTime = this.now();
        this._isShared = shared !== false;
        this._cacheHeuristic =
            undefined !== cacheHeuristic ? cacheHeuristic : 0.1; // 10% matches IE
        this._immutableMinTtl =
            undefined !== immutableMinTimeToLive
                ? immutableMinTimeToLive
                : 24 * 3600 * 1000;

        this._status = 'status' in res ? res.status : 200;
        this._resHeaders = res.headers;
        this._rescc = parseCacheControl(res.headers['cache-control']);
        this._method = 'method' in req ? req.method : 'GET';
        this._url = req.url;
        this._host = req.headers.host;
        this._noAuthorization = !req.headers.authorization;
        this._reqHeaders = res.headers.vary ? req.headers : null; // Don't keep all request headers if they won't be used
        this._reqcc = parseCacheControl(req.headers['cache-control']);

        // Assume that if someone uses legacy, non-standard uncecessary options they don't understand caching,
        // so there's no point stricly adhering to the blindly copy&pasted directives.
        if (
            ignoreCargoCult &&
            'pre-check' in this._rescc &&
            'post-check' in this._rescc
        ) {
            delete this._rescc['pre-check'];
            delete this._rescc['post-check'];
            delete this._rescc['no-cache'];
            delete this._rescc['no-store'];
            delete this._rescc['must-revalidate'];
            this._resHeaders = Object.assign({}, this._resHeaders, {
                'cache-control': formatCacheControl(this._rescc),
            });
            delete this._resHeaders.expires;
            delete this._resHeaders.pragma;
        }

        // When the Cache-Control header field is not present in a request, caches MUST consider the no-cache request pragma-directive
        // as having the same effect as if "Cache-Control: no-cache" were present (see Section 5.2.1).
        if (
            res.headers['cache-control'] == null &&
            /no-cache/.test(res.headers.pragma)
        ) {
            this._rescc['no-cache'] = true;
        }
    }

    now() {
        return Date.now();
    }

    storable() {
        // The "no-store" request directive indicates that a cache MUST NOT store any part of either this request or any response to it.
        return !!(
            !this._reqcc['no-store'] &&
            // A cache MUST NOT store a response to any request, unless:
            // The request method is understood by the cache and defined as being cacheable, and
            ('GET' === this._method ||
                'HEAD' === this._method ||
                ('POST' === this._method && this._hasExplicitExpiration())) &&
            // the response status code is understood by the cache, and
            understoodStatuses.has(this._status) &&
            // the "no-store" cache directive does not appear in request or response header fields, and
            !this._rescc['no-store'] &&
            // the "private" response directive does not appear in the response, if the cache is shared, and
            (!this._isShared || !this._rescc.private) &&
            // the Authorization header field does not appear in the request, if the cache is shared,
            (!this._isShared ||
                this._noAuthorization ||
                this._allowsStoringAuthenticated()) &&
            // the response either:
            // contains an Expires header field, or
            (this._resHeaders.expires ||
                // contains a max-age response directive, or
                // contains a s-maxage response directive and the cache is shared, or
                // contains a public response directive.
                this._rescc['max-age'] ||
                (this._isShared && this._rescc['s-maxage']) ||
                this._rescc.public ||
                // has a status code that is defined as cacheable by default
                statusCodeCacheableByDefault.has(this._status))
        );
    }

    _hasExplicitExpiration() {
        // 4.2.1 Calculating Freshness Lifetime
        return (
            (this._isShared && this._rescc['s-maxage']) ||
            this._rescc['max-age'] ||
            this._resHeaders.expires
        );
    }

    _assertRequestHasHeaders(req) {
        if (!req || !req.headers) {
            throw Error('Request headers missing');
        }
    }

    satisfiesWithoutRevalidation(req) {
        this._assertRequestHasHeaders(req);

        // When presented with a request, a cache MUST NOT reuse a stored response, unless:
        // the presented request does not contain the no-cache pragma (Section 5.4), nor the no-cache cache directive,
        // unless the stored response is successfully validated (Section 4.3), and
        const requestCC = parseCacheControl(req.headers['cache-control']);
        if (requestCC['no-cache'] || /no-cache/.test(req.headers.pragma)) {
            return false;
        }

        if (requestCC['max-age'] && this.age() > requestCC['max-age']) {
            return false;
        }

        if (
            requestCC['min-fresh'] &&
            this.timeToLive() < 1000 * requestCC['min-fresh']
        ) {
            return false;
        }

        // the stored response is either:
        // fresh, or allowed to be served stale
        if (this.stale()) {
            const allowsStale =
                requestCC['max-stale'] &&
                !this._rescc['must-revalidate'] &&
                (true === requestCC['max-stale'] ||
                    requestCC['max-stale'] > this.age() - this.maxAge());
            if (!allowsStale) {
                return false;
            }
        }

        return this._requestMatches(req, false);
    }

    _requestMatches(req, allowHeadMethod) {
        // The presented effective request URI and that of the stored response match, and
        return (
            (!this._url || this._url === req.url) &&
            this._host === req.headers.host &&
            // the request method associated with the stored response allows it to be used for the presented request, and
            (!req.method ||
                this._method === req.method ||
                (allowHeadMethod && 'HEAD' === req.method)) &&
            // selecting header fields nominated by the stored response (if any) match those presented, and
            this._varyMatches(req)
        );
    }

    _allowsStoringAuthenticated() {
        //  following Cache-Control response directives (Section 5.2.2) have such an effect: must-revalidate, public, and s-maxage.
        return (
            this._rescc['must-revalidate'] ||
            this._rescc.public ||
            this._rescc['s-maxage']
        );
    }

    _varyMatches(req) {
        if (!this._resHeaders.vary) {
            return true;
        }

        // A Vary header field-value of "*" always fails to match
        if (this._resHeaders.vary === '*') {
            return false;
        }

        const fields = this._resHeaders.vary
            .trim()
            .toLowerCase()
            .split(/\s*,\s*/);
        for (const name of fields) {
            if (req.headers[name] !== this._reqHeaders[name]) return false;
        }
        return true;
    }

    _copyWithoutHopByHopHeaders(inHeaders) {
        const headers = {};
        for (const name in inHeaders) {
            if (hopByHopHeaders[name]) continue;
            headers[name] = inHeaders[name];
        }
        // 9.1.  Connection
        if (inHeaders.connection) {
            const tokens = inHeaders.connection.trim().split(/\s*,\s*/);
            for (const name of tokens) {
                delete headers[name];
            }
        }
        if (headers.warning) {
            const warnings = headers.warning.split(/,/).filter(warning => {
                return !/^\s*1[0-9][0-9]/.test(warning);
            });
            if (!warnings.length) {
                delete headers.warning;
            } else {
                headers.warning = warnings.join(',').trim();
            }
        }
        return headers;
    }

    responseHeaders() {
        const headers = this._copyWithoutHopByHopHeaders(this._resHeaders);
        const age = this.age();

        // A cache SHOULD generate 113 warning if it heuristically chose a freshness
        // lifetime greater than 24 hours and the response's age is greater than 24 hours.
        if (
            age > 3600 * 24 &&
            !this._hasExplicitExpiration() &&
            this.maxAge() > 3600 * 24
        ) {
            headers.warning =
                (headers.warning ? `${headers.warning}, ` : '') +
                '113 - "rfc7234 5.5.4"';
        }
        headers.age = `${Math.round(age)}`;
        headers.date = new Date(this.now()).toUTCString();
        return headers;
    }

    /**
     * Value of the Date response header or current time if Date was invalid
     * @return timestamp
     */
    date() {
        const serverDate = Date.parse(this._resHeaders.date);
        if (isFinite(serverDate)) {
            return serverDate;
        }
        return this._responseTime;
    }

    /**
     * Value of the Age header, in seconds, updated for the current time.
     * May be fractional.
     *
     * @return Number
     */
    age() {
        let age = this._ageValue();

        const residentTime = (this.now() - this._responseTime) / 1000;
        return age + residentTime;
    }

    _ageValue() {
        return toNumberOrZero(this._resHeaders.age);
    }

    /**
     * Value of applicable max-age (or heuristic equivalent) in seconds. This counts since response's `Date`.
     *
     * For an up-to-date value, see `timeToLive()`.
     *
     * @return Number
     */
    maxAge() {
        if (!this.storable() || this._rescc['no-cache']) {
            return 0;
        }

        // Shared responses with cookies are cacheable according to the RFC, but IMHO it'd be unwise to do so by default
        // so this implementation requires explicit opt-in via public header
        if (
            this._isShared &&
            (this._resHeaders['set-cookie'] &&
                !this._rescc.public &&
                !this._rescc.immutable)
        ) {
            return 0;
        }

        if (this._resHeaders.vary === '*') {
            return 0;
        }

        if (this._isShared) {
            if (this._rescc['proxy-revalidate']) {
                return 0;
            }
            // if a response includes the s-maxage directive, a shared cache recipient MUST ignore the Expires field.
            if (this._rescc['s-maxage']) {
                return toNumberOrZero(this._rescc['s-maxage']);
            }
        }

        // If a response includes a Cache-Control field with the max-age directive, a recipient MUST ignore the Expires field.
        if (this._rescc['max-age']) {
            return toNumberOrZero(this._rescc['max-age']);
        }

        const defaultMinTtl = this._rescc.immutable ? this._immutableMinTtl : 0;

        const serverDate = this.date();
        if (this._resHeaders.expires) {
            const expires = Date.parse(this._resHeaders.expires);
            // A cache recipient MUST interpret invalid date formats, especially the value "0", as representing a time in the past (i.e., "already expired").
            if (Number.isNaN(expires) || expires < serverDate) {
                return 0;
            }
            return Math.max(defaultMinTtl, (expires - serverDate) / 1000);
        }

        if (this._resHeaders['last-modified']) {
            const lastModified = Date.parse(this._resHeaders['last-modified']);
            if (isFinite(lastModified) && serverDate > lastModified) {
                return Math.max(
                    defaultMinTtl,
                    ((serverDate - lastModified) / 1000) * this._cacheHeuristic
                );
            }
        }

        return defaultMinTtl;
    }

    timeToLive() {
        const age = this.maxAge() - this.age();
        const staleIfErrorAge = age + toNumberOrZero(this._rescc['stale-if-error']);
        const staleWhileRevalidateAge = age + toNumberOrZero(this._rescc['stale-while-revalidate']);
        return Math.max(0, age, staleIfErrorAge, staleWhileRevalidateAge) * 1000;
    }

    stale() {
        return this.maxAge() <= this.age();
    }

    _useStaleIfError() {
        return this.maxAge() + toNumberOrZero(this._rescc['stale-if-error']) > this.age();
    }

    useStaleWhileRevalidate() {
        return this.maxAge() + toNumberOrZero(this._rescc['stale-while-revalidate']) > this.age();
    }

    static fromObject(obj) {
        return new this(undefined, undefined, { _fromObject: obj });
    }

    _fromObject(obj) {
        if (this._responseTime) throw Error('Reinitialized');
        if (!obj || obj.v !== 1) throw Error('Invalid serialization');

        this._responseTime = obj.t;
        this._isShared = obj.sh;
        this._cacheHeuristic = obj.ch;
        this._immutableMinTtl =
            obj.imm !== undefined ? obj.imm : 24 * 3600 * 1000;
        this._status = obj.st;
        this._resHeaders = obj.resh;
        this._rescc = obj.rescc;
        this._method = obj.m;
        this._url = obj.u;
        this._host = obj.h;
        this._noAuthorization = obj.a;
        this._reqHeaders = obj.reqh;
        this._reqcc = obj.reqcc;
    }

    toObject() {
        return {
            v: 1,
            t: this._responseTime,
            sh: this._isShared,
            ch: this._cacheHeuristic,
            imm: this._immutableMinTtl,
            st: this._status,
            resh: this._resHeaders,
            rescc: this._rescc,
            m: this._method,
            u: this._url,
            h: this._host,
            a: this._noAuthorization,
            reqh: this._reqHeaders,
            reqcc: this._reqcc,
        };
    }

    /**
     * Headers for sending to the origin server to revalidate stale response.
     * Allows server to return 304 to allow reuse of the previous response.
     *
     * Hop by hop headers are always stripped.
     * Revalidation headers may be added or removed, depending on request.
     */
    revalidationHeaders(incomingReq) {
        this._assertRequestHasHeaders(incomingReq);
        const headers = this._copyWithoutHopByHopHeaders(incomingReq.headers);

        // This implementation does not understand range requests
        delete headers['if-range'];

        if (!this._requestMatches(incomingReq, true) || !this.storable()) {
            // revalidation allowed via HEAD
            // not for the same resource, or wasn't allowed to be cached anyway
            delete headers['if-none-match'];
            delete headers['if-modified-since'];
            return headers;
        }

        /* MUST send that entity-tag in any cache validation request (using If-Match or If-None-Match) if an entity-tag has been provided by the origin server. */
        if (this._resHeaders.etag) {
            headers['if-none-match'] = headers['if-none-match']
                ? `${headers['if-none-match']}, ${this._resHeaders.etag}`
                : this._resHeaders.etag;
        }

        // Clients MAY issue simple (non-subrange) GET requests with either weak validators or strong validators. Clients MUST NOT use weak validators in other forms of request.
        const forbidsWeakValidators =
            headers['accept-ranges'] ||
            headers['if-match'] ||
            headers['if-unmodified-since'] ||
            (this._method && this._method != 'GET');

        /* SHOULD send the Last-Modified value in non-subrange cache validation requests (using If-Modified-Since) if only a Last-Modified value has been provided by the origin server.
        Note: This implementation does not understand partial responses (206) */
        if (forbidsWeakValidators) {
            delete headers['if-modified-since'];

            if (headers['if-none-match']) {
                const etags = headers['if-none-match']
                    .split(/,/)
                    .filter(etag => {
                        return !/^\s*W\//.test(etag);
                    });
                if (!etags.length) {
                    delete headers['if-none-match'];
                } else {
                    headers['if-none-match'] = etags.join(',').trim();
                }
            }
        } else if (
            this._resHeaders['last-modified'] &&
            !headers['if-modified-since']
        ) {
            headers['if-modified-since'] = this._resHeaders['last-modified'];
        }

        return headers;
    }

    /**
     * Creates new CachePolicy with information combined from the previews response,
     * and the new revalidation response.
     *
     * Returns {policy, modified} where modified is a boolean indicating
     * whether the response body has been modified, and old cached body can't be used.
     *
     * @return {Object} {policy: CachePolicy, modified: Boolean}
     */
    revalidatedPolicy(request, response) {
        this._assertRequestHasHeaders(request);
        if(this._useStaleIfError() && isErrorResponse(response)) {  // I consider the revalidation request unsuccessful
          return {
            modified: false,
            matches: false,
            policy: this,
          };
        }
        if (!response || !response.headers) {
            throw Error('Response headers missing');
        }

        // These aren't going to be supported exactly, since one CachePolicy object
        // doesn't know about all the other cached objects.
        let matches = false;
        if (response.status !== undefined && response.status != 304) {
            matches = false;
        } else if (
            response.headers.etag &&
            !/^\s*W\//.test(response.headers.etag)
        ) {
            // "All of the stored responses with the same strong validator are selected.
            // If none of the stored responses contain the same strong validator,
            // then the cache MUST NOT use the new response to update any stored responses."
            matches =
                this._resHeaders.etag &&
                this._resHeaders.etag.replace(/^\s*W\//, '') ===
                    response.headers.etag;
        } else if (this._resHeaders.etag && response.headers.etag) {
            // "If the new response contains a weak validator and that validator corresponds
            // to one of the cache's stored responses,
            // then the most recent of those matching stored responses is selected for update."
            matches =
                this._resHeaders.etag.replace(/^\s*W\//, '') ===
                response.headers.etag.replace(/^\s*W\//, '');
        } else if (this._resHeaders['last-modified']) {
            matches =
                this._resHeaders['last-modified'] ===
                response.headers['last-modified'];
        } else {
            // If the new response does not include any form of validator (such as in the case where
            // a client generates an If-Modified-Since request from a source other than the Last-Modified
            // response header field), and there is only one stored response, and that stored response also
            // lacks a validator, then that stored response is selected for update.
            if (
                !this._resHeaders.etag &&
                !this._resHeaders['last-modified'] &&
                !response.headers.etag &&
                !response.headers['last-modified']
            ) {
                matches = true;
            }
        }

        if (!matches) {
            return {
                policy: new this.constructor(request, response),
                // Client receiving 304 without body, even if it's invalid/mismatched has no option
                // but to reuse a cached body. We don't have a good way to tell clients to do
                // error recovery in such case.
                modified: response.status != 304,
                matches: false,
            };
        }

        // use other header fields provided in the 304 (Not Modified) response to replace all instances
        // of the corresponding header fields in the stored response.
        const headers = {};
        for (const k in this._resHeaders) {
            headers[k] =
                k in response.headers && !excludedFromRevalidationUpdate[k]
                    ? response.headers[k]
                    : this._resHeaders[k];
        }

        const newResponse = Object.assign({}, response, {
            status: this._status,
            method: this._method,
            headers,
        });
        return {
            policy: new this.constructor(request, newResponse, {
                shared: this._isShared,
                cacheHeuristic: this._cacheHeuristic,
                immutableMinTimeToLive: this._immutableMinTtl,
            }),
            modified: false,
            matches: true,
        };
    }
};


/***/ }),

/***/ 9898:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const EventEmitter = __nccwpck_require__(8614);
const tls = __nccwpck_require__(4016);
const http2 = __nccwpck_require__(7565);
const QuickLRU = __nccwpck_require__(9273);

const kCurrentStreamsCount = Symbol('currentStreamsCount');
const kRequest = Symbol('request');
const kOriginSet = Symbol('cachedOriginSet');
const kGracefullyClosing = Symbol('gracefullyClosing');

const nameKeys = [
	// `http2.connect()` options
	'maxDeflateDynamicTableSize',
	'maxSessionMemory',
	'maxHeaderListPairs',
	'maxOutstandingPings',
	'maxReservedRemoteStreams',
	'maxSendHeaderBlockLength',
	'paddingStrategy',

	// `tls.connect()` options
	'localAddress',
	'path',
	'rejectUnauthorized',
	'minDHSize',

	// `tls.createSecureContext()` options
	'ca',
	'cert',
	'clientCertEngine',
	'ciphers',
	'key',
	'pfx',
	'servername',
	'minVersion',
	'maxVersion',
	'secureProtocol',
	'crl',
	'honorCipherOrder',
	'ecdhCurve',
	'dhparam',
	'secureOptions',
	'sessionIdContext'
];

const getSortedIndex = (array, value, compare) => {
	let low = 0;
	let high = array.length;

	while (low < high) {
		const mid = (low + high) >>> 1;

		/* istanbul ignore next */
		if (compare(array[mid], value)) {
			// This never gets called because we use descending sort. Better to have this anyway.
			low = mid + 1;
		} else {
			high = mid;
		}
	}

	return low;
};

const compareSessions = (a, b) => {
	return a.remoteSettings.maxConcurrentStreams > b.remoteSettings.maxConcurrentStreams;
};

// See https://tools.ietf.org/html/rfc8336
const closeCoveredSessions = (where, session) => {
	// Clients SHOULD NOT emit new requests on any connection whose Origin
	// Set is a proper subset of another connection's Origin Set, and they
	// SHOULD close it once all outstanding requests are satisfied.
	for (const coveredSession of where) {
		if (
			// The set is a proper subset when its length is less than the other set.
			coveredSession[kOriginSet].length < session[kOriginSet].length &&

			// And the other set includes all elements of the subset.
			coveredSession[kOriginSet].every(origin => session[kOriginSet].includes(origin)) &&

			// Makes sure that the session can handle all requests from the covered session.
			coveredSession[kCurrentStreamsCount] + session[kCurrentStreamsCount] <= session.remoteSettings.maxConcurrentStreams
		) {
			// This allows pending requests to finish and prevents making new requests.
			gracefullyClose(coveredSession);
		}
	}
};

// This is basically inverted `closeCoveredSessions(...)`.
const closeSessionIfCovered = (where, coveredSession) => {
	for (const session of where) {
		if (
			coveredSession[kOriginSet].length < session[kOriginSet].length &&
			coveredSession[kOriginSet].every(origin => session[kOriginSet].includes(origin)) &&
			coveredSession[kCurrentStreamsCount] + session[kCurrentStreamsCount] <= session.remoteSettings.maxConcurrentStreams
		) {
			gracefullyClose(coveredSession);
		}
	}
};

const getSessions = ({agent, isFree}) => {
	const result = {};

	// eslint-disable-next-line guard-for-in
	for (const normalizedOptions in agent.sessions) {
		const sessions = agent.sessions[normalizedOptions];

		const filtered = sessions.filter(session => {
			const result = session[Agent.kCurrentStreamsCount] < session.remoteSettings.maxConcurrentStreams;

			return isFree ? result : !result;
		});

		if (filtered.length !== 0) {
			result[normalizedOptions] = filtered;
		}
	}

	return result;
};

const gracefullyClose = session => {
	session[kGracefullyClosing] = true;

	if (session[kCurrentStreamsCount] === 0) {
		session.close();
	}
};

class Agent extends EventEmitter {
	constructor({timeout = 60000, maxSessions = Infinity, maxFreeSessions = 10, maxCachedTlsSessions = 100} = {}) {
		super();

		// A session is considered busy when its current streams count
		// is equal to or greater than the `maxConcurrentStreams` value.

		// A session is considered free when its current streams count
		// is less than the `maxConcurrentStreams` value.

		// SESSIONS[NORMALIZED_OPTIONS] = [];
		this.sessions = {};

		// The queue for creating new sessions. It looks like this:
		// QUEUE[NORMALIZED_OPTIONS][NORMALIZED_ORIGIN] = ENTRY_FUNCTION
		//
		// The entry function has `listeners`, `completed` and `destroyed` properties.
		// `listeners` is an array of objects containing `resolve` and `reject` functions.
		// `completed` is a boolean. It's set to true after ENTRY_FUNCTION is executed.
		// `destroyed` is a boolean. If it's set to true, the session will be destroyed if hasn't connected yet.
		this.queue = {};

		// Each session will use this timeout value.
		this.timeout = timeout;

		// Max sessions in total
		this.maxSessions = maxSessions;

		// Max free sessions in total
		// TODO: decreasing `maxFreeSessions` should close some sessions
		this.maxFreeSessions = maxFreeSessions;

		this._freeSessionsCount = 0;
		this._sessionsCount = 0;

		// We don't support push streams by default.
		this.settings = {
			enablePush: false
		};

		// Reusing TLS sessions increases performance.
		this.tlsSessionCache = new QuickLRU({maxSize: maxCachedTlsSessions});
	}

	static normalizeOrigin(url, servername) {
		if (typeof url === 'string') {
			url = new URL(url);
		}

		if (servername && url.hostname !== servername) {
			url.hostname = servername;
		}

		return url.origin;
	}

	normalizeOptions(options) {
		let normalized = '';

		if (options) {
			for (const key of nameKeys) {
				if (options[key]) {
					normalized += `:${options[key]}`;
				}
			}
		}

		return normalized;
	}

	_tryToCreateNewSession(normalizedOptions, normalizedOrigin) {
		if (!(normalizedOptions in this.queue) || !(normalizedOrigin in this.queue[normalizedOptions])) {
			return;
		}

		const item = this.queue[normalizedOptions][normalizedOrigin];

		// The entry function can be run only once.
		// BUG: The session may be never created when:
		// - the first condition is false AND
		// - this function is never called with the same arguments in the future.
		if (this._sessionsCount < this.maxSessions && !item.completed) {
			item.completed = true;

			item();
		}
	}

	getSession(origin, options, listeners) {
		return new Promise((resolve, reject) => {
			if (Array.isArray(listeners)) {
				listeners = [...listeners];

				// Resolve the current promise ASAP, we're just moving the listeners.
				// They will be executed at a different time.
				resolve();
			} else {
				listeners = [{resolve, reject}];
			}

			const normalizedOptions = this.normalizeOptions(options);
			const normalizedOrigin = Agent.normalizeOrigin(origin, options && options.servername);

			if (normalizedOrigin === undefined) {
				for (const {reject} of listeners) {
					reject(new TypeError('The `origin` argument needs to be a string or an URL object'));
				}

				return;
			}

			if (normalizedOptions in this.sessions) {
				const sessions = this.sessions[normalizedOptions];

				let maxConcurrentStreams = -1;
				let currentStreamsCount = -1;
				let optimalSession;

				// We could just do this.sessions[normalizedOptions].find(...) but that isn't optimal.
				// Additionally, we are looking for session which has biggest current pending streams count.
				for (const session of sessions) {
					const sessionMaxConcurrentStreams = session.remoteSettings.maxConcurrentStreams;

					if (sessionMaxConcurrentStreams < maxConcurrentStreams) {
						break;
					}

					if (session[kOriginSet].includes(normalizedOrigin)) {
						const sessionCurrentStreamsCount = session[kCurrentStreamsCount];

						if (
							sessionCurrentStreamsCount >= sessionMaxConcurrentStreams ||
							session[kGracefullyClosing] ||
							// Unfortunately the `close` event isn't called immediately,
							// so `session.destroyed` is `true`, but `session.closed` is `false`.
							session.destroyed
						) {
							continue;
						}

						// We only need set this once.
						if (!optimalSession) {
							maxConcurrentStreams = sessionMaxConcurrentStreams;
						}

						// We're looking for the session which has biggest current pending stream count,
						// in order to minimalize the amount of active sessions.
						if (sessionCurrentStreamsCount > currentStreamsCount) {
							optimalSession = session;
							currentStreamsCount = sessionCurrentStreamsCount;
						}
					}
				}

				if (optimalSession) {
					/* istanbul ignore next: safety check */
					if (listeners.length !== 1) {
						for (const {reject} of listeners) {
							const error = new Error(
								`Expected the length of listeners to be 1, got ${listeners.length}.\n` +
								'Please report this to https://github.com/szmarczak/http2-wrapper/'
							);

							reject(error);
						}

						return;
					}

					listeners[0].resolve(optimalSession);
					return;
				}
			}

			if (normalizedOptions in this.queue) {
				if (normalizedOrigin in this.queue[normalizedOptions]) {
					// There's already an item in the queue, just attach ourselves to it.
					this.queue[normalizedOptions][normalizedOrigin].listeners.push(...listeners);

					// This shouldn't be executed here.
					// See the comment inside _tryToCreateNewSession.
					this._tryToCreateNewSession(normalizedOptions, normalizedOrigin);
					return;
				}
			} else {
				this.queue[normalizedOptions] = {};
			}

			// The entry must be removed from the queue IMMEDIATELY when:
			// 1. the session connects successfully,
			// 2. an error occurs.
			const removeFromQueue = () => {
				// Our entry can be replaced. We cannot remove the new one.
				if (normalizedOptions in this.queue && this.queue[normalizedOptions][normalizedOrigin] === entry) {
					delete this.queue[normalizedOptions][normalizedOrigin];

					if (Object.keys(this.queue[normalizedOptions]).length === 0) {
						delete this.queue[normalizedOptions];
					}
				}
			};

			// The main logic is here
			const entry = () => {
				const name = `${normalizedOrigin}:${normalizedOptions}`;
				let receivedSettings = false;

				try {
					const session = http2.connect(origin, {
						createConnection: this.createConnection,
						settings: this.settings,
						session: this.tlsSessionCache.get(name),
						...options
					});
					session[kCurrentStreamsCount] = 0;
					session[kGracefullyClosing] = false;

					const isFree = () => session[kCurrentStreamsCount] < session.remoteSettings.maxConcurrentStreams;
					let wasFree = true;

					session.socket.once('session', tlsSession => {
						this.tlsSessionCache.set(name, tlsSession);
					});

					session.once('error', error => {
						// Listeners are empty when the session successfully connected.
						for (const {reject} of listeners) {
							reject(error);
						}

						// The connection got broken, purge the cache.
						this.tlsSessionCache.delete(name);
					});

					session.setTimeout(this.timeout, () => {
						// Terminates all streams owned by this session.
						// TODO: Maybe the streams should have a "Session timed out" error?
						session.destroy();
					});

					session.once('close', () => {
						if (receivedSettings) {
							// 1. If it wasn't free then no need to decrease because
							//    it has been decreased already in session.request().
							// 2. `stream.once('close')` won't increment the count
							//    because the session is already closed.
							if (wasFree) {
								this._freeSessionsCount--;
							}

							this._sessionsCount--;

							// This cannot be moved to the stream logic,
							// because there may be a session that hadn't made a single request.
							const where = this.sessions[normalizedOptions];
							where.splice(where.indexOf(session), 1);

							if (where.length === 0) {
								delete this.sessions[normalizedOptions];
							}
						} else {
							// Broken connection
							const error = new Error('Session closed without receiving a SETTINGS frame');
							error.code = 'HTTP2WRAPPER_NOSETTINGS';

							for (const {reject} of listeners) {
								reject(error);
							}

							removeFromQueue();
						}

						// There may be another session awaiting.
						this._tryToCreateNewSession(normalizedOptions, normalizedOrigin);
					});

					// Iterates over the queue and processes listeners.
					const processListeners = () => {
						if (!(normalizedOptions in this.queue) || !isFree()) {
							return;
						}

						for (const origin of session[kOriginSet]) {
							if (origin in this.queue[normalizedOptions]) {
								const {listeners} = this.queue[normalizedOptions][origin];

								// Prevents session overloading.
								while (listeners.length !== 0 && isFree()) {
									// We assume `resolve(...)` calls `request(...)` *directly*,
									// otherwise the session will get overloaded.
									listeners.shift().resolve(session);
								}

								const where = this.queue[normalizedOptions];
								if (where[origin].listeners.length === 0) {
									delete where[origin];

									if (Object.keys(where).length === 0) {
										delete this.queue[normalizedOptions];
										break;
									}
								}

								// We're no longer free, no point in continuing.
								if (!isFree()) {
									break;
								}
							}
						}
					};

					// The Origin Set cannot shrink. No need to check if it suddenly became covered by another one.
					session.on('origin', () => {
						session[kOriginSet] = session.originSet;

						if (!isFree()) {
							// The session is full.
							return;
						}

						processListeners();

						// Close covered sessions (if possible).
						closeCoveredSessions(this.sessions[normalizedOptions], session);
					});

					session.once('remoteSettings', () => {
						// Fix Node.js bug preventing the process from exiting
						session.ref();
						session.unref();

						this._sessionsCount++;

						// The Agent could have been destroyed already.
						if (entry.destroyed) {
							const error = new Error('Agent has been destroyed');

							for (const listener of listeners) {
								listener.reject(error);
							}

							session.destroy();
							return;
						}

						session[kOriginSet] = session.originSet;

						{
							const where = this.sessions;

							if (normalizedOptions in where) {
								const sessions = where[normalizedOptions];
								sessions.splice(getSortedIndex(sessions, session, compareSessions), 0, session);
							} else {
								where[normalizedOptions] = [session];
							}
						}

						this._freeSessionsCount += 1;
						receivedSettings = true;

						this.emit('session', session);

						processListeners();
						removeFromQueue();

						// TODO: Close last recently used (or least used?) session
						if (session[kCurrentStreamsCount] === 0 && this._freeSessionsCount > this.maxFreeSessions) {
							session.close();
						}

						// Check if we haven't managed to execute all listeners.
						if (listeners.length !== 0) {
							// Request for a new session with predefined listeners.
							this.getSession(normalizedOrigin, options, listeners);
							listeners.length = 0;
						}

						// `session.remoteSettings.maxConcurrentStreams` might get increased
						session.on('remoteSettings', () => {
							processListeners();

							// In case the Origin Set changes
							closeCoveredSessions(this.sessions[normalizedOptions], session);
						});
					});

					// Shim `session.request()` in order to catch all streams
					session[kRequest] = session.request;
					session.request = (headers, streamOptions) => {
						if (session[kGracefullyClosing]) {
							throw new Error('The session is gracefully closing. No new streams are allowed.');
						}

						const stream = session[kRequest](headers, streamOptions);

						// The process won't exit until the session is closed or all requests are gone.
						session.ref();

						++session[kCurrentStreamsCount];

						if (session[kCurrentStreamsCount] === session.remoteSettings.maxConcurrentStreams) {
							this._freeSessionsCount--;
						}

						stream.once('close', () => {
							wasFree = isFree();

							--session[kCurrentStreamsCount];

							if (!session.destroyed && !session.closed) {
								closeSessionIfCovered(this.sessions[normalizedOptions], session);

								if (isFree() && !session.closed) {
									if (!wasFree) {
										this._freeSessionsCount++;

										wasFree = true;
									}

									const isEmpty = session[kCurrentStreamsCount] === 0;

									if (isEmpty) {
										session.unref();
									}

									if (
										isEmpty &&
										(
											this._freeSessionsCount > this.maxFreeSessions ||
											session[kGracefullyClosing]
										)
									) {
										session.close();
									} else {
										closeCoveredSessions(this.sessions[normalizedOptions], session);
										processListeners();
									}
								}
							}
						});

						return stream;
					};
				} catch (error) {
					for (const listener of listeners) {
						listener.reject(error);
					}

					removeFromQueue();
				}
			};

			entry.listeners = listeners;
			entry.completed = false;
			entry.destroyed = false;

			this.queue[normalizedOptions][normalizedOrigin] = entry;
			this._tryToCreateNewSession(normalizedOptions, normalizedOrigin);
		});
	}

	request(origin, options, headers, streamOptions) {
		return new Promise((resolve, reject) => {
			this.getSession(origin, options, [{
				reject,
				resolve: session => {
					try {
						resolve(session.request(headers, streamOptions));
					} catch (error) {
						reject(error);
					}
				}
			}]);
		});
	}

	createConnection(origin, options) {
		return Agent.connect(origin, options);
	}

	static connect(origin, options) {
		options.ALPNProtocols = ['h2'];

		const port = origin.port || 443;
		const host = origin.hostname || origin.host;

		if (typeof options.servername === 'undefined') {
			options.servername = host;
		}

		return tls.connect(port, host, options);
	}

	closeFreeSessions() {
		for (const sessions of Object.values(this.sessions)) {
			for (const session of sessions) {
				if (session[kCurrentStreamsCount] === 0) {
					session.close();
				}
			}
		}
	}

	destroy(reason) {
		for (const sessions of Object.values(this.sessions)) {
			for (const session of sessions) {
				session.destroy(reason);
			}
		}

		for (const entriesOfAuthority of Object.values(this.queue)) {
			for (const entry of Object.values(entriesOfAuthority)) {
				entry.destroyed = true;
			}
		}

		// New requests should NOT attach to destroyed sessions
		this.queue = {};
	}

	get freeSessions() {
		return getSessions({agent: this, isFree: true});
	}

	get busySessions() {
		return getSessions({agent: this, isFree: false});
	}
}

Agent.kCurrentStreamsCount = kCurrentStreamsCount;
Agent.kGracefullyClosing = kGracefullyClosing;

module.exports = {
	Agent,
	globalAgent: new Agent()
};


/***/ }),

/***/ 7167:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const http = __nccwpck_require__(8605);
const https = __nccwpck_require__(7211);
const resolveALPN = __nccwpck_require__(6624);
const QuickLRU = __nccwpck_require__(9273);
const Http2ClientRequest = __nccwpck_require__(9632);
const calculateServerName = __nccwpck_require__(1982);
const urlToOptions = __nccwpck_require__(2686);

const cache = new QuickLRU({maxSize: 100});
const queue = new Map();

const installSocket = (agent, socket, options) => {
	socket._httpMessage = {shouldKeepAlive: true};

	const onFree = () => {
		agent.emit('free', socket, options);
	};

	socket.on('free', onFree);

	const onClose = () => {
		agent.removeSocket(socket, options);
	};

	socket.on('close', onClose);

	const onRemove = () => {
		agent.removeSocket(socket, options);
		socket.off('close', onClose);
		socket.off('free', onFree);
		socket.off('agentRemove', onRemove);
	};

	socket.on('agentRemove', onRemove);

	agent.emit('free', socket, options);
};

const resolveProtocol = async options => {
	const name = `${options.host}:${options.port}:${options.ALPNProtocols.sort()}`;

	if (!cache.has(name)) {
		if (queue.has(name)) {
			const result = await queue.get(name);
			return result.alpnProtocol;
		}

		const {path, agent} = options;
		options.path = options.socketPath;

		const resultPromise = resolveALPN(options);
		queue.set(name, resultPromise);

		try {
			const {socket, alpnProtocol} = await resultPromise;
			cache.set(name, alpnProtocol);

			options.path = path;

			if (alpnProtocol === 'h2') {
				// https://github.com/nodejs/node/issues/33343
				socket.destroy();
			} else {
				const {globalAgent} = https;
				const defaultCreateConnection = https.Agent.prototype.createConnection;

				if (agent) {
					if (agent.createConnection === defaultCreateConnection) {
						installSocket(agent, socket, options);
					} else {
						socket.destroy();
					}
				} else if (globalAgent.createConnection === defaultCreateConnection) {
					installSocket(globalAgent, socket, options);
				} else {
					socket.destroy();
				}
			}

			queue.delete(name);

			return alpnProtocol;
		} catch (error) {
			queue.delete(name);

			throw error;
		}
	}

	return cache.get(name);
};

module.exports = async (input, options, callback) => {
	if (typeof input === 'string' || input instanceof URL) {
		input = urlToOptions(new URL(input));
	}

	if (typeof options === 'function') {
		callback = options;
		options = undefined;
	}

	options = {
		ALPNProtocols: ['h2', 'http/1.1'],
		...input,
		...options,
		resolveSocket: true
	};

	if (!Array.isArray(options.ALPNProtocols) || options.ALPNProtocols.length === 0) {
		throw new Error('The `ALPNProtocols` option must be an Array with at least one entry');
	}

	options.protocol = options.protocol || 'https:';
	const isHttps = options.protocol === 'https:';

	options.host = options.hostname || options.host || 'localhost';
	options.session = options.tlsSession;
	options.servername = options.servername || calculateServerName(options);
	options.port = options.port || (isHttps ? 443 : 80);
	options._defaultAgent = isHttps ? https.globalAgent : http.globalAgent;

	const agents = options.agent;

	if (agents) {
		if (agents.addRequest) {
			throw new Error('The `options.agent` object can contain only `http`, `https` or `http2` properties');
		}

		options.agent = agents[isHttps ? 'https' : 'http'];
	}

	if (isHttps) {
		const protocol = await resolveProtocol(options);

		if (protocol === 'h2') {
			if (agents) {
				options.agent = agents.http2;
			}

			return new Http2ClientRequest(options, callback);
		}
	}

	return http.request(options, callback);
};

module.exports.protocolCache = cache;


/***/ }),

/***/ 9632:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const http2 = __nccwpck_require__(7565);
const {Writable} = __nccwpck_require__(2413);
const {Agent, globalAgent} = __nccwpck_require__(9898);
const IncomingMessage = __nccwpck_require__(2575);
const urlToOptions = __nccwpck_require__(2686);
const proxyEvents = __nccwpck_require__(1818);
const isRequestPseudoHeader = __nccwpck_require__(1199);
const {
	ERR_INVALID_ARG_TYPE,
	ERR_INVALID_PROTOCOL,
	ERR_HTTP_HEADERS_SENT,
	ERR_INVALID_HTTP_TOKEN,
	ERR_HTTP_INVALID_HEADER_VALUE,
	ERR_INVALID_CHAR
} = __nccwpck_require__(7087);

const {
	HTTP2_HEADER_STATUS,
	HTTP2_HEADER_METHOD,
	HTTP2_HEADER_PATH,
	HTTP2_METHOD_CONNECT
} = http2.constants;

const kHeaders = Symbol('headers');
const kOrigin = Symbol('origin');
const kSession = Symbol('session');
const kOptions = Symbol('options');
const kFlushedHeaders = Symbol('flushedHeaders');
const kJobs = Symbol('jobs');

const isValidHttpToken = /^[\^`\-\w!#$%&*+.|~]+$/;
const isInvalidHeaderValue = /[^\t\u0020-\u007E\u0080-\u00FF]/;

class ClientRequest extends Writable {
	constructor(input, options, callback) {
		super({
			autoDestroy: false
		});

		const hasInput = typeof input === 'string' || input instanceof URL;
		if (hasInput) {
			input = urlToOptions(input instanceof URL ? input : new URL(input));
		}

		if (typeof options === 'function' || options === undefined) {
			// (options, callback)
			callback = options;
			options = hasInput ? input : {...input};
		} else {
			// (input, options, callback)
			options = {...input, ...options};
		}

		if (options.h2session) {
			this[kSession] = options.h2session;
		} else if (options.agent === false) {
			this.agent = new Agent({maxFreeSessions: 0});
		} else if (typeof options.agent === 'undefined' || options.agent === null) {
			if (typeof options.createConnection === 'function') {
				// This is a workaround - we don't have to create the session on our own.
				this.agent = new Agent({maxFreeSessions: 0});
				this.agent.createConnection = options.createConnection;
			} else {
				this.agent = globalAgent;
			}
		} else if (typeof options.agent.request === 'function') {
			this.agent = options.agent;
		} else {
			throw new ERR_INVALID_ARG_TYPE('options.agent', ['Agent-like Object', 'undefined', 'false'], options.agent);
		}

		if (options.protocol && options.protocol !== 'https:') {
			throw new ERR_INVALID_PROTOCOL(options.protocol, 'https:');
		}

		const port = options.port || options.defaultPort || (this.agent && this.agent.defaultPort) || 443;
		const host = options.hostname || options.host || 'localhost';

		// Don't enforce the origin via options. It may be changed in an Agent.
		delete options.hostname;
		delete options.host;
		delete options.port;

		const {timeout} = options;
		options.timeout = undefined;

		this[kHeaders] = Object.create(null);
		this[kJobs] = [];

		this.socket = null;
		this.connection = null;

		this.method = options.method || 'GET';
		this.path = options.path;

		this.res = null;
		this.aborted = false;
		this.reusedSocket = false;

		if (options.headers) {
			for (const [header, value] of Object.entries(options.headers)) {
				this.setHeader(header, value);
			}
		}

		if (options.auth && !('authorization' in this[kHeaders])) {
			this[kHeaders].authorization = 'Basic ' + Buffer.from(options.auth).toString('base64');
		}

		options.session = options.tlsSession;
		options.path = options.socketPath;

		this[kOptions] = options;

		// Clients that generate HTTP/2 requests directly SHOULD use the :authority pseudo-header field instead of the Host header field.
		if (port === 443) {
			this[kOrigin] = `https://${host}`;

			if (!(':authority' in this[kHeaders])) {
				this[kHeaders][':authority'] = host;
			}
		} else {
			this[kOrigin] = `https://${host}:${port}`;

			if (!(':authority' in this[kHeaders])) {
				this[kHeaders][':authority'] = `${host}:${port}`;
			}
		}

		if (timeout) {
			this.setTimeout(timeout);
		}

		if (callback) {
			this.once('response', callback);
		}

		this[kFlushedHeaders] = false;
	}

	get method() {
		return this[kHeaders][HTTP2_HEADER_METHOD];
	}

	set method(value) {
		if (value) {
			this[kHeaders][HTTP2_HEADER_METHOD] = value.toUpperCase();
		}
	}

	get path() {
		return this[kHeaders][HTTP2_HEADER_PATH];
	}

	set path(value) {
		if (value) {
			this[kHeaders][HTTP2_HEADER_PATH] = value;
		}
	}

	get _mustNotHaveABody() {
		return this.method === 'GET' || this.method === 'HEAD' || this.method === 'DELETE';
	}

	_write(chunk, encoding, callback) {
		// https://github.com/nodejs/node/blob/654df09ae0c5e17d1b52a900a545f0664d8c7627/lib/internal/http2/util.js#L148-L156
		if (this._mustNotHaveABody) {
			callback(new Error('The GET, HEAD and DELETE methods must NOT have a body'));
			/* istanbul ignore next: Node.js 12 throws directly */
			return;
		}

		this.flushHeaders();

		const callWrite = () => this._request.write(chunk, encoding, callback);
		if (this._request) {
			callWrite();
		} else {
			this[kJobs].push(callWrite);
		}
	}

	_final(callback) {
		if (this.destroyed) {
			return;
		}

		this.flushHeaders();

		const callEnd = () => {
			// For GET, HEAD and DELETE
			if (this._mustNotHaveABody) {
				callback();
				return;
			}

			this._request.end(callback);
		};

		if (this._request) {
			callEnd();
		} else {
			this[kJobs].push(callEnd);
		}
	}

	abort() {
		if (this.res && this.res.complete) {
			return;
		}

		if (!this.aborted) {
			process.nextTick(() => this.emit('abort'));
		}

		this.aborted = true;

		this.destroy();
	}

	_destroy(error, callback) {
		if (this.res) {
			this.res._dump();
		}

		if (this._request) {
			this._request.destroy();
		}

		callback(error);
	}

	async flushHeaders() {
		if (this[kFlushedHeaders] || this.destroyed) {
			return;
		}

		this[kFlushedHeaders] = true;

		const isConnectMethod = this.method === HTTP2_METHOD_CONNECT;

		// The real magic is here
		const onStream = stream => {
			this._request = stream;

			if (this.destroyed) {
				stream.destroy();
				return;
			}

			// Forwards `timeout`, `continue`, `close` and `error` events to this instance.
			if (!isConnectMethod) {
				proxyEvents(stream, this, ['timeout', 'continue', 'close', 'error']);
			}

			// Wait for the `finish` event. We don't want to emit the `response` event
			// before `request.end()` is called.
			const waitForEnd = fn => {
				return (...args) => {
					if (!this.writable && !this.destroyed) {
						fn(...args);
					} else {
						this.once('finish', () => {
							fn(...args);
						});
					}
				};
			};

			// This event tells we are ready to listen for the data.
			stream.once('response', waitForEnd((headers, flags, rawHeaders) => {
				// If we were to emit raw request stream, it would be as fast as the native approach.
				// Note that wrapping the raw stream in a Proxy instance won't improve the performance (already tested it).
				const response = new IncomingMessage(this.socket, stream.readableHighWaterMark);
				this.res = response;

				response.req = this;
				response.statusCode = headers[HTTP2_HEADER_STATUS];
				response.headers = headers;
				response.rawHeaders = rawHeaders;

				response.once('end', () => {
					if (this.aborted) {
						response.aborted = true;
						response.emit('aborted');
					} else {
						response.complete = true;

						// Has no effect, just be consistent with the Node.js behavior
						response.socket = null;
						response.connection = null;
					}
				});

				if (isConnectMethod) {
					response.upgrade = true;

					// The HTTP1 API says the socket is detached here,
					// but we can't do that so we pass the original HTTP2 request.
					if (this.emit('connect', response, stream, Buffer.alloc(0))) {
						this.emit('close');
					} else {
						// No listeners attached, destroy the original request.
						stream.destroy();
					}
				} else {
					// Forwards data
					stream.on('data', chunk => {
						if (!response._dumped && !response.push(chunk)) {
							stream.pause();
						}
					});

					stream.once('end', () => {
						response.push(null);
					});

					if (!this.emit('response', response)) {
						// No listeners attached, dump the response.
						response._dump();
					}
				}
			}));

			// Emits `information` event
			stream.once('headers', waitForEnd(
				headers => this.emit('information', {statusCode: headers[HTTP2_HEADER_STATUS]})
			));

			stream.once('trailers', waitForEnd((trailers, flags, rawTrailers) => {
				const {res} = this;

				// Assigns trailers to the response object.
				res.trailers = trailers;
				res.rawTrailers = rawTrailers;
			}));

			const {socket} = stream.session;
			this.socket = socket;
			this.connection = socket;

			for (const job of this[kJobs]) {
				job();
			}

			this.emit('socket', this.socket);
		};

		// Makes a HTTP2 request
		if (this[kSession]) {
			try {
				onStream(this[kSession].request(this[kHeaders]));
			} catch (error) {
				this.emit('error', error);
			}
		} else {
			this.reusedSocket = true;

			try {
				onStream(await this.agent.request(this[kOrigin], this[kOptions], this[kHeaders]));
			} catch (error) {
				this.emit('error', error);
			}
		}
	}

	getHeader(name) {
		if (typeof name !== 'string') {
			throw new ERR_INVALID_ARG_TYPE('name', 'string', name);
		}

		return this[kHeaders][name.toLowerCase()];
	}

	get headersSent() {
		return this[kFlushedHeaders];
	}

	removeHeader(name) {
		if (typeof name !== 'string') {
			throw new ERR_INVALID_ARG_TYPE('name', 'string', name);
		}

		if (this.headersSent) {
			throw new ERR_HTTP_HEADERS_SENT('remove');
		}

		delete this[kHeaders][name.toLowerCase()];
	}

	setHeader(name, value) {
		if (this.headersSent) {
			throw new ERR_HTTP_HEADERS_SENT('set');
		}

		if (typeof name !== 'string' || (!isValidHttpToken.test(name) && !isRequestPseudoHeader(name))) {
			throw new ERR_INVALID_HTTP_TOKEN('Header name', name);
		}

		if (typeof value === 'undefined') {
			throw new ERR_HTTP_INVALID_HEADER_VALUE(value, name);
		}

		if (isInvalidHeaderValue.test(value)) {
			throw new ERR_INVALID_CHAR('header content', name);
		}

		this[kHeaders][name.toLowerCase()] = value;
	}

	setNoDelay() {
		// HTTP2 sockets cannot be malformed, do nothing.
	}

	setSocketKeepAlive() {
		// HTTP2 sockets cannot be malformed, do nothing.
	}

	setTimeout(ms, callback) {
		const applyTimeout = () => this._request.setTimeout(ms, callback);

		if (this._request) {
			applyTimeout();
		} else {
			this[kJobs].push(applyTimeout);
		}

		return this;
	}

	get maxHeadersCount() {
		if (!this.destroyed && this._request) {
			return this._request.session.localSettings.maxHeaderListSize;
		}

		return undefined;
	}

	set maxHeadersCount(_value) {
		// Updating HTTP2 settings would affect all requests, do nothing.
	}
}

module.exports = ClientRequest;


/***/ }),

/***/ 2575:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const {Readable} = __nccwpck_require__(2413);

class IncomingMessage extends Readable {
	constructor(socket, highWaterMark) {
		super({
			highWaterMark,
			autoDestroy: false
		});

		this.statusCode = null;
		this.statusMessage = '';
		this.httpVersion = '2.0';
		this.httpVersionMajor = 2;
		this.httpVersionMinor = 0;
		this.headers = {};
		this.trailers = {};
		this.req = null;

		this.aborted = false;
		this.complete = false;
		this.upgrade = null;

		this.rawHeaders = [];
		this.rawTrailers = [];

		this.socket = socket;
		this.connection = socket;

		this._dumped = false;
	}

	_destroy(error) {
		this.req._request.destroy(error);
	}

	setTimeout(ms, callback) {
		this.req.setTimeout(ms, callback);
		return this;
	}

	_dump() {
		if (!this._dumped) {
			this._dumped = true;

			this.removeAllListeners('data');
			this.resume();
		}
	}

	_read() {
		if (this.req) {
			this.req._request.resume();
		}
	}
}

module.exports = IncomingMessage;


/***/ }),

/***/ 4645:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const http2 = __nccwpck_require__(7565);
const agent = __nccwpck_require__(9898);
const ClientRequest = __nccwpck_require__(9632);
const IncomingMessage = __nccwpck_require__(2575);
const auto = __nccwpck_require__(7167);

const request = (url, options, callback) => {
	return new ClientRequest(url, options, callback);
};

const get = (url, options, callback) => {
	// eslint-disable-next-line unicorn/prevent-abbreviations
	const req = new ClientRequest(url, options, callback);
	req.end();

	return req;
};

module.exports = {
	...http2,
	ClientRequest,
	IncomingMessage,
	...agent,
	request,
	get,
	auto
};


/***/ }),

/***/ 1982:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const net = __nccwpck_require__(1631);
/* istanbul ignore file: https://github.com/nodejs/node/blob/v13.0.1/lib/_http_agent.js */

module.exports = options => {
	let servername = options.host;
	const hostHeader = options.headers && options.headers.host;

	if (hostHeader) {
		if (hostHeader.startsWith('[')) {
			const index = hostHeader.indexOf(']');
			if (index === -1) {
				servername = hostHeader;
			} else {
				servername = hostHeader.slice(1, -1);
			}
		} else {
			servername = hostHeader.split(':', 1)[0];
		}
	}

	if (net.isIP(servername)) {
		return '';
	}

	return servername;
};


/***/ }),

/***/ 7087:
/***/ ((module) => {

"use strict";

/* istanbul ignore file: https://github.com/nodejs/node/blob/master/lib/internal/errors.js */

const makeError = (Base, key, getMessage) => {
	module.exports[key] = class NodeError extends Base {
		constructor(...args) {
			super(typeof getMessage === 'string' ? getMessage : getMessage(args));
			this.name = `${super.name} [${key}]`;
			this.code = key;
		}
	};
};

makeError(TypeError, 'ERR_INVALID_ARG_TYPE', args => {
	const type = args[0].includes('.') ? 'property' : 'argument';

	let valid = args[1];
	const isManyTypes = Array.isArray(valid);

	if (isManyTypes) {
		valid = `${valid.slice(0, -1).join(', ')} or ${valid.slice(-1)}`;
	}

	return `The "${args[0]}" ${type} must be ${isManyTypes ? 'one of' : 'of'} type ${valid}. Received ${typeof args[2]}`;
});

makeError(TypeError, 'ERR_INVALID_PROTOCOL', args => {
	return `Protocol "${args[0]}" not supported. Expected "${args[1]}"`;
});

makeError(Error, 'ERR_HTTP_HEADERS_SENT', args => {
	return `Cannot ${args[0]} headers after they are sent to the client`;
});

makeError(TypeError, 'ERR_INVALID_HTTP_TOKEN', args => {
	return `${args[0]} must be a valid HTTP token [${args[1]}]`;
});

makeError(TypeError, 'ERR_HTTP_INVALID_HEADER_VALUE', args => {
	return `Invalid value "${args[0]} for header "${args[1]}"`;
});

makeError(TypeError, 'ERR_INVALID_CHAR', args => {
	return `Invalid character in ${args[0]} [${args[1]}]`;
});


/***/ }),

/***/ 1199:
/***/ ((module) => {

"use strict";


module.exports = header => {
	switch (header) {
		case ':method':
		case ':scheme':
		case ':authority':
		case ':path':
			return true;
		default:
			return false;
	}
};


/***/ }),

/***/ 1818:
/***/ ((module) => {

"use strict";


module.exports = (from, to, events) => {
	for (const event of events) {
		from.on(event, (...args) => to.emit(event, ...args));
	}
};


/***/ }),

/***/ 2686:
/***/ ((module) => {

"use strict";

/* istanbul ignore file: https://github.com/nodejs/node/blob/a91293d4d9ab403046ab5eb022332e4e3d249bd3/lib/internal/url.js#L1257 */

module.exports = url => {
	const options = {
		protocol: url.protocol,
		hostname: typeof url.hostname === 'string' && url.hostname.startsWith('[') ? url.hostname.slice(1, -1) : url.hostname,
		host: url.host,
		hash: url.hash,
		search: url.search,
		pathname: url.pathname,
		href: url.href,
		path: `${url.pathname || ''}${url.search || ''}`
	};

	if (typeof url.port === 'string' && url.port.length !== 0) {
		options.port = Number(url.port);
	}

	if (url.username || url.password) {
		options.auth = `${url.username || ''}:${url.password || ''}`;
	}

	return options;
};


/***/ }),

/***/ 2820:
/***/ ((__unused_webpack_module, exports) => {

//TODO: handle reviver/dehydrate function like normal
//and handle indentation, like normal.
//if anyone needs this... please send pull request.

exports.stringify = function stringify (o) {
  if('undefined' == typeof o) return o

  if(o && Buffer.isBuffer(o))
    return JSON.stringify(':base64:' + o.toString('base64'))

  if(o && o.toJSON)
    o =  o.toJSON()

  if(o && 'object' === typeof o) {
    var s = ''
    var array = Array.isArray(o)
    s = array ? '[' : '{'
    var first = true

    for(var k in o) {
      var ignore = 'function' == typeof o[k] || (!array && 'undefined' === typeof o[k])
      if(Object.hasOwnProperty.call(o, k) && !ignore) {
        if(!first)
          s += ','
        first = false
        if (array) {
          if(o[k] == undefined)
            s += 'null'
          else
            s += stringify(o[k])
        } else if (o[k] !== void(0)) {
          s += stringify(k) + ':' + stringify(o[k])
        }
      }
    }

    s += array ? ']' : '}'

    return s
  } else if ('string' === typeof o) {
    return JSON.stringify(/^:/.test(o) ? ':' + o : o)
  } else if ('undefined' === typeof o) {
    return 'null';
  } else
    return JSON.stringify(o)
}

exports.parse = function (s) {
  return JSON.parse(s, function (key, value) {
    if('string' === typeof value) {
      if(/^:base64:/.test(value))
        return Buffer.from(value.substring(8), 'base64')
      else
        return /^:/.test(value) ? value.substring(1) : value 
    }
    return value
  })
}


/***/ }),

/***/ 1531:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const EventEmitter = __nccwpck_require__(8614);
const JSONB = __nccwpck_require__(2820);

const loadStore = opts => {
	const adapters = {
		redis: '@keyv/redis',
		mongodb: '@keyv/mongo',
		mongo: '@keyv/mongo',
		sqlite: '@keyv/sqlite',
		postgresql: '@keyv/postgres',
		postgres: '@keyv/postgres',
		mysql: '@keyv/mysql'
	};
	if (opts.adapter || opts.uri) {
		const adapter = opts.adapter || /^[^:]*/.exec(opts.uri)[0];
		return new (require(adapters[adapter]))(opts);
	}

	return new Map();
};

class Keyv extends EventEmitter {
	constructor(uri, opts) {
		super();
		this.opts = Object.assign(
			{
				namespace: 'keyv',
				serialize: JSONB.stringify,
				deserialize: JSONB.parse
			},
			(typeof uri === 'string') ? { uri } : uri,
			opts
		);

		if (!this.opts.store) {
			const adapterOpts = Object.assign({}, this.opts);
			this.opts.store = loadStore(adapterOpts);
		}

		if (typeof this.opts.store.on === 'function') {
			this.opts.store.on('error', err => this.emit('error', err));
		}

		this.opts.store.namespace = this.opts.namespace;
	}

	_getKeyPrefix(key) {
		return `${this.opts.namespace}:${key}`;
	}

	get(key, opts) {
		const keyPrefixed = this._getKeyPrefix(key);
		const { store } = this.opts;
		return Promise.resolve()
			.then(() => store.get(keyPrefixed))
			.then(data => {
				return (typeof data === 'string') ? this.opts.deserialize(data) : data;
			})
			.then(data => {
				if (data === undefined) {
					return undefined;
				}

				if (typeof data.expires === 'number' && Date.now() > data.expires) {
					this.delete(key);
					return undefined;
				}

				return (opts && opts.raw) ? data : data.value;
			});
	}

	set(key, value, ttl) {
		const keyPrefixed = this._getKeyPrefix(key);
		if (typeof ttl === 'undefined') {
			ttl = this.opts.ttl;
		}

		if (ttl === 0) {
			ttl = undefined;
		}

		const { store } = this.opts;

		return Promise.resolve()
			.then(() => {
				const expires = (typeof ttl === 'number') ? (Date.now() + ttl) : null;
				value = { value, expires };
				return this.opts.serialize(value);
			})
			.then(value => store.set(keyPrefixed, value, ttl))
			.then(() => true);
	}

	delete(key) {
		const keyPrefixed = this._getKeyPrefix(key);
		const { store } = this.opts;
		return Promise.resolve()
			.then(() => store.delete(keyPrefixed));
	}

	clear() {
		const { store } = this.opts;
		return Promise.resolve()
			.then(() => store.clear());
	}
}

module.exports = Keyv;


/***/ }),

/***/ 8387:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.lowerCase = exports.localeLowerCase = void 0;
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
var SUPPORTED_LOCALE = {
    tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069",
        },
    },
    az: {
        regexp: /\u0130/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069",
        },
    },
    lt: {
        regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
        map: {
            I: "\u0069\u0307",
            J: "\u006A\u0307",
            Į: "\u012F\u0307",
            Ì: "\u0069\u0307\u0300",
            Í: "\u0069\u0307\u0301",
            Ĩ: "\u0069\u0307\u0303",
        },
    },
};
/**
 * Localized lower case.
 */
function localeLowerCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang)
        return lowerCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));
    return lowerCase(str);
}
exports.localeLowerCase = localeLowerCase;
/**
 * Lower case as a function.
 */
function lowerCase(str) {
    return str.toLowerCase();
}
exports.lowerCase = lowerCase;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9662:
/***/ ((module) => {

"use strict";

module.exports = object => {
	const result = {};

	for (const [key, value] of Object.entries(object)) {
		result[key.toLowerCase()] = value;
	}

	return result;
};


/***/ }),

/***/ 2610:
/***/ ((module) => {

"use strict";


// We define these manually to ensure they're always copied
// even if they would move up the prototype chain
// https://nodejs.org/api/http.html#http_class_http_incomingmessage
const knownProps = [
	'destroy',
	'setTimeout',
	'socket',
	'headers',
	'trailers',
	'rawHeaders',
	'statusCode',
	'httpVersion',
	'httpVersionMinor',
	'httpVersionMajor',
	'rawTrailers',
	'statusMessage'
];

module.exports = (fromStream, toStream) => {
	const fromProps = new Set(Object.keys(fromStream).concat(knownProps));

	for (const prop of fromProps) {
		// Don't overwrite existing properties
		if (prop in toStream) {
			continue;
		}

		toStream[prop] = typeof fromStream[prop] === 'function' ? fromStream[prop].bind(fromStream) : fromStream[prop];
	}
};


/***/ }),

/***/ 6613:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.noCase = void 0;
var lower_case_1 = __nccwpck_require__(8387);
// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */
function noCase(input, options) {
    if (options === void 0) { options = {}; }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lower_case_1.lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    while (result.charAt(end - 1) === "\0")
        end--;
    // Transform each token independently.
    return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
exports.noCase = noCase;
/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input, re, value) {
    if (re instanceof RegExp)
        return input.replace(re, value);
    return re.reduce(function (input, re) { return input.replace(re, value); }, input);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7952:
/***/ ((module) => {

"use strict";


// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
const DATA_URL_DEFAULT_MIME_TYPE = 'text/plain';
const DATA_URL_DEFAULT_CHARSET = 'us-ascii';

const testParameter = (name, filters) => {
	return filters.some(filter => filter instanceof RegExp ? filter.test(name) : filter === name);
};

const normalizeDataURL = (urlString, {stripHash}) => {
	const match = /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(urlString);

	if (!match) {
		throw new Error(`Invalid URL: ${urlString}`);
	}

	let {type, data, hash} = match.groups;
	const mediaType = type.split(';');
	hash = stripHash ? '' : hash;

	let isBase64 = false;
	if (mediaType[mediaType.length - 1] === 'base64') {
		mediaType.pop();
		isBase64 = true;
	}

	// Lowercase MIME type
	const mimeType = (mediaType.shift() || '').toLowerCase();
	const attributes = mediaType
		.map(attribute => {
			let [key, value = ''] = attribute.split('=').map(string => string.trim());

			// Lowercase `charset`
			if (key === 'charset') {
				value = value.toLowerCase();

				if (value === DATA_URL_DEFAULT_CHARSET) {
					return '';
				}
			}

			return `${key}${value ? `=${value}` : ''}`;
		})
		.filter(Boolean);

	const normalizedMediaType = [
		...attributes
	];

	if (isBase64) {
		normalizedMediaType.push('base64');
	}

	if (normalizedMediaType.length !== 0 || (mimeType && mimeType !== DATA_URL_DEFAULT_MIME_TYPE)) {
		normalizedMediaType.unshift(mimeType);
	}

	return `data:${normalizedMediaType.join(';')},${isBase64 ? data.trim() : data}${hash ? `#${hash}` : ''}`;
};

const normalizeUrl = (urlString, options) => {
	options = {
		defaultProtocol: 'http:',
		normalizeProtocol: true,
		forceHttp: false,
		forceHttps: false,
		stripAuthentication: true,
		stripHash: false,
		stripTextFragment: true,
		stripWWW: true,
		removeQueryParameters: [/^utm_\w+/i],
		removeTrailingSlash: true,
		removeSingleSlash: true,
		removeDirectoryIndex: false,
		sortQueryParameters: true,
		...options
	};

	urlString = urlString.trim();

	// Data URL
	if (/^data:/i.test(urlString)) {
		return normalizeDataURL(urlString, options);
	}

	if (/^view-source:/i.test(urlString)) {
		throw new Error('`view-source:` is not supported as it is a non-standard protocol');
	}

	const hasRelativeProtocol = urlString.startsWith('//');
	const isRelativeUrl = !hasRelativeProtocol && /^\.*\//.test(urlString);

	// Prepend protocol
	if (!isRelativeUrl) {
		urlString = urlString.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, options.defaultProtocol);
	}

	const urlObj = new URL(urlString);

	if (options.forceHttp && options.forceHttps) {
		throw new Error('The `forceHttp` and `forceHttps` options cannot be used together');
	}

	if (options.forceHttp && urlObj.protocol === 'https:') {
		urlObj.protocol = 'http:';
	}

	if (options.forceHttps && urlObj.protocol === 'http:') {
		urlObj.protocol = 'https:';
	}

	// Remove auth
	if (options.stripAuthentication) {
		urlObj.username = '';
		urlObj.password = '';
	}

	// Remove hash
	if (options.stripHash) {
		urlObj.hash = '';
	} else if (options.stripTextFragment) {
		urlObj.hash = urlObj.hash.replace(/#?:~:text.*?$/i, '');
	}

	// Remove duplicate slashes if not preceded by a protocol
	if (urlObj.pathname) {
		urlObj.pathname = urlObj.pathname.replace(/(?<!\b(?:[a-z][a-z\d+\-.]{1,50}:))\/{2,}/g, '/');
	}

	// Decode URI octets
	if (urlObj.pathname) {
		try {
			urlObj.pathname = decodeURI(urlObj.pathname);
		} catch (_) {}
	}

	// Remove directory index
	if (options.removeDirectoryIndex === true) {
		options.removeDirectoryIndex = [/^index\.[a-z]+$/];
	}

	if (Array.isArray(options.removeDirectoryIndex) && options.removeDirectoryIndex.length > 0) {
		let pathComponents = urlObj.pathname.split('/');
		const lastComponent = pathComponents[pathComponents.length - 1];

		if (testParameter(lastComponent, options.removeDirectoryIndex)) {
			pathComponents = pathComponents.slice(0, pathComponents.length - 1);
			urlObj.pathname = pathComponents.slice(1).join('/') + '/';
		}
	}

	if (urlObj.hostname) {
		// Remove trailing dot
		urlObj.hostname = urlObj.hostname.replace(/\.$/, '');

		// Remove `www.`
		if (options.stripWWW && /^www\.(?!www\.)(?:[a-z\-\d]{1,63})\.(?:[a-z.\-\d]{2,63})$/.test(urlObj.hostname)) {
			// Each label should be max 63 at length (min: 1).
			// Source: https://en.wikipedia.org/wiki/Hostname#Restrictions_on_valid_host_names
			// Each TLD should be up to 63 characters long (min: 2).
			// It is technically possible to have a single character TLD, but none currently exist.
			urlObj.hostname = urlObj.hostname.replace(/^www\./, '');
		}
	}

	// Remove query unwanted parameters
	if (Array.isArray(options.removeQueryParameters)) {
		for (const key of [...urlObj.searchParams.keys()]) {
			if (testParameter(key, options.removeQueryParameters)) {
				urlObj.searchParams.delete(key);
			}
		}
	}

	if (options.removeQueryParameters === true) {
		urlObj.search = '';
	}

	// Sort query parameters
	if (options.sortQueryParameters) {
		urlObj.searchParams.sort();
	}

	if (options.removeTrailingSlash) {
		urlObj.pathname = urlObj.pathname.replace(/\/$/, '');
	}

	const oldUrlString = urlString;

	// Take advantage of many of the Node `url` normalizations
	urlString = urlObj.toString();

	if (!options.removeSingleSlash && urlObj.pathname === '/' && !oldUrlString.endsWith('/') && urlObj.hash === '') {
		urlString = urlString.replace(/\/$/, '');
	}

	// Remove ending `/` unless removeSingleSlash is false
	if ((options.removeTrailingSlash || urlObj.pathname === '/') && urlObj.hash === '' && options.removeSingleSlash) {
		urlString = urlString.replace(/\/$/, '');
	}

	// Restore relative protocol, if applicable
	if (hasRelativeProtocol && !options.normalizeProtocol) {
		urlString = urlString.replace(/^http:\/\//, '//');
	}

	// Remove http/https
	if (options.stripProtocol) {
		urlString = urlString.replace(/^(?:https?:)?\/\//, '');
	}

	return urlString;
};

module.exports = normalizeUrl;


/***/ }),

/***/ 1223:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var wrappy = __nccwpck_require__(2940)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),

/***/ 9072:
/***/ ((module) => {

"use strict";


class CancelError extends Error {
	constructor(reason) {
		super(reason || 'Promise was canceled');
		this.name = 'CancelError';
	}

	get isCanceled() {
		return true;
	}
}

class PCancelable {
	static fn(userFn) {
		return (...arguments_) => {
			return new PCancelable((resolve, reject, onCancel) => {
				arguments_.push(onCancel);
				// eslint-disable-next-line promise/prefer-await-to-then
				userFn(...arguments_).then(resolve, reject);
			});
		};
	}

	constructor(executor) {
		this._cancelHandlers = [];
		this._isPending = true;
		this._isCanceled = false;
		this._rejectOnCancel = true;

		this._promise = new Promise((resolve, reject) => {
			this._reject = reject;

			const onResolve = value => {
				if (!this._isCanceled || !onCancel.shouldReject) {
					this._isPending = false;
					resolve(value);
				}
			};

			const onReject = error => {
				this._isPending = false;
				reject(error);
			};

			const onCancel = handler => {
				if (!this._isPending) {
					throw new Error('The `onCancel` handler was attached after the promise settled.');
				}

				this._cancelHandlers.push(handler);
			};

			Object.defineProperties(onCancel, {
				shouldReject: {
					get: () => this._rejectOnCancel,
					set: boolean => {
						this._rejectOnCancel = boolean;
					}
				}
			});

			return executor(onResolve, onReject, onCancel);
		});
	}

	then(onFulfilled, onRejected) {
		// eslint-disable-next-line promise/prefer-await-to-then
		return this._promise.then(onFulfilled, onRejected);
	}

	catch(onRejected) {
		return this._promise.catch(onRejected);
	}

	finally(onFinally) {
		return this._promise.finally(onFinally);
	}

	cancel(reason) {
		if (!this._isPending || this._isCanceled) {
			return;
		}

		this._isCanceled = true;

		if (this._cancelHandlers.length > 0) {
			try {
				for (const handler of this._cancelHandlers) {
					handler();
				}
			} catch (error) {
				this._reject(error);
				return;
			}
		}

		if (this._rejectOnCancel) {
			this._reject(new CancelError(reason));
		}
	}

	get isCanceled() {
		return this._isCanceled;
	}
}

Object.setPrototypeOf(PCancelable.prototype, Promise.prototype);

module.exports = PCancelable;
module.exports.CancelError = CancelError;


/***/ }),

/***/ 8452:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.paramCase = void 0;
var tslib_1 = __nccwpck_require__(1472);
var dot_case_1 = __nccwpck_require__(2246);
function paramCase(input, options) {
    if (options === void 0) { options = {}; }
    return dot_case_1.dotCase(input, tslib_1.__assign({ delimiter: "-" }, options));
}
exports.paramCase = paramCase;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1472:
/***/ ((module) => {

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if ( true && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || from);
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});


/***/ }),

/***/ 5995:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pascalCase = exports.pascalCaseTransformMerge = exports.pascalCaseTransform = void 0;
var tslib_1 = __nccwpck_require__(1769);
var no_case_1 = __nccwpck_require__(6613);
function pascalCaseTransform(input, index) {
    var firstChar = input.charAt(0);
    var lowerChars = input.substr(1).toLowerCase();
    if (index > 0 && firstChar >= "0" && firstChar <= "9") {
        return "_" + firstChar + lowerChars;
    }
    return "" + firstChar.toUpperCase() + lowerChars;
}
exports.pascalCaseTransform = pascalCaseTransform;
function pascalCaseTransformMerge(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
exports.pascalCaseTransformMerge = pascalCaseTransformMerge;
function pascalCase(input, options) {
    if (options === void 0) { options = {}; }
    return no_case_1.noCase(input, tslib_1.__assign({ delimiter: "", transform: pascalCaseTransform }, options));
}
exports.pascalCase = pascalCase;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1769:
/***/ ((module) => {

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if ( true && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || from);
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});


/***/ }),

/***/ 3553:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pathCase = void 0;
var tslib_1 = __nccwpck_require__(2595);
var dot_case_1 = __nccwpck_require__(2246);
function pathCase(input, options) {
    if (options === void 0) { options = {}; }
    return dot_case_1.dotCase(input, tslib_1.__assign({ delimiter: "/" }, options));
}
exports.pathCase = pathCase;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2595:
/***/ ((module) => {

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if ( true && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || from);
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});


/***/ }),

/***/ 8341:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var once = __nccwpck_require__(1223)
var eos = __nccwpck_require__(1205)
var fs = __nccwpck_require__(5747) // we only need fs to get the ReadStream and WriteStream prototypes

var noop = function () {}
var ancient = /^v?\.0/.test(process.version)

var isFn = function (fn) {
  return typeof fn === 'function'
}

var isFS = function (stream) {
  if (!ancient) return false // newer node version do not need to care about fs is a special way
  if (!fs) return false // browser
  return (stream instanceof (fs.ReadStream || noop) || stream instanceof (fs.WriteStream || noop)) && isFn(stream.close)
}

var isRequest = function (stream) {
  return stream.setHeader && isFn(stream.abort)
}

var destroyer = function (stream, reading, writing, callback) {
  callback = once(callback)

  var closed = false
  stream.on('close', function () {
    closed = true
  })

  eos(stream, {readable: reading, writable: writing}, function (err) {
    if (err) return callback(err)
    closed = true
    callback()
  })

  var destroyed = false
  return function (err) {
    if (closed) return
    if (destroyed) return
    destroyed = true

    if (isFS(stream)) return stream.close(noop) // use close for fs streams to avoid fd leaks
    if (isRequest(stream)) return stream.abort() // request.destroy just do .end - .abort is what we want

    if (isFn(stream.destroy)) return stream.destroy()

    callback(err || new Error('stream was destroyed'))
  }
}

var call = function (fn) {
  fn()
}

var pipe = function (from, to) {
  return from.pipe(to)
}

var pump = function () {
  var streams = Array.prototype.slice.call(arguments)
  var callback = isFn(streams[streams.length - 1] || noop) && streams.pop() || noop

  if (Array.isArray(streams[0])) streams = streams[0]
  if (streams.length < 2) throw new Error('pump requires two streams per minimum')

  var error
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1
    var writing = i > 0
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err
      if (err) destroys.forEach(call)
      if (reading) return
      destroys.forEach(call)
      callback(error)
    })
  })

  return streams.reduce(pipe)
}

module.exports = pump


/***/ }),

/***/ 9273:
/***/ ((module) => {

"use strict";


class QuickLRU {
	constructor(options = {}) {
		if (!(options.maxSize && options.maxSize > 0)) {
			throw new TypeError('`maxSize` must be a number greater than 0');
		}

		this.maxSize = options.maxSize;
		this.onEviction = options.onEviction;
		this.cache = new Map();
		this.oldCache = new Map();
		this._size = 0;
	}

	_set(key, value) {
		this.cache.set(key, value);
		this._size++;

		if (this._size >= this.maxSize) {
			this._size = 0;

			if (typeof this.onEviction === 'function') {
				for (const [key, value] of this.oldCache.entries()) {
					this.onEviction(key, value);
				}
			}

			this.oldCache = this.cache;
			this.cache = new Map();
		}
	}

	get(key) {
		if (this.cache.has(key)) {
			return this.cache.get(key);
		}

		if (this.oldCache.has(key)) {
			const value = this.oldCache.get(key);
			this.oldCache.delete(key);
			this._set(key, value);
			return value;
		}
	}

	set(key, value) {
		if (this.cache.has(key)) {
			this.cache.set(key, value);
		} else {
			this._set(key, value);
		}

		return this;
	}

	has(key) {
		return this.cache.has(key) || this.oldCache.has(key);
	}

	peek(key) {
		if (this.cache.has(key)) {
			return this.cache.get(key);
		}

		if (this.oldCache.has(key)) {
			return this.oldCache.get(key);
		}
	}

	delete(key) {
		const deleted = this.cache.delete(key);
		if (deleted) {
			this._size--;
		}

		return this.oldCache.delete(key) || deleted;
	}

	clear() {
		this.cache.clear();
		this.oldCache.clear();
		this._size = 0;
	}

	* keys() {
		for (const [key] of this) {
			yield key;
		}
	}

	* values() {
		for (const [, value] of this) {
			yield value;
		}
	}

	* [Symbol.iterator]() {
		for (const item of this.cache) {
			yield item;
		}

		for (const item of this.oldCache) {
			const [key] = item;
			if (!this.cache.has(key)) {
				yield item;
			}
		}
	}

	get size() {
		let oldCacheSize = 0;
		for (const key of this.oldCache.keys()) {
			if (!this.cache.has(key)) {
				oldCacheSize++;
			}
		}

		return Math.min(this._size + oldCacheSize, this.maxSize);
	}
}

module.exports = QuickLRU;


/***/ }),

/***/ 6624:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const tls = __nccwpck_require__(4016);

module.exports = (options = {}, connect = tls.connect) => new Promise((resolve, reject) => {
	let timeout = false;

	let socket;

	const callback = async () => {
		socket.off('timeout', onTimeout);
		socket.off('error', reject);

		if (options.resolveSocket) {
			resolve({alpnProtocol: socket.alpnProtocol, socket, timeout});

			if (timeout) {
				await Promise.resolve();
				socket.emit('timeout');
			}
		} else {
			socket.destroy();
			resolve({alpnProtocol: socket.alpnProtocol, timeout});
		}
	};

	const onTimeout = async () => {
		timeout = true;
		callback();
	};

	(async () => {
		try {
			socket = await connect(options, callback);

			socket.on('error', reject);
			socket.once('timeout', onTimeout);
		} catch (error) {
			reject(error);
		}
	})();
});


/***/ }),

/***/ 9004:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const Readable = __nccwpck_require__(2413).Readable;
const lowercaseKeys = __nccwpck_require__(9662);

class Response extends Readable {
	constructor(statusCode, headers, body, url) {
		if (typeof statusCode !== 'number') {
			throw new TypeError('Argument `statusCode` should be a number');
		}
		if (typeof headers !== 'object') {
			throw new TypeError('Argument `headers` should be an object');
		}
		if (!(body instanceof Buffer)) {
			throw new TypeError('Argument `body` should be a buffer');
		}
		if (typeof url !== 'string') {
			throw new TypeError('Argument `url` should be a string');
		}

		super();
		this.statusCode = statusCode;
		this.headers = lowercaseKeys(headers);
		this.body = body;
		this.url = url;
	}

	_read() {
		this.push(this.body);
		this.push(null);
	}
}

module.exports = Response;


/***/ }),

/***/ 9229:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sentenceCase = exports.sentenceCaseTransform = void 0;
var tslib_1 = __nccwpck_require__(6166);
var no_case_1 = __nccwpck_require__(6613);
var upper_case_first_1 = __nccwpck_require__(6256);
function sentenceCaseTransform(input, index) {
    var result = input.toLowerCase();
    if (index === 0)
        return upper_case_first_1.upperCaseFirst(result);
    return result;
}
exports.sentenceCaseTransform = sentenceCaseTransform;
function sentenceCase(input, options) {
    if (options === void 0) { options = {}; }
    return no_case_1.noCase(input, tslib_1.__assign({ delimiter: " ", transform: sentenceCaseTransform }, options));
}
exports.sentenceCase = sentenceCase;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6166:
/***/ ((module) => {

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if ( true && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || from);
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});


/***/ }),

/***/ 6213:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.snakeCase = void 0;
var tslib_1 = __nccwpck_require__(2046);
var dot_case_1 = __nccwpck_require__(2246);
function snakeCase(input, options) {
    if (options === void 0) { options = {}; }
    return dot_case_1.dotCase(input, tslib_1.__assign({ delimiter: "_" }, options));
}
exports.snakeCase = snakeCase;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2046:
/***/ ((module) => {

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if ( true && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || from);
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});


/***/ }),

/***/ 4294:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(4219);


/***/ }),

/***/ 4219:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var net = __nccwpck_require__(1631);
var tls = __nccwpck_require__(4016);
var http = __nccwpck_require__(8605);
var https = __nccwpck_require__(7211);
var events = __nccwpck_require__(8614);
var assert = __nccwpck_require__(2357);
var util = __nccwpck_require__(1669);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 6256:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.upperCaseFirst = void 0;
/**
 * Upper case the first character of an input string.
 */
function upperCaseFirst(input) {
    return input.charAt(0).toUpperCase() + input.substr(1);
}
exports.upperCaseFirst = upperCaseFirst;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5997:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.upperCase = exports.localeUpperCase = void 0;
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
var SUPPORTED_LOCALE = {
    tr: {
        regexp: /[\u0069]/g,
        map: {
            i: "\u0130",
        },
    },
    az: {
        regexp: /[\u0069]/g,
        map: {
            i: "\u0130",
        },
    },
    lt: {
        regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
        map: {
            i̇: "\u0049",
            j̇: "\u004A",
            į̇: "\u012E",
            i̇̀: "\u00CC",
            i̇́: "\u00CD",
            i̇̃: "\u0128",
        },
    },
};
/**
 * Localized upper case.
 */
function localeUpperCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang)
        return upperCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));
    return upperCase(str);
}
exports.localeUpperCase = localeUpperCase;
/**
 * Upper case as a function.
 */
function upperCase(str) {
    return str.toUpperCase();
}
exports.upperCase = upperCase;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2940:
/***/ ((module) => {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),

/***/ 2357:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 4293:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 881:
/***/ ((module) => {

"use strict";
module.exports = require("dns");

/***/ }),

/***/ 8614:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 5747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 8605:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 7565:
/***/ ((module) => {

"use strict";
module.exports = require("http2");

/***/ }),

/***/ 7211:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 1631:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 2087:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 5622:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 2413:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 4016:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 8835:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 1669:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 8761:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nccwpck_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nccwpck_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__nccwpck_require__.r(__webpack_exports__);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(2186);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nccwpck_require__.n(_actions_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _saucelabs_zap__WEBPACK_IMPORTED_MODULE_1__ = __nccwpck_require__(5227);
/* harmony import */ var _saucelabs_zap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nccwpck_require__.n(_saucelabs_zap__WEBPACK_IMPORTED_MODULE_1__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const sleep = (time = 100) => __awaiter(void 0, void 0, void 0, function* () { return new Promise(resolve => setTimeout(resolve, time)); });
const getAlertByRisk = (alerts, risk) => alerts.filter(alert => alert.risk === risk);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const username = (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)('username');
        const accessKey = (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)('accessKey');
        const urlToScan = (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)('url');
        const asv = parseInt((0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)('allowedSevereVulnerabilties'), 10) || 0;
        const amv = parseInt((0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)('allowedMediumVulnerabilties'), 10) || 0;
        const alv = parseInt((0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)('allowedLowVulnerabilties'), 10) || 0;
        const aiv = parseInt((0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)('allowedInformationalVulnerabilties'), 10) || -1;
        const startTime = Date.now();
        if (!username || !accessKey) {
            return (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.setFailed)('Missing "username" or "accessKey" GitHub Action parameter');
        }
        if (!urlToScan) {
            return (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.setFailed)('Missing GitHub Action parameter "urlToScan"');
        }
        // @ts-expect-error https://github.com/saucelabs/node-zap/issues/2
        const zaproxy = new (_saucelabs_zap__WEBPACK_IMPORTED_MODULE_1___default())({
            username,
            accessKey
        });
        /**
         * start Sauce Labs Zap session
         */
        yield zaproxy.session.newSession({ commandTimeout: 1000 * 60 });
        const { scan } = yield zaproxy.spider.scan({ url: urlToScan });
        (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.info)(`Exploring application ${urlToScan}`);
        while (true) {
            const { status } = yield zaproxy.spider.status({
                scanId: parseInt(scan, 10)
            });
            if (status === '100') {
                break;
            }
            process.stdout.cursorTo(0);
            process.stdout.write(`Scan Status: ${status}%`);
            yield sleep();
        }
        (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.info)('Start analyzing application');
        const { scan: ascan } = yield zaproxy.ascan.scan({
            url: urlToScan,
            scanPolicyName: 'Default Policy'
        });
        while (true) {
            const { status } = yield zaproxy.ascan.status({
                scanId: parseInt(ascan, 10)
            });
            if (status === '100') {
                break;
            }
            yield sleep();
        }
        (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.info)('Computing vulnerabilities');
        const { alerts } = yield zaproxy.alert.alerts();
        (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.startGroup)(`Vulnerability results`);
        for (const alert of alerts) {
            const url = new URL(alert.url);
            (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.info)(`${url.pathname} (${alert.risk}): ${alert.name}\n` +
                `Description: ${alert.description.trim()}\n` +
                `Solution: ${alert.solution.trim()}\n\n`);
        }
        (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.endGroup)();
        yield zaproxy.session.deleteSession();
        (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.info)(`Computed scan results after ${(Date.now() - startTime) / 1000}s`);
        const severeVulnerabilities = getAlertByRisk(alerts, 'severe');
        const mediumVulnerabilities = getAlertByRisk(alerts, 'medium');
        const lowVulnerabilities = getAlertByRisk(alerts, 'low');
        const informationalVulnerabilities = getAlertByRisk(alerts, 'informational');
        (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.info)('Vulnerabilities found:\n' +
            `Severe: ${severeVulnerabilities.length}\n` +
            `Medium: ${mediumVulnerabilities.length}\n` +
            `Low: ${lowVulnerabilities.length}\n` +
            `Informational: ${informationalVulnerabilities.length}\n`);
        if (asv !== -1 && severeVulnerabilities.length > asv)
            (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.setFailed)(`Found ${severeVulnerabilities.length} severe vulnerabilities, allowed are ${asv}`);
        if (amv !== -1 && mediumVulnerabilities.length > amv)
            (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.setFailed)(`Found ${mediumVulnerabilities.length} medium vulnerabilities, allowed are ${amv}`);
        if (alv !== -1 && lowVulnerabilities.length > alv)
            (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.setFailed)(`Found ${lowVulnerabilities.length} low vulnerabilities, allowed are ${alv}`);
        if (aiv !== -1 && informationalVulnerabilities.length > aiv)
            (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.setFailed)(`Found ${informationalVulnerabilities.length} informational vulnerabilities, allowed are ${aiv}`);
    });
}
// eslint-disable-next-line github/no-then
run().catch(error => (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.setFailed)(error.message));

})();

module.exports = __webpack_exports__;
/******/ })()
;