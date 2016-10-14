function getCouleur(e){
	var touche = String.fromCharCode(e.charCode);
	touche = touche.toLowerCase();
	var couleur = "inconnu";
	switch (touche){
		case "r":
			couleur = "red";
			break;
		case "j":
			couleur = "yellow";
			break;
		case "v":
			couleur = "green";
			break;
		case "b":
			couleur = "white";
			break;
		default :
			console.log("Touche "+ touche+" non prise en charge");
	}
	var para = document.querySelectorAll("div");
	for (var i = 0; i< para.length ; i++){
		para[i].style.backgroundColor = couleur;
	}
	
}


document.addEventListener("keypress", getCouleur);