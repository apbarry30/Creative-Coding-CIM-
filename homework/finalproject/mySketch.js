var play = 0;
var death;
var isDead = false;
var start, respawn, foodCollide, info, back;
var score = 0;

var hawk;

var cat;
var mouse;


var rabbit;
var carrot;

var currentPlayer;

var currentEating;

var soundFile;
var grass;


var player = {
	x: 300,
	y: 200,
	speed: 20,
}

var monster = {
	x: -20,
	y: -20,
	speed: 1,

}

var food = {
	x: 0,
	y: 0,
}





var resetPos = function() {
	player.y = 200;
	player.x = 300;
	monster.x = -20;
	monster.y = -29;
	food.x = random(10, 590);
	food.y = random(10, 390);
	player.speed = 20;
	monster.speed = 1;
}

//----------------------------------------------
function preload(){

	hawk =loadImage ('assets/hawk.png');
	cat =loadImage ('assets/cat.png');
	mouse =loadImage ('assets/mouse.png');
	 rabbit = loadImage ('assets/bunny.png');
	 carrot = loadImage ('assets/carrot.png')
	food = loadImage ('assets/mouse.png');
	font = loadFont ('assets/knewave.ttf');
	soundFile = loadSound('assets/Hawk-sound.mp3');
	grass= loadImage ('assets/grass.png');


	//loadImage(grass)
}
// for hovering
//image (cat, 25,50,50,50);
//image (rabbit, 25,110,50,50);
function setup(){
	button1 = new interfaces(100,200,50,"red", "Red Button");
  button2 = new interfaces(200,200, 50, "green", "Green Button");
}

// function mousePressed() {
// 	if((currentPlayer == cat) || (currentPlayer == rabbit) ){
// 	start = collidePointRect(mouseX, mouseY, 200, 130, 200, 100);
// 	if (play === 0 && start === true) {
// 		// play = 1;
// 		play = 1;
// 	}
// } else {
// 		//trigger instruction or let people know
// }

function mousePressed() {
	if((currentPlayer == cat) || (currentPlayer == rabbit)){
	start = collidePointRect(mouseX, mouseY, 200, 130, 200, 100);

	// if (play === 0 && start === true){
		// play = 1;
		play = 1;
// 	}else {
// 	play =3;
		}

	respawn = collidePointRect(mouseX, mouseY, 175, 150, 220, 70);
	if (play === 2 && respawn === true) {
		play = 1;
		score = 0;

	}
	info = collidePointRect(mouseX, mouseY, 500, 20, 80, 80);
	if (play === 0 && info === true) {
		play = 3;

	}
	back = collidePointRect(mouseX, mouseY, 400, 300, 140, 80);
	if (play === 3 && back === true) {
		play = 0;
	}

	if(collidePointRect(mouseX, mouseY, 25, 50, 50, 50)){

		currentPlayer = cat;
		currentEating = mouse;

	}

	if(collidePointRect(mouseX, mouseY, 25, 110, 50, 50)){
		currentPlayer = rabbit;
		currentEating = carrot;
	}




	//if (mouseX >=25 && mouseX< 75 && mouseY >= 100 && mouseY< 150 ){
		//play = 1;
		//player = bunny;}

	/*if (mouseX >= 25 && mouseX <75 && mouseY >=110 && mouseY < 150){
		background ("lightblue");
	} */

}



function setup() {
	createCanvas(600, 400);
	food.x = random(20, 590);
	food.y = random(10, 390);
}

//-----------------------------------------------

