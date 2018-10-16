var xPos =0;
var yPos = 100;
var ballSize = 20;

var trigger= false;
var speed= 5;
var trigger2 = false;

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

if(trigger2 == false) {
  xPos +- speed;
} else{
  xPos -= speed;
}

if(yPos>height) {
  trigger=true;
  }

    if(yPos < 0){
      trigger = false;
    }//need a trigger when you reach this point, flip my statement in the opposite directoin

    if(xPos > width){
      trigger2= true;
    }

    if(xPos < 0) {
      trigger2= false ;
    }
}
