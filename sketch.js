var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400); 
monkey = createSprite(80,315,20,20);
monkey.addAnimation('running',monkey_running);
monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  console.log(ground.x);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();

  monkey.debug = false;
  monkey.setCollider
  ("rectangle",0,0,monkey.width,monkey.height);
  
}


function draw() {
background(300);

   stroke('black');
    textSize(20);
    fill('black');
  text('Survival Time :' + survivalTime,100,50); 
  
  if (gameState === PLAY){
 if (keyDown('space')&& monkey.y >= 200){
   monkey.velocityY = -12;
   
 }
  monkey.velocityY = monkey.velocityY + 0.8;  
  
  ground.x = ground.width/2; 
  monkey.collide(ground);

   food(); 
  obstacles();
    
    if (FoodGroup.isTouching(monkey)){
      FoodGroup.destroyEach(); 
    }
   

    survivalTime = Math.round(frameCount/frameRate()); 
  }  
      
  if (obstacleGroup.isTouching(monkey)){
   gameState = END;  
  }
  
  if (gameState === END){
    ground.velocityX = 0;
    monkey.velocityY = 0;
    
     FoodGroup.setvelocityXEach = (0);
    obstacleGroup.setVelocityXEach(0);
    
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
    
    FoodGroup.destroyEach();
  }
  
 drawSprites(); 
}

function food(){
  
if (frameCount % 80 === 0) {
     banana = createSprite(600,350,40,10);
    banana.y = Math.round(random(120,200)); 
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 150;
    
  FoodGroup.add(banana);
}
  
}
function obstacles(){
if (frameCount % 300 === 0){
    obstacle = createSprite(600,320,10,40);
   obstacle.velocityX = -5;
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.15;
  
  obstacleGroup.add(obstacle);
}
}
