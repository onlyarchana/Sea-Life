function level2(){

    camera.off();
         background(waterBG);
         drawSprites(seaclouds);
    camera.on();
    
    GRAVITY = .15;
    enemies.visible = false;
    platform.visible = false;
    drawSprites(bubbles);
    drawSprites(stuff);
    drawSprites(seaweeds);
    
    for (let i = 0; i < narwals.length; i++) {
            const narwal = narwals[i];
            if (character.overlap(narwal)) {
                character.lives -= 30;
                narwal.position.x += random(width * 2, width * 6);
                hit_sfx[floor(random(0, hit_sfx.length))].play();
			
            } else {
                wrap(narwal, random(width * 2, width * 6));
            }
        }
        drawSprites(narwals);
    
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

            accum +=1;                            console.log(accum);

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
            
            character.lives += 5;       console.log(accum);

        } else {
            wrap(life, random(width * 2, width * 6));
        }
    }
    drawSprites(fishes);
    
    if( accum  > 50 ){
        for (let i = 0; i < babies.length; i++) {
            const baby = babies[i];
            if (baby.position.x + baby.width / 2 < 0) {
                baby.position.x = random(0, width);
                //baby.position.y = height;
            } else {
                wrap(baby, random(width * 2, width * 6));
            }
        }
        
        for (let i = 0; i < babies.length; i++) {
            const life = babies[i];
            if (character.overlap(life)) {
                life.position.x = character.position.x - (100*i);
                life.velocity.x = 14;
                life.changeAnimation("run_bb");
                character.lives += 10;
                accum += 1;
                console.log(accum);
            } else {
                wrap(life, random(width * 2, width * 6));
            }
        }
        drawSprites(babies);
    }
    
    if( accum > 60){
        accum = 20;
        level = 0;
    }
}
