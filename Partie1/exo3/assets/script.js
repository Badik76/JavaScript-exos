var reponse = prompt("Comment t'appelles-tu ?", "<Entrez ici votre prénom>");
var regexreponse = /^[a-zA-ZÄ-ÿ]+$/
if(regexreponse.test(reponse)){
    alert("Bonjour " + reponse + ", ça roule ?");
} else {
    alert("FATAL ERROR");
}
