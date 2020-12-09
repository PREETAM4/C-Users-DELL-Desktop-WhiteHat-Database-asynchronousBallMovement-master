var database;
var canvas ,gameState=0;
var player,game,form,Playercount=0;
var allPlayers;


function setup(){
    database = firebase.database();
    canvas = createCanvas(400,400);
    game = new Game()
    game.getState()
    game.start()
    
}

function draw(){
  if(Playercount == 4){
      game.update(1)
  }
  if(gameState==1){
      clear()
      game.play()
  }
}


