/* 
Activité : gestion des contacts
0 = quitter
1 = descrire
2 = ajouter
*/

/*----------------------------------------------------------------------------------
										Vartiables									
------------------------------------------------------------------------------------*/

var contacts = [];

var contact = {
	
	nouveau: function(prenom, nom){
		this.prenom = prenom;
		this.nom = nom;
	},
	
	decrire: function(){
		var description = this.nom +" "+this.prenom;
		return description;
	}
};

/*--------------------------------------------------------------------
										Fonctions									
----------------------------------------------------------------------*/

function ajouterContact (contact){
	contacts.push(contact);
}


function presentation(){
	console.log("0 : quitter\n1 : afficher les contacts\n2 : ajouter un contact");
}


function principal (){
	
	var numero;
	
	while(numero !== "0"){
		var popUp;
		numero=prompt("Bonjour, que voulez-vous faire ?");
		
		if(numero === "1"){
			contacts.forEach(function(contact){
			console.log(contact.decrire());
		});
			presentation();
		}
		
		else if(numero === "2"){
			var prenom;
			var nom;
		
			prenom = prompt("Quel est le prenom ?");
			nom = prompt("Et le nom de famille ?");
			var personne = Object.create(contact);
			personne.nouveau(prenom, nom);
			ajouterContact(personne);
		}
		
		else if(numero === "0"){
			console.log("Au revoir");
		}
	
		else{
			console.log("Commande inconnue\n");
			presentation();
		}
	}
}

/*----------------------------------------------------------------------------
						initialisation du programme					
------------------------------------------------------------------------------*/

var personne0;
var personne1;
personne0=Object.create(contact);
personne1=Object.create(contact);
personne0.nouveau("Alexandre","SCH");
ajouterContact(personne0);
personne1.nouveau("Michael", "Jackson");
ajouterContact(personne1);

/*------------------------------------------------------------------------
						lancement du programme						
--------------------------------------------------------------------------*/
presentation();
principal();