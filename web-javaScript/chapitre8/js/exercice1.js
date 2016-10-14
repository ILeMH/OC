function ajaxGet(url, callback) {
	var req = new XMLHttpRequest();
	req.open("GET", url);
	
	req.addEventListener("load", function () {
		if (req.status >= 200 && req.status < 400) {
			callback(req.responseText);
		} else {
			console.error(req.status + " " + req.statusText + " " + url);
		}
	});
	
	req.addEventListener("error", function () {
		console.log("Erreur réseau avec l'url " + url);
	});
	
	req.send(null);
}

ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", function (reponse) {
    var tableaux = JSON.parse(reponse);
    var tableauxElt = document.getElementById("tableaux");
    tableaux.forEach(function (tableau) {
        // Crée une ligne de tableau HTML pour chaque tableau
        var ligneElt = document.createElement("tr");
        ligneElt.innerHTML = "<td>" + tableau.nom + "</td>" + "<td>" + tableau.annee + "</td>" +
            "<td>" + tableau.peintre + "</td>";
        tableauxElt.appendChild(ligneElt);
    }); 
});