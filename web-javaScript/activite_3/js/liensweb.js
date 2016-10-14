/* 
Activité 2
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)

// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreElt = document.createElement("a");
    titreElt.href = lien.url;
    titreElt.style.color = "#428bca";
    titreElt.style.textDecoration = "none";
    titreElt.style.marginRight = "5px";
    titreElt.appendChild(document.createTextNode(lien.titre));

    var urlElt = document.createElement("span");
    urlElt.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitreElt = document.createElement("h4");
    ligneTitreElt.style.margin = "0px";
    ligneTitreElt.appendChild(titreElt);
    ligneTitreElt.appendChild(urlElt);

    // Cette ligne contient l'auteur
    var ligneDetailsElt = document.createElement("span");
    ligneDetailsElt.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLienElt = document.createElement("div");
    divLienElt.classList.add("lien");
    divLienElt.appendChild(ligneTitreElt);
    divLienElt.appendChild(ligneDetailsElt);

    return divLienElt;
}

var contenuElt = document.getElementById("contenu");

/*-----------------------------------------------------------------------------
/////////////////////////////////// ajaxGet ///////////////////////////////////
------------------------------------------------------------------------------*/

ajaxGet("https://oc-jswebsrv.herokuapp.com/api/liens", function (reponse) {

    var liens = JSON.parse(reponse);
	 liens.forEach(function (site) {
		 
		var requete = {
    		titre: site.titre,
    		url: site.url,
    		auteur: site.auteur
		};
		
		var lienElt = creerElementLien(requete);
    	contenuElt.appendChild(lienElt);
	 });
});

/*-----------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////
-----------------------------------------------------------------------------*/

// Crée et renvoie un élément DOM de type input
function creerElementInput(placeholder, taille) {
    var inputElt = document.createElement("input");
    inputElt.type = "text";
    inputElt.setAttribute("placeholder", placeholder);
    inputElt.setAttribute("size", taille);
    inputElt.setAttribute("required", "true");
    return inputElt;
}

var ajouterLienElt = document.getElementById("ajoutLien");
var p = document.querySelector("p");
// Gère l'ajout d'un nouveau lien
ajouterLienElt.addEventListener("click", function () {
    var auteurElt = creerElementInput("Entrez votre nom", 20);
    var titreElt = creerElementInput("Entrez le titre du lien", 40);
    var urlElt = creerElementInput("Entrez l'URL du lien", 40);

    var ajoutElt = document.createElement("input");
    ajoutElt.type = "submit";
    ajoutElt.value = "Ajouter";

    var formAjoutElt = document.createElement("form");
    formAjoutElt.appendChild(auteurElt);
    formAjoutElt.appendChild(titreElt);
    formAjoutElt.appendChild(urlElt);
    formAjoutElt.appendChild(ajoutElt);

    // Remplace le bouton d'ajout par le formulaire d'ajout
    p.replaceChild(formAjoutElt, ajouterLienElt);

    // Ajoute le nouveau lien
    formAjoutElt.addEventListener("submit", function (e) {
        e.preventDefault(); // Annule la publication du formulaire
        
        var url = urlElt.value;
        // Si l'URL ne commence ni par "http://" ni par "https://"
        if ((url.indexOf("http://") !== 0) && (url.indexOf("https://") !== 0)) {
            // On la préfixe par "http://"
            url = "http://" + url;
        }
		
		var lien = {
            titre: titreElt.value,
            url: url,
            auteur: auteurElt.value
        };
		
/*-------------------------------------------------------------------------------
//////////////////////////////////// AjaxPost ///////////////////////////////////
--------------------------------------------------------------------------------*/
		
		ajaxPost("http://oc-jswebsrv.herokuapp.com/api/lien", lien, function (reponse) {
			if (reponse === true) {
				var lienElt = creerElementLien(lien);
        		contenuElt.insertBefore(lienElt, contenuElt.firstChild);
        		p.replaceChild(ajouterLienElt, formAjoutElt);
        		var infoElt = document.createElement("div");
        		infoElt.classList.add("info");
        		infoElt.textContent = "Le lien \"" + lien.titre + "\" a bien été ajouté.";
        		p.insertBefore(infoElt, ajouterLienElt);

        		setTimeout(function () {
            		p.removeChild(infoElt);
        		}, 2000);
			} 
			
			else if (reponse === false) {
				console.log("le lien \"" + lien.titre + "\" n'a PAS été ajouté");
            	p.replaceChild(ajouterLienElt, formAjoutElt);
			}
		}, true);
		
/*-------------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////////
--------------------------------------------------------------------------------*/
    });
});