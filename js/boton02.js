function bott02(){
	var cantidad = 50;
	var primo=2;
	var cont=0;


		for(var i=2; i<=cantidad; i++){

			for(var j=1;j<=i;j++){
				if((i % j) == 0){
					cont++;
				}
			}
			 if(cont == primo){
		    	alert("Este numero es primo: "+i);
		    }
		    j=1;
		    cont=0;
		}
}