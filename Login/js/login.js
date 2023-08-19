var user = [];

user = JSON.parse(localStorage.getItem("users"));

var signInEmailInput = document.getElementById("signInEmailInput");
var signInPasswordInput = document.getElementById("signInPasswordInput");

document.getElementById("login").addEventListener("click", function () {
  if (signInEmailInput.value == "" || signInPasswordInput.value == "") {
    document.getElementById(
      "message"
    ).innerHTML = ` <p class ="text-center">All Inputs are required</p> `;
  } else {
    checkUser();
  }
});

function checkUser() {
  for (let i = 0; i < user.length; i++) {
    if (
      signInEmailInput.value == user[i].email &&
      signInPasswordInput.value == user[i].password
    ) {
      var y = user[i].name;
      localStorage.setItem("username", y);
      window.location.href = '../../home/home.html';
      break;
    }
  }
}
