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

// Assuming 'Username', 'password', and 'Submitouterid' are IDs of the respective elements
const nameInput = document.querySelector('#Username');
const passwordInput = document.querySelector('#password');

const userDetails = JSON.parse(localStorage.getItem("userDetails"));

document.querySelector('#Submitouterid').addEventListener('click', function (e) {
  e.preventDefault();

  // Get the current values when the button is clicked
  const name = nameInput.value;
  const password = passwordInput.value;

  

  if (userDetails && name === userDetails.name && password === userDetails.password) 
  {

    let string = userDetails.name.toUpperCase();

    alert( string +"   "+ "Successfully Login");
    document.getElementById("mainform").reset();
    
  } else {
    alert('Check the entered name and password');
  }
});




 