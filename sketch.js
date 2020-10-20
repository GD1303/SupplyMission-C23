var helicopterImage, helicopter;
var package, packageImage, packageBody;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterImage = loadImage("helicopter.png")
	packageImage = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	package = createSprite(width/2, 80, 10,10);
	package.addImage(packageImage)
	package.scale = 0.2

	helicopter = createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterImage)
	helicopter.scale = 0.6

	ground = createSprite(width/2, height-35, width,10);
	ground.shapeColor = color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );

	World.add(world, packageBody);
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  package.x = packageBody.position.x 
  package.y = packageBody.position.y 

  if(keyDown("down")) {
	  package.velocityY = package.velocityY + 0.6;
  }

  drawSprites();
}