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
  //drawn so the text isnt looped and written over and over eachother
  //interface
  textSize(18);
  text("move over each area to reveal a surprise");
  
  line (width/2, 0, width/2, height );
  text("day", 20, 360);
  text("night", 250, 360 );

  //interaction


  /*

  if(true){execute this code

  }
  */
  if (mouseX <  width/2 ){
    console.log("day Side");
    image(sun, 100, 100);
  }

  if (mouseX> width/2) {
console.log("night side");
  image(moon, 200, 100);
  }

//if statements run when theyre true
//test if statements, debug by console logs
//know that they work correctly, then add output to interaction


  //end of code
}
