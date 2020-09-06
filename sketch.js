//creating global variables
var bullet,wall;
var speed,weight,thickness;
var wall2,bullet1;

//function setup
function setup() {

  //size of canvas
  createCanvas(1600,400);

//random numbers for speed and weight
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

//creating car
bullet=createSprite(50,200,70,50);
bullet.velocityX = speed;
bullet.shapeColor="white";

//creating wall
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);

//creating different variables
wall2=createSprite(40,200,50,50);
bullet1=createSprite(200,200,50,50);

}
  
//function draw
function draw() {
  
  //background color
  background(0,0,0);  

  //allowing car to change color once speed is set
  if(wall.x=bullet.x< (bullet.width+wall.width)/2)
  {
bullet.velocityX=0;
var defomation=0.5*weight*speed*speed/22509;
if(defromation>180);
{

bullet.shapeColor=color(255,0,0);
  
}
if(defromation<180 && defromation>100)
{
bullet.shapeColor=color(230,230,0);
}

if(defromation<100)
{
bullet.shapeColor=color(0,255,0);
}
  }

  //if function
  if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
  }
  
  if(damage>10)
{
   wall.shapeColor=color(255,0,0);
}

if(damage<10)
{
  wall.shapeColor=color(0,255,0);
  }

  
 
  //allow sprites to be shown on screen
drawSprites();
}

//function hasColided
function hasCollided(bullet1,wall2){
bulletRightEdge= bullet1.x + bullet1.width;
wallLeftEdge=wall2.x
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;
}