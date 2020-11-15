
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,Lbody,Rbody,Base,ground
var engine,world
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);



	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic: true
	}

	ground = Bodies.rectangle(800,680,1600,20,options);
	World.add(world,ground);
	
	//Create the Bodies Here.
	paper = new Paper(200,670,50);
	Lbody = new Dustbin(800,630,20,80);
	Base = new Dustbin(850,660,80,20);
	Rbody = new Dustbin(890,630,20,80);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  Lbody.display();
  Base.display();
  Rbody.display();
  paper.display();
  fill("Yellow");
  rect(ground.position.x,ground.position.y,1600,20);
  
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:28,y:-25})
	}
}

