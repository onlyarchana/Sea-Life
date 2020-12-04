/* character setup */

function createCharacter(){
    
	character  = createSprite(81, 81, 128, 128);
    const idle_anim = loadAnimation("assets/idle/idle.png");
    const right_anim = loadAnimation("assets/run/run_right.png");
    const left_anim = loadAnimation("assets/run/run_left.png");
    const up_anim = loadAnimation("assets/run/run_up.png");
    const down_anim = loadAnimation("assets/run/run_down.png");
    character.addAnimation("idle", idle_anim);
    character.addAnimation("run",  right_anim);
    character.addAnimation("left", left_anim);
    character.addAnimation("up",  up_anim);
    character.addAnimation("down",  down_anim); 
 
	character.isJumping = true;
	character.lives = 0;
	stuff.add(character);
    
}