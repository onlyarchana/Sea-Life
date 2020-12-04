
function game() {
    
    if (level == 0) {
		level1();
	} else if (level == 1) {
		level2(); 
    }
    if(platform.overlapPixel(character.position.x, character.position.y+40)==false)
    character.velocity.y += GRAVITY;
    
    while(platform.overlapPixel(character.position.x, character.position.y+40)){
        character.position.y--;
        character.velocity.y = 0;
    }
    /* wrapping sprites */
	wrap(platform, width);
    //wrap(platform1, width);
	for (let i = 0; i < iceburgs.length; i++) {
		const iceburg = iceburgs[i];
		wrap(iceburg, random(width * 2, width * 4));
	}
    for (let i = 0; i < trees.length; i++) {
		const tree = trees[i];
		wrap(tree, random(width * 2, width * 4));
	}
    
    for (let i = 0; i < clouds.length; i++) {
		const cloud = clouds[i];
		if (cloud.position.x + cloud.width / 2 < 0) {
			cloud.position.x = random(width, width * 2);
			cloud.position.y = random(0, height / 2);
		}
	}
    
    for (let i = 0; i < seaclouds.length; i++) {
		const seacloud = seaclouds[i];
		if (seacloud.position.x + seacloud.width / 2 < 0) {
			seacloud.position.x = random(width, width * 2);
			seacloud.position.y = random(0, height / 2);
		}
	}
    for (let i = 0; i < bubbles.length; i++) {
		const bubble = bubbles[i];
		wrap(bubble, random(width * 2, width * 4));
	}
    
    for (let i = 0; i < seaweeds.length; i++) {
		const seaweed = seaweeds[i];
		wrap(seaweed, random(width * 2, width * 4));
	}
    
    /* keyboard events */
    slidingMovement();

    if(!keyIsPressed && !character.isJumping)
        character.changeAnimation("idle");
    if(keyDown(RIGHT_ARROW)){
        character.changeAnimation("run");
        character.position.x += 5;
    }
    if(keyDown(LEFT_ARROW)){
        character.changeAnimation("left");
        character.position.x -= 5;
    }
    if(keyDown(UP_ARROW)){
        character.changeAnimation("up");
        character.position.y -= 15;
    }
    if(keyDown(DOWN_ARROW)){
        character.changeAnimation("down");
        character.position.y += 1;
    }   
     /* detect game ending */
	if (character.lives < 0) {
		gameState = 3;
		character.velocity.y = 0;
	}
    
    /*camera*/
    camera.position.x = character.position.x;
    
	/* ui */
	camera.off();
	fill(255);
	textAlign(CENTER);
	textSize(48);
	text("Points: " + character.lives, width/2, height/5);

}
