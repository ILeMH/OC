var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
	
	var temoignage = {
		pseudo: e.target.elements.pseudo.value,
		evaluation: e.target.elements.evaluation.value,
		message: e.target.elements.message.value
	};
	
    ajaxPost("http://oc-jswebsrv.herokuapp.com/api/temoignage", temoignage, function (reponse) {
        var messageElt = document.createElement("p");
        messageElt.textContent = "Témoignage ajouté.";
        document.getElementById("resultat").appendChild(messageElt);
    }, true);
});

var telephones = [
    {
        "marque": "Apple",
        "modele": "iPhone"
    },
    {
        "marque": "Samsung",
        "modele": "Galaxy"
    }
];
var json = JSON.stringify(telephones);
console.log(JSON.parse(json)[1].marque);