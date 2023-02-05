(function(){
	var game = new Phaser.Game(800,600,Phaser.AUTO,null,{preload:preload,create:create,update:update,funcErro:funcErro,fase1:fase1,destroySprite:destroySprite});
	var platforms,player,keys,stars,globSndStar,txtScore,score = 0;
	var keyQ,keyW,keyE,keyR,keyT,keyY,keyU,keyI,keyP, galinha1, galinha2, galinha3, ovoOk, ovoQuebrado, letra;
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
		game.load.image('star','img/cow.png');
		game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
		game.load.audio('error', 'audio/alerta.mp3');
		
		game.load.image('dude','img/gauch.png');
		
		game.load.spritesheet('galinha','img/galinha_gigante.png',1000,1000);
		game.load.image('ovo','img/ovo_inteiro.png');
		
		game.load.image('platform','img/platform.png');
	}
	
	function checkLetra(){
		
		
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
		

		// galinha 1
	    keyQ = game.input.keyboard.addKey(Phaser.Keyboard.Q);
	    keyW = game.input.keyboard.addKey(Phaser.Keyboard.W);
	    keyE = game.input.keyboard.addKey(Phaser.Keyboard.E);
		
		
		// galinha 2
	    keyR = game.input.keyboard.addKey(Phaser.Keyboard.R);
	    keyT = game.input.keyboard.addKey(Phaser.Keyboard.T);		
	    keyY = game.input.keyboard.addKey(Phaser.Keyboard.Y);

		
		// galinha 3
		keyU = game.input.keyboard.addKey(Phaser.Keyboard.U);
	    keyI = game.input.keyboard.addKey(Phaser.Keyboard.I);		
	    keyP = game.input.keyboard.addKey(Phaser.Keyboard.P);

	
		ovoOk = game.add.sprite(220, 150, 'ovo');
		ovoOk.scale.setTo(0.055,0.055);
		ovoOk.name = 'ovoOk';
		
		
	    game.physics.enable(ovoOk, Phaser.Physics.ARCADE);
	    ovoOk.body.velocity.y = 100;
	//	ovoOk.enableBody = true;
		//ovoOk.body.immovable = true;
		ovoOk.body.collideWorldBounds = true;
	//	galinha3.animations.stop();
	

		platforms = game.add.group();
		platforms.enableBody = true; // Habilita o corpo solido para todas plataformas do grupo
		var platform = platforms.create(0,game.world.height - 64,'platform');
			platform.scale.setTo(2,1); //Multiplica o tamanho da plataforma
			platform.body.immovable = true; // Deixa o chao estático

		
		
		print = { font: "40px Arial", fill: "#000000", align: "center" };	
		v = game.add.text(ovoOk.x+5, ovoOk.y-2, 'A', print);
	    game.physics.enable(v, Phaser.Physics.ARCADE);
		v.body.velocity.y = 100;
		v.body.collideWorldBounds = true;
		
		
		game.physics.arcade.enable(ovoOk);
		ovoOk.body.collide(platforms);
		game.physics.add.collider(platforms, ovoOk);
		game.physics.add.collider(platforms, ovoOk, collisionHandler, null, this);
			/*switch(controle){	
		
		};
		
		
		

	 
	 points = 0;
	 cont=0;
	 fase1();
		
	*/
	}

	function fase1(){

		//letras0 = [q,w,e]
		letras1 = ['q','w','e'];
		letras2 = ['r','t','y'];
		letras3 = ['u', 'i', 'o', 'p'];
	
    	print = { font: "50px Arial", fill: "#000000", align: "center" };
    
		v = game.add.text(685, 390, letras1[i], print);
		game.add.text(10, 5, 'PONTOS PARA FINALIZAR: 2000');
		pontos = game.add.text(10, 30, 'PONTOS CONQUISTADOS:' + points);

		controle=0;


	}

function funcErro(){
	game.physics.arcade.collide(platforms, ovoOk); // verifica s
}



function update(){

	game.physics.arcade.collide(ovoOk,platforms);
	game.physics.arcade.collide(ovoOk, platforms, collisionHandler);// colisão cupinzeiro

	game.physics.arcade.collide(v,platforms);

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






















