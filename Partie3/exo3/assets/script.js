var text = document.getElementById("text") // couplement avec html
var color = document.getElementsByClassName("color") // variable qui se définir sur la class color du html

for(var i = 0; i < color.length; i++) { //création d'une boucle qui compte le nombre de class color avec incrémentation +1
  if (color[i].className=="color green"){ //recherche de la classe color green
    color[i].addEventListener("click",function(){ //fonction click associé au color green
      text.style.color = "green" // le text devient vert
    }// fin fonction click green
  )} //fin du if green
  if (color[i].className=="color red"){//recherche de la classe color red
    color[i].addEventListener("click",function(){ //fonction click associé au color red
      text.style.color = "red" // le text devient red
    }//fin fonction click red
  )}//fin if red
  if (color[i].className=="color blue"){//recherche de la classe color blue
    color[i].addEventListener("click",function(){ //fonction click associé au color blue
      text.style.color = "blue" // le text devient blue
    }//fin fonction click blue
  )}//fin if red
} //fin de la boucle.
