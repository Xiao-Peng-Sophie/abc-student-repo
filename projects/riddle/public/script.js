console.log("It works!!!");
let button=document.getElementById("button");

let box1=document.getElementById("box1");
let box2=document.getElementById("box2");

let slider1=document.getElementById("slider1");
let slider2=document.getElementById("slider2");
let slider3=document.getElementById("slider3");
let slider4=document.getElementById("slider4");
let slider5=document.getElementById("slider5");
let slider6=document.getElementById("slider6");



let rabbit=document.getElementById("rabbit");
let character02=document.getElementById("character02");
let character03=document.getElementById("character03");
let character04=document.getElementById("character04");
let character05=document.getElementById("character05");
let character06=document.getElementById("character06");


slider1.addEventListener("input",()=>{
  console.log("range value:", slider1.value);
  //box1.style.left=100+slider1.value*2+"px";

  rabbit.style.left=50+slider1.value*6+"px";
  //window.location.href="/secret?word="+slider1.value;
})

slider2.addEventListener("input",()=>{
  console.log("range value:", slider1.value);
  //box2.style.top=150+slider2.value*2+"px";
  character02.style.top=150+slider2.value*2+"px";
  //window.location.href="/secret?word="+slider1.value;
})

slider3.addEventListener("input",()=>{
  //console.log("range value:", slider3.value);
  //box2.style.top=150+slider2.value*2+"px";
  character03.style.top=100+slider3.value*2+"px";
  //window.location.href="/secret?word="+slider1.value;
})

slider4.addEventListener("input",()=>{
  //console.log("range value:", slider3.value);
  //box2.style.top=150+slider2.value*2+"px";
  character04.style.left=350+slider4.value*4+"px";
  //window.location.href="/secret?word="+slider1.value;
})

slider5.addEventListener("input",()=>{
  //console.log("range value:", slider3.value);
  //box2.style.top=150+slider2.value*2+"px";
  character05.style.left=300+slider5.value*5+"px";
  //window.location.href="/secret?word="+slider1.value;
})

slider6.addEventListener("input",()=>{
  //console.log("range value:", slider3.value);
  //box2.style.top=150+slider2.value*2+"px";
  character06.style.top=300+slider6.value*3+"px";
  //window.location.href="/secret?word="+slider1.value;
})


button.addEventListener("click",()=>{
  console.log("click!");

  window.location.href="/secret?word="+slider1.value+"&wword="+slider2.value+"&slider3="+slider3.value+"&slider4="+slider4.value+"&slider5="+slider5.value+"&slider6="+slider6.value;
})
