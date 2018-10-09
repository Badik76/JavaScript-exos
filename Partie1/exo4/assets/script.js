var lastname = document.getElementById("lastname"); //lien html avec lastname - avec le value dans la variable pas besoin de la réutiliser dans la fonction
var firstname = document.getElementById("firstname"); //lien html avec firstname
var city = document.getElementById("city"); //lien html avec city
var submit = document.getElementById("submit"); //lien html avec submit.

submit.addEventListener("click", function(){ // action qui se lance lorsqu'on click
if (lastname.value !=="" && firstname.value !=="" && city.value !=="") { // test du fait que les cases soient remplies
  if (/^[a-zA-ZÂ-ÿ]+$/.test(lastname.value) && /^[a-zA-ZÂ-ÿ]+$/.test(firstname.value) && /^[a-zA-ZÂ-ÿ]+$/.test(city.value)){ //test que ce sont bien de l'alphabet
  alert("\Nom : " + lastname.value + "\n" + "\Prénom : " + firstname.value + "\n"+ "\Ville : " + city.value);//réponse si vérifié
} else {
  alert("EPIC FAIL RECOMMENCE"); // réponse 2 si fail
}
}  else {
  alert("Case(s) vide(s)") //réponse 1 si fail
}
})
