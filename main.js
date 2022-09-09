// Allows control over changes by myself or other people (Provided im working together with others.)

function processData() {
  let str = document.forms["userForm"]["name"].value;
  let email = document.forms["userForm"]["email"].value;
  let cell = document.forms["userForm"]["number"].value;

  if (!stringCheck() || str.length == 0) {
    alert("Your name is required!");
    return false;
  } else if(!emailCheck() || email.length == 0){
    alert("Your email is required!");
    return false;
  } else if (!numberCheck() || cell.length == 0){
    alert("Your cell number is required!");
    return false;
  } else {
    return true;
  }
}

function stringCheck() {
  let str = document.forms["userForm"]["name"].value;

  for (let letter of str) {
    if (!isNaN(letter)) {
      document.getElementById("nameReq").style.display = "block";
      return false;
    }
  }
  return true;
}

function emailCheck() {
  let email = document.forms["userForm"]["email"].value;

  if (email.includes('@') && email.includes('.')) {
    return true;
  } else {
    document.getElementById("emailReq").style.display = "block";
    return false;
  }
}

function numberCheck() {
  let cell = document.forms["userForm"]["number"].value;

  if (cell.length == 10 && cell[0] == 0) {
    return true;
  } else {
    document.getElementById("cellReq").style.display = "block";
    return false;
  }
}
