var password = document.getElementById("password")//asso avec html id=password
var confirmPassword = document.getElementById("confirmPassword")//asso avec html id=confirmPassword
var button = document.getElementsByName("button")[0]

button.addEventListener("click", function() {
  if (password.value!=confirmPassword.value) {
  password.style.border = "3px solid red"
  confirmPassword.style.border = "3px solid red"
    alert("Raté, c'est pas le même mot de passe !")
} else {
  password.style.border = "3px solid green"
  confirmPassword.style.border = "3px solid green"
}})
