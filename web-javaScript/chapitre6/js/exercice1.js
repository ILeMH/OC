var aideMdr = document.createElement("p");
var validationCourriel = "";

document.getElementById("mdp1").addEventListener("blur", function (e) {
	if (e.target.value.length < 6) {
		validationCourriel = "Longueur trop faible";
	}
	else{
		validationCourriel = "";
	}
	document.getElementById("infoMdp").textContent = validationCourriel;
});

document.getElementById("mdp2").addEventListener("submit", function (e) {
	var mdp = form.e.target.value;
	if (mdp !== (document.getElementById("mdp1").textContent)) {
		validationCourriel = "Les mots de passes sont differents !";
	}
	else {
		validationCourriel = "";
	}
	document.getElementById("infoMdp").textContent = validationCourriel;
});