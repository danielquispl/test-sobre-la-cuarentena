function calculaIMC()
	 {
		 //declaramos las variables
		var peso, altura, imc, leyenda;
		//hacemos la llamada a los datos introducidos
		 peso=document.getElementById("peso").value;
		 altura=document.getElementById("altura").value/100;
		//calculamos el imc
		 imc=peso/(altura*altura);
		//enviamos el resultado a la caja correspondiente y lo reducimos a 2 decimales
		 document.getElementById("imc").value=imc.toFixed(2);
		//mediante if comparamos el resultado para determinar si es correcto el peso
		if(imc<16){
		  document.getElementById("leyenda").value="Delgadez Severa";
		}
		else if(imc<17){
		  document.getElementById("leyenda").value="Delgadez Moderada";
		}
		else if(imc<18.5){
		  document.getElementById("leyenda").value="Delgadez Aceptable";
		}
		else if(imc<25){
		  document.getElementById("leyenda").value="Peso Normal";
		}
		else if(imc<30){
		  document.getElementById("leyenda").value="Sobrepeso";
		}
		else if(imc<35){
		  document.getElementById("leyenda").value="Obeso: Tipo I";
		}
		else if(imc<40){
		  document.getElementById("leyenda").value="Obeso: Tipo II";
		}
		else if(imc>=40){
		  document.getElementById("leyenda").value="Obeso: Tipo III";
		}

	 }