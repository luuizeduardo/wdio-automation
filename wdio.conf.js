require('dotenv').config()
const reportportal = require('wdio-reportportal-reporter');
const RpService = require("wdio-reportportal-service");

const conf = JSON.parse(require('fs').readFileSync('reportportal.config.json'));
conf.reportPortalClientConfig.token = process.env.RP_USERUUID
conf.reportPortalClientConfig.endpoint = process.env.RP_ENDPOINT
conf.reportPortalClientConfig.project = process.env.RP_PROJECT

exports.config = {
  runner: 'local',
  hostname: 'localhost',
  port: 4444,
  path: '/wd/hub',
  specs: [
    './test/specs/signup/*.js'
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
  },
  {
    maxInstances: 5,
    browserName: 'firefox',
  }],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://automationpractice.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  services: [[RpService, {}]],
  reporters: [[reportportal, conf]],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
}
