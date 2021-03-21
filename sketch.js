var fixedRect, movingRect

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 400, 50, 80);
  movingRect = createSprite(400,0, 50, 50);
  movingRect.velocityY = 5
  fixedRect.velocityY = -10

  fixedRect.shapeColor = "blue"
  movingRect.shapeColor = "blue"
}

function draw() {
  background(255,255,255);  

  bounceOff(movingRect, fixedRect)

  drawSprites();
}

