function Submitdate(event) {
  event.preventdefult();
  debugger;
  let Name = document.getElementById("NAME").value;
  let gender = document.getElementById("Gender");
  let selectedDate = document.getElementsByName("date").value;
  let Age = document.getElementById("Age");
  let EDUCATION = document.getElementById("EDUCATION").value;
  let MOBILE = document.getElementsByName("Mobile_number").value;
  let EMAIL = document.getElementById("EMAIL").value;
  let ADDRESS = document.getElementsByName("Address").value;

  for (const radio of gender) {
    if (radio.checked) {
      gender = radio.value;
      break;
    }
  }
 
  let studntdata = {
    Name: Name,
    Gender: gender,
    Join_date: selectedDate,
    Age: Age,
    Education: EDUCATION,
    Mobile_number: MOBILE,
    Email: EMAIL,
    Address: ADDRESS,
  };

  localStorage.setItem(Submitdate);
  console.log(studntdata);

  // fetch('/Studenent/studentdataentry', {
  //     method: 'POST',
  // headers: {
  //     'Content-Type': 'application/json',
  // 'RequestVerificationToken': document.querySelector('input[name = "__RequestVerificationToken"]').value

  //                 },
  // body: JSON.stringify(studntdata)

  //             })
  //                 .then(response => response.json())
  //                 .then(response => {

  //     console.log('Response:', response);

  // if (response.success) {

  //     window.location.href = response.RedirectToAction;

  //                     } else {
  //     alert(response.message);
  //                     }
  //                 })
  //                 .catch(error => {
  //     console.error('Error:', error);
  //                 });
}
