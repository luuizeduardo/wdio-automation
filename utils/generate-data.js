const faker = require("faker");
faker.locale = "pt_BR";

// Personal data
function fakeFirstName() {
  return faker.name.firstName()
}

function fakeLastName() {
  return faker.name.lastName()
}

function fakeStreetName() {
  return faker.address.streetName()
}

function fakeSecondaryAddress() {
  return faker.address.secondaryAddress()
}

function fakeCityName() {
  return faker.address.city()
}

function fakePostalCode() {
  return faker.address.zipCode("#####")
}

function fakePhoneNumber() {
  return faker.phone.phoneNumber()
}

// User auth data
function fakeEmail() {
  return faker.internet.email();
}

function fakePassword() {
  return faker.internet.password()
}

// Company data
function fakeCompanyName() {
  return faker.company.companyName()
}

// Others
function fakeLorem() {
  return faker.lorem.paragraph(2)
}

function fakeNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

module.exports = {
  fakeCityName,
  fakeCompanyName,
  fakeEmail,
  fakeFirstName,
  fakeLastName,
  fakeLorem,
  fakeNumber,
  fakePassword,
  fakePhoneNumber,
  fakePostalCode,
  fakeSecondaryAddress,
  fakeStreetName
}