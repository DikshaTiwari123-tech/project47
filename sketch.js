   var backgroundImage;
   var boy , zombie;
   var stone;
   var score = 0;
   var bullet;
  var zombieGroup;
  var

  var bullets = 20;

  var gameState = "fight"
   

  function preload() {
    backgroundImage = loadImage("./assests/background.png");
    boyImage = loadImage("./assests/boy.png");
    zombieImage = loadImage("./assests/zombie.png");
    stoneImage = loadImage("./assests/stone.png");
  }
  function setup() {
    createCanvas(windowWidth,windowHeight);
    bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
    zombie = createSprite(750,350,200,50);
    boy = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
    
    
    
    bg.addImage("bg1",backgroundImage);
    zombie.addImage("Z1",zombieImage);
    boy.addImage("B1",boyImage);
    

    bg.velocityX = 5;
    
    bg.scale = 1.1;
    boy.scale = 0.3;
    zombie.scale = 0.5;
    
      zombie.debug = true;
      boy.debug = true;

      bulletGroup = newGroup()
      zombieGroup = newGroup()
      }

function draw() {
   
  background(0);
  if(bg.x>600){
    bg.x = 340
  }
  
  makeObstacle();
  makeBullet();
  drawSprites();
  textSize(30);
  fill("white");
  text("Score : "+ score,200,100);
  
  if(zombieGroup.isTouching(bulletGroup)){
    for(var i=0;i<zombieGroup.length;i++){     
        
     if(zombieGroup[i].isTouching(bulletGroup)){
          zombieGroup[i].destroy()
          bulletGroup.destroyEach()
     }
    }
  }
}


  


function makeBullet(){
  if(frameCount%50===0){
    bullet = createSprite(-20,250,70,70);
    bullet.velocityX = 7 ;
    
  }
  

}

function makeObstacle(){
     
stone = createSprite(200,500,50,50);
stone.scale = 0.07;
stone.addImage("stoneImg",stoneImage);
  
}


