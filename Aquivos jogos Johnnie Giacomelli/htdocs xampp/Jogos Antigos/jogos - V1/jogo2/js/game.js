var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

//Váriáveis
var bird;
var bandeira;
var passaroParado = true;

var baloesTexto;
var baloesPegos = 0;

var balao1;
var balao2;
var balao3;
var balao4;
var balao5;
var balao6;
var balao7;
var balao8;
var balao9;
var balao10;




//Pré carregamento antes de início do jogo
function preload() {

    //Carregar uma imagem. Parâmetros "Nome" e "Caminho da imagem"
    game.load.image('fundo', 'sprites/sky.png');
    game.load.image('bandeira', 'sprites/bandeira.jpg');
    game.load.spritesheet('bird', 'sprites/juca.png', 35, 30);
    game.load.spritesheet('balao', 'sprites/balao.png', 32, 32);
    game.load.spritesheet('nuvem', 'sprites/nuvem.png', 32, 32);
    game.load.image('mastro', 'sprites/mastro.png');


}

//Criar os objetos na tela do jogo
function create() {

    //Carregar o nosso sistema de física assim que o jogo for criado
    //Parâmetro (Systema de fisica Arcaide (Box...))
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //posição de x,y e nome da sprite
    var fundo = game.add.sprite(0, 0, 'fundo');
    fundo.scale.setTo(1.8, 1.8);
    
    var mastro = game.add.sprite(778, 175, 'mastro');
    mastro.scale.setTo(0.7, 0.7);
    

    baloesTexto = game.add.text(10, 30, 'Balões: 0', {
        'fontSize': '20px',
        'fill': '#fff'
    });

    bandeira = game.add.sprite(705, 175, 'bandeira');
    game.physics.arcade.enable(bandeira);
    bandeira.body.immovable = true;
    bandeira.scale.setTo(0.3, 0.3);
    
    bird = game.add.sprite(15, 15, 'bird');
    bird.animations.add('bird', [0, 1], 10, true);
    game.physics.arcade.enable(bird);
    bird.body.collideWorldBounds = true;
    bird.scale.setTo(1.5, 1.5);

    //Balão
    balao1 = game.add.sprite(200, 190, 'balao');
    balao1.animations.add('balao', [0, 1, 2], 10, true);
    balao2 = game.add.sprite(250, 190, 'balao');
    balao2.animations.add('balao', [0, 1, 2], 10, true);
    balao3 = game.add.sprite(300, 190, 'balao');
    balao3.animations.add('balao', [0, 1, 2], 10, true);
    balao4 = game.add.sprite(350, 190, 'balao');
    balao4.animations.add('balao', [0, 1, 2], 10, true);
    balao5 = game.add.sprite(400, 190, 'balao');
    balao5.animations.add('balao', [0, 1, 2], 10, true);
    balao6 = game.add.sprite(450, 190, 'balao');
    balao6.animations.add('balao', [0, 1, 2], 10, true);
    balao7 = game.add.sprite(500, 190, 'balao');
    balao7.animations.add('balao', [0, 1, 2], 10, true);
    balao8 = game.add.sprite(550, 190, 'balao');
    balao8.animations.add('balao', [0, 1, 2], 10, true);
    balao9 = game.add.sprite(600, 190, 'balao');
    balao9.animations.add('balao', [0, 1, 2], 10, true);
    balao10 = game.add.sprite(650, 190, 'balao');
    balao10.animations.add('balao', [0, 1, 2], 10, true);

    game.physics.arcade.enable(balao1);
    game.physics.arcade.enable(balao2);
    game.physics.arcade.enable(balao3);
    game.physics.arcade.enable(balao4);
    game.physics.arcade.enable(balao5);
    game.physics.arcade.enable(balao6);
    game.physics.arcade.enable(balao7);
    game.physics.arcade.enable(balao8);
    game.physics.arcade.enable(balao9);
    game.physics.arcade.enable(balao10);

}

    function update() {

        if (game.physics.arcade.collide(bird, bandeira)) {
            fimDeJogo();
        }

        bird.animations.play('bird');
        balao1.animations.play('balao');
        balao2.animations.play('balao');
        balao3.animations.play('balao');
        balao4.animations.play('balao');
        balao5.animations.play('balao');
        balao6.animations.play('balao');
        balao7.animations.play('balao');
        balao8.animations.play('balao');
        balao9.animations.play('balao');
        balao10.animations.play('balao');

        bird.rotation = game.physics.arcade.moveToPointer(bird, 800, game.input.activePointer, 80);

        if (game.physics.arcade.collide(bird, balao1)) {
            colisaoBalao(balao1);
        }
        if (game.physics.arcade.collide(bird, balao2)) {
            colisaoBalao(balao2);
        }
        if (game.physics.arcade.collide(bird, balao3)) {
            colisaoBalao(balao3);
        }
        if (game.physics.arcade.collide(bird, balao4)) {
            colisaoBalao(balao4);
        }
        if (game.physics.arcade.collide(bird, balao5)) {
            colisaoBalao(balao5);
        }
        if (game.physics.arcade.collide(bird, balao6)) {
            colisaoBalao(balao6);
        }
        if (game.physics.arcade.collide(bird, balao7)) {
            colisaoBalao(balao7);
        }
        if (game.physics.arcade.collide(bird, balao8)) {
            colisaoBalao(balao8);
        }
        if (game.physics.arcade.collide(bird, balao9)) {
            colisaoBalao(balao9);
        }
        if (game.physics.arcade.collide(bird, balao10)) {
            colisaoBalao(balao10);
        }

    }

    function colisaoBalao(y) {
        y.kill();
        baloesPegos += 1;
        baloesTexto.text = "Balões: " + baloesPegos;
        console.log(baloesPegos);

    }

    function fimDeJogo() {
        bird.kill();
    }