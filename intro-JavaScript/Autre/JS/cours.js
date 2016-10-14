var Chien = {
	race : 0,
	taille : 0,
	nom : 0,
	
	aboyer : function(){
		if(this.race === "mâtin de Naples"){
	return "Grrr ! Grrr !";
		}
		else{
			return "Kaii !! Kaii !";
		}
},
	init: function(nom, race, taille){
		this.race = race;
		this.nom = nom;
		this.taille = taille;
	},
};

    
var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());