//You will only display the fifth and sixth row when the user is over 18
//The other ones will be displayed to under 18 users(and over 18 as well with the exception of the last row)
window.onload = hideConditionalBoxes();
function hideConditionalBoxes() {
  document.getElementById("fif-row").style.display = "none";
  document.getElementById("six-row").style.display = "none";
  document.getElementById("svn-row").style.display = "none";
  document.getElementById("eig-row").style.display = "none";
  document.getElementById("name-alert").style.display = "none";
  document.getElementById("l-name-alert").style.display = "none";
  document.getElementById("email-alert").style.display = "none";
}
//(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) regex for email validation
var fifthRow = document.getElementById("fif-row");
var sixthRow = document.getElementById("six-row");
var seventhRow = document.getElementById("svn-row");
var eighthRow = document.getElementById("eig-row");

function validateRequiredInputs() {
  var name = document.getElementById("name-input");
  var lName = document.getElementById("l-name-input");
  var email = document.getElementById("email-input");
  var date = document.getElementById("date-selector");

  if (
    name.value.trim() != "" ||
    lName.value.trim() != "" ||
    date.value.trim() != ""
  ) {
    if (email.value.trim() != "") {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return true;
      } else {
        var error = "You must enter a valid email";
        errorDeploy(email, error);
        return false;
      }
    }
    return true;
    //To display the errors on the empty boxes
  } else if (name.value.trim() == "") {
    var error = "Im afraid you must enter a name..";
    errorDeploy(name, error);
  }
  if (lName.value.trim() == "") {
    var error = "Sorry but this field cannot be blank..";
    errorDeploy(lName, error);
  }

  if (date.value.trim() == "") {
    displayDateAlert();
  }
  return false;
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
//Shakes the date selector to show that we require the date of birth
function displayDateAlert() {
  date.classList.add("error");
  setTimeout(function() {
    date.classList.remove("error");
  }, 300);
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
  if (selectedBox == "email-alert") {
    displayEmailAlert(error);
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
    displayBox(sixthRow);
    displayBoxF();
  } else if (Age < 18) {
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

function onFilledForm() {
  if (validateRequiredInputs) {
  }
}
