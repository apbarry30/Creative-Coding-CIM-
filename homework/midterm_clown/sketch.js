var clown;
var clownposX = 10;
var clownposY =10;

var frameAmounts =2;
var frameArray = [];
var currentFrame = 0


//var {"key": [values] , "key": [values], }
//x,y,size,color

var state = "stop"


var width = 20;
var height =25;
var textInput;
var submitButton;
var juggleButton;
var uniButton;
var spinButton;

var numberOfImages = 0;

var xPos = 10;
var yPos= 10;

var Image;
var ball;
var initialballs;
var hat;
var unicycle;
var clownjuggle;
var wheel;

var speed= 5;

var counter = 0;
var juggle = false;
var cycle = false;
var spin = false;



//balloons?

function preload(){
  wheel= loadImage ('assets/wheel.png');
    initialballs=loadImage('assets/initialballs.png')
    ball= loadImage('assets/juggleball.png');
    unicycle = loadImage ('assets/unicycle.png');
    hat=  loadImage ('assets/hat0.png');
    clown= loadImage ('assets/clown.png');
    for(var frames = 0; frames < frameAmounts; frames ++ ){
      var clownjuggle= "assets/clownjuggle" + frames + ".png";
      //string representing path where the image is on our computer
      frameArray[frames] = loadImage(clownjuggle);
      //new path to image, loads it to corresponding place in array
      //we do this instead of doing.. frameArray [1]= loadImage(...) each seperately

    }

}


function setup() {

createCanvas(400,400);

textInput = createInput("# of balls");
textInput.position (10,30);

submitButton = createButton("ADD BALLS!");
submitButton.position(10,50);

juggleButton = createButton ("JUGGLE BALLS");
juggleButton.position(10,70);

uniButton = createButton ("UNICYCLE");
uniButton.position (320, 20);

spinButton = createButton ("GO");
spinButton.position (320, 40);

juggleButton.mousePressed(function(){
  //Image = clownjuggle;
  juggle = true;

  if(juggle == true){
    juggle = false;
  }
  if(juggle==false){
    juggle =true;
  }//flip flop if true make it false false == true
  //want image to change back and forth?
})

uniButton.mousePressed(function(){
  cycle = true;

  console.log (unicycle);
if(cycle == false){
  cycle = true;
  posX = [];
  posY= [];
}
})
spinButton.mousePressed(function(){
  if (spin==false){
    cycle= true;
    spin = true;
  }
  //Image = clownjuggle;
})

submitButton.mousePressed(function(){
  numberOfImages = textInput.value();
  console.log (numberOfImages);

  posX = [];
  posY= [];

  //resetting and emptying array to use again.clearing and adding to position.
  for (var i = 0; i < numberOfImages; i ++ ){
    posX [i] = random(width);
    posY [i] = random(height);
    console.log ("x: " + posX[i] + "y: " + posY[i]);

  }


})

Image= ball;
}

function draw() {
  background('white');
image(clown,10,10);
textSize(18);
text("move over area to reveal a surprise", 20, 320);



  if(juggle == true){
    counter++;
}

  for (var i = 0; i< numberOfImages; i ++){
    push();
    translate(posX[i], posY[i]);
    rotate(radians(counter));
   image(ball, 0,0,50,50);
   pop();
   //posX.length (# of items in array) represents 4 because we have 3 items in array and start from 0 and need i < 4
 }

 if (cycle==true){
   background('white');
   image(unicycle, 100, 40, 200, 350 );
 }

  if (spin ==  true){
    counter++;
    push();
    translate(200,310);
    rotate(radians(counter));
    imageMode (CENTER);
      image(wheel,10 ,10, 30, 30);


   pop();
  }






  //image(sun, 200, 100);
  //image(moon, 200, 100);
  //remove this because when making interaction, it will show both images the whole time



clownPosX = mouseX;
clownPosY = mouseY;

  if(mouseX < 200 && mouseY > 200){
  console.log ("in here");
  image(hat, 150, 10 ,100, 115);

  //using the random function (really from 0-255)
  r = random(256);
  g = random (0-256);
  b= random (256);


  fill (r,g,b);
  text ("LET'S PARTY!", 100, 100, 100);
}



}
