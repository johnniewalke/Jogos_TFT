(function(){
	var game = new Phaser.Game(800,600,Phaser.AUTO,null,{preload:preload,create:create,update:update});//{}Qual fase);
	var platforms,player,keys,stars,txtScore,score = 12;
	function preload(){ // O que deve ser carregado antes do jogo iniciar
		game.load.image('fundo','img/Fundo_Galinheiro_V4.png');
		game.load.image('platform','img/platform.png');
		game.load.spritesheet('ovo','img/ovo_inteiro.png');	
		game.load.spritesheet('ovoQuebrado','img/ovoQuebrado.png');	
		game.load.spritesheet('galinha','img/galinha_gigante.png',1000,1000);
	}
	function create(){ // Criar elementos dentro do jogo (val, array)
		keys = game.input.keyboard.createCursorKeys(); // função que verifica o teclado
		game.physics.startSystem(Phaser.Physics.ARCADE);//sistema de física do Phaser
		game.add.sprite(0,0,'fundo');//(largura,altura)

		platforms = game.add.group();
		platforms.enableBody = true; // Habilita o corpo solido para todas plataformas do grupo
		var platform = platforms.create(0,game.world.height - 112,'platform');
			platform.scale.setTo(2,1); //Multiplica o tamanho da plataforma
			platform.body.immovable = true; // Deixa o chao estático

		/////////////////////////////////////////// personagem
		player = game.add.sprite(220,game.world.height - 400,'ovo');
		player.scale.setTo(0.05,0.05)
		game.physics.arcade.enable(player);
		player.body.gravity.y = 100; //intensidade da gravidade (y vertical)(x horizontal)
		player.body.bounce.y = 0.2; // reação da colisão(kikar)
		player.body.collideWorldBounds = true; //limitação da acão da gravidade(dentro da tela)
		/////////////////////////////////////////// animação
		player.animations.add('left',[1,0],10,true); //anime os frames[], velocidade da animação, loop da animação
		player.animations.add('right',[3,4],10,true);

		/////////////////////////////////////////// Galinhas,tamanho,animação
		galinha1 = game.add.sprite(150,80, 'galinha');
		galinha1.scale.setTo(0.18, 0.20);
		galinha1.animations.add('bota',[0,1],3.2,true); //anime os frames[], velocidade da animação, loop da animação
		galinha1.animations.play('bota');
		
		galinha2 = game.add.sprite(325,80, 'galinha');
		galinha2.scale.setTo(0.18, 0.20);
		galinha2.animations.add('bota',[0,1],3,true); //anime os frames[], velocidade da animação, loop da animação
		galinha2.animations.play('bota');
		
		galinha3 = game.add.sprite(500,80, 'galinha');
		galinha3.scale.setTo(0.18, 0.20);
		galinha3.animations.add('bota',[0,1],2.8,true); //anime os frames[], velocidade da animação, loop da animação
		galinha3.animations.play('bota');
				
		
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

	}
	function update(){ // Logica do jogo que deve ser verificada a cada loop do jogo(colisão,movimentação)
		colidiu = game.physics.arcade.collide(player,platforms); // verifica se o jogador interage com as plataformas
		game.physics.arcade.collide(stars,platforms); // interação estrela e plataforma
		game.physics.arcade.overlap(player,platforms,quebraOvo);
		/////////////////////////////////////////// movimentação lateral
		if (colidiu == true){
		
		player2 = game.add.sprite(200,game.world.height - 160,'ovoQuebrado');
		player2.scale.setTo(0.035,0.035)
		player.kill();
		}
	}
	function collectStar(player,star){
		player.kill();
		score = score - 1;
		txtScore.text = 'ESTRELA: ' + score;
	}

		function quebraOvo(player,platforms){	
		if (colidiu == true){
		player.kill();
		//player = game.add.sprite(220,game.world.height - 200,'ovo');
		//player.scale.setTo(0.05,0.05)
		}
	}
}());