function bott01(){

	var numero = parseInt(prompt("Introdude un numero entero positivo")); //a qui es donde pido el valor
	var resultado = "";  //variable para almacenar un resultado en formato de texto
		if(numero > 0){ //evalua que el nuero sea positivo
		if(numero % 2 == 0) {	//si el residu de del numero dividido entre 2 es igaul a 0 entonces determina si es par
		    resultado = "Par"; //guarda el resultado
		 }else {//en caso contrario el resultado es impar
		    resultado = "Impar"; //guarda el resultado
		  }
		 }else{
		 	resultado = "no ingresastes un numero positivo" //mensage por no ingresar un numero positivo y lo guarda en una variable
		 }

	document.getElementById("res").innerHTML="el resutado es: Revisar el resultado en la consola"; //este es un mensaje que dise donde esta el resultado
	console.log("El resultado es: "+resultado); //esta parate hace que el mensaje se imprima en ela consola
}
