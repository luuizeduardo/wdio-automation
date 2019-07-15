function signupElements() {
  return {
    email: function() { return $('#email_create') },
    submitCreate: function() { return $('#SubmitCreate') }
  }
}

function signupMethods() {
  const element = signupElements()

  return {
    setInfoEmailSignup: function(emailParam) {
      console.log(emailParam);

      element.email().waitForExist()
      element.email().clearValue()
      element.email().setValue(emailParam)
    },

    clickSignupButton: function() {
      element.submitCreate().click()
    }
  }
}

function signup() {
  const signup = signupMethods()

  return {
    fillPreForm: function(objSignup) {
      signup.setInfoEmailSignup(objSignup.email)
      signup.clickSignupButton()
    }
  }
}

module.exports = signup()