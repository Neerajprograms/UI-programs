
const Username = document.getElementById('Username')

const userDetails = JSON.parse(localStorage.getItem("userDetails"));


console.log(userDetails.name)

let string = userDetails.name.charAt(0).toUpperCase() + userDetails.name.slice(1);

Username.append("Welcome back "+" "+ string)