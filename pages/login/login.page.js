var login = function() {

  var email = '';
  var password = '';

  function setEmailField(email) {
    email = email;
  }

  function setPasswordField(password) {
    password = password;
  }

  return {
    fillLoginForm: function(email, password) {
      setEmailField(email)
      setPasswordField(password)
    }
  }
};

exports.module = login();
loginPage.fillLoginForm(email, password);