var xPos =0;
var yPos = 0;
var ballSize = 20;

var trigger= false;
var speed= 5;

function setup() {
  createCanvas(500,500);
  xPos = width/2; //500/2
}

function draw() {
  background (255);
  ellipse(xPos, yPos, ballSize, ballSize);

  if(trigger==false){
    yPos += speed;
    //yPos = yPos + speed
  }else{
    yPos -=speed;
  }

if(yPos>height) {
  trigger=true;
  }

    if(yPos < 0){
      trigger = false;
    }//need a trigger when you reach this point, flip my statement in the opposite directoin

}
