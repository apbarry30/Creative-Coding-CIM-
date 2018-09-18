var facePosX= 500;
var facePosY= 500;
var eyeWidth= 80;
var eyeHeight= 120;

function setup() {
  createCanvas(1000,1000);
  background("white");
  // put setup code here
}

function draw() {
  background ('white');

// put drawing code here
  stroke('black');
  strokeWeight(5);


  fill('white');
  ellipse(facePosX-20,facePosY-10,500,400);
  //face
  fill('blue');
  ellipse(facePosX-100,facePosY-75,eyeWidth+20,eyeHeight+20);

  ellipse(facePosX+75,facePosY-75, eyeWidth+20, eyeHeight+20);
  fill ('white');
  ellipse(facePosX-100,facePosY-75,eyeWidth,eyeHeight);
  //eye
  ellipse(facePosX+75,facePosY-75, eyeWidth, eyeHeight);
  //eye

  //eye


  fill ('red');
  ellipse(facePosX-10, facePosY+10, 75, 75);
  //nose
  fill ('red');
  rect(facePosX-100 ,facePosY+100,180,20);
  //mouth


  stroke('black');
  fill('red');
  strokeWeight(5);
  point(facePosX,facePosY);


  line(facePosX-100,facePosY+110,facePosX +80,facePosY+110);
  line(facePosX-110,facePosY+100, facePosX-100, facePosY+110);
  line(facePosX +80,facePosY+110, facePosX+100, facePosY+100);

  arc(facePosX-10,facePosY-160,300,300,PI,0);

  facePosX = mouseX;
  facePosY = mouseY;
  fill('black');
  ellipse(facePosX-100,facePosY-50,eyeWidth-50,eyeHeight-50);
  ellipse(facePosX+80,facePosY-50,eyeWidth-50,eyeHeight-50);
//eyeballs
facePosX=500;
facePosY=500;
if(mouseX < facePosX){
console.log ("in here");
//using the random function (really from 0-255)
r = random(256);
g = random (0-256);
b= random (256);

}
fill (r,g,b);
ellipse(facePosX, facePosY, 100, 100);




}
