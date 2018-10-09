var button = document.getElementsByName("button")[0] // Il faut rajouter le [0] pour dire que tu veux utiliser le premier name="button" <<
var lastname = document.getElementById("lastname")
var firstname = document.getElementById("firstname")
var city = document.getElementById("city")
button.addEventListener("click" , function () {
  lastname.value ="";
  firstname.value ="";
  city.value ="";
})
