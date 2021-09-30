

let video;
let poseNet;
let poses = [];
let skeletons = [];

let pg;
let noseX;
let noseY;

let pNoseX;
let pNoseY;




let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

// let Scale=document.getElementById("Scale0");
// let Rotate=document.getElementById("Rotate0");
// let Translate=document.getElementById("Translate0");
// let More=document.getElementById("More");

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

let bottomWall = Bodies.rectangle(w/2, h-25, w, 10, { isStatic: true, firction:0 });
let leftWall = Bodies.rectangle(-5, h/2-20, 10,  h, { isStatic: true, firction:0 });
 leftWall.render.opcaity=0; //This doesn't work :(
let rightWall = Bodies.rectangle(w+5, h/2-20, 10, h, { isStatic: true, firction:0 });
let bottom = Bodies.rectangle(600, 350, 600, 5, { isStatic: true, firction:0 });




World.add(engine.world, [bottom,rightWall,leftWall,bottomWall]);

Engine.run(engine);

Render.run(render);


let addCircle = function () {
 return Bodies.circle(Math.random()*400 + 30, 30, 30);
};
let addSquare = function () {
 return Bodies.rectangle(Math.random()*400 + 30, 30, 60, 60);
};




// let test = Bodies.rectangle(450+Math.random()*100, 0, 60,25,{friction:0, restitution:1});
// test.render.opacity=1;
// World.add(engine.world, test);
//
// let test1 = Bodies.rectangle(450+Math.random()*100, 0, 60,25,{friction:0, restitution:1});
// test.render.opacity=1;
// World.add(engine.world, test1);



let fakebuttons=[];
let buttons=[];
let buttontexts=[];
let links = ['https://en.wikipedia.org/wiki/Gravity','https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation','https://en.wikipedia.org/wiki/Gravity_of_Earth','https://spaceplace.nasa.gov/what-is-gravity/en/','https://www.youtube.com/watch?v=oR_e9y-bka0','https://www.imdb.com/title/tt0816692/','https://www.gozerog.com/','https://blogs.unimelb.edu.au/sciencecommunication/2019/10/04/will-we-ever-be-able-to-control-gravity/','https://i.pinimg.com/564x/09/4c/ca/094ccade189a2e5176bb213ac53a75e3.jpg','https://i.pinimg.com/564x/fd/22/5a/fd225ada0b86a0e8ade3fc6e2a38fe4c.jpg','https://i.pinimg.com/564x/33/93/d9/3393d9cf938c8f31bf1042ded65d3bd7.jpg','https://aliceinwonderland.fandom.com/wiki/Rabbit_Hole','https://en.wikipedia.org/wiki/Anti-gravity','https://www.airzerog.com/','https://www.loc.gov/everyday-mysteries/physics/item/why-dont-i-fall-out-when-a-roller-coaster-goes-upside-down/','https://gravity.co/','https://www.youtube.com/watch?v=ybxSgIBbBh8','https://www.youtube.com/watch?v=Uibl0UE4VH8','https://www.youtube.com/watch?v=tgRMAVoHRbk','https://www.youtube.com/watch?v=xQwNdpP7kiQ','https://www.youtube.com/watch?v=bVNTNeNMH8Q'];
function dropFakeButton(){
  let b= Bodies.rectangle(450+Math.random()*300, 0, 25,30,{friction:0.01, restitution:0.6});
  b.render.opacity=0;
  World.add(engine.world,b);
  fakebuttons.push(b);

  // let q=document.createElement("BUTTON");
  // q.setAttribute("class","button");
  //
  // let c=Math.floor(Math.random()*10);
  // //q.innerHTML="Sophie";
  // let ranLinkIdx = Math.floor( Math.random() * links.length)
  // q.innerHTML="<a href="+links[ranLinkIdx]+" target='_blank'>"+c+"</a>";
  //q.innerHTML="<a href="+address+" target='_blank'>Gravity</a>";
  let q=document.createElement("a");
  let ranLinkIdx = Math.floor( Math.random() * links.length);

  q.href = links[ranLinkIdx]
  q.target='_blank';

  let c=Math.floor(Math.random()*10);
  //q.innerHTML="Sophie";
  q.innerHTML=c;
  q.className = "atag"
  q.style.position="absolute";
  buttons.push(q);
  document.getElementById("numberContainer").appendChild(q);

 //let s="<button>1111</button>";
 //manybuttons.innerHTML+=q;

  let randomInterval = 1 +Math.random()*3;
  setTimeout(dropFakeButton,randomInterval*300);

}
dropFakeButton();


//let buttontext=fakebuttons.map((l)=>{return "<button>1011</button>"});





// f.addEventListener("click",()=>{m.style.left=test.position.x+"px";  m.style.top=test.position.y+"px";
//
// });
// function dropBallInterval(){
//   let p = Bodies.rectangle(450+Math.random()*100, 0, 20+Math.random()*20,20+Math.random()*20,{friction:0, restitution:0.7});
//   World.add(engine.world, p);
//   let randomInterval = 1 +Math.random()*3;
//   setTimeout(dropBallInterval,randomInterval*1000);
//
// }
//dropBallInterval();



// for(let i=0;i<50;i++){
//   setTimeout(function(){let c = Bodies.circle(500, 0, 15,{friction:0.1, restitution:0.9});
//   World.add(engine.world, c); },3000);
//
// }




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
let a=30;

let f=document.getElementById("fixedbutton");
// let m=document.getElementById("movingbutton");
// let m1=document.getElementById("movingbutton1");
//


function draw() {
//  console.log(test.angle);

//ideally
for (let i=0;i<buttons.length;i+=1){
buttons[i].style.left=fakebuttons[i].position.x-8+"px";
buttons[i].style.top=fakebuttons[i].position.y+7+"px";
buttons[i].style.transform="rotate("+fakebuttons[i].angle+"rad)";

}




  // m.style.left=test.position.x-20+"px";
  // m.style.top=test.position.y+20+"px";
  // m.style.transform="rotate("+test.angle+"rad)";
  //
  // m1.style.left=test1.position.x-20+"px";
  // m1.style.top=test1.position.y+20+"px";
  // m1.style.transform="rotate("+test1.angle+"rad)";



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

    //distance.innerHTML="distance: "+d;

    //angle.innerHTML="angle: "+angleDeg;
    if(abs(angleDeg)<170){
      if(angleDeg>0){

    //  state.innerHTML="flipLeft";
      engine.gravity.y=0.8;
      engine.gravity.x=-0.6;
    }

    else{
      //state.innerHTML="flipRight";
      engine.gravity.y=0.8;
      engine.gravity.x=0.6;

    }
    }
    else{

    //  state.innerHTML="horizontal";
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
