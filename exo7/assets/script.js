var shoeSize = document.getElementById("shoeSize"); // Lien avec le html
var yearOfBirth = document.getElementById("yearOfBirth"); // lien avec le html
var submit = document.getElementById("submit"); // lien avec le html

function isFloat(n){ //fonction pour n'avoir que des chiffres.
      return n != "" && !isNaN(n) && n !==0;
}//fin de la fonction

submit.addEventListener("click", function(){ //début de la fonction submit
  if (isFloat(shoeSize.value.replace(",", ".") && yearOfBirth.value.replace(",", "."))) { //Test du isFloat + remplacement de la , par un .
        alert(((((shoeSize.value.replace(",", ".")* 2) + 5) * 50) - yearOfBirth.value.replace(",", ".")) + 1766); //résultat si bon
      } else { //si la valeur n'est pas vérifié
          alert("Epic Fail Rigolo. DES NOMBRES BORDEL !!") //il s'affichera ceci.
  }//fin du else.
})//fin de la fonction submit.
