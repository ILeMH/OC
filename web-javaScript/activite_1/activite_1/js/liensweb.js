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

var bouton = document.createElement("button");
bouton.textContent = "Ajouter un lien";
bouton.id = "id";
bouton.style.marginBottom = "20px";

contenu.appendChild(bouton);

listeLiens.forEach(function(site){
  	var div = document.createElement("div");
	var span = document.createElement("span");
	
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

