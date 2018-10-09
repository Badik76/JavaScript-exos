var firstNumber = document.getElementById("firstNumber"); // Lien avec le html
var secondNumber = document.getElementById("secondNumber"); // lien avec le html
var submit = document.getElementById("submit"); // lien avec le html

function isFloat(n){ //fonction pour n'avoir que des chiffres décimales.
      return n != "" && !isNaN(n) && Math.round(n) != n;
  }

submit.addEventListener("click", function(){ //début de la fonction submit
  if (isFloat(firstNumber.value.replace(",", ".") && secondNumber.value.replace(",", "."))) { //Test du isFloat + remplacement de la , par un .
        alert(Math.trunc(firstNumber.value.replace(",", ".")) * secondNumber.value.replace(",", ".")); //résultat si bon
      } else { //si la valeur n'est pas vérifié
          alert("Erreur dans la(es) cases") //il s'affichera ceci.
  }//fin du else.
})//fin de la fonction submit.
