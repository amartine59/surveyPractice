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

function validateRequiredInputs() {
  var name = document.getElementById("name-input");
  var lName = document.getElementById("l-name-input");
  var email = document.getElementById("email-input");
  var date = document.getElementById("date-selector");

  if (
    name.value.trim() != "" &&
    lName.value.trim() != "" &&
    date.value.trim() != ""
  ) {
    if (email.value.trim() != "") {
      if (
        /^[a-zA-Z]+$/.test(name) &&
        /^[a-zA-Z]+$/.test(lName) &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ) {
        return true;
      } else {
      }
    }
    if (/^[a-zA-Z]+$/.test(name) && /^[a-zA-Z]+$/.test(lName)) {
      return true;
    } else {
    }
  }
}

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
//Launches the error related to the given element(input)
function errorDeploy(boxElement, error) {
  var selectedBox = boxId.id;
  if (selectedBox == "name-input") {
    displayNameAlert(error);
  }
  if (selectedBox == "l-name-input") {
    displayLNameAlert(error);
  }
}
