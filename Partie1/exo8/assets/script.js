var age = document.getElementById("age"); // Lien avec le html
var submit = document.getElementById("submit"); // lien avec le html
var regex = /^[0-9]+$/

function isFloat(n){ //fonction pour n'avoir que des chiffres.
return n != "" && !isNaN(n) && [0-9];
}
submit.addEventListener("click", function(){ //début de la fonction submit
  if (regex.test(age.value.replace(",", "."))) { //test uniquement des chiffres. (Valeur 1)
    if (isFloat(age.value.replace(",", ".") >= 18)) { //Test du isFloat + remplacement de la , par un . (Valeur2)
      alert("Bravo, tu es majeur, va donc te murger la gueule autant que tu peux !"); //résultat si bon
    } else { //si la valeur2 n'est pas vérifié
    alert("Aller Petiot, retourne jouer aux billes et va mettre du vent sous tes fesses."); //il s'affichera ceci.
  }} else { //si la valeur1 n'est pas vérifié
  alert("Des chiffres pardis, petit rigolo."); //il s'affichera ceci.
}})//fin de la fonction submit.
