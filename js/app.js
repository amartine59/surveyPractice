//You will only display the fifth and sixth row when the user is over 18
//The other ones will be displayed to under 18 users(and over 18 as well with the exception of the last row)
window.onload = hideAllBoxes();
function hideAllBoxes() {
  document.getElementById("fif-row").style.display = "none";
  document.getElementById("six-row").style.display = "none";
  document.getElementById("svn-row").style.display = "none";
  document.getElementById("eig-row").style.display = "none";
  document.getElementById("name-alert").style.display = "none";
  document.getElementById("l-name-alert").style.display = "none";
  document.getElementById("email-alert").style.display = "none";
  document.getElementById("date-alert").style.display = "none";
}
//We need to fix the following points:
// 1- Change the style of the date element(input).==> Done
// 2- Add an alert box for the date input.==> Done
// 3- Reset the email box in case of error.==> Done
// 4- Reset the date box in case of error. ==> Done
//You started at 3:05pm i want it done by 3:45 Done at 3:42 pm

function hideAlertBox(boxElement) {
  var selectedBox = boxElement.id;
  if (selectedBox == "name-input") {
    document.getElementById("name-alert").style.display = "none";
    return;
  }
  if (selectedBox == "l-name-input") {
    document.getElementById("l-name-alert").style.display = "none";
    return;
  }
  if (selectedBox == "email-input") {
    document.getElementById("email-alert").style.display = "none";
    return;
  }
  if (selectedBox == "date-selector") {
    document.getElementById("date-alert").style.display = "none";
  }
}

function hideConditionalBoxes() {
  document.getElementById("fif-row").style.display = "none";
  document.getElementById("six-row").style.display = "none";
  document.getElementById("svn-row").style.display = "none";
  document.getElementById("eig-row").style.display = "none";
}

var fifthRow = document.getElementById("fif-row");
var sixthRow = document.getElementById("six-row");
var seventhRow = document.getElementById("svn-row");
var eighthRow = document.getElementById("eig-row");

function validateRequiredInputs() {
  var name = document.getElementById("name-input");
  var lName = document.getElementById("l-name-input");
  var email = document.getElementById("email-input");
  var date = document.getElementById("date-selector");
  var isValid = false;
  if (
    name.value.trim() != "" &&
    lName.value.trim() != "" &&
    date.value.trim() != ""
  ) {
    if (email.value.trim() != "") {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        hideAlertBox(name);
        hideAlertBox(lName);
        hideAlertBox(email);
        isValid = true;
        return isValid;
      } else {
        var error = "You must enter a valid email";
        errorDeploy(email, error);
        return isValid;
      }
    }
    if (name.value.trim() != "") {
      hideAlertBox(name);
    }
    if (lName.value.trim() != "") {
      hideAlertBox(lName);
    }

    isValid = true;
    //To display the errors on the empty boxes
  }
  //Removing the boxes that are not empty anymore
  if (name.value.trim() != "") {
    hideAlertBox(name);
  }
  if (lName.value.trim() != "") {
    hideAlertBox(lName);
  }

  if (name.value.trim() == "") {
    var error = "This field cannot be blank";
    errorDeploy(name, error);
    isValid = false;
  }
  if (lName.value.trim() == "") {
    var error = "This field cannot be blank";
    errorDeploy(lName, error);
    isValid = false;
  }
  if (email.value.trim() != "") {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      var error = "You must enter a valid email";
      errorDeploy(email, error);
      isValid = false;
    } else {
      hideAlertBox(email);
    }
  }
  if (date.value.trim() == "") {
    var error = "This field cannot be blank";
    displayDateAlert(error);
    isValid = false;
  } else {
    hideAlertBox(date);
  }
  return isValid;
}
//Displaying the many possible errors
function displayNameAlert(error) {
  document.getElementById("name-alert").style.display = "block";
  document.getElementById("name-alert").innerHTML = error;
}

function displayLNameAlert(error) {
  document.getElementById("l-name-alert").style.display = "block";
  document.getElementById("l-name-alert").innerHTML = error;
}

function displayEmailAlert(error) {
  document.getElementById("email-alert").style.display = "block";
  document.getElementById("email-alert").innerHTML = error;
}

function displayDateAlert(error) {
  document.getElementById("date-alert").style.display = "block";
  document.getElementById("date-alert").innerHTML = error;
}

//Launches the error related to the given element(input)
function errorDeploy(boxElement, error) {
  var selectedBox = boxElement.id;
  if (selectedBox == "name-input") {
    displayNameAlert(error);
    return;
  }
  if (selectedBox == "l-name-input") {
    displayLNameAlert(error);
    return;
  }
  if (selectedBox == "email-input") {
    displayEmailAlert(error);
    return;
  }
  if (selectedBox == "date-selector") {
    displayDateAlert(error);
    return;
  }
}

//Calculate the age given a date of birth
function calculateAge(e) {
  var currentDate = new Date();
  var dateBirth = new Date(e.target.value);
  var Age = currentDate.getUTCFullYear() - dateBirth.getUTCFullYear();
  var monthDifference = currentDate.getUTCMonth() - dateBirth.getUTCMonth();
  if (
    monthDifference < 0 ||
    (monthDifference == 0 && currentDate.getUTCDate() < dateBirth.getUTCDate())
  ) {
    Age--;
  }

  if (Age >= 18) {
    displayBox(fifthRow);
    displayBoxF();
    eighthRow.style.display = "none";
  } else if (Age < 18) {
    fifthRow.style.display = "none";
    sixthRow.style.display = "none";
    displayBoxF();
    displayBox(eighthRow);
  }
}

function displayBox(boxElement) {
  boxElement.style.display = "block";
}

function displayBoxF() {
  document.getElementById("svn-row").style.display = "flex";
}
function isChecked() {
  var drinkRadioOne = document.getElementById("customRadioInline1").checked;
  if (drinkRadioOne) {
    displayBox(sixthRow);
  }
}
function hideSmokeBox() {
  sixthRow.style.display = "none";
}

//For the submit button
function onFilledForm() {
  if (validateRequiredInputs()) {
    resetForm();
  }
}

function resetForm() {
  setTimeout(function() {
    alert("Thank you for filling this survey have a nice day :D");
  }, 300);
  hideAllBoxes();
  document.getElementById("name-input").value = "";
  document.getElementById("l-name-input").value = "";
  document.getElementById("email-input").value = "";
  document.getElementById("date-selector").value = "";
}

function clearAllFields() {
  document.getElementById("name-input").value = "";
  document.getElementById("l-name-input").value = "";
  document.getElementById("email-input").value = "";
  document.getElementById("date-selector").value = "";
}
