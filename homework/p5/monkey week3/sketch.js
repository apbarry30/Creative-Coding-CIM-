var facePosX= 500;
var facePosY= 500;
var eyeWidth= 100;
var eyeHeight= 200;

function setup() {
  createCanvas(1000,1000);
  background("white");
  // put setup code here
}

function draw() {
  background ('white');
  facePosX = mouseX;
  facePosY = mouseY;
// put drawing code here
  stroke('black');
  strokeWeight(2);


  fill('brown');
  ellipse(facePosX,facePosY,500,400);
  //face
  fill ('white');
  ellipse(facePosX-50,facePosY,eyeWidth,eyeHeight);
  //eye
  ellipse(facePosX+50,facePosY, eyeWidth, eyeHeight);
  //eye
  fill ('black');
  rect(facePosX ,facePosY+200,180,20);
  //mouth


  stroke('black');
  fill('brown');
  strokeWeight(5);
  point(eyeWidth/2,eyeHeight/2);


  line(facePosX,facePosY+210,facePosX + 180,facePosY+210);

  arc(100,200,100,100,QUARTER_PI, PI+ HALF_PI+ QUARTER_PI);

}
