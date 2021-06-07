//Declare array
let studentArray = [];

//Get form to not refresh and submit everytime a function runs
let form = document.getElementById("form");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);

//Get name of student
let studentName = document.getElementById("sName");
//Create an key down event listener on the document
document.addEventListener("keydown", displayName);
//Get textarea
let txtArea = document.getElementById("allNames");

//function to display name onto textarea
function displayName() {
  //keyCode 13 = "Enter" key
  if (event.keyCode === 13) {
    //Push to array
    studentArray.push(studentName.value);
    //Sort the array in alphabetical order
    studentArray.sort();
    //Join the items in array with new line
    let joinArray = studentArray.join("\n");
    txtArea.value = joinArray;
    //Reset the text box everytime "Enter" key is pressed
    studentName.value = '';
  }
}
