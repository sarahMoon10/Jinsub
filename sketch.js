const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var invisibleGround

function setup(){

    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
ground = new Ground(1500, 760, 3000, 20)
container = new Container(500, 545, 10, 410)
container2 = new Container(900, 545, 10, 410)
ball1 = new Ball(600, 330, 30, 30)
ball2 = new Ball2(550, 300, 50, 50)
ball3 = new Ball(720, 260, 30, 30)
ball4 = new Ball2(680, 330, 50, 50)
ball5 = new Ball(850, 290, 30, 30)
ball6 = new Ball2(790, 300, 50, 50)



invisibleGround2 = new Box(249, 180, 450, 300)

fill("black")
invisibleGround = new Container(250, 355, 450, 30)

}
function draw(){
    
    background("black");
    Engine.update(engine);
    ground.display()
    ball1.display()
    ball2.display()
    ball3.display()
    ball4.display()
    ball5.display()
    ball6.display()
    container.display()
    container2.display()
    invisibleGround.display()
    invisibleGround2.display()

    stroke("white");
  textSize(40);
  text("Minjun yi Mo ssol kekeloopingpong",390,200);
   
}

function mouseDragged(){
  Matter.Body.setPosition(invisibleGround2.body, {x: mouseX, y: mouseY})
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(ball1.body, {x: mouseX, y: mouseY})
  }
}