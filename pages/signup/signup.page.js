function signupElements() {
  return {
    email: function() { return $('#email_create') },
    submitCreate: function() { return $('#SubmitCreate') },
    radioGenderMale: function() { return $('#id_gender1') },
    radioGenderFemale: function() { return $('#id_gender2') },
    firstName: function() { return $('#customer_firstname') },
    lastName: function() { return $('#customer_lastname') },
    password: function() { return $('#passwd') },
    dayBirth: function() { return $('#days') },
    monthBirth: function() { return $('#months') },
    yearBirth: function() { return $('#years') },
    subscribeNews: function() { return $('#newsletter') },
    receiveOffers: function() { return $('#optin') },
    companyName: function() { return $('#company') },
    address1: function() { return $('#address1') },
    address2: function() { return $('#address2') },
    city: function() { return $('#city') },
    state: function() { return $('#id_state') },
    country: function() { return $('#id_country') },
    postcode: function() { return $('#postcode') },
    additionalInfo: function() { return $('#other') },
    phone: function() { return $('#phone') },
    mobilePhone: function() { return $('#phone_mobile') },
    submitAccount: function() { return $('#submitAccount') }
  }
}

function signupMethods() {
  const element = signupElements()

  return {
    //Functions to set information on signup first page (email validation)
    setInfoEmailSignup: function(emailParam) {
      element.email().waitForExist()
      element.email().clearValue()
      element.email().setValue(emailParam)
    },

    clickSignupButton: function() {
      element.submitCreate().click()
    },

    //Functions to fill signup form
    setGender: function(gender) {
      element.radioGenderMale().waitForExist()

      if (gender == 1) {
        element.radioGenderMale().click()
      }
      else {
        element.radioGenderFemale().click()
      }
    },

    setFirstName: function(firstName) {
      element.firstName().clearValue()
      element.firstName().setValue(firstName)
    },

    setLastName: function(lastName) {
      element.lastName().clearValue()
      element.lastName().setValue(lastName)
    },

    setPassword: function(password) {
      element.password().clearValue()
      element.password().setValue(password)
    },

    setDayBirth: function(day) {
      element.dayBirth().selectByAttribute('value', day)
    },

    setMonthBirth: function(month) {
      element.monthBirth().selectByIndex(month)
    },

    setYearBirth: function(year) {
      element.yearBirth().selectByAttribute('value', year)
    },

    setNewsletterSignup: function(newsletter) {
      if (newsletter == 1) {
        element.subscribeNews().click()
      }
      return
    },

    setReceiveOffers: function(receiveOffers) {
      if (receiveOffers == 1) {
        element.receiveOffers().click()
      }
      return
    },

    setCompanyName: function(company) {
      element.companyName().clearValue()
      element.companyName().setValue(company)
    },

    setAddress: function(address) {
      element.address1().clearValue()
      element.address1().setValue(address)
    },

    setAddressComplement: function(complement) {
      element.address2().clearValue()
      element.address2().setValue(complement)
    },

    setCity: function(cityName) {
      element.city().clearValue()
      element.city().setValue(cityName)
    },

    setState: function(stateId) {
      element.state().selectByIndex(stateId)
    },

    setCountry: function(countryId) {
      element.country().selectByAttribute('value', countryId)
    },

    setPostalCode: function(postalCode) {
      element.postcode().clearValue()
      element.postcode().setValue(postalCode)
    },

    setAdditionalInfo: function(additionalInfo) {
      element.additionalInfo().clearValue()
      element.additionalInfo().setValue(additionalInfo)
    },

    setPhone: function(phone) {
      element.phone().clearValue()
      element.phone().setValue(phone)
    },

    setMobilePhone: function(mobilePhone) {
      element.mobilePhone().clearValue()
      element.mobilePhone().setValue(mobilePhone)
    },

    clickSignupAccount: function() {
      element.submitAccount().click()
    }

  }
}

function signup() {
  const signup = signupMethods()

  return {
    fillPreForm: function(objSignupPreForm) {
      signup.setInfoEmailSignup(objSignupPreForm.email)
      signup.clickSignupButton()
    },

    fillForm: function(objSignup) {
      signup.setGender(objSignup.gender)
      signup.setFirstName(objSignup.firstName)
      signup.setLastName(objSignup.lastName)
      signup.setPassword(objSignup.password)
      signup.setDayBirth(objSignup.day)
      signup.setMonthBirth(objSignup.month)
      signup.setYearBirth(objSignup.year)
      signup.setNewsletterSignup(objSignup.newsletter)
      signup.setReceiveOffers(objSignup.receiveOffers)
      signup.setCompanyName(objSignup.company)
      signup.setAddress(objSignup.address)
      signup.setAddressComplement(objSignup.addressComplement)
      signup.setCity(objSignup.city)
      signup.setState(objSignup.state)
      signup.setPostalCode(objSignup.postalCode)
      signup.setCountry(objSignup.country)
      signup.setAdditionalInfo(objSignup.additionalInfo)
      signup.setPhone(objSignup.phone)
      signup.setMobilePhone(objSignup.mobilePhone)
      signup.clickSignupAccount()
    }
  }
}

module.exports = signup()