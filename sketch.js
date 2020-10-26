var paperSprite,paperObject;
var paperBody,ground1;

var dustbin1,dustbin2,dustbin3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	dustbin1 = new dustbin(500,600)
  
	paperObject = new paper(200,400,40)

	ground1 = new Ground(width/2,670,width,20)
	
	var render = Render.create({
		element: document.body,engine:engine,options:{width:700,height:700,wireframes: false}})
	Engine.run(engine);
}

function draw() {
  background(0);
  rectMode(CENTER);
  
  dustbin1.display();
  paperObject.display();
  ground1.display();

  //Matter.Body.setStatic(helicopterSprite,false);
  drawSprites();


}

function keyPressed(){
 if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
 }};
