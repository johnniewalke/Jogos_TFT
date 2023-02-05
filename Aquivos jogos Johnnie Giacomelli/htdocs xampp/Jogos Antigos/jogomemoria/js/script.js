(function(){
	var imagens = [];

	var viraCards = [];

	for(var i = 0; i < 16; i++){
		var img = {
			src: "img/" + i + ".png",
			id: i%8
		};
		imagens.push(img);
	}

	//chama a função de inicialização do jogo
	iniciaJogo();
	
	//função de inicialização do jogo
	function iniciaJogo(){
		viraCard = [];
		imagens = sortear(imagens);


		var frenteFaces = document.getElementsByClassName("frente");
		//posicionamento das cartas
		for(var i = 0; i < 16; i++){
			var card = document.querySelector("#card" + i);
			card.style.left = (i % 8 === 0) ? 5 + "px" : (i % 8) * 165 + 5 + "px";
			card.style.top = i < 8 ? 5 + "px" : 250 + "px";

			card.addEventListener("click",viraCard,false);

			frenteFaces[i].style.background = "url('"+ imagens[i].src +"')";
			frenteFaces[i].setAttribute("id", imagens[i].id);
		}
	}

	function sortear(velhoArray){
		var novoArray = [];

		while(novoArray.length !== velhoArray.length){
			var i = Math.floor(Math.random()*velhoArray.length);

			if(novoArray.indexOf(velhoArray[i]) < 0){
				novoArray.push(velhoArray[i]);
			}
		}
		return novoArray;
	}

	function viraCard() {
		if(viraCards.length < 2){
			var faces = this.getElementsByClassName("face");

			if(faces[0].classList.length > 2){
				return;
			}

			faces[0].classList.toggle("virado");
			faces[1].classList.toggle("virado");
			
			viraCards.push(this);
		} else {
			viraCards[0].childNodes[1].classList.toggle("virado");
			viraCards[0].childNodes[3].classList.toggle("virado");
			viraCards[1].childNodes[1].classList.toggle("virado");
			viraCards[1].childNodes[3].classList.toggle("virado");

			viraCards = [];
		}
	}
}());
