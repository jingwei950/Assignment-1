let studentArray = [];

var form = document.getElementById("form");
function handleForm(event) {
  event.preventDefault();
}

form.addEventListener('submit', handleForm);

let studentName = document.getElementById("sName");
let submitButton = document.getElementById("subBtn").addEventListener("click", displayName);
let txtArea = document.getElementById("allNames");

function displayName(){
  txtArea.value = studentName.value;
  console.log(studentName.value);
}
// studentName.addEventListener("keydown",
// function(event){
//   event.defaultPrevented();
//   if(event.keyCode === 13){
//     // studentArray.push(studentName);
//     document.getElementById("allNames").value = studentName.value;
//   }
// });
//console.log(studentName);
//let displayName = document.getElementById("allNames").value;
// displayname.innerHTML = studentArray;

// function nameEntered(){
//   if(event.keyCode === 13){
//     studentArray.push(studentName);
//     console.log(studentArray);
//     // if(studentArray.length > 1){
//     //   studentArray.sort();
//     //   displayName = studentArray;
//     // }
//   }

// }
