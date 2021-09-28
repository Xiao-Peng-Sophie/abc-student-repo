var Engine = Matter.Engine;
var World=Matter.World;
var Bodies=Matter.Bodies;
var engine;
var box1;
var boxes=[];
  var ground;
  var groundR;
  var groundL;

  var ground2;
  var ground3;

function setup(){
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  Engine.run(engine);
  //console.log(box1);
  //box1 = new Box(200,100,50,50); //how about rotating the boundary?
 var options={
   isStatic:true
 }
 var options2={
   angle:PI/6,
   isStatic:true

 }
 // groundR=Bodies.rectangle(145,180,10,50,options);
 // groundL=Bodies.rectangle(55,180,10,50,options);
 groundR=new Boundary (145,180,10,50,0);
 groundL=new Boundary (55,180,10,50,0);
 ground2=new Boundary (100,200,100,10,0);


 //ground2=Bodies.rectangle(100,height/2,100,10,options);

ground3= new Boundary(300,100,100,10,0);
 // ground3=Bodies.rectangle(300,100,100,10,options2);
 // ground3.angle=PI/6;



 ground=Bodies.circle(300,height/2,50,options);

 World.add(world,ground);
 World.add(world,groundR);
 World.add(world,groundL);


 World.add(world,ground2);
 World.add(world,ground3);






}
function mouseDragged(){
  boxes.push(new Box(mouseX,mouseY,random(5,10),random(5,10)));
}

function draw(){
  background(51);
  fill(0,0,255);
  noStroke();
  circle(300,height/2,100);
  for (let i=0;i<boxes.length;i++){
    boxes[i].show();
  }
  ground3.tilt();
  ground3.show();
  groundL.show();
  groundR.show();
  ground2.show();
//  box1.show();

}

function Boundary(x,y,w,h,a){
  this.w=w;
  this.h=h;
  this.a=a;
  var options={
    friction:0.3,
    restitution:0.6,
    angle:this.a,
    isStatic:true
  }
  this.body=Bodies.rectangle(x,y,w,h,options);
  this.body.angle=this.a;

  World.add(world,this.body);
  this.tilt=function(){
    var angle = this.body.angle;
    if(keyIsPressed){

      this.body.angle=-PI/8;
    }

  }

  this.show = function(){
    var pos = this.body.position;
    var angle = this.body.angle;
    // if(keyIsPressed){
    //   this.body.angle=PI/10;
    // }
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    noStroke();
    fill(0,0,255);
    rect(0,0,this.w,this.h);
    pop();
  }


}
function Box(x,y,w,h){
  this.body=Bodies.rectangle(x,y,w,h);
  this.body.friction=1;
  //this.body.frictionAir=0.1;
  this.body.restitution=0;
  this.w=w;
  this.h=h;
  World.add(world,this.body);

  this.show = function(){
    var pos = this.body.position;
    var angle = this.body.angle;
    if(keyIsPressed){
      this.body.friction=0;
    }
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    noStroke();
    fill(255,200);
    rect(0,0,this.w,this.h);
    pop();
  }
}
