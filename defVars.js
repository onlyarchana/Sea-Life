/* global variable */
var character;
var platform;
var bgMusic;
var seaBG;
var introBG;
var level;
var accum;
var clouds, iceburgs, enemies, puffins, stuff, points, bubbles, seaweeds, narwals;
const NUM_BUSHES = 8,
	NUM_CLOUDS = 2,
	NUM_iceburgs = 2,
	NUM_ENEMIES = 2,
	NUM_puffins = 3,
    NUM_fishes = 4,
    NUM_babies = 5,
    NUM_guisers=3;
const SPEED = 15;
const JUMP_SPEED = SPEED * 10;
var GRAVITY = 0.2;
const enemySpeedMin = SPEED/5, enemySpeedMax = SPEED;
const cloudSpeedMin = SPEED/4, cloudSpeedMax = SPEED/3;

/* graphics */
const cloud_files = [ 
	"assets/cloud/cloud1.png", 
	"assets/cloud/cloud2.png", 
];

const tree_files = [
	// bush "assets/trees/tree0.png", 
	"assets/trees/tree1.png", 
	"assets/trees/tree2.png", 
	"assets/trees/tree3.png"
];

const ice_files = [
	"assets/ice/ice0.png", 
	"assets/ice/ice1.png", 
	"assets/ice/ice2.png", 
	"assets/ice/ice3.png"
];

const enemy_files = [
	"assets/enemy/enemy0.png", 
	"assets/enemy/enemy1.png", 
	//"assets/enemy/enemy2.png", 
	//"assets/enemy/enemy3.png"
];

const fish_files = [
	"assets/fishes/fish0.png", 
    "assets/fishes/fish1.png",
    "assets/fishes/fish2.png", 
];

const SW_files = [
	"assets/sea/seaweed0.png", 
    "assets/sea/seaweed1.png",
    "assets/sea/seaweed2.png", 
    "assets/sea/seaweed3.png", 
    "assets/sea/seaweed4.png", 
    "assets/sea/seaweed5.png", 
    "assets/sea/seaweed6.png", 
    "assets/sea/seaweed7.png", 
    "assets/sea/seaweed8.png", 
];

const seaCloud_files = [ 
	"assets/sea/seacloud1.png", 
	"assets/sea/seacloud2.png", 
];

const bubble_files = [
	"assets/sea/bubble0.png", 
    "assets/sea/bubble1.png",
    "assets/sea/bubble2.png", 
];

const narwal_files = [
	"assets/sea/nar1.png", 
    "assets/sea/nar2.png",
    "assets/sea/nar3.png",
];
/* audio */
/* audio */

var jump_sfx = [];
const jump_files = [
	"assets/sfx/jump0.wav", "assets/sfx/jump1.wav", "assets/sfx/jump2.wav",
];

var hit_sfx = [];
const hit_files = [
	"assets/sfx/enemy0.wav", "assets/sfx/enemy1.wav",
];

var pickup_sfx = [];
const pickup_files = [
	"assets/sfx/pickup0.wav", "assets/sfx/pickup1.wav", "assets/sfx/pickup2.wav",
];