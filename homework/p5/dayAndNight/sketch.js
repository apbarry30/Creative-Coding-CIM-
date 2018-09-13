var sun;
var moon;

function preload(){
  sun= loadImage('assets/sun.png');
  moon = loadImage('assets/moon.png');
}

function setup() {
  createCanvas (400,400);

}

function draw() {
  // put drawing code here
  background (255);
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

  }
  */
  if (mouseX < = width/2 ){
    console.log("day Side");
    image(sun, 100, 100);
  }
//add an = sign to include the mousex at 200
//gets rid of the dead space

  if (mouseX> width/2) {
console.log("night side");
  image(moon, 200, 100);

  }

//if statements run when theyre true
//test if statements, debug by console logs
//know that they work correctly, then add output to interaction


  //end of code
}
//for next class, if you wanted to put half background color, how would you do it?
//making a new variable, and setting it change depending on what side of canvas your on
//set variable to a color
