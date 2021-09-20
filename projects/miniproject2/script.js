let button=document.getElementById('button');

let end=document.getElementById("end");

let display=document.getElementById("value1");
let timeText=document.getElementById("time001");


let sw=screen.width;
let sh=screen.height;

function time(){
  let today=new Date();
  let h=today.getHours();
  let m=today.getMinutes();
  let s=today.getSeconds();
  if (s<10){
    s="0"+s;
  }
  if (m<10){
    m="0"+m;
  }
  if (h<10){
    h="0"+h;
  }
  let t=h + ":"+m+":"+s;
  timeText.innerHTML=t;
  setTimeout(function(){time()},1000);

}

button.addEventListener("click",open1);


function open1(){

 //ends here
  let controller=window.open("controller","","width=200, height=200,left=980,top=350");


  controller.addEventListener("load", ()=>{
    // open left face 338, 461
    let leftFace = window.open("leftFace","","width=440, height=600,left=205,top=0"); //****2/3
    // send right eye refrence to controller
    controller.mailbox(leftFace);

   //293,407
    let rightFace = window.open("rightFace","","width=380, height=529, left=575,top=40");
    controller.mailbox(rightFace);
   //370,222  *1.3
    let mouth=window.open("mouth","","width=480, height=288, left=350, top=700");
    controller.mailbox(mouth);
   //95,180
    let nose=window.open("nose","", "width=160, height=230, left=500, top=350");
    controller.mailbox(nose);
   //125,125
    let leftEye=window.open("leftEye","","width=155, height=155, left=400,top=315");
    controller.mailbox(leftEye);

    let rightEye=window.open("rightEye","","width=214, height=214, left=600, top=285");
    controller.mailbox(rightEye);


    end.addEventListener("click",()=>{
      leftFace.close();
      rightFace.close();
      mouth.close();
      nose.close();
      leftEye.close();
      rightEye.close();
      controller.close();
    })


  })



}
