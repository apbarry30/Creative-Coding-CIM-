var frameAmounts =4;
var frameArray = [];
var currentFrame = 0

var interval = 2000;
//2,000 seconds
var prevMillis = 0

var interval2 = 500;
var prevMillis2= 0;
var counter = 0;

var controls= {
      "play": [50,400,50,"green"],
      "stop":[110,400,50,"red"],
      "fwd": [160,400,50,"blue"],
      "back": [230,400,50,"yellow"],

};
//var {"key": [values] , "key": [values], }
//x,y,size,color

var state = "stop"

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
  console.log(controls["play"]);
  console.log(controls["play"][3]);//green

  for (var keys in controls){
    console.log (keys+ "values:" + controls[keys]);
  }

}

function draw(){
  //frameRate(1);
  //console.log(millis());
  image(frameArray[currentFrame],0,0);

  if(millis()- prevMillis > interval && state == "play") {
    currentFrame ++;
    prevMillis = millis();
    //save state where last ran and resets
  }

  //console.log(currentFrame);
  if (currentFrame> frameAmounts-1){
    currentFrame = 0;
    //increading currentFrame AFTER displaying the image
  }
/*if (millis(0-prevMillis2> interval2)){
counter ++;
prevMillis2 = millis();

}

if (counter> width){
  counter= 0;
  //ball goes back to the begining
}
ellipse (counter, height/2, 20,20);
*/
   ellipse (mouseX,mouseY, 10,10);

   for(var keys in controls){
     fill(controls[keys][3]);
     //3 in the araray represents the color
     rect(controls[keys][0], controls[keys][1], controls[keys][2], controls [keys][2]);
     text(keys, controls[keys][0], controls[keys][1]);
     //color, width, height

     if(mouseX > controls[keys][0] && mouseX < controls[keys][0]+ controls[keys][2]
        && mouseY > controls[keys][1] && mouseY <
     controls[keys][1]+ controls[keys][2]){
       fill(127,200);
       rect (controls[keys][0], controls[keys][1],
         controls [keys][2], controls[keys][2]);
       //greys out when its not hovered over: overlay

     }

   }
 }
function mousePressed (){
  for (var keys in controls){

    if(mouseX > controls[keys][0] && mouseX < controls[keys][0]+ controls[keys][2]
       && mouseY > controls[keys][1] && mouseY <
    controls[keys][1]+ controls[keys][2]){

      state = keys;
      //if key is true, state/key = play
      console.log(state);
      if(state=="fwd"){
        currentFrame++;
        //whenever counting through arrays, assume there needs to be an if statement to check if your over the counter at any point
        if(currentFrame >= frameArray.length){
          currentFrame =0;
        }
      } else if (state=="back"){
        currentFrame--;
        if(currentFrame<0){
          currentFrame = frameArray.length-1;
        }

      }
    }
//if statement checking if the key is forward or back. if one of those, advance the frame
  }
}


//end

//add forward and back button.
//bonus the forward button moves one frame forward
//back button should be one frame back. set a foward pair and back pair of variables
