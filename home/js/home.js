document.getElementById("username").innerHTML =
  localStorage.getItem("username");

document.getElementById("loginBtn").addEventListener("click", function () {
  localStorage.removeItem("username");
});
