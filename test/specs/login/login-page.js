const assert = require("assert")
const loginPage = require("../../../pages/login/login.page")
const helper = require("../../../utils/helper")
const data = require("../../../resources/login/login")

describe("Automation practice login page", function() {
  before(function (){
    browser.url("/index.php?controller=authentication&back=my-account")
  })

  it("must show an error message with invalid credentials", function() {
    loginPage.fillForm(data.invalid_credencials)

    assert.strictEqual(helper.getBrowserTitle(), data.invalid_credencials.assertion_title)
    helper.takeScreenshot("./logs/screenshot/", "error_invalid_login.png")
  });

  it("must redirect user to my account page", function() {
    loginPage.fillForm(data.valid_credentials)

    assert.strictEqual(helper.getBrowserTitle(), data.valid_credentials.assertion_title)
    assert.strictEqual(helper.getPageHeader(), data.valid_credentials.assertion_page)

    helper.takeScreenshot("./logs/screenshot/", "valid_login.png")
  });
});