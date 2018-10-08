var lastname = document.getElementById("lastname");
var firstname = document.getElementById("firstname");
var city = document.getElementById("city");
var submit = document.getElementById("submit");

submit.addEventListener("click", function(){
  if (lastname.value !=="" && firstname.value !=="" && city.value !=="") {
    if (/^[a-zA-Z]+$/.test(lastname.value + firstname.value + city.value)){
      alert("\Nom : " + lastname.value + "\n" + "\Prénom : " + firstname.value + "\n"+ "\Ville : " + city.value);
    } else {
        alert("EPIC FAIL RECOMMENCE");
      }
  }  else {
        alert("Case(s) vide(s)")
    }
  })
