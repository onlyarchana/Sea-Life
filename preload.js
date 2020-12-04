var gameState = 0;
level = 0;

function preload() {
	for (let i = 0; i < jump_files.length; i++) {
		const jump_sound = loadSound(jump_files[i]);
		jump_sfx.push(jump_sound);
	}
    for (let i = 0; i < pickup_files.length; i++) {
		const pickup_sound = loadSound(pickup_files[i]);
		pickup_sfx.push(pickup_sound);
	}
    for (let i = 0; i < hit_files.length; i++) {
		const hit_sound = loadSound(hit_files[i]);
		hit_sfx.push(hit_sound);
	}
    bgMusic = loadSound("assets/sfx/bgMusicLoop.wav");
}