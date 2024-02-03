document.addEventListener("DOMContentLoaded", function() {
    const passwordField = document.getElementById("password");
    const togglePassword = document.querySelector(".password-toggle-icon i");

    togglePassword.addEventListener("click", function () {
      if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
      } else {
        passwordField.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
      }
    });

    const confirmPasswordField = document.getElementById("Conformpassword");
    const toggleConfirmPassword = document.querySelector(".confirm-password-toggle-icon i");

    toggleConfirmPassword.addEventListener("click", function () {
      if (confirmPasswordField.type === "password") {
        confirmPasswordField.type = "text";
        toggleConfirmPassword.classList.remove("fa-eye");
        toggleConfirmPassword.classList.add("fa-eye-slash");
      } else {
        confirmPasswordField.type = "password";
        toggleConfirmPassword.classList.remove("fa-eye-slash");
        toggleConfirmPassword.classList.add("fa-eye");
      }
    });
  });





  const name = document.getElementById('username');
const Email = document.getElementById('Email');
const password = document.getElementById('password');
const Conformpassword = document.getElementById('Conformpassword');
const mainform = document.getElementById('mainform');

let Emailreg = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]{3}/;

const messages = {
  required: "Need to fill all the values",
  emailFormat: "Please check the email format :" +"  "+ "mail@gmail.com",
  passwordMismatch: "Please check password and confirm password",
};

mainform.addEventListener("submit", fromgettingsubmit);

function fromgettingsubmit(e) {
  e.preventDefault();

  console.log(name.value, Email.value, password.value, Conformpassword.value);

  if (name.value.trim() === "") {
    alert(messages.required);
  }

  if (!Emailreg.test(Email.value.trim())) {
    alert(messages.emailFormat);
  }

  if (!(password.value === Conformpassword.value)) {
    alert(messages.passwordMismatch);
  }
}


  





  