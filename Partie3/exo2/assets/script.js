var links = document.links; //définition d'une variable pour référencer les href dans le html
var text = document.getElementById("text") //lien entre div text et le js

for(var i = 0; i < links.length; i++) { //définition d'une variable qui s'incrémente pour les href afin de trouver les deux
  if (links[i].innerHTML=="Afficher"){// innerHTML va tester (==) et chercher afficher
links[i].addEventListener("click",function(){ //fonction click associé au afficher
text.style.display = "block" // le block text réaparé
})//fin de fonction click afficher
}//fin du if afficher
if (links[i].innerHTML=="Masquer"){ // innerHTMLva tester et chercher Masquer
  links[i].addEventListener("click",function(){  //fonction click associé au masqué
text.style.display = "none"//le text sera caché.
})//fin de fonction click masquer
}//fin du if masquer
} //fin de la boucle
