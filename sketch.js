

function preload(){
  bg= loadImage("iss.png");
  sleep= loadImage("sleep.png")
  brush= loadAnimation("brush.png");
  gym = loadAnimation("gym11.png","gym12.png");
  eat= loadAnimation("eat1.png","eat2.png");
  drink= loadAnimation("drink1.png","drink2.png");
  move= loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(800,400);
  scene = createSprite(400, 200, 50, 50);
  scene.addImage(bg);
  scene.scale = .15;
  Edges=createEdgeSprites();

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;

}

function draw() {
  background(255,255,255);  
  drawSprites();
  


  if(keyDown("UP_ARROW")){

    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  
  }



 if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    astronaut.bounceOff(Edges[0]);
    astronaut.bounceOff(Edges[1]);
    astronaut.bounceOff(Edges[2]);
    astronaut.bounceOff(Edges[3]);
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }









}