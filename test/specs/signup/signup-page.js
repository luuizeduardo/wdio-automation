const assert = require('assert')
const signupPage = require('../../../pages/signup/signup.page')
const takeScreenshot = require('../../../utils/screenshot')
const fakeData = require('../../../utils/generate-data')

let signup_valid_credentials = {
  "email": fakeData.fakeEmail(),
  "assertion": "Login - My Store"
}

describe('Automation practice signup page', function() {
  before(function (){
    browser.url('/index.php?controller=authentication&back=my-account')
  })

  it('must show an error message with invalid credentials', function() {
    signupPage.fillPreForm(signup_valid_credentials)

    takeScreenshot('./logs/screenshot/signup_valid_credentials.png')

    const title = browser.getTitle()
    assert.strictEqual(title, signup_valid_credentials.assertion)
  });
});