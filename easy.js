function isTouching(rect1,rect2) {
  if (rect1.x - rect2.x < rect2.width/2 + rect1.width/2
    && rect2.x - rect1.x < rect2.width/2 + rect1.width/2
    && rect1.y - rect2.y < rect2.height/2 + rect1.height/2
    && rect2.y - rect1.y < rect2.height/2 + rect1.height/2) {
  return true;
  }
  else {
    return false
  }
}
function bounce(a,b){
 if (a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x < b.width/2 + a.width/2) {
  a.velocityX = a.velocityX * (-1);s
  b.velocityX = b.velocityX * (-1);
}
if (a.y - b.y < b.height/2 + a.height/2
  && b.y - a.y < b.height/2 + a.height/2){
  a.velocityY = a.velocityY * (-1);
  b.velocityY = b.velocityY * (-1);
}
}