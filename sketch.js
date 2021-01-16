var wall, bullet;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(200, 200, 100, 10);
  wall = createSprite(1300, 200, thickness, height/2);
  speed = round(random(223,321));
  weight = round(random(30, 52));
  thickness = round(random(22,83));
  
}

function draw() {
  background("black");  
  bullet.shapeColor = "white"

  if(keyDown("r")){
    bullet.x = 200;
    bullet.shapeColor = "white";
    bullet.velocityX = speed;
  }

  if(keyDown("space")){
    bullet.velocityX = speed;
  }

  if(hasCollided(wall, bullet))
  {
    bullet.velocityX = 0;
    var damage = 0.5* weight * speed * speed/ (thickness * thickness* thickness);
    if(damage > 10)
    {
      bullet.shapeColor = "red";
    }

    if(damage < 10)
    {
      bullet.shapeColor = "green"
    }
    
  }
  
  

  drawSprites();
  console.log(bullet.shapeColor);
  console.log(speed)
  console.log(thickness);
  console.log(weight)
}

function hasCollided(wall, bullet)
{
  bulletRightEdge = bullet.x+bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
  return false;
}
