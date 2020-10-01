var fixedRect, movingRect;
var object1, object2;
var box1,box2;

function setup() {
  createCanvas(1200,800);
  //fixedRect = createSprite(300,200,50,100)
  movingRect = createSprite(400,50,80,30)
  box1 = createSprite(400,600,50,80)
  //box2 = createSprite(200,800,80.30)

 // fixedRect.shapeColor = 'red';
  movingRect.shapeColor = 'red';

  //fixedRect.debug = true;
 // movingRect.debug = true;
 
  movingRect.velocityY = 5
  box1.velocityY = -5
} 
function draw() {
  background(0);  

  

  drawSprites();
  if(bounceoff(movingRect,box1))
  {
      box1.velocityX = box1.velocityX * (-1)
      movingRect.velocityX = movingRect.velocityX * (-1)
  }
  
}

