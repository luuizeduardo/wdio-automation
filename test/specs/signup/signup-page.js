const assert = require('assert')
const signupPage = require('../../../pages/signup/signup.page')
const takeScreenshot = require('../../../utils/screenshot')
const data = require('../../../resources/signup/signup')

let assertion_text = ""

describe('Automation practice signup page', function() {
  before(function (){
    browser.url('/index.php?controller=authentication&back=my-account')
  })

  it('must show an error message with invalid credentials', function() {
    signupPage.fillPreForm(data.signup_pre_form_valid_credentials)

    takeScreenshot('./logs/screenshot/', 'signup_pre_form_valid_credentials.png')

    const elem = $('#customer_firstname')
    elem.waitForExist(2000)

    assertion_text = $('.page-heading').getText()

    assert.strictEqual(assertion_text, data.signup_pre_form_valid_credentials.assertion)
  });

  it('must create an account', function() {
    signupPage.fillForm(data.signup_valid_credentials)

    takeScreenshot('./logs/screenshot/', 'signup_valid_credentials.png')

    assertion_text = $('.page-heading').getText()

    assert.strictEqual(assertion_text, data.signup_valid_credentials.assertion)
  });
});