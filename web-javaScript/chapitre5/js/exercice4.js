// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

var liste = document.createElement("table");


questions.forEach(function(qu) {
	
	var sousListe = document.createElement("tr");
	var reponse = document.createElement("tr");
	var question = document.createElement("p");
	var bouton = document.createElement("button");
	var zoneReponse = document.createElement("tr");
	
	question.textContent = qu.enonce;
	reponse.textContent = qu.reponse;
	
	question.style.fontStyle = "italic";
	bouton.textContent = "afficher la réponse";
	

	bouton.addEventListener("click", function(){
		zoneReponse.innerHTML = "";
		zoneReponse.appendChild(reponse);
	});
	
	sousListe.appendChild(question);
	zoneReponse.appendChild(bouton);
	sousListe.appendChild(zoneReponse);
	liste.appendChild(sousListe);
});

document.getElementById("contenu").appendChild(liste);