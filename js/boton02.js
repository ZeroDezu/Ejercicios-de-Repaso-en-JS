function bott02(){
	var cantidad = 50; //las veses que se repetira el ciclo NOTA: la pude haver omitido
	var primo=2; //esta bariable es para conpara si el nuero es solamnte divicible dos veses que entre 1 y su mismo
	var cont=0; //contador


		for(var i=2; i<=cantidad; i++){ //esta parte es para que el ciclo se repita las veses que se desea

			for(var j=1;j<=i;j++){ //esta parte es para que el nuero ingresado se repita entre el y todos los numeros anteriores
				if((i % j) == 0){ //evalua si el residua de la divicion de el numero entre los demas nuero son iguales a 0
					cont++; //Si es así al contador se le suma 1
				}
			}
			 if(cont == primo){ //al salir del segundo ciclo se evalua si el contador esigual a primo = 2 
		    	alert("Este numero es primo: "+i); // Si es asi manda una alerta que muestra ese numero, ya que es primo
		    }
		    j=1; //se resetea esta valor para que cuando evalue otro numero este vuelva a empesar desde el principio para que saque el reciduo de las diviciones 
		    cont=0; //el contador vuelve a 0 para evaluar si el numero es solo divisible 2 veces ya que los primos solo son divisibles entre si mismos y entre 1
		}
}
