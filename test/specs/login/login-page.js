const assert = require('assert')
const loginPage = require('../../../pages/login/login.page')
const takeScreenshot = require('../../../utils/screenshot')
const data = require('../../../resources/login/login')

describe('Automation practice login page', function() {
  before(function (){
    browser.url('/index.php?controller=authentication&back=my-account')
  })

  it('must show an error message with invalid credentials', function() {
    loginPage.fillForm(data.invalid_credencials)

    const title = browser.getTitle()
    assert.strictEqual(title, data.invalid_credencials.assertion_title)

    takeScreenshot('./logs/screenshot/', 'error_invalid_login.png')
  });

  it('must redirect user to my account page', function() {
    loginPage.fillForm(data.valid_credentials)

    const title = browser.getTitle()
    assert.strictEqual(title, data.valid_credentials.assertion_title)

    const page_title = $('.page-heading').getText()
    assert.strictEqual(page_title, data.valid_credentials.assertion_page)

    takeScreenshot('./logs/screenshot/', 'valid_login.png')
  });
});