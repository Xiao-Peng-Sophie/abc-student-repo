

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

let box1=document.getElementById("box1");
let box2=document.getElementById("box2");
let box3=document.getElementById("box3");
let box4=document.getElementById("box4");

let b1=document.getElementById("b1");


let angle=document.getElementById("angle");
let distance=document.getElementById("distance");

let words=document.getElementById("content");
let letters=words.innerHTML.split(" ");

let angles=letters.map((l)=>{
  return Math.random()*90;
});
let ysteps=letters.map((l)=>{
  return Math.random()*300+50;
});
let xsteps=letters.map((l)=>{
  return Math.random()*(-500)-50;
});


let w=document.getElementById("Aletter");

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
let containers=letters.map((l)=>{
  return "<span>"+l+"</span>";

});
words.innerHTML=containers.join(" ");
let split_words=words.getElementsByTagName("span");

function text_move(w,a,y,x){
  w.style.transform="translateX("+x+"px) translateY("+y+"px) rotate("+a+"deg)";

}

function text_back(w){
  w.style.transform="translateX(0px) translateY(0px)";
}




function draw() {
  //background(255)
  //image(video, 0, 0, width, height);

   //image(pg, 0, 0, width, height);

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

    // textSize(30);
    // strokeWeight(1);
    //  fill(0)
    //   stroke(0)
    // text(angleDeg,20,40);
    distance.innerHTML="distance: "+d;

    angle.innerHTML="angle: "+angleDeg;
    if(abs(angleDeg)<170){
      box1.style.transform=" rotate(90deg)";
      box3.style.transform="rotate(90deg)";
      b1.style.transform="translateX(-350px) translateY(200px)";
      w.style.transform="rotate(90deg)";


    //  text("Flip!",20,90);
      state.innerHTML="flip";

      for(let i=0;i<split_words.length;i+=1){
        text_back(split_words[i],angles[i]);

      
      }
    //  box1.style.transform="rotate(90deg)";


    }
    else{

      state.innerHTML="horizontal";
      box1.style.transform=" rotate(0deg)";
      box3.style.transform=" rotate(0deg)";
      b1.style.transform="translateX(0px) translateY(0px)";
      w.style.transform="rotate(0deg)";
      for(let i=0;i<split_words.length;i+=1){
        text_move(split_words[i],angles[i],ysteps[i],xsteps[i]);

      }



    }
    if (d>120){
      box2.style.transform="scale(1.5)";
      box4.style.transform="scale(1.5)";

    }
    else{
      box2.style.transform="scale(1)";
      box4.style.transform="scale(1)";
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
