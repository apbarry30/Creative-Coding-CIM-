var a = 1;
var num1 = 2;
var b = 'b';
var word1 = "word";
var trueFalse = true;
var sentences = "I am a sentence";

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(0);
  background(255,0,0);
  background("orange");
  background("#333333");

  console.log(a + num1);
  console.log(a - num1);
  console.log (a+b);
  // console.log (a* b);   --will give you 'not a number'
  // single line comment is useful for these console logs
  // that was not a valid code so we turned it into a comment

  /*
  block of comments
  */

  // this is only in setup scope
  var setupVariable =5 ;
}

function draw() {
// put drawing code here
  stroke('white');
  strokeWeight(0);
  strokeWeight (num1);
  //does not work bc setup variable's scope is only in the setup
  //strokeWeight(setupVariable);
  fill('orange');
  ellipse(120,120,50,50);
  //eye
  ellipse(180,120,50,50);
  rect(120,320,180,20);
  //mouth

  stroke(255);
  stroke('green');
  strokeWeight(5);
  point(width/2,height/2);

  line(120,330,300,330);

  arc(100,200,100,100,QUARTER_PI, PI+ HALF_PI+ QUARTER_PI);
  //pacperson
}
