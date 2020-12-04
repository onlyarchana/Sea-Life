
function level1(){

    camera.off();
         background(bg);
         drawSprites(clouds);
    camera.on();
    
    platform.visible = true;
    drawSprites(trees);
    drawSprites(iceburgs);
    drawSprites(stuff);
    text("Catch puffins to gain strength!", width/2, height/4);
    
	for (let i = 0; i < puffins.length; i++) {
		const life = puffins[i];
		if (character.overlap(life)) {
            const point = createSprite(
                character.positionX,
                character.positionY,
                45,
                45
            );
            pickup_sfx[floor(random(0, pickup_sfx.length))].play();
			character.lives += 5;
            accum += 1;
            camera.off();
            console.log(point);
            drawSprite(point);
            camera.on();
			life.position.x += random(width * 2, width * 6);        
		} else {
			wrap(life, random(width * 2, width * 6));
		}
        drawSprites(puffins);
	}

    if( accum  > 8 ){
        camera.off();
            text("Jump to catch flying fishes!", width/2, height/4);
        camera.on();
        
        for (let i = 0; i < fishes.length; i++) {
            const fish = fishes[i];
            if (fish.position.y + fish.height / 2 < 0) {
                fish.position.x = random(0, width);
                fish.position.y = height;
            } else {
                wrap(fish, random(width * 2, width * 6));
            }
        }

        for (let i = 0; i < fishes.length; i++) {
            const life = fishes[i];
            if (character.overlap(life)) {
                character.lives += 5;
                life.position.x += random(width * 2, width * 6);
                pickup_sfx[floor(random(0, pickup_sfx.length))].play();
                character.lives += 5;
                accum += 1;
                console.log(accum);
            } else {
                wrap(life, random(width * 2, width * 6));
            }
        }
    
        drawSprites(fishes);
    }
    
    if( accum  > 15 ){
        for (let i = 0; i < babies.length; i++) {
            const baby = babies[i];
            if (baby.position.x + baby.width / 2 < 0) {
                baby.position.x = random(0, width);
            } else {
                wrap(baby, random(width * 2, width * 6));
            }
        }
  //TO DO: magnet babies to main baby      
        for (let i = 0; i < babies.length; i++) {
            const life = babies[i];
            if (character.overlap(life)) {
                life.position.x = character.position.x - (100*i);
                life.velocity.x = 14;
                life.changeAnimation("run_bb");
            } else {
                wrap(life, random(width * 2, width * 6));
            }
        }
        drawSprites(babies);
    }
    
    if ( accum  > 20 ){
        //text("Watch out for polar bears!!!", character.position.x, height/4);
        for (let i = 0; i < enemies.length; i++) {
            const enemy = enemies[i];
            if (character.overlap(enemy)) {
                character.lives -= 20;
                enemy.position.x += random(width * 2, width * 6);
                hit_sfx[floor(random(0, hit_sfx.length))].play();
			
            } else {
                wrap(enemy, random(width * 2, width * 6));
            }
        }
        drawSprites(enemies);
    }
    
    if ( accum  > 40 ){
        level = 1;
        console.log(accum);
        
    }
   
}
