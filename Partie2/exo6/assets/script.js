// var image1 = document.getElementById("image1"); //lien avec le html et l'id image1
// var image2 = document.getElementById("image2"); //lien avec le html et l'id image1
// var image3 = document.getElementById("image3"); //lien avec le html et l'id image1
// var image4 = document.getElementById("image4"); //lien avec le html et l'id image1
// var image5 = document.getElementById("image5");
//  //lien avec le html et l'id image1
// image1.addEventListener("mouseover",function(){ //changement de l'image1 par 1_2
//   this.src = "images/image1_2.jpg"
// }) ;
// image2.addEventListener("mouseover",function(){ //changement de l'image2 par 2_2
//   this.src = "images/image2_2.jpg"
// }) ;
// image3.addEventListener("mouseover",function(){ //changement de l'image2 par 3_2
//   this.src = "images/image3_2.jpg"
// }) ;
// image4.addEventListener("mouseover",function(){ //changement de l'image2 par 4_2
//   this.src = "images/image4_2.jpg"
// }) ;
// image5.addEventListener("mouseover",function(){//changement de l'image2 par 5_2
//   this.src = "images/image5_2.jpg"
// }) ;

//BONUS
var imageId = [  //Association des ID avec le html dans un tableau afin de pouvoir faire une boucle.
  document.getElementById('image1'),
  document.getElementById('image2'),
  document.getElementById('image3'),
  document.getElementById('image4'),
  document.getElementById('image5'),
]
for (var i = 0; i < imageId.length; i++) { //création de la boucle avec i=image1 imageId.length fait référence au max et nous demandons l'incrémentation automatique jusqu'au max
imageId[i].addEventListener("mouseover",function(){ //créa de la fonction. avec insertion du [i]à la variable
  this.src = "images/"+[this.id]+"_2.jpg" //on demande à ce que chaques src dans le html soit renvoyé à la même adresse mais avec _2 en plus
})
imageId[i].addEventListener("mouseout",function(){ //créa de la fonction. avec insertion du [i]à la variable
  this.src = "images/"+[this.id]+".jpg" //on demande à ce que chaques src dans le html soit renvoyé à la même adresse mais avec _2 en plus
})}//fin de la boucle
