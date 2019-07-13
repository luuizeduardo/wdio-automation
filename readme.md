# Functional automation with WebDriver.io

[![Build Status](https://travis-ci.com/luuizeduardo/wdio-automation.svg?branch=master)](https://travis-ci.com/luuizeduardo/wdio-automation)

This repository was created to functional test automation of [automation practice website](http://automationpractice.com).

Tecnologies used:
- [WebDriver.io](https://webdriver.io)
- [Docker](https://docker.com)
- [Selenium for docker](https://github.com/SeleniumHQ/docker-selenium)
- [Report Portal](https://reportportal.io/)

### Setting up Report Portal

_ReportPortal is a service, that provides increased capabilities to speed up results analysis and reporting through the use of built-in analytic features._

Follow steps [here](https://reportportal.io/download) to install the service on Docker.

## Setup

The guide goes throught steps required to setup test automation project based on [WebDriver.io](https://webdriver.io) in order to work with Report Portal.

## Preparing Report Portal

In order to report test execution results to Report Portal, test automation project needs to provide the following info:
- Report Portal instance address the results will be reported to.
- User identity the results will be uploaded by.
- Project name.
- Test launch properties.

Login to a service instance and perform the next steps:

1. Go through the projects list and pick the one where test results are expected to come into. If there no such project, go to `Administrate->Add project` and create it.
2. Take uuid from `Profile` screen. The value will be used to authorize test automation project to the service.
3. Keep sensitive data separatedly. It is recommended to keep sensitive data in secret, so we are not going to commit any of this. Let's use `dotenv` to conveniently provide and access such data in the project. Install it with `npm i dotenv -D` and then create `.env` file in the project root with values for these variables:
- RP_USERNAME: Name of the user who will be used by auto test to verify.
- RP_PASSWORD: User password.
- RP_USERUUID: User UUID. Refer to Preparing Report Portal for instructions how to get it.
- RP_ENDPOINT: Address of report portal.
- RP_PROJECT: Project that you create in step 1.
4. Modify WDIO config to support ReportPortal. The final step we need to do is to notify WDIO that we want to use NPM modules responsible for integration with RP. Report Portal support is enabled by 2 NPM modules: `wdio-reportportal-reporter` and `wdio-reportportal-service`. Refer to the corresponding NPM repo pages for their description. To activate the modules insert the following snippet for project config file (wdio.config.js) at the beginning:
```JS
require('dotenv').config()
const reportportal = require('wdio-reportportal-reporter');
const RpService = require("wdio-reportportal-service");
const conf = JSON.parse(require('fs').readFileSync('reportportal.config.json'));
conf.reportPortalClientConfig.token = process.env.RP_USERUUID
conf.reportPortalClientConfig.endpoint = process.env.RP_ENDPOINT
conf.reportPortalClientConfig.project = process.env.RP_PROJECT
```
---

-- Coming soon --