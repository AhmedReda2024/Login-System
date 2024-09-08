//! ALL GLOBAL VARIABLES

var userNameInput = document.getElementById("userNameInput");
var userEmailInput = document.getElementById("userEmailInput");
var userPasswordInput = document.getElementById("userPasswordInput");
var message = document.getElementById("message");
var allUsers = [];
//! ALL GLOBAL VARIABLES

//! check if we found data in local storage or not !!!
if (localStorage.getItem("allUsers") !== null) {
  allUsers = JSON.parse(localStorage.getItem("allUsers"));
}
//! check if we found data in local storage or not !!!

//! ALL FUNCTIONS
function signUp() {
  var signInBtn = document.getElementById("signInBtn");
  if (isAllInputsIsValid() && isExist() == false) {
    var user = {
      name: userNameInput.value,
      email: userEmailInput.value,
      password: userPasswordInput.value,
    };
    allUsers.push(user);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    message.innerHTML = "success";
    message.classList.add("text-success");
    clearForm();
    signInBtn.classList.remove("d-none");

    console.log(allUsers);
  } else {
    console.log('"Not Allowed"');
    signInBtn.classList.add("d-none");
  }
}

function validateName() {
  var regexName = /^(?=.*[A-Z])[A-Za-z]{1,20}$/;
  var userNameAlert = document.getElementById("userNameAlert");
  if (regexName.test(userNameInput.value) == true) {
    console.log(" name is valid");
    userNameInput.classList.remove("is-invalid");
    userNameInput.classList.add("is-valid");
    userNameAlert.classList.add("d-none");

    return true;
  } else {
    console.log("name is Not valid");
    userNameInput.classList.remove("is-valid");
    userNameInput.classList.add("is-invalid");
    userNameAlert.classList.remove("d-none");

    return false;
  }
}

function validtateEmail() {
  var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var userEmailAlert = document.getElementById("userEmailAlert");
  if (regexEmail.test(userEmailInput.value) == true) {
    userEmailInput.classList.remove("is-invalid");
    userEmailInput.classList.add("is-valid");
    userEmailAlert.classList.add("d-none");
    console.log("email is valid");

    return true;
  } else {
    userEmailInput.classList.remove("is-valid");
    userEmailInput.classList.add("is-invalid");
    userEmailAlert.classList.remove("d-none");
    console.log("email is not valid");

    return false;
  }
}

function validatePassword() {
  var regexPassword = /^.{5,15}$/;
  var userPasswordAlert = document.getElementById("userPasswordAlert");
  if (regexPassword.test(userPasswordInput.value)) {
    userPasswordInput.classList.remove("is-invalid");
    userPasswordInput.classList.add("is-valid");
    userPasswordAlert.classList.add("d-none");
    console.log("passowrd is valid");

    return true;
  } else {
    userPasswordInput.classList.remove("is-valid");
    userPasswordInput.classList.add("is-invalid");
    userPasswordAlert.classList.remove("d-none");
    console.log("pasword is not valid");

    return false;
  }
}

function isAllInputsIsValid() {
  if (validateName() && validtateEmail() && validatePassword()) {
    console.log("all inputs are valid");
    return true;
  } else {
    console.log("Not valid");
    return false;
  }
}

function isExist() {
  for (var i = 0; i < allUsers.length; i++) {
    if (
      allUsers[i].name.toLowerCase() == userNameInput.value.toLowerCase() ||
      allUsers[i].email.toLowerCase() == userEmailInput.value.toLowerCase()
    ) {
      console.log("user is already exist");
      message.innerHTML = "user is already exist ! try another one";
      message.classList = "text-danger";
      return true;
    }
  }
  console.log("user is new");
  return false;
}

function clearForm() {
  userNameInput.value = "";
  userEmailInput.value = "";
  userPasswordInput.value = "";

  userNameInput.classList.remove("is-valid");
  userEmailInput.classList.remove("is-valid");
  userPasswordInput.classList.remove("is-valid");
}

var userNameSession = JSON.parse(localStorage.getItem("userName"))
function login() {
  var loginEmailInput = document.getElementById("loginEmailInput");
  var loginPasswordInput = document.getElementById("loginPasswordInput");
  for (var i = 0; i < allUsers.length; i++) {
    if (
      allUsers[i].email.toLowerCase() == loginEmailInput.value.toLowerCase() &&
      allUsers[i].password.toLowerCase() == loginPasswordInput.value.toLowerCase()
    ) {
      console.log("you are logged in");
      userNameSession = allUsers[i].name;
      localStorage.setItem("userName" , JSON.stringify(userNameSession));
      window.location.href = './welcome.html'
      return true;
    }
  }
  console.log("email and password not match");
  message.innerHTML = 'please sign up !!! , email or password does not exist'
  message.classList.add('text-danger');
  return false;
}


function displayWelcomeUser() {
  var welcomeMsg = document.getElementById("welcomeMsg");
  if (userNameSession !== null) {
    welcomeMsg.innerHTML = `welcome ${userNameSession}`;
  }
  else{
    userNameSession = '';
  }
}

function logOut() {
  localStorage.removeItem("userName");
}
//! ALL FUNCTIONS
