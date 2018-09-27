var sun;
var moon;

var r = 255;
var g= 255;
var b = 255;

var cX = 50;
var cY = 50;
var cEdge = 20;

var rectX = 50;
var rectY = 75;
var rectSize = 100;

function preload(){
  sun= loadImage('assets/sun.png');
  moon = loadImage('assets/moon.png');
}

function setup() {
  createCanvas (400,400);

}

function draw() {
  // put drawing code here
  frameRate(10);
  background (r,g,b);
  console.log("mousex: " + mouseX + "mouseY: " + mouseY);
  //mousex: helps you differentiate and label what your doing in the console log
  //can see where the mouse is in console area and if its working
  //drawn so the text isnt looped and written over and over eachother

  //Interface
  textSize(18);
  text("move over each area to reveal a surprise");
  //image(sun, 200, 100);
  //image(moon, 200, 100);
  //remove this because when making interaction, it will show both images the whole time
  line (width/2, 0, width/2, height );
  text("day", 20, 360);
  text("night", 250, 360 );

  //interaction


  /*

  if(true){execute this code


  */


  /* if (mouseX < = width/2 ){
    console.log("day Side");
    image(sun, 100, 100);
  }
//add an = sign to include the mousex at 200
//gets rid of the dead space

  if (mouseX> width/2) {
console.log("night side");
  image(moon, 200, 100);

} i copied and pasted this again but we're changing to make it more specific**
*/

//if statements run when theyre true
//test if statements, debug by console logs
//know that they work correctly, then add output to interaction



//for next class, if you wanted to put half background color, how would you do it?
//making a new variable, and setting it change depending on what side of canvas your on
//set variable to a color


//add an = sign to include the mousex at 200
//gets rid of the dead space
//first condition and section condition have to be true to run (ALL conditions have to be true to run)

if (mouseX <= width/2 && mouseX < width/2) {
  console.log("day Side");
  image(sun, 100, 100);
}

if (mouseX> width/2 && mouseX < width) {
console.log("night side");
image(moon, 200, 100);
}
/*do something when mouse hovers over a circluar positions
need to see the radius of the circle, do this by a distance function
need to know the distance the mouse is from the circle at all times (create a variable for the circle)
distance (cX, cY, )
*/

ellipse(cX, cY, cEdge);
// cEdge is the width and height, now we want to check the distance between the width, height and center points
var cDist = dist (cX, cY, mouseX, mouseY);
console.log("cDist: " + cDist);
//prints out distance of mouse verses the circle (middle point)

if (cDist < 10 ) {
  r=255;
  g=0;
  b=0;
} else {
  r=255;
  g=255;
  b=255;
}
// ^ if we are inside of the circle


if (mouseX > rectX && mouseX < rectX + rectSize){
  if (mouseY > rectY && mouseY < rectY + rectSize){
    console.log ("in here");
  }
//same way of writing the same if statement in one statement
}
if(mouseX > rectX && mouseX < rectX + rectSize && mouseY > rectY && mouseY < rectY + rectSize){
  console.log ("in here");
  //using the random function (really from 0-255)
  r = random(256);
  g = random (0-256);
  b= random (256);
}
fill (r,g,b);
rect(rectX, rectY, rectSize, rectSize);
  //end of code
}
