(function(){
	var game = new Phaser.Game(800,600,Phaser.AUTO,null,{preload:preload,create:create,update:update,funcErro:funcErro,fase1:fase1,sorteiaLetra:sorteiaLetra, destroySprite:destroySprite, collisionHandler:collisionHandler});
	var platforms,player,keys,stars,globSndStar,txtScore,score = 0;
	var galinha1, galinha2, galinha3, ovoOk, ovoQuebrado, letraAtual, keyAtual;
	var cont, points,controle,v,letras1,letras2,letras3;
	var timeSinceLastIncrement = 0;

	//var nFases = 10;
	WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Finger Paint']
    }

};
	
	function funcErro(){
		
	}
	
	function preload(){
		
		game.load.image('sky','img/fundo.png');
		game.load.image('star','img/ovo_inteiro.png');
		game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
		game.load.audio('error', 'audio/alerta.mp3');
		
		game.load.image('dude','img/gauch.png');
		
		game.load.spritesheet('galinha','img/galinha_gigante.png',1000,1000);
		game.load.image('ovo','img/ovo_inteiro.png');
		
		game.load.image('platform','img/platform.png');
	}
	
	function checkLetra(){
		var charcode = letraAtual.charCodeAt(0); // pegar o code char correspondente
		var letr = game.add.text(30, 30, String.fromCharCode(charcode), print);
		
		
	}
	
	function create(){
		var platforms;
		game.physics.startSystem(Phaser.Physics.ARCADE);//sistema de física do Phaser
		
		
		
		this.game.input.keyboard.onDownCallback = function(e){
			checkLetra();
		};
		
		sky = game.add.sprite(0, 0, 'sky')
		
		
		galinha1 = game.add.sprite(150,80, 'galinha');
		galinha2 = game.add.sprite(325,80, 'galinha');
		galinha3 = game.add.sprite(500,80, 'galinha');
		
		galinha1.scale.setTo(0.18, 0.20);
		galinha2.scale.setTo(0.18, 0.20);
		galinha3.scale.setTo(0.18, 0.20);
		
		galinha1.animations.add('bota',[0,1],3.2,true); //anime os frames[], velocidade da animação, loop da animação
		galinha2.animations.add('bota',[0,1],3,true); //anime os frames[], velocidade da animação, loop da animação
		galinha3.animations.add('bota',[0,1],2.8,true); //anime os frames[], velocidade da animação, loop da animação
				
		galinha1.animations.play('bota');
		galinha2.animations.play('bota');
		galinha3.animations.play('bota');
		
		
		error  = game.add.audio('error');
		keys = game.input.keyboard.create;
		
	
	//	ovoOk.enableBody = true;
		//ovoOk.body.immovable = true;
	//	galinha3.animations.stop();
	
		platforms = game.add.group();
		platforms.enableBody = true; // Habilita o corpo solido para todas plataformas do grupo
		var platform = platforms.create(0,game.world.height - 64,'platform');
			platform.scale.setTo(2,1); //Multiplica o tamanho da plataforma
			platform.body.immovable = true; // Deixa o chao estático

		  
		
		sorteiaLetra();
		//fase1();
		
		
		
			/*switch(controle){	
		
		};
	 
	*/
	}

	function fase1(){

	 	print = { font: "50px Arial", fill: "#000000", align: "center" };
		//v = game.add.text(685, 390, 'oi', print);
		//letras0 = [q,w,e]
		
		letras1 = ['q','w','e'];
		letras2 = ['r','t','y'];
		letras3 = ['u', 'i', 'o', 'p'];
	
		selLetra = Math.floor(Math.random() * 3);
    	print = { font: "50px Arial", fill: "#000000", align: "center" };
    
		v = game.add.text(685, 390, letras1[selLetra], print);
		game.add.text(10, 5, 'PONTOS PARA FINALIZAR: 2000');
		pontos = game.add.text(10, 30, 'PONTOS CONQUISTADOS:' + points);

		controle=0;
		sorteiaLetra();
		

	}
	
function botaOvo(galinha, letra){
		game.input.keyboard.addKey(Phaser.Keyboard.UP)
		print = { font: "40px Arial", fill: "#000000", align: "center" };	
		
		checkLetra();
		
		ovoOk = game.add.sprite(galinha.x+70, galinha.height+70, 'ovo');
		ovoOk.scale.setTo(0.055,0.055);
		game.physics.enable(ovoOk, Phaser.Physics.ARCADE);
		ovoOk.body.collideWorldBounds = true;
	    ovoOk.body.velocity.y = 100;
		
		game.physics.arcade.enable(ovoOk);
		
		v = game.add.text(ovoOk.x+5, ovoOk.y-2, letra, print);

	    game.physics.enable(v, Phaser.Physics.ARCADE);
		v.body.velocity.y = 100;
		v.body.collideWorldBounds = true;
		
		ovoOk.body.collide(platforms);
		game.physics.add.collider(platforms, ovoOk);
		game.physics.add.collider(platforms, ovoOk, collisionHandler, null, this);
		galinha = game.add.sprite(galinha.x,galinha.y, 'galinha');
		
		
		
}

function sorteiaLetra(){

	sortGalinha = Math.floor(Math.random() * 3);
	sortLetra = Math.floor(Math.random() * 3);
	var selecGal,selecLetra;

	letras1 = ['q','w','e'];
	letras2 = ['r','t','y'];
	letras3 = ['u', 'i', 'o', 'p'];
	
	
	if(sortGalinha==0){
		selecGal = galinha1;
		selecLetra = letras1;
	}if(sortGalinha==1){
		selecGal = galinha2;
		selecLetra = letras2;
	}if(sortGalinha==2){
		selecGal = galinha3;
		selecLetra = letras3;
	}
	
		letraAtual = selecLetra[sortLetra];
		keyAtual = letraAtual.charCodeAt(0);
	
		botaOvo(selecGal, selecLetra[sortLetra]);
			
}
function funcErro(){
	game.physics.arcade.collide(platforms, ovoOk); // verifica s
}



function update(){

	game.physics.arcade.collide(ovoOk,platforms);
	game.physics.arcade.collide(ovoOk, platforms, collisionHandler);// colisão cupinzeiro
//	game.physics.arcade.collide(v,platforms);
}

function destroySprite (sprite) {
    sprite.destroy();

}


function collisionHandler (obj1, obj2) {
	obj1.kill();
    //game.stage.backgroundColor = '#892d2d';

	}
	
function render() {

    //game.debug.bodyInfo(player, 32, 32); // Os debugs servem para verificar os comandos em tempo real
    // game.debug.body(player);
    //game.debug.body(sprite2);
	}	



}());






















