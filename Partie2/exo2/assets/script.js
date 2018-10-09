var lastname = document.getElementById("lastname") //lien avec le html
lastname.addEventListener("focusout",function() {
  alert("Merci de votre participation " + this.value + ", Vous êtes bien mignon et bien portant, BRAVO !");
});
