function bott03(){
	var numero1 = parseInt(document.getElementById("n1").value);
	var numero2 = parseInt(document.getElementById("n2").value);
	var numero3 = parseInt(document.getElementById("n3").value);

	if(numero1 > numero2 && numero1 > numero3){
		document.getElementById("res").innerHTML="El numero mayor es: "+numero1;
	}else if(numero2 > numero1 && numero2 > numero3){
		document.getElementById("res").innerHTML="El numero mayor es: "+numero2;
	}else if(numero3 > numero1 && numero3 > numero2){
		document.getElementById("res").innerHTML="El numero mayor es: "+numero3;
	}
}