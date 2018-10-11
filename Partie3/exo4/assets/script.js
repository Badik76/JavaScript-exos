var password = document.getElementById("password")//asso avec html id=password
var confirmPassword = document.getElementById("confirmPassword")//asso avec html id=confirmPassword
var button = document.getElementsByName("button")[0] //asso html avec button + [0] car ByName

button.addEventListener("click", function() { //lorsque l'on click sur le button, l'action se lance
  if (password.value!=confirmPassword.value) { //vérification que les 2 passwords sont strictement pas (!=) indentique
  password.style.border = "5px solid red" // si pas identique, changement style bordure red
  confirmPassword.style.border = "5px solid red"// si pas identique, changement style bordure red
    alert("Raté, c'est pas le même mot de passe !")//pop-up pour signaler l'erreur en plus.
} else {//si jamais les deux pwr sont identiques alors
  password.style.border = "5px solid green"//  identique, changement style bordure green
  confirmPassword.style.border = "5px solid green"//  identique, changement style bordure gree
}//fin du else
})//fin de l'action lors d'un click.
