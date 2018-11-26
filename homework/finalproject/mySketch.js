var play = 0;
var death;
var isDead = false;
var start, respawn, foodCollide, info, back;
var score = 0;

var sky;
var hawk;

var cat;
var mouse;


var rabbit;
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
	sky= loadImage ('');
	hawk =loadImage ('');
	cat =loadImage ('');
	mouse =loadImage ('');
	bunny = loadImage ('');
	grass = loadImage ('');
}

function mousePressed() {
	start = collidePointRect(mouseX, mouseY, 200, 130, 200, 100);
	if (play === 0 && start === true) {
		play = 1;

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

}


function setup() {
	createCanvas(600, 400);
	food.x = random(10, 590);
	food.y = random(10, 390);
}

//-----------------------------------------------

function draw() {
	background(sky);
	stroke(0);
	strokeWeight(10);
	fill(255);
	rect(0, 0, 600, 400);
	//this will set the speed of the dot and the player related to the points
	player.speed = 20 + score / 4;
	monster.speed = 1 + score / 4;


	//this is what happens when the player and the dot of death hit eachother
	if (isDead === true) {
		play = 2;
		isDead = false;
		resetPos();


	}






	if (play === 1) {
		fill("orange");
		strokeWeight(1);

		//keeps it's X equal with mouse X
		for (var i = 0; i < player.speed; i++) {
			//first thing checks to see if the dot dies
			death = collideCircleCircle(monster.x, monster.y, 40, player.x, player.y, 20);
			if (death === true) {
				isDead = true;
			}

			// this is some stuff about the dot.
			fill(random(0, 255), random(0, 255), random(0, 255));
			ellipse(food.x, food.y, 10, 10);
			// if the player hits the food...
			foodCollide = collideCircleCircle(player.x, player.y, 20, food.x, food.y, 10);
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

		fill("orange");
		textSize(30);
		text("Score: " + score, 10, 30);
		ellipse(player.x, player.y, 20, 20);
		//the evil dot... moves the monster
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


		fill("red");
		strokeWeight(4);
		stroke(163, 31, 31);
		ellipse(monster.x, monster.y, 40, 40);


	}

	//---------------------------------------------------------------------------

	if (play === 0) {
		fill(66, 244, 95);
		strokeWeight(1);
		noStroke();
		rect(200, 130, 200, 100);
		stroke(0);
		fill(0);
		textSize(75);
		text("Play!", 210, 210);
		textSize(25);
		//text("Info: Keep your mouse inside of the box! \nRun away from the monster (The red dot).", 10, 30);
		text("By Amanda Barry", 10, 380);
		//the info box
		strokeWeight(2);
		fill("lightblue");
		rect(490, 20, 100, 100);
		textSize(15);
		text("Instructions", 500, 85);

	}

	//--------------------------------------------------------------------------------

	if (play === 2) {
		textSize(50);
		strokeWeight(3);
		fill('red');
		text("You lose!", 190, 100);
		//restart button..
		fill(7, 186, 61);
		rect(175, 150, 220, 70);
		fill("blue");
		textSize(50);
		text("Restart.", 200, 200);

		//shows how many points that you got
		fill("black");
		textSize(30);
		noStroke();
		text("You got: " + score + " point(s)", 190, 300)

	}

	if (play === 3) {
		textSize(50);
		text("Instructions:", 175, 60);
		//the text below...
		textSize(20);
		noStroke();
		fill('black');
		text("You are the orange dot and you need to avoid the evil red dot. \nTo do this you need to move your mouse, but don't go too fast. \nCollect the rainbow dots to earn points, but the more points that \nyou have the faster that the game will let you move and the \nfaster that the evil dot will move.", 20, 100);
		//the back button
		stroke(0);
		strokeWeight(5);
		fill(172);
		rect(400, 300, 140, 80);
		noStroke();
		fill(0);
		textSize(55);
		text("Back", 410, 360);
	}

}
