class Game{
    constructor(){

    }
getgameState(){
    var gmstateref = database.ref('gameState');
    gmstateref.on("value", function(data){
         gamestate = data.val();
    } );
  }
updateGameState(state){
    var GameStateREF = database.ref('/');
    GameStateREF.update({
       gameState : state
    });
}
startGame(){
    if(gamestate === 0){
        player = new Player();
        player.getPlayerCount();
        form = new Form();
        form.display();
    }
    car1 = createSprite(150,100,20,20);
    car2 = createSprite(200,100,20,20);
    carset = [car1,car2];
}
playGame(){
 form.hide();
 text("Game has started", 200,200);
 Player.getallPlayersInfo();
 if(allplayers !== undefined){
    var positiony;
    var positionx = 150;
    var index = 0;

    for(var plr in allplayers){
       carset[index].x = positionx;
       carset[index].y = displayHeight - allplayers[plr].distance;
        if(plr === "player" + player.index){
           carset[index].shapeColor = "red";
           camera.position.x = carset[index].x;
           camera.position.y = carset[index].y;
        
       }else{
         carset[index].shapeColor = "black";
       }
       index++
       positionx = positionx + 50;
      
       drawSprites();
       //text(allplayers[plr].playername + ":" + allplayers[plr].distance, 100, positiony);
       
    }   
  }
  if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance = player.distance + 20;
      player.updatePlayerInfo();
  }
 }
}