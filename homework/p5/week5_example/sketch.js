var sun;
var moon;

var r = 255;
var g= 255;
var b = 255;

var cX = 50;
var cY = 250;
var cEdge = 20;

var rectX = 50;
var rectY = 75;
var rectSize = 100;

var sunShow = false;


var sunButton;

function preload(){
  sun= loadImage('assets/sun.png');
  moon = loadImage('assets/moon.png');
}

function setup() {
  createCanvas (400,400);
  sunButton = createButton ("press to show/hide sun");
  sunButton.position (500,100);
  sunButton.mousePressed(function(){
    if(sunShow==false){
      sunShow = true ;
    }
      //never put a singe = in an if statement (== compares while = sets)
      else{
        sunShow= false;
      }
  });

}

function draw() {
  background(255);
  // put drawing code here
  fill (r, g, b);
  rect(rectX, rectY, rectSize,rectSize);
  //when we click on the rectange, the fill is goig to change (mousePressed)
  imageMode (CENTER);
  //IMAGEMODE, RECTMODE, ELLIPSEMODE ALL EXISTS
  //middle point of the image is the center
  image(sun,cX,cY, sun.width/4, sun.height/4);
   //makes the sun 4x smaller
   if(sunShow==true){
     image( sun, 300, 200);
   }


}

function mousePressed(){

  if (mouseX> rectX && mouseX < rectX+rectSize && mouseY >rectY && mouseY < rectY+ rectSize){
    r=random(0,256);
    g= random (0,256);
    b= random (0,256 );
  }

var sunDist = dist(mouseX, mouseY, cX, cY);
//compare mouse to c positions
  console.log("sun Dist: " + sunDist);
  if(sunDist<40 ){
    // show / hide sun image
    //set a variable to false, and when you click on sun it goes to true, cick again, read true and back to trueFalse
    if(sunShow==false){
      sunShow = true ;
    }
      //never put a singe = in an if statement (== compares while = sets)
      else{
        sunShow= false;
      }
console.log(sunShow);

  }

}



  //need to set boundary for mousePressed}
