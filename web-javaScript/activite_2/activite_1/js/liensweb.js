/*------------------------------------------------------------------------------
////////////////////////// Première activité ///////////////////////////////////
------------------------------------------------------------------------------*/

/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: " http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: " http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: " http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

var contenu = document.getElementById("contenu");
var div = document.createElement("div");
div.id = "div";

var bouton = document.createElement("button");
bouton.textContent = "Ajouter un lien";
bouton.id = "ajouter";
bouton.style.marginBottom = "20px";
bouton.style.display = "inline";

var changement = false;
var verification = false;
contenu.appendChild(bouton);

/*-------------------------------------------------------------------------------
//////////////////////////////// deuxième activité //////////////////////////////
--------------------------------------------------------------------------------*/

// Aménagement de l'activité 1 : rafraichissement de la page par fonction

function synchroniser() {
	
	listeLiens.forEach(function (site) {
		var link = document.createElement("a");
		var url = document.createElement("p");
		var auteur = document.createElement("p");
	
		link.textContent = site.titre;
		link.href = site.url;
		link.style.color = "#428bca";
		link.style.fontWeight = "bold";
		link.style.fontSize = "120%";
	
		url.textContent = site.url;
		url.style.display = "initial";
	
		auteur.textContent = "Ajouté par : " + site.auteur;
	
		div.style.backgroundColor = "white";
	
		contenu.appendChild(div);
		div.appendChild(link);
		div.appendChild(url);
		div.appendChild(auteur);
	});
}

/*------------------------------------------------------------------------------
////////////////////// Création des nouvelles variables ////////////////////////
-------------------------------------------------------------------------------*/

var tab = document.createElement("tr");
tab.id = "tab";

var listeAjout = [
    {
        id: "nom",
        type: "text",
        name: "nom",
		titre: "Entrez votre nom",
		label: "Nom  "
    },
	
	{
        id: "titre",
        type: "text",
        name: "titre",
		titre: "Entrez le titre du site",
		label: "Titre  "
    },
	
	{
        id: "url",
        type: "url",
        name: "url",
		titre: "Vous devez remplir ce champ",
		label: "Url  "
    }
];


listeAjout.forEach(function(lien) {
	
	var elts = document.createElement("input");
	var aide = document.createElement("p");
	elts.id = lien.id;
	elts.type = lien.type;
	elts.name = lien.name;
	elts.title = lien.titre;
	elts.required;
	aide.textContent = lien.label;
	aide.style.marginRight = "8px";
	
	elts.style.margin = "0 30px 30px 0";
	
	var colonne = document.createElement("td");
	colonne.appendChild(elts);
	tab.appendChild(aide);
	tab.appendChild(colonne);
});


var confirmationAjout = document.createElement("p");
confirmationAjout.id = "confirmationAjout";
confirmationAjout.style.backgroundColor = "#65C7FC";
confirmationAjout.style.fontSize = "150%";
confirmationAjout.style.fontWeight = "borld";
confirmationAjout.style.color = "white";

var aideUrl = document.createElement("p");
aideUrl.style.marginRight = "5px";
tab.appendChild(aideUrl);

/*-------------------------------------------------------------------------------
////////////////////////// Fonction de vérification URL /////////////////////////
--------------------------------------------------------------------------------*/

function verif(e) {
	var regexUrl = /https.\/\/:*|http.\/\/:*/;
	var message = "";
	if(!regexUrl.test(e.target.value)) {
		message = "Adresse invalide";
		aideUrl.textContent = message;
		aideUrl.style.color = "red";
	} else {
		aideUrl.textContent = "Conditions validées !";
		aideUrl.style.color = "green";
		verification = true;
	}
}

/*------------------------------------------------------------------------------
/////////////////////////// Switch entre les 2 interfaces //////////////////////
--------------------------------------------------------------------------------*/

document.getElementById("ajouter").addEventListener("click", function () {
	
	if (changement === true && verification === true) {
		if(document.getElementById("url").value !== "" & document.getElementById("nom").value !== "" && document.getElementById("titre").value !== ""){
		var ajoutDansLaBase = { // condition d'envoi des données
			
			titre: document.getElementById("titre").value,
			url: " " + document.getElementById("url").value,
			auteur: document.getElementById("nom").value
		};
		listeLiens.push(ajoutDansLaBase);
		document.getElementById("div").innerHTML = "";
		synchroniser();
		bouton.textContent = "Ajouter un lien";
		confirmationAjout.textContent = "Le lien "+ document.getElementById("titre").value + " a bien été ajouté";
		contenu.replaceChild(confirmationAjout, tab);
		setTimeout(function() {
			contenu.replaceChild(bouton, confirmationAjout);
		}, 2000);
		changement = false;
		varification = false;
		}
		else {
			alert("Au moins un des champs est nul !");
		}
	} else {

		contenu.replaceChild(tab, bouton);
		var nouvelleColonne = document.createElement("td");
		bouton.textContent = "Ajout";
		nouvelleColonne.appendChild(bouton);
		tab.appendChild(nouvelleColonne);
		document.getElementById("url").addEventListener("input", verif);
		changement = true;
	}
});

/*-------------------------------------------------------------------------------
//////////////////////////// lancement initial //////////////////////////////////
--------------------------------------------------------------------------------*/

synchroniser();