const fakeData = require('../../utils/generate-data')

module.exports = {
  "signup_pre_form_valid_credentials": {
    "email": fakeData.fakeEmail(),
    "assertion": "CREATE AN ACCOUNT"
  },

  "signup_valid_credentials": {
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
}