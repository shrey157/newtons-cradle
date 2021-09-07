
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine,world;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roof;
var rope1,rope2,rope3, rope4, rope5;

function preload()
{}

function setup() {
	createCanvas(800, 700);
engine = Engine.create();
world =engine.world;	
//Create the Bodies Here.
bobObject1=new Bob(410,200,20)
bobObject2=new Bob(450,200,20)
bobObject3=new Bob(470,200,20)
bobObject4=new Bob(500,200,20)
bobObject5=new Bob(540,200,20)

rope1=new Rope (bobObject5.body,{ x:550, y:150})
rope2=new Rope (bobObject4.body,{ x:510, y:150})
rope3=new Rope (bobObject3.body,{ x:470, y:150})
rope4=new Rope (bobObject2.body,{ x:430, y:150})
rope5=new Rope (bobObject1.body,{ x:380, y:150})
roof=new Roof(450,150,300,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(175, 186, 204));
 fill('white') 
 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()
 roof.display()
 
 fill(rgb(11, 54, 125))
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 
 keyPressed();
 drawSprites();
}

function keyPressed(){
  if(keyCode==UP_ARROW){
  Matter.Body.applyForce(bobObject1.body,paper.body.position,{x:-2,y:-35})
  }
  }

  function mouseDragged() {
    
        Matter.Body.setPosition(bobObject1.body, { x: mouseX, y: mouseY })
    
    }
