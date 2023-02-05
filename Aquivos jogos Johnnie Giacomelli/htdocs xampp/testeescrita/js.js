var palavras = ["CASA", "GALINHA", "OVO", "CARTAS", "PRENDA", "ERVA", "MATE", "TECLADO", "COMPUTADOR", "CAVALO", "FAZENDA", "DIGITAR", "SOL"];
var atual = 0;
var atual2 = 0;
var max = 11;
var segundosPadrao = 100;
var segundos = segundosPadrao;

window.onload = function() {
	startCountdown();
	
	document.getElementById("input").focus();
};

function teste(palavraDigitada) {
	var palavraOriginal = document.getElementById("palavra").innerText;
	
	if(palavraDigitada.toLowerCase() == palavraOriginal.toLowerCase()) {
		aumentaAcertos();
		mudaPalavra();
		limpaInput();
	}
}

function aumentaAcertos() {
	var acertos = parseInt(document.getElementById("contadorNR").innerText);
	
	acertos = acertos+1;
	
	document.getElementById("contadorNR").innerText = acertos;
}

function mudaPalavra() {
	document.getElementById("palavra").innerText = percorrePalavras();
}

function limpaInput() {
	document.getElementById("input").value = '';
}

function palavraAleatoria() {
	nrPalavras = palavras.length;
	rand = atual;
	
	while(rand == atual) 
		rand = Math.floor(Math.random() * nrPalavras);

	atual = rand;

	return palavras[rand];
}

 function percorrePalavras(){
	nrPalavras = palavras.length;
	cont = atual;

	if(atual <= palavras.length-2 ){
			atual = atual+1;
			return palavras[atual];
	} else {
				cont = 0;
				atual = 0;
				return palavras[atual];
		}
}

function startCountdown() {
   if((segundos - 1) >= 0){
	   segundos = segundos - 1;
	   temporizadorNR.innerText = segundos;
	   setTimeout('startCountdown()', 1000);
   } else {
	   fim();
   }
}

function fim() {
	document.getElementById("input").disabled = true;
	document.getElementById("reiniciar").style.display = "block";
}

function reiniciar() {
	document.getElementById("reiniciar").style.display = "none"
	document.getElementById("input").disabled = false;
	document.getElementById("input").focus();
	document.getElementById("input").value = '';
	contadorNR.innerText = 0;
	temporizadorNR.innerText = segundosPadrao;
	segundos = segundosPadrao;
	mudaPalavra();
	startCountdown();
}