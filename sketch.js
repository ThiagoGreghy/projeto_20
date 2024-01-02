
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane, block1, block2, block3;

function preload()
{
	
}

function setup() {
	

	createCanvas(400, 350);


	engine = Engine.create();
	world = engine.world;

	var plane_options ={
		isStatic: true
	}
	var block1_options = {
        restitution: 0.5,
        friction: 0.02,
        frictionAir: 0
    }
    var block2_options = {
        restitution: 0.7,
        friction: 0.01,
        frictionAir: 0.1
    }
    var block3_options = {
        restitution: 0.01,
        friction: 1,
        frictionAir: 0.3
    }

	//Crie os Corpos Aqui.
	plane = Bodies.rectangle(200,350,800,10,plane_options);
	World.add(world, plane);
	block1 = Bodies.circle(250, 10, 10, block1_options);
    World.add(world, block1);
    block2 = Bodies.rectangle(110,50,10,10,block2_options);
    World.add(world, block2);
    block3 = Bodies.rectangle(350,50,10,10, block3_options);
    World.add(world, block3);

	rectMode(CENTER);
  ellipseMode(RADIUS);
  fill('red');
	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
 
  background('rgb(0,255,0)');
 
  Engine.update(engine);
 
  drawSprites();

  ellipse(block1.position.x,block1.position.y,20);
  rect(block2.position.x,block2.position.y,50);
  rect(block3.position.x,block3.position.y,70,50);
  rect(plane.position.x,plane.position.y,400,1);
 
}



