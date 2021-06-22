const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope, ballImg;
var bg = "bg1.png"
var backgroundImg;

function preload(){
getBackgroundImg();
//ballImg = loadImage("ballwrecking.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(700, 600, 1400, 20);

  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  box11 = new Box(800, 100, 70, 70);
  box12 = new Box(800, 100, 70, 70);
  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(700, 100, 70, 70);
  box17 = new Box(700, 100, 70, 70);
  box18 = new Box(700, 100, 70, 70);
  box19 = new Box(700, 100, 70, 70);
  box20 = new Box(700, 100, 70, 70);
  //box = new Box(100,100,50,50);
  ball = new Ball(200, 200, 80, 80);
  rope = new Rope(ball.body, { x: 500, y: 50 });

}

function draw() {
  if(backgroundImg)
  background(backgroundImg);

  Engine.update(engine);
  ground.display();
  box1.display();
  //box.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  

  ball.display();
  rope.display();

  //Matter.Body.setPosition(box.body,{x:mouseX,y:mouseY});


}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(box1.body,{x:900,y:99});
    Matter.Body.setAngle(box1.body,0);
    box1.rotate(0);

    Matter.Body.setPosition(box2.body,{x:900,y:100});
    Matter.Body.setAngle(box2.body,0);

    Matter.Body.setPosition(box3.body,{x:900,y:101});
    Matter.Body.setAngle(box3.body,0);

    Matter.Body.setPosition(box4.body,{x:900,y:102});
    Matter.Body.setAngle(box4.body,0);

    Matter.Body.setPosition(box5.body,{x:900,y:103});
    Matter.Body.setAngle(box5.body,0);

    Matter.Body.setPosition(box6.body,{x:900,y:104});
    Matter.Body.setAngle(box6.body,0);
    //Matter.Body.setVelocity(box1.body,{x:0,y:0});
  }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}