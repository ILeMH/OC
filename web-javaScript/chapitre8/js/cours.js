/*var req = new XMLHttpRequest();
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
req.addEventListener("load", function () {
	if (req.status >= 200 && req.status < 400 ) {
    	console.log(req.responseText);
	} else {
		console.error(req.status + " " + req.statusText);
	}
});

req.addEventListener("error", function () {
	console.error("Erreur réseau");
});
req.send(null);
*/

// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès

var langages;

function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

function afficher(reponse) {
    console.log(reponse);
}

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", afficher);

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", function (reponse) {
    // Séparation du texte pour obtenir un tableau contenant les langages
    var langages = reponse.split(";");
    var listeElt = document.getElementById("langages");
    // Ajout de chaque langage dans la liste
    langages.forEach(function (langage) {
        var langageElt = document.createElement("li");
        langageElt.textContent = langage;
        listeElt.appendChild(langageElt);
    });
});

/*
ajaxGet("http://localhost/javascript-web-srv/data/films.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JSON
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    })
});
*/