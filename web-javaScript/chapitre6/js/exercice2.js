var nombre = document.getElementById("temps");
var stop = document.createElement("button");
stop.textContent = "Arrêter";
stop.id = "arreter";

function augmenter () {
	document.getElementById("principal").replaceChild(demarrer, arreter);
	var secondes = Number(nombre.textContent);
	nombre.textContent = secondes+1;
	
}

document.getElementById("demarrer").addEventListener("click", augmenter);

setTimeout(function () {
    setInterval(function () {
        console.log("Top");
	}, 1000);
}, 2000);
