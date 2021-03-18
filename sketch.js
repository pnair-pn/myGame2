var bgImage, bg;
var player, playerImage;

function preload(){
bgImage = loadImage("images/trackbg.jpeg");
playerImage = loadImage("images/runnerboy.png");
}

function setup(){
var canvas = createCanvas(800, 400);

bg = createSprite(500,200,800,400);
bg.addImage(bgImage);
bg.scale = 2;
bg.x=bg.width/2;
bg.velocityX=-4;

player = createSprite(100, 320, 100, 100);
player.addImage(playerImage);
}

function draw(){
background(0);

if(bg.x<300){
    bg.x=bg.width/2; 
  }

drawSprites();
}