let studentArray = [];

var form = document.getElementById("form");

function handleForm(event) {
  event.preventDefault();
}

form.addEventListener('submit', handleForm);

let studentName = document.getElementById("sName");
document.addEventListener("keydown", displayName);
let txtArea = document.getElementById("allNames");

function displayName() {
  if (event.keyCode === 13) {
    studentArray.push(studentName.value);
    studentArray.sort();
    let joinArray = studentArray.join("\n");
    txtArea.value = joinArray;
    studentName.value = '';
  }
}
