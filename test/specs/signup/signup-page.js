const assert = require('assert')
const signupPage = require('../../../pages/signup/signup.page')
const takeScreenshot = require('../../../utils/screenshot')
const fakeData = require('../../../utils/generate-data')

let signup_pre_form_valid_credentials = {
  "email": fakeData.fakeEmail(),
  "assertion": "CREATE AN ACCOUNT"
}

let signup_valid_credentials = {
  "gender": fakeData.fakeNumber(0, 2),
  "firstName": fakeData.fakeFirstName(),
  "lastName": fakeData.fakeLastName(),
  "password": fakeData.fakePassword(),
  "day": fakeData.fakeNumber(1, 28),
  "month": fakeData.fakeNumber(1, 12),
  "year": fakeData.fakeNumber(1960, 2000),
  "newsletter": fakeData.fakeNumber(0, 2),
  "receiveOffers": fakeData.fakeNumber(0, 2),
  "company": fakeData.fakeCompanyName(),
  "address": fakeData.fakeStreetName(),
  "addressComplement": fakeData.fakeSecondaryAddress(),
  "city": fakeData.fakeCityName(),
  "state": fakeData.fakeNumber(1, 50),
  "postalCode": fakeData.fakePostalCode(),
  "country": 21,
  "additionalInfo": fakeData.fakeLorem(),
  "phone": fakeData.fakePhoneNumber(),
  "mobilePhone": fakeData.fakePhoneNumber(),
  "assertion": "MY ACCOUNT"
}

let assertion_text = ""

describe('Automation practice signup page', function() {
  before(function (){
    browser.url('/index.php?controller=authentication&back=my-account')
  })

  it('must show an error message with invalid credentials', function() {
    signupPage.fillPreForm(signup_pre_form_valid_credentials)

    takeScreenshot('./logs/screenshot/signup_pre_form_valid_credentials.png')

    const elem = $('#customer_firstname')
    elem.waitForExist(2000)

    assertion_text = $('.page-heading').getText()

    assert.strictEqual(assertion_text, signup_pre_form_valid_credentials.assertion)
  });

  it('must create an account', function() {
    signupPage.fillForm(signup_valid_credentials)

    takeScreenshot('./logs/screenshot/signup_valid_credentials.png')

    assertion_text = $('.page-heading').getText()

    assert.strictEqual(assertion_text, signup_valid_credentials.assertion)
  });
});