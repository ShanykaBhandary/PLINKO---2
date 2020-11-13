const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0
var particle;
var turn
var gameState = "start"

var divisionHeight=300;

var particles = [];
var plinkos = [];
var division = [];


function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;

  for(var k = 0;k <=width;k = k + 80){
    division.push(new Division(k, height-divisionHeight/2,10,divisionHeight))
  }

  for(var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 75;j <=width;j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 75;j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 50;j<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  }

 
  
}


function draw() {
  background("black");
  
  
  if(frameCount%60===0)
  { 
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); 
    score++
  }

  for (var j = 0;j < particles.length; j++){
    particles[j].display();
  } 
  for (var k = 0; k < division.length; k++){
    division[k].display();
  }
 for(var l = 0;l<plinkos.length;l++ ){
   plinkos[l].display();
 }
  drawSprites();
  text("SCORE"+score, 20,40)
  
  }
  function mousePressed()
  {
    if (gameState!=="end")
    {
      count++;
      particle=new particle(mouseX, 10, 10, 10);
    }
  }
