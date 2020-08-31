
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree,mango1,mango2,mango3,mango4,boy,stone;
var radius =30;

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
     mango1 = new Mango(650,396);
     mango2 = new Mango(688,340);
     mango3 = new Mango(670,420);
     mango4 = new Mango(535,430);
     mango5 = new Mango(640,320);
     mango6 = new Mango(600,340);
     mango7 = new Mango(670,420);
     mango8 = new Mango(600,460);
     mango9 = new Mango(730,460);
     mango10 = new Mango(730,400);
     stone = new Stone(150,580,radius);
     chain = new Sling(stone.body,{x:175,y:600});
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
  mango9.display();
  mango10.display();
  boy.display();
  stone.display();
  chain.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
 chain.fly();

}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:175,y:600})
    chain.attach(stone.body)
    
  }

}
function detectCollision (lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
      Matter.Body.setStatic(lmango.body,false)
  }
}
