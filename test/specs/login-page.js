const assert = require('assert');
const loginPage = require('../../pages/login/login.page');

describe('Automation practice login page', function() {
  it('must show an error message with invalid credentials', function() {
    browser.url('/index.php?controller=authentication&back=my-account');
    loginPage.fillForm("123@teste.com", "123")

    browser.saveScreenshot('./screenshot/error_invalid_login.png');

    const title = browser.getTitle();
    assert.strictEqual(title, 'Login - My Store');
  });
});