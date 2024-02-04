
const Username = document.getElementById('Username');
const userDetails = JSON.parse(localStorage.getItem("userDetails"));

console.log(userDetails.name);

let string = userDetails.name.charAt(0).toUpperCase() + userDetails.name.slice(1);

// Display the initial message
//Username.textContent = "Welcome back " + " " + string;

// Function to display content one by one
function displayContentOneByOne(content, index) {
  if (index < content.length) {
    // Append one character at a time
    Username.textContent += content.charAt(index);
    
    // Call the function recursively with a delay of 100 milliseconds
    setTimeout(function () {
      displayContentOneByOne(content, index + 1);
    }, 100);
  }
}

// Call the function after a delay of 10 seconds
setTimeout(function () 
{
  displayContentOneByOne("Welcome back " + " " + string, 0);
}, 3000);
