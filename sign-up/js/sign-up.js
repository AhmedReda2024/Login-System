var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");

var userContainer = [];

if (localStorage.getItem("users") != null) {
  userContainer = JSON.parse(localStorage.getItem("users"));
} else {
  userContainer = [];
}

function add() {
  if (
    nameInput.value == "" ||
    emailInput.value == "" ||
    passwordInput.value == ""
  ) {
    document.getElementById(
      "message"
    ).innerHTML = ` <p class ="text-center">All Inputs are required</p> `;
  } else {
    var user = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    userContainer.push(user);

    // location.href = '../../Login/login.html';

    localStorage.setItem("users", JSON.stringify(userContainer));
    // console.log(userContainer);
  }
}
