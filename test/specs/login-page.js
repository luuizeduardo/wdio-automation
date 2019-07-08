const assert = require('assert')
const loginPage = require('../../pages/login/login.page')
const takeScreenshot = require('../../utils/screenshot')
const data = require('../../resources/login')

describe('Automation practice login page', function() {
  it('must show an error message with invalid credentials', function() {
    browser.url('/index.php?controller=authentication&back=my-account')
    loginPage.fillForm(data.invalid_credencials)

    takeScreenshot('./logs/screenshot/error_invalid_login.png')

    const title = browser.getTitle()
    assert.strictEqual(title, data.invalid_credencials.assertion_title)
  });

  it('must redirect user to my account page', function() {
    browser.url('/index.php?controller=authentication&back=my-account')
    loginPage.fillForm(data.valid_credentials)

    takeScreenshot('./logs/screenshot/valid_login.png')

    const title = browser.getTitle()
    assert.strictEqual(title, data.valid_credentials.assertion_title)

    const page_title = $('.page-heading').getText()
    assert.strictEqual(page_title, data.valid_credentials.assertion_page)
  });
});