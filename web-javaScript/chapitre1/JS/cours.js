function afficherEnfant(noeud; indice){
	if(noeud.nodeType === document.ELEMENT_TYPE)
	   if((indice >=0 && indice< noeud.childNodes.length)){
		   console.log(noeud.childNodes[indice]);
	   }
		else{
			console.log("indice incorrect");
		}
	else{
		console.log("Type de noeud incorrect");
	}
}

afficherEnfant(document.body, 2);
afficherEnfant(document.body, -1);
afficherEnfant(document.body[0], 4);