function createGameElems(){
    
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
		seacloud.addImage(cloud_img);
		seacloud.velocity.x = -random(1,2);
		seaclouds.add(seacloud);
	} 
   

    
    //polarbears
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
    
    //puffins
	puffins = new Group();
	for (let i = 0; i < NUM_puffins; i++) {
		const life = createSprite(
			random(0, width),
			random(height-140, height-120),
			30,
			20
		);
        const puffin_img = loadAnimation("assets/scene/puffin1.png");
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
}