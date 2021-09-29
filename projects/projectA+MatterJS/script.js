let state=document.getElementById("state");

let video;
let poseNet;
let poses = [];
let skeletons = [];

let pg;
let noseX;
let noseY;

let pNoseX;
let pNoseY;

let angle=document.getElementById("angle");
let distance=document.getElementById("distance");


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

    width: window.innerWidth,
    height: window.innerHeight,
    wireframes: false,
    background:'rgb(255,255,255)'
  }
});

// var topWall = Bodies.rectangle(400, 50, 720, 20, { isStatic: true }); ///*******
// var leftWall = Bodies.rectangle(50, 210, 20, 300, { isStatic: true });
// var rightWall = Bodies.rectangle(750, 210, 20, 300, { isStatic: true }); //*******

// let ball = Bodies.circle(460, 100, 40);
// ball.friction=0;

let w=window.innerWidth;
let h=window.innerHeight;

let bottomWall = Bodies.rectangle(w/2, h-50, w, 10, { isStatic: true, firction:0 });
let leftWall = Bodies.rectangle(0, h/2-50, 10,  h, { isStatic: true, firction:0 });
let rightWall = Bodies.rectangle(w, h/2-50, 10, h, { isStatic: true, firction:0 });
let bottom = Bodies.rectangle(600, 350, 600, 10, { isStatic: true, firction:0 });




World.add(engine.world, [bottom,rightWall,leftWall,bottomWall]);

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
  let p = Bodies.circle(500, 0, 15,{friction:0.1, restitution:0.9});
  World.add(engine.world, p);
}

More.addEventListener("click",()=>{
  for(let i=0;i<10;i+=1){
  moreCircles();
}
});

for(let i=0;i<50;i++){
  setTimeout(function(){let c = Bodies.circle(500, 0, 15,{friction:0.1, restitution:0.9});
  World.add(engine.world, c); },3000);

}




function setup() {
  //createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);

  pixelDensity(1);
  pg = createGraphics(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);

  poseNet.on('pose', function(results) {
    poses = results;
  });

  // Hide the video element, and just show the canvas
  video.hide();
}

function draw() {


  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
 // drawSkeleton();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  // Loop through all the poses detected
  for (let i = 0; i < min(poses.length, 1); i++) {
    // For each pose detected, loop through all the keypoints
    // if(poses[i].pose.keypoints.length > 3){
      let leftEyeK = poses[i].pose.keypoints[1];
      let rightEyeK = poses[i].pose.keypoints[2];
      // if(leftEyeK.score>0.2 && rightEyeK.score>0.2){
        //stroke("red");
        //strokeWeight(5)
        //line(leftEyeK.position.x, leftEyeK.position.y, rightEyeK.position.x, rightEyeK.position.y)
     let angleDeg = Math.atan2(rightEyeK.position.y - leftEyeK.position.y, rightEyeK.position.x - leftEyeK.position.x) * 180 / Math.PI;
     let d = dist(leftEyeK.position.x,leftEyeK.position.y,rightEyeK.position.x,rightEyeK.position.y);

    distance.innerHTML="distance: "+d;

    angle.innerHTML="angle: "+angleDeg;
    if(abs(angleDeg)<170){
      if(angleDeg>0){

      state.innerHTML="flipLeft";
      engine.gravity.y=0.8;
      engine.gravity.x=-0.6;
    }

    else{
      state.innerHTML="flipRight";
      engine.gravity.y=0.8;
      engine.gravity.x=0.6;

    }
    }
    else{

      state.innerHTML="horizontal";
      engine.gravity.y=1;
      engine.gravity.x=0;


    }

  }
}


// The callback that gets called every time there's an update from the model
function gotPoses(results) {
  poses = results;
}

function keyPressed() {
  pg.clear();
}

function modelReady() {
  select('#status').html('model Loaded');
}
