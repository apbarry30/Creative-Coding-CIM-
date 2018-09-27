var curImage, sun, moon;

var selection, textInput, submitButton;

//var posX = [0,100,200,300];
//var posY = [0,100,200,300];
//creating an array just with x and y position and keep width and height static
var posX = [];
var posY = [];


var numberOfImages = 0;

function preload(){
  sun= loadImage('assets/sun.png');
  moon = loadImage('assets/moon.png');
}

function setup() {
  createCanvas (400,400);
  selection = createSelect();
  selection.position (10,10);
  selection.option("sun");
  selection.option("moon");

  selection.changed(function(){
    //console.log (selection.value());
//if choose sun, image that we want shows. if choose moon, image that we want shows.



  })

textInput = createInput("# of images");
textInput.position (10,30);

submitButton = createButton("Create Pattern");
submitButton.position(10,50);
submitButton.mousePressed(function(){
  numberOfImages = textInput.value();
  console.log (numberOfImages);
  if (selection.value() == "sun" ) {
//if the user selects sun- then attach string sun to the image
  curImage = sun;
  //the image that is changing after selection
}  else if (selection.value()== "moon"){
  curImage = moon;
  }

  posX = [];
  posY= [];
  //resetting and emptying array to use again.clearing and adding to position. 
  for (var a = 0; a < numberOfImages; a ++ ){
    posX [a] = random(width);
    posY [a] = random(height);
    console.log ("x: " + posX[a] + "y: " + posY[a]);

  }

})

curImage= sun;
}

function draw() {

//frameRate(5);
  background(255);
/*  for(var i = 0; i <numberOfImages; i ++){
    console.log (i);
  image (curImage, random(width),random(height), curImage.width/random(1.5), curImage.height/random(1.5));
  }
  for randomized repeating images with the number of images as the number the user entered
*/

for(var i = 0; i< numberOfImages; i ++){
image (curImage, posX[i], posY[i], curImage.width/4, curImage.height/4);
//posX.length (# of items in array) represents 4 because we have 3 items in array and start from 0 and need i < 4

}

  //draw once per loop (draw loop)
//but for loop with run 10 times

//attach number of images to pattern generator (by i<numberOfImages)
// i is the text imput value , how many images will it draw in the forloop
}

/*
four looped
takes a variable (with a number), condition (how many times want to run), and iterator (i ++) means increase i by 1
*/

//homework is to add 2 interactivity methods to character
//change background, fill, mousePressed, hitzone, using buttons, text input etc.
