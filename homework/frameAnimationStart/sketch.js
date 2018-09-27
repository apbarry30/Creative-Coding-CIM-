var frameAmounts =4;
var frameArray = [];
var currentFrame = 0

var interval = 2000;
//2,000 seconds
var prevMillis = 0

function preload(){
  //var frameString = "assests/Thatwasclose0.jpg";
  //string representing path where the image is on our computer
  //frameArray[0] = loadImage(frameString);

  for(var frames = 0; frames < frameAmounts; frames ++ ){
    var frameString = "assests/Thatwasclose" + frames + ".jpg";
    //string representing path where the image is on our computer
    frameArray[frames] = loadImage(frameString);
    //new path to image, loads it to corresponding place in array
    //we do this instead of doing.. frameArray [1]= loadImage(...) each seperately

  }
}

function setup(){
  createCanvas(500,500);

}

function draw(){
  //frameRate(1);
  //console.log(millis());
  image(frameArray[currentFrame],0,0);

  if(millis()- prevMillis > interval) {
    currentFrame ++;
    prevMillis = millis();
    //save state where last ran and resets
  }

  //console.log(currentFrame);
  if (currentFrame> frameAmounts-1){
    currentFrame = 0;
    //increading currentFrame AFTER displaying the image
  }
   ellipse (mouseX,mouseY, 10,10);
}

//end
