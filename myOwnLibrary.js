function bounceOff(object1, object2){
    if (object1.width/2+object2.width/2>object1.x-object2.x
      && object1.width/2+object2.width/2>object2.x-object1.x){
    
        object1.velocityX = object1.velocityX*(-1)
        object2.velocityX = object2.velocityX*(-1)
    
    }
    
    if(object1.height/2+object2.height/2>object1.y-object2.y
      && object1.height/2+object2.height/2>object2.y-object1.y){
        
        object1.velocityY = object1.velocityY*(-1)
        object2.velocityY = object2.velocityY*(-1)
      }
    
  }

function isTouching(rect1,rect2){

   if (rect1.width/2+rect2.width/2>rect1.x-rect2.x
    && rect1.width/2+rect2.width/2>rect2.x-rect1.x
    && rect1.height/2+rect2.height/2>rect1.y-rect2.y
    && rect1.height/2+rect2.height/2>rect2.y-rect1.y){
    rect2.shapeColor = "red"
    rect1.shapeColor = "red"
  }
  else {
    rect2.shapeColor = "blue"
    rect1.shapeColor = "blue"
  }
}