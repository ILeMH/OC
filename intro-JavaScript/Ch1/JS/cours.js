var lesMousquetaires = ["Arthos", "Porthos", "Aramis"];

for(var i =0; i<lesMousquetaires.length;i++){
	if(i === 0){
		console.log("Avec boucle for : \n");
		console.log(lesMousquetaires[i]);
	}
	else{
		console.log(lesMousquetaires[i]);	
	}
}

console.log("On ajoute un bonhomme : \n");
lesMousquetaires.push("d'Arrtagnan");
console.log("On a ajouté : "+lesMousquetaires[3]+" au tableau  \n\n\n");

console.log("Méthode avec forEach : \n");

/*
---------------------------------------------------------------------------------
*/

var lesMous = {
	init: function (nom){
		this.nom = nom;
	},
	
	decrire: function(){
		var description = this.nom;
		return description;
	}
};

var M0 = Object.create(lesMous);
var M1 = Object.create(lesMous);
var M2 = Object.create(lesMous);
var M3 = Object.create(lesMous);
M0.init("Arthos");
M1.init("Porthos");
M2.init("Aramis");
M3.init("D'artagnan");

var tab = [];
tab.push(M0);
tab.push(M1);
tab.push(M2);
tab.push(M3);

tab.forEach(function(lesMous) {
	console.log(lesMous.decrire());
});