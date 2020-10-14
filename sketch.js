
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, boyImage;

function preload()
{
	boyImage = loadImage("Plucking mangoes/boy.png ");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	   boy = createSprite(100,500,10,10);
	   boy.addImage(boyImage);
	   boy.scale = 0.5;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