function draw() {


	textFont(font);
	strokeWeight(1);
	//change background
	background("white");


	stroke(0);
	strokeWeight(10);
	fill(255);
	rect(0, 0, 600, 400);

	//speed of hawk and player
	player.speed = 20 + score / 4;
	monster.speed = 1 + score / 4;


	//when hawk gets cat
	if (isDead === true) {
soundFile.play();
		play = 2;
		isDead = false;
		resetPos();

	}




	if (play === 1) {

		//strokeWeight(1);
		//rect (25,50, 50, 50);
		//rect (25, 110, 50, 50);
		//fill ("black");
		//strokeWeight(0);
		//textSize(15);



		//fill("blue");
		//strokeWeight(1);




		//keeps it's X equal with mouse X
		for (var i = 0; i < player.speed; i++) {
			//first thing checks to see if player dies
			death = collideCircleCircle(monster.x, monster.y, 40, player.x, player.y, 20);
			if (death === true) {
				isDead = true;

				//

			}

background(grass);
			//image(food, food.x, food.y, 25, 25,);
			image(currentEating, food.x, food.y, 25, 25,);


			// if the player hits the food...
			foodCollide = collideCircleCircle(player.x, player.y, 20, food.x, food.y, 20);
			if (foodCollide === true) {
				food.x = random(10, 590);
				food.y = random(10, 390);
				score += 1;

			}

			//moves the player

			if (player.x > mouseX) {
				player.x -= 1
			}
			if (player.x < mouseX) {
				player.x += 1
			}

			//keeps it's Y equal with mouse Y
			if (player.y > mouseY) {
				player.y -= 1
			}
			if (player.y < mouseY) {
				player.y += 1
			}
		}
		strokeWeight(0);
		fill("blue");
		textSize(30);
		text("Score: " + score, 10, 30);
		image(currentPlayer, player.x, player.y, 25, 25);
		//the player moves the monster
		for (var q = 0; q < monster.speed; q++) {


			if (monster.x > player.x) {
				monster.x -= 1;

			}
			if (monster.x < player.x) {
				monster.x += 1;

			}
			if (monster.y > player.y) {
				monster.y -= 1;

			}
			if (monster.y < player.y) {
				monster.y += 1;

			}

		}



		strokeWeight(4);
		stroke(163, 31, 31);
		image(hawk, monster.x, monster.y, 30, 30);



}
//
	if (play === 0) {
		rabbit.overlay=false;
			//---------------------------------------------------------------------------

		strokeWeight(0);
		rect (25,50, 50, 50);
		rect (25, 110, 50, 50);
		fill ("black");
		strokeWeight(0);
		textSize(15);
		text("choose character:", 10, 40);

		//overlay

		text ("cat", 80, 75);
		text ("bunny", 80,150 );
		image (cat, 25,50,50,50);
		image (rabbit, 25,110,50,50);

		fill(66, 244, 95);
		strokeWeight(1);

		rect(205, 130, 200, 100);
		stroke(0);
		fill(0);
		textSize(60);
		text("START", 220, 210);
		textSize(40);
		text ("Eat or be Eaten!", 150,70);

		//text("Run away from the hawk.", 10, 30);

		strokeWeight(0);
		textSize(25);
		text("By Amanda Barry", 10, 380);
		//the instuction box
		strokeWeight(1);
		fill("grey");
		rect(490, 20, 100, 100);
		textSize(15);
		fill("black");
		strokeWeight(0);
		text("Instructions", 500, 80);

	}



	if (play === 2) {
		//soundFile.play();



	//	strokeWeight(1);
	//	rect (25,50, 50, 50);
	//	rect (25, 110, 50, 50);
//	background (grass);
		fill ("black");
		strokeWeight(0);
		textSize(15);
		text( "choose character:", 20, 40);
		text ("cat", 80, 75);
		text ("bunny", 80,150 );
		image (cat, 25,50,50,50);
		image (rabbit, 25,110,50,50);

		textSize(50);
		strokeWeight(1);
		fill('red');
		text("You lose!", 200, 100);
		//restart button..
		fill(66, 244, 95);
		rect(175, 150, 250, 70);
		fill("black");
		textSize (25);
		text ("Eat or be Eaten!", 210,30);
		textSize(50);

		text("RESTART", 200, 200);

		//shows how many points that you got
		fill("black");
		textSize(30);
		noStroke();
		text("SCORE: " + score + " point(s)", 190, 300)

	}


	if (play === 3) {

		textSize(50);
		text("Instructions:", 175, 60);
		//text below
		textSize(20);
		noStroke();
		fill('black');
		text("1. Choose your Character \n2. Collect the food to earn points. \n3. To do this you need to move your mouse\n but don't go too fast because the more points you have, \nthe faster that you and the hawk will move.", 20, 100);
		//the back button
		stroke(0);
		strokeWeight(5);
		fill(172);
		rect(400, 300, 140, 80);
		noStroke();
		fill(0);
		textSize(55);
		var back = text("Back", 410, 360);
	}

}
