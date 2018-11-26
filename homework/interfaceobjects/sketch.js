var posX = 0;
var posY = 0;
var rectSize = 100;
var colors = "green";

var button1 ,button2;

var buttonArray = [];

function setup() {
 // put setup code here
 createCanvas(400,400);
 button1 = new interfaces(100,200,50,"red", "red button");
 button2 = new interfaces (200,200,50,"green", "green button");

 for (var i=0; i < 10; i++ ){
   var c = color (random(255),random(255),random(255));
   buttonArray[i] = new interfaces (random(width), random (height), 50, c, i );
 }
}

function draw() {
//display();
  background (255);
  button1.display();
//if (button1.check(mouseX, mouseY)==true --> not necessary because runs if true
if (button1.check(mouseX, mouseY)){
  console.log (button1.name);

}
  button2.display();
  button2.check(mouseX,mouseY);

  for (var i =0; i < buttonArray.length; i ++){
    buttonArray[i].display();
    if (buttonArray[i].check(mouseX,mouseY)){
      console.log(buttonArray[i].name);
      background(buttonArray[i].color);
    }

  }
  }




// function display(){
//   fill(colors);
//   rect(posX,posY,rectSize,rectSize);
// }



class interfaces {
  //constructor; charaacteristics for OBJECT
  //includes minimum parameters we need for the object to exist
  constructor(tempX, tempY, tempS, tempC, tempName){
    this.x = tempX;
    this.y = tempY;
    this.sizes = tempS;
    this.color = tempC;
    this.name = tempName;
    this.overlay= false;
  }

  display(){

    fill(this.color);
    rect(this.x, this.y, this.sizes, this.sizes);
    text( this.name, this.x, this.y -10);

    if (this.overlay==true){
      fill (127,127);
      rect(this.x, this.y, this.sizes, this.sizes);
    }
  }

  check(mX, mY){
    if (mX > this.x && mX < this.x + this.sizes && mY > this.y && mY < this.y + this.sizes){
      this.overlay=true;
      return true;
    } else {
      this.overlay = false;
      return false;
    }
  }
}
