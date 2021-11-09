let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

let Scale=document.getElementById("Scale0");
let Rotate=document.getElementById("Rotate0");
let Translate=document.getElementById("Translate0");
let More=document.getElementById("More");

let engine = Engine.create();

let render = Render.create({
  element: document.body,
  engine: engine,
  options: {

    width: 800,
    height: 400,
    wireframes: false,
    background:'rgb(255,255,255)'
  }
});

// var topWall = Bodies.rectangle(400, 50, 720, 20, { isStatic: true }); ///*******
// var leftWall = Bodies.rectangle(50, 210, 20, 300, { isStatic: true });
// var rightWall = Bodies.rectangle(750, 210, 20, 300, { isStatic: true }); //*******
let ball = Bodies.circle(460, 100, 40);
ball.friction=0;

let bottomWall = Bodies.rectangle(400, 350, 720, 20, { isStatic: true, firction:0 });

World.add(engine.world, [ball, bottomWall]);

Engine.run(engine);

Render.run(render);


let addCircle = function () {
 return Bodies.circle(Math.random()*400 + 30, 30, 30);
};
let addSquare = function () {
 return Bodies.rectangle(Math.random()*400 + 30, 30, 60, 60);
};


Scale0.addEventListener("click",()=>{
  Matter.Composite.scale( engine.world, 0.5, 0.5, {x: 400, y: 200});
});

Rotate0.addEventListener("click",()=>{
  Matter.Composite.rotate( engine.world, -Math.PI/8, {x: 400, y: 200});
  Matter.Composite.translate( engine.world, {x: 0, y: 20});

});

Translate0.addEventListener("click",()=>{
    Matter.Composite.translate( engine.world, {x: 10, y: 20});
});
function moreCircles(){
  let p = Bodies.circle(460, 100, 10,{friction:0.1});
  World.add(engine.world, p);



}

More.addEventListener("click",moreCircles);
