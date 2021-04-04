var bananaImage, obstacleImage, obstaclegroup, backgroundImg, score, player, invisibleGround, bananagroup

function preload() {

backgroundImg = loadImage("jungle.jpg")

player = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png")  
  
  bananaImage = loadImage("banana.png")
  obstacleImage = loadImage("stone.png")
}

function setup() {
  
  createCanvas(400, 400);
  
  backg = createSprite(200,200,400,400)
  backg.addImage(backgroundImg)
  backg.velocityX = -4;
  
 InvisibleGround = createSprite(200,380,400,10);
  InvisibleGround.visible = false;
  
  monkey = createSprite(100,350,30,30);
  monkey.addAnimation("monkey",player);
  monkey.scale = 0.12

  
  score = createSprite(200,50,30,30)
  
  
  bananagroup = new Group();
  obstaclegroup = new Group();
  
  }
    
 
function draw() {
  background(backgroundImg);
  if (backg.x<0) {
    backg.x = 200
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -8;
  }

  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(InvisibleGround);
  
  
  
  if(obstaclegroup.isTouching(monkey)) {
    monkey.scale = 0.2;
    score = score - score
  }
  
  if(bananagroup.isTouching(monkey)) {
    switch(scale) {
      case 10: monkey.scale = 0.30;
        break;
      case 20: monkey.scale = 0.40;
        break;
      case 30: monkey.scale = 0.50;
        break;
      case 40: monkey.scale = 0.60;
        break;
      default: break;
}
    banana.destroy(monkey);
  
  }
  
  obstacleGroup();
  
  bananaGroup();
  
  drawSprites();
}

function bananaGroup() {

 if (frameCount %200 === 0) {
    banana = createSprite(300,200,30,30);
  banana.addImage(bananaImage);
   banana.scale = 0.05;
   banana.velocityX = -2 
   bananagroup.add(banana);
  } 
}

function obstacleGroup() {
  
  if(frameCount %200 === 0) {
      obstacle = createSprite(300, 350, 30, 30);
  obstacle.addImage(obstacleImage)
  obstacle.scale = 0.2;
    obstacle.velocityX = -2;
    obstaclegroup.add(obstacle);
}
}
