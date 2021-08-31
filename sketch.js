var player,obstacle,obstacleGroup,particle,playerImg,obstacleImg,particleImg;
var maskImg,woodImg,backgroundImg,background1;
var score = 0;

function preload(){
    playerImg = loadImage("images/Player.png");
    obstacleImg = loadImage("images/Obstacle.png");
    particleImg = loadImage("images/Particle.png");
    maskImg = loadImage("images/Mask Button.png");
    woodImg = loadImage("images/Wooden Panel.png");
   // backgroundImg = loadImage("images/background.png");

}

function setup(){
    createCanvas(1410 , 400);

   

   // background1 = createSprite(200,height,1410,400);
    //background1.addImage(backgroundImg);
  //  background1.velocityX = -3;


    obstacleGroup = new Group()
   }
function draw(){
    background("red");

    
   /* if(background1.x < 650){
        background1.x = background1.width/2;
    }*/

    if(frameCount % 30 === 0){
        score = score + 1;
    }
  
 
    
    
    
    spawnPlayer();
    spawnObstacles();
    drawSprites();
    fill("red")
    textSize(20);
    text("Score: " + score,1300,60);
}

function spawnObstacles(){
    if(frameCount % 65 === 0){

        obstacle = createSprite(1500,200,50,50);
        obstacle.addImage(obstacleImg);
        obstacle.scale = 0.15;
        obstacle.velocityX = -7;
        obstacle.y = random(100,400);
        obstacle.lifetime = 300;

        obstacleGroup.add(obstacle);

        if(obstacleGroup.isTouching(player)){

            obstacle.visible = false;
        
              
        
              }

    }
}
function spawnPlayer(){
    player = createSprite(200,200,50,50);
    player.addImage(playerImg);
    player.scale = 0.3;
    player.velocityX = 3;

     console.log(player.y); 

   if (keyDown("UP_ARROW")){
        player.y = player.y - 5;
    }
    if (keyDown("DOWN_ARROW")){
        player.y = player.y + 5;
    }
    if (keyDown("RIGHT_ARROW")){
        player.x = player.x + 5;
    }
    if (keyDown("LEFT_ARROW")){
        player.x = player.x  - 5;
    }
    if(keyDown("space")){

        player.velocityX = 2;

    }
}



