var bg,forms,logo,games,player1,player2;
var score=0;

function preload() {
  //logo = loadImage("/1-1.jpg");
  bg = loadImage("background.jpg");
  player1 = loadImage("nam.png");
  player2 = loadImage("child.png")
}

function setup() {
  createCanvas(1535, 760);
  database = firebase.database();
  games = new Game();
  games.getState();
  games.start();
}

function draw(){
  background(bg);
  textSize(30);
  fill("white");
  //text("Maze Mania", 450, 50);

  drawSprites()
}