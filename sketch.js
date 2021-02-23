
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var dustbin1,dustbin2,dustbin3;
var ground;
var dust, dustImg;


function preload(){
	dustImg = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	paper1 = new Paper(200,370,50,50);
	dustbin2 = new Dustbin(655,366,5,25);
	dustbin1 = new Dustbin(620,341,5,75);
	dustbin3 = new Dustbin(705,341,5,75);

  dust = createSprite(663,341,10,10);
  dust.addImage(dustImg);
  dust.scale = 0.35;
  
	paper1.scale = 2;

	ground = new Ground(400,410,1000,20);
	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);


  ground.display();
  paper1.display();
  paper1.update();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
}

