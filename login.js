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

const nameInput = document.querySelector('#Username');
const passwordInput = document.querySelector('#password');

document.querySelector('#Submitouterid').addEventListener('click', function (e) {
  e.preventDefault();

  const name = nameInput.value;
  const password = passwordInput.value;

  // Send the data to the server
  fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, password }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert("Data successfully inserted!");
      document.getElementById("mainform").reset();
      window.location.href = "./dashboard.html";
    } else {
      alert('Error inserting data');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    alert('An error occurred');
  });
});
