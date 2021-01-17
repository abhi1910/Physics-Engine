const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, body;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,400,400,50,ground_options);
  World.add(world,ground);
  
  var ball_options= {
    restitution : 1.0,
    friction : 0.8,
    density : 1.0
  }

  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world,ball);
  
  // console.log(ball);
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);

  
  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}