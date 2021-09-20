
let sliderLF=document.getElementById("leftface");
let sliderRF=document.getElementById("rightface");
let sliderM=document.getElementById("mouth");
let sliderN=document.getElementById("nose");
let sliderLE=document.getElementById("lefteye");
let sliderRE=document.getElementById("righteye");
let timetext=document.getElementById("timetext");


let windows = [];

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
  timetext.innerHTML=t;
  setTimeout(function(){time()},1000);
}


function nextPicture(idx){
  windows[idx].next();
}

function mailbox(windowReference){
  //console.log("received", windowReference);
  windows.push(windowReference);
  //console.log("my window collection:", windows);
}

sliderLF.addEventListener("input",()=>{
  windows[0].sliderChange(sliderLF.value);
})


sliderRF.addEventListener("input",()=>{
  windows[1].sliderChange(sliderRF.value);
});

sliderM.addEventListener("input",()=>{
  windows[2].sliderChange(sliderM.value);
})

sliderN.addEventListener("input",()=>{
  windows[3].sliderChange(sliderN.value);
})

sliderLE.addEventListener("input",()=>{
  windows[4].sliderChange(sliderLE.value);
})

sliderRE.addEventListener("input",()=>{
  windows[5].sliderChange(sliderRE.value);
})
