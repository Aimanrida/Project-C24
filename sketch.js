
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ground;
var paper;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = createSprite(400,500,800,10);
	ground.shapeColor = "yellow";

	box1 = createSprite(600,480,150,10);
	box1.shapeColor = "white";

	box2 = createSprite(680,430,10,90);
	box2.shapeColor = "white";

	box3 = createSprite(520,430,10,90);
	box3.shapeColor = "white";

	var ball_opitions={
		restitution : 1.0
	}

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(100, 450, 55, 55);
  ellipseMode(RADIUS);

  keyPressed();

  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyFroce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	}
}



