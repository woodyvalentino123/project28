
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,tree,mango1,mango2,mango3,mango4,boy;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground = new Ground(400,670);
     tree = new Tree(650,480);
     mango1 = new Mango(650,320);
     mango2 = new Mango(688,340);
     mango3 = new Mango(650,420);
     mango4 = new Mango(688,460);
     mango5 = new Mango(640,320);
     mango6 = new Mango(670,340);
     mango7 = new Mango(670,420);
     mango8 = new Mango(600,460);
     boy = new Boy(200,640);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  boy.display();
  
  drawSprites();
 
}



