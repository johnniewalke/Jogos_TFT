(function(){
	var game = new Phaser.Game(800,600,Phaser.AUTO,null,{preload:preload,create:create,update:update});
	var platforms,player,keys,stars,globSndStar,txtScore,score = 0;
	var keyQ,keyW,keyE,keyR,keyT,keyY,keyU,keyI,keyP, galinha1, galinha2, galinha3, ovoOk, ovoQuebrado, letra;
	var cont, points,controle,v,letras1,letras2,letras3;
	var timeSinceLastIncrement = 0;

	function preload(){
		
		game.load.image('sky','img/fundo.png');
		game.load.image('star','img/cow.png');	
		game.load.image('platform','img/platform.png');
		game.load.spritesheet('galinha','img/galinha_gigante.png',1000,1000);
		game.load.spritesheet('cavalo','img/ovo_inteiro.png');

	}

	function create(){
		var platforms;
		game.physics.startSystem(Phaser.Physics.ARCADE);//sistema de física do Phaser
		game.add.sprite(0,0,'sky');//(largura,altura)
		
		platforms = game.add.group();
		platforms.enableBody = true; // Habilita o corpo solido para todas plataformas do grupo
		var platform = platforms.create(0,game.world.height - 64,'platform');
			platform.scale.setTo(2,2); //Multiplica o tamanho da plataforma
			platform.body.immovable = true; // Deixa o chao estático

		player = game.add.sprite(90,game.world.height - 400,'cavalo');
		player.scale.setTo(0.05,0.05)
		game.physics.arcade.enable(player);
		player.body.gravity.y = 100; //intensidade da gravidade (y vertical)(x horizontal)
		player.body.bounce.y = 0.2; // reação da colisão(kikar)
		player.body.collideWorldBounds = true; //limitação da acão da gravidade(dentro da tela)
		/////////////////////////////////////////// animação
		player.animations.add('left',[1,0],10,true); //anime os frames[], velocidade da animação, loop da animação
		player.animations.add('right',[3,4],10,true);

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
		
		//keys = game.input.keyboard.create;
		
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

		print = { font: "40px Arial", fill: "#000000", align: "center" };	
		v = game.add.text(ovoOk.x+5, ovoOk.y-2, 'A', print);
	    game.physics.enable(v, Phaser.Physics.ARCADE);
		v.body.velocity.y = 100;
		v.body.collideWorldBounds = true;
		
	}

function update(){
				game.physics.arcade.collide(player,platforms);
}

}());