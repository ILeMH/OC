/* 
Activité : jeu de devinette
*/


console.log("Bienvenue dans ce jeu de devinette !");

var solution = Math.floor(Math.random() * 100) + 1;

console.log("(La solution est " + solution + ")");

var nbDeTour =6;
var trouve=false;
var i=0;

while((i<6) && (trouve!==true)){
    tentative=Number(prompt("Devinez quel est le chiffre ou le nombre à deviner : \n"))
    
    if(tentative < solution){
        console.log("Trop petit\n");
        i++
    }
    else if(tentative > solution){
        console.log("trop grand \n");
        i++
    }
    else if(tentative === solution){
        console.log("C'est gagné ! Félicitations")
        trouve=true;
    }    
}
	
if(trouve===false){
    console.log("Vous avez dépensé tous vos crédits, c'est perdu ! \n");
	encore();
}