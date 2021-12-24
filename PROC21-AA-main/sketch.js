const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var pelota;
var boton1;
var boton2;
var pelota_options;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  boton1=createImg("up.png");
  boton2=createImg("right.png");
  boton1.position(40,30);
  boton1.size(50,50);
  boton1.mouseClicked(hForce)

  boton2.position(250,30);
  boton2.size(50,50);
  boton2.mouseClicked(vForce)

  pelota_options={
  restitution: 0.95
  }
  pelota=Bodies.circle(200,100,20,pelota_options);
  World.add(world,pelota);
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background("cyan");
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function hForce()    {
  Matter.Body.applyForce(pelota,{x:0,y:0},{x:0.05,y:0})
}
function vForce()    {
  Matter.Body.applyForce(pelota,{x:0,y:0},{x:0,y:-0.05})
}