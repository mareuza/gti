var validacao = false;

function gravar(formulario) {
	
	processaNome();
	processaIdade();
	processaNomeProprietario();
	return false;
}



function processaIdade(){

	var x = document.getElementById("idade");
	
	
	if(x.value <= 0){
		//window.alert("A idade precisa ser maior que 0");
		document.getElementById("resultadoIdade").innerHTML = "A idade precisa ser maior que 0";
		
	}else if(x.value >= 20){
		document.getElementById("resultadoIdade").innerHTML = "A idade precisa ser menor que 21";
		
	}else{
		document.getElementById("resultadoIdade").innerHTML = "";

	}

}

function processaNome(){
	var nome = document.getElementById("nome");

	if(nome.value.length <= 2){
		document.getElementById("resultadoNome").innerHTML = "O nome precisa ter mais de 2 letras";

	}else{
		document.getElementById("resultadoNome").innerHTML = "";

	}

}

function processaNomeProprietario() {
var nomeproprietario = document.getElementById("nomeProprietario"); 


if( nomeproprietario.value.length >=7){
document.getElementeById("resultadoNmeProp").innerHTML ="";
}else{
	document.getElementById("resultadoNmeProp").innerHTML ="O nome/sobrenome precisa ter mais de 6 caracters";

}

console.log(nomeproprietario.value.length);
}
	