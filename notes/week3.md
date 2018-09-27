madmapper- can draw out shapes and map into the shapes (light mapping tool)

a  point is a representation of a single pixel (takes in x,y)
built in key words to access certain parts of your sketch
width and height - ask for it and based on that do an operation
point(width/2,height/2)
we dont want to "hard code" our values with numbers
-if you do that, you have to readjust all the numbers if you change the canvas size etc.

the stoke command is like a switch (if you turn it on and set it as a color)
when it starts is black, the switch turns on for red makes point red then starts again in the loop and goes back and makes the other objects red
to fix that, we add a white stroke command before the other objects

line is 2 sets of points, a begining and a end

triangle is 3 points (3 coordinates) running in a clockwise fashion
quadrilateral - same but set all 4 points
arc: x,y,width,height,start,stop
-circle is broken up into degrees
-- 0 to 2pie, radians, use PI notation
--0 is on the right, pi and on the left, 2pi on the right, half pie on the bottom, etc.
--depending on your start and end; if were drawing a packman arc(100,100,100,100,start at QUARTER_pi,stop at 1+3/4 PI )
arc(100,100,100,100,QUARTER_PI, PI+ HALF_PI+ QUARTER_PI);
OR PI+ HALF_PI+ QUARTER_PI is the same as TWO_PI - QUARTER_PI

in order for your image to scale with the screen size is by using a variable
(representing all different types of things) numbers, letters, words, sentences
a variable on the computer is an allocation of space (i need to save this much space for this piece of information)
Var is how you declare a variable (want to do this above the setup)
variables are case sensitive ex. trueFalse

console.log() tells you what your variables are doing
console.log(a + num1);
console.log(a - num1);
in your console log, it will give you the numbers (calculate a+num1)
1+ the letter b will give you "1b"
BUT 1 X B doesn't work (not a number error)  - doesn't know how to multiple number by letter because b isn't represented as a number in this case

//single line commment
// say _ this is the eyes, useful for when you want to go back and edit the eyes

if you define a variable in the seetup, its only available in the setup
