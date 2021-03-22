const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rope;
var ground;
var b1,b2,b3,b4,b5,b6,b7,b8;
var ball;
function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  b1 = new Box(900,100,70,70);
  b2 = new Box(900,30,70,70);
  b3 = new Box(800,100,70,70);
  b4 = new Box(800,30,70,70);
  b5 = new Box(700,100,70,70);
  b6 = new Box(700,30,70,70);
  b7 = new Box(600,100,70,70);
  b8 = new Box(600,30,70,70);

  ball=new Ball(200,200,80,80);
  
  rope=new Rope(ball.body,{x:600, y:100});

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();

  ball.display();
  rope.display();

}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


