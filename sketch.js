const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var Ground1
var engine, world



function setup() {
  var canvas = createCanvas(1200,00);
  engine = Engine.create()
  world = engine.world

  Ground1 = new Ground(600,100,400,20)
}

function draw() {
  background("#372B2B");  

  Ground1.display()

  drawSprites();
}