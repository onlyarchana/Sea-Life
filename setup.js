function setup() {
	createCanvas(1200, 700);

    //if(!bgMusic.isPlaying())
        bgMusic.loop();
    
    bg = loadImage("assets/scene/background1.png");
    introBg = loadImage("assets/intro.png");
    waterBG = loadImage("assets/scene/BGsea.png");
    instructionbg = loadImage("assets/instructionbg.png")
    
	stuff = new Group();

	createCharacter();
    
    //assets load animations


	/* platform setup */
	platform = createSprite(0, height-50, width * 2, 20);
    const ground_img = loadAnimation("assets/ground/ground.png");
    platform.addAnimation("ground", ground_img);

    accum = 0;
    
    //iceburgs
	iceburgs = new Group();
	for (let i = 0; i < NUM_iceburgs; i++) {
		const iceburg = createSprite(
			random(i * width/NUM_iceburgs, (i + 1) * width/NUM_iceburgs),
			height -100,
			40,
			height / 4
		);
        const ice_img = loadImage(ice_files[floor(random(0, ice_files.length))]);
		iceburg.addImage(ice_img);
        iceburg.depth = 4;
		iceburgs.add(iceburg);
	}
    
    //trees
	trees = new Group();
	for (let i = 0; i < 4; i++) {
		const tree = createSprite(
			random(i * width/3, (i + 1) * width/3),
			height -300,
			40,
			height / 4
		);
        const tree_img = loadImage(tree_files[floor(random(0, tree_files.length))]);
		tree.addImage(tree_img);
        tree.depth = 4;
		trees.add(tree);
	}
    
    //trees
	seaweeds = new Group();
	for (let i = 0; i < 4; i++) {
		const seaweed = createSprite(
			random(i * width/3, (i + 1) * width/3),
			height - 70,
			40,
			60
		);
        const SW_img = loadImage(SW_files[floor(random(0, SW_files.length))]);
		seaweed.addImage(SW_img);
        seaweed.scale = 2;
		seaweeds.add(seaweed);
	}
    
    bubbles = new Group();
	for (let i = 0; i < 4; i++) {
		const bubble = createSprite(
			random(i * width/3, (i + 1) * width/3),
			height -300,
			40,
			height / 4
		);
        const bubbles_img = loadImage(bubble_files[floor(random(0, bubble_files.length))]);
		bubble.addImage(bubbles_img);
        bubble.depth = 4;
		bubbles.add(bubble);
	}

    //clouds
	clouds = new Group();
	for (let i = 0; i < NUM_CLOUDS; i++) {
		const cloud = createSprite(
			random(width, width * 2),
			random(20, 100),
			random(50, 100),
			random(20, 40)
		);
		const cloud_img = loadImage(cloud_files[floor(random(0, cloud_files.length))]);
		cloud.addImage(cloud_img);
		cloud.velocity.x = -random(cloudSpeedMin, cloudSpeedMax);
		clouds.add(cloud);
	} 
    
    //clouds
	seaclouds = new Group();
	for (let i = 0; i < NUM_CLOUDS; i++) {
		const seacloud = createSprite(
			random(width, width * 2),
			random(20, 100),
			random(50, 100),
			random(20, 40)
		);
		const seacloud_img = loadImage(seaCloud_files[floor(random(0, seaCloud_files.length))]);
		seacloud.addImage(seacloud_img);
		seacloud.velocity.x = -random(1,2);
		seaclouds.add(seacloud);
	} 
   
    //puffins
	puffins = new Group();
	for (let i = 0; i < NUM_puffins; i++) {
		const life = createSprite(
			random(0, width),
			random(height-140, height-120),
			30,
			20
		);
        const puffin_img = loadAnimation("assets/fishes/fish0.png");
        life.addAnimation("puffin", puffin_img);
		puffins.add(life);
	}

    //fish
    fishes = new Group();
	for (let i = 0; i < NUM_fishes; i++) {
		const fish = createSprite(
			random(0, width),
			height-10,
			45,
			45
		);
        const fish_img = loadAnimation(fish_files[floor(random(0, fish_files.length))]);
        fish.addAnimation("fish", fish_img);
        if(fish.position.y >= 400)
            fish.velocity.y = -random(1, 3);
        else
            fish.velocity.y = 10;
		fishes.add(fish);
        this.looping=true;
	}
     //polarbears
	
    babies = new Group();
	for (let i = 0; i < NUM_babies; i++) {
		const baby = createSprite(
			random(i * width/NUM_babies, (i + 1) * width/NUM_babies),
			height -100,
			40,
			height / 4
		);
        const baby_img = loadAnimation("assets/idle/idle.png");
		baby.addAnimation("idle_bb", baby_img);
        const baby_img2 = loadAnimation("assets/run/run_right.png");
        baby.addAnimation("run_bb", baby_img2);
        baby.depth = 4;
		babies.add(baby);
	}
      
    enemies = new Group();
	for (let i = 0; i < NUM_ENEMIES; i++) {
		const sz = random(60, 100);
		const enemy = createSprite(
			random(width * 2, width * 4),
			random(height * 9/10, height * 4/5),
			sz,
			sz
		);
        const enemy_img = loadImage(enemy_files[floor(random(0, enemy_files.length))]);
		enemy.addImage(enemy_img);
        scale(2,2);
		enemies.add(enemy);
	}
    
    narwals = new Group();
	for (let i = 0; i < NUM_ENEMIES; i++) {
		const sz = random(60, 100);
		const narwal = createSprite(
			random(width * 2, width * 4),
			random(height * 1/2, height * 2/3),
			sz,
			sz
		);
        const nar_img = loadImage(narwal_files[floor(random(0, narwal_files.length))]);
		narwal.addImage(nar_img);
        narwal.scale = 1.15;
		narwals.add(narwal);
	}
      
   points = new Group();
   for(let i = 0; i< 5; i++ ){
       const point = createSprite(
                width/2,
                height-100,
                45,
                45
            );
        const point_img = loadAnimation("assets/ui/points.png");
        point.addAnimation("5point", point_img);
        points.add(point);
       
   }

    stuff.add(platform);
}

function draw() {
	if (gameState == 0) {
		intro();
	} else if (gameState == 1) {
		intructions();
	} else if (gameState == 2) {
		game();
	} else if (gameState == 3) {
		end();
	} else if (gameState == 4){
        level2();
    }
}

function wrap(obj, reset) {
	if (character.position.x - obj.position.x >= width / 2) {
		obj.position.x += reset;
	}
}


function slidingMovement() {
    if(keyWentDown(RIGHT_ARROW)&& character.velocity.x < 13){
        character.velocity.x +=2;
    }
    if(keyWentDown(LEFT_ARROW)){
        character.velocity.x -=1;
    }
    if(keyWentDown(UP_ARROW)){
        character.velocity.y -=1;
    }
    if(keyWentDown(DOWN_ARROW)){
        character.velocity.y +=1;
    }
}