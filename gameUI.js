function intro() {
	camera.off();
	background(introBg);
	textSize(48);
    fill(255);
	textAlign(CENTER);
    textSize(24);
	text("by Clara Fairbanks", width/2, height/2 + 200);
    textSize(52);
    fill(150, 0, 153, 101);
	text("press          to play", width/2, height/2 + 266);
    fill(150, 0, 153, 255);
    text("enter", width/2 -14, height/2 + 266);
	if (keyWentDown("ENTER")) {
        numPlays = 0;
		gameState = 1;
        background(255);
	}
}

function intructions() {
	camera.off();
	background(instructionbg);
	fill(255);
	textSize(24);
	textAlign(CENTER);
    text("Press 'Enter' to skip instructions", width/2, height/10);
    text("Use the arrow keys to slide and jump", width/2, height/3);
    text("Catch fish and Puffins to grow big and strong!", width/2, height/3+50);
    text("Avoid polar bears, they will eat you.", width/2, height/3+100);
    text("And watchout for trees", width/2, height/3+150);
    fill(150, 0, 153, 255);
    textSize(36);
    text("Hit 'Enter' to play", width/2, height/3+200);
    if(keyWentDown("ENTER"))
        gameState = 2;
}


function end() {
	camera.off();
	background(bg);
	fill(255);
	textSize(78);
	textAlign(CENTER);
	text("You died!", width / 2, height / 2);
    textSize(48);
	text("press enter to pick up where you left off", width / 2, height / 2 + 100);
	if (keyWentDown("ENTER")) {
        accum = 0;
        level = 0;
		gameState = 2;
        numPlays++;
		character.lives = 0;
	}
    
}