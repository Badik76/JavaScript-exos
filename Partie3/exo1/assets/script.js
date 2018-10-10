var image1 = document.getElementById("image1"); //lien avec le html et l'id image1
image1.addEventListener("mouseover",function(){// définition de la fonction mouseover avec une application de style lors du passage de la souris.
  image1.style.border = "3px solid red" // définition du style désiré
}) ;//fin de la fonction mouseover
image1.addEventListener("mouseout",function(){ //fonction mouseout pour revenir à la normale après passage de souris
  image1.style.border = ""  //définition d'aucun style quand souris pas sur image.
}) //fin de la fonction mouseout.
