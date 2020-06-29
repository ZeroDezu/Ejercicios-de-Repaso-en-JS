function bott01(){

	var numero = parseInt(prompt("Introdude un numero entero positivo"));
	var resultado = "";
		if(numero > 0){
		if(numero % 2 == 0) {
		    resultado = "Par";
		 }else {
		    resultado = "Impar";
		  }
		 }else{
		 	resultado = "no ingresastes un numero positivo"
		 }

	document.getElementById("res").innerHTML="el resutado es: Revisar el resultado en la consola";
	console.log("El resultado es: "+resultado);
}
