function ajouter(){
	var dessert = prompt("Entrez votre dessert :");
	var nouveau = document.createElement("li");
	var liste = document.getElementById("desserts");
	nouveau.textContent = dessert;
	liste.appendChild(nouveau);
}

document.querySelector("button").id = "press";

document.getElementById("press").addEventListener("click", ajouter);