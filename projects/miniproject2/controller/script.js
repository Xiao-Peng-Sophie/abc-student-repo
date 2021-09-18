
let sliderLF=document.getElementById("leftface");
let sliderRF=document.getElementById("rightface");
let sliderM=document.getElementById("mouth");
let sliderN=document.getElementById("nose");
let sliderLE=document.getElementById("lefteye");
let sliderRE=document.getElementById("righteye");


let windows = [];


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
