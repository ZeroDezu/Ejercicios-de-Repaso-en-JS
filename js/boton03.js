function bott03(){
	var numero1 = parseInt(document.getElementById("n1").value); // el valor 1 ingresado por el input se almacena en esta variable
	var numero2 = parseInt(document.getElementById("n2").value); // el valor 2 ingresado por el input se almacena en esta variable
	var numero3 = parseInt(document.getElementById("n3").value); // el valor 3 ingresado por el input se almacena en esta variable

	if(numero1 > numero2 && numero1 > numero3){ //evalua si el numero 1 es mayor que los demas
		document.getElementById("res").innerHTML="El numero mayor es: "+numero1; //remplasa e imprime el numero mayor en el html
	}else if(numero2 > numero1 && numero2 > numero3){ //evalua si el numero 2 es mayor que los demas
		document.getElementById("res").innerHTML="El numero mayor es: "+numero2; //remplasa e imprime el numero mayor en el html
	}else if(numero3 > numero1 && numero3 > numero2){ //evalua si el numero 3 es mayor que los demas
		document.getElementById("res").innerHTML="El numero mayor es: "+numero3; //remplasa e imprime el numero mayor en el html
	}
}
