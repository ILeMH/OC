function compterLien (){
	var nombre;
	nombre = (document.querySelectorAll("a").length);
	console.log(nombre);
	if(nombre>0){
		for(var i =0; i<nombre;i++){
			console.log(document.getElementsByTagName("a")[i]);
		}
	}
	//console.log(document.getElementsByTagName("a")[0]);
}

compterLien();