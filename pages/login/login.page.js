function loginElements() {
  return {
    email: function() { return $('#email') },
    password: function() { return $('#passwd') },
    submitButton: function() { return $('#SubmitLogin') }
  }
}

function loginMethods() {
  const element = loginElements()

  return {
    setInfoLogin: function(emailParam) {
      element.email().waitForExist()
      element.email().clearValue()
      element.email().setValue(emailParam)
    },

    setInfoPassword: function(password){
      element.password().clearValue()
      element.password().setValue(password)
    },

    confirmLogin: function(){
      element.submitButton().click()
    }
  }
}

function login() {
  const login = loginMethods()

  return {
    fillForm: function(objLogin) {
      login.setInfoLogin(objLogin.email)
      login.setInfoPassword(objLogin.password)
      login.confirmLogin()
    }
  }
}

module.exports = login()