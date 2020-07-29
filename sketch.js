var player,form,game;
var gamestate = 0,  playercount = 0;
var allplayers,distance = 0;
var database;
var car1,car2;
var carset = [];

function setup(){
    createCanvas(displayWidth,displayHeight);

    database = firebase.database();
    game = new Game();
    game.getgameState();
    game.startGame();
}

function draw(){
 if(playercount === 2){
     game.updateGameState(1);
 }
if(gamestate === 1){
    clear();
    game.playGame();
}
}
