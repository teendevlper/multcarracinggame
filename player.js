class Player{
    constructor(){
      this.name = null;
      this.index = null;
      this.distance = 0;
    }
getPlayerCount(){
  var plrcntref = database.ref("playerCount");
  plrcntref.on("value", function(data){
    playercount = data.val();
  })
 }
 updatePlayerCount(count){
  var playercountref = database.ref("/");
  playercountref.update({
      playerCount : count
  });
 }
 updatePlayerInfo(){
 var playerNumber = "players/player" + this.index;
  var playerREF = database.ref(playerNumber);
   playerREF.set({
       playername : this.name,
       distance : this.distance
   });
 }
 static getallPlayersInfo(){
   var allplayerref = database.ref("players");
   allplayerref.on("value", (data)=> {
     allplayers = data.val();
   })
 }
}