const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var tower1,tower2,tower3,tower4,tower5,tower6,tower7,tower8,tower9,tower10;
var ball;
var rope;




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    tower1=new TowerClass(600,390,100,100);
    tower2=new TowerClass(600,290,100,100);
    tower3=new TowerClass(600,190,100,100);
    tower4=new TowerClass(600,90,100,100);

    ball=new Ball(325,390,70);

    rope=new Rope(ball.body,{x:325,y:15});
}

function draw(){
    background("black");
    Engine.update(engine);
    ground.display();
    tower1.display();
    tower2.display();
    tower3.display();
    tower4.display();

    ball.display();

    rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
   
}

