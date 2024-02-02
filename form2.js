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


  


  