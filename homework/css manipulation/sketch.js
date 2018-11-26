function setup() {

  //select("#mycanvas"). center();

  select("body").style("background-color", "pink");
  //you can select specific elements on the page
  //you can do this to any CSS tag body,head,etc.
  var container0 = createDiv();
  container0.id("container0");
  select("#container0").html("<h1>your project title goes here!</h1>");
  select("#container0").style("width", "400px");
  select("#container0").style("margin", "0 auto");
  select("#container0").style("text-align" ,"center");

  var cnv = createCanvas(400,400);
  cnv.id("mycanvas");
  cnv.parent(container0);
  //we created container 0 within the body container
  //0 is top and bottom margin(can maybe change), auto adjusts the left and right margin
  // put setup code here
}

function draw() {
  background(0);// put drawing code here
}
