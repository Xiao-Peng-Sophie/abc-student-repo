
let s1=document.getElementById('snake1');
let s2=document.getElementById('snake2');
let s3=document.getElementById('snake3');
let s4=document.getElementById('snake4');
let s5=document.getElementById('snake5');
let s6=document.getElementById('snake6');
let s7=document.getElementById('snake7');
let s8=document.getElementById('snake8');
let s9=document.getElementById('snake9');
let s10=document.getElementById('snake10');
let c2=document.getElementById("smallCircle");
let t1=document.getElementById("project1");
let t2=document.getElementById("project2");
let t3=document.getElementById("project3");
let tA=document.getElementById("projectA");

s1.addEventListener("mouseover",()=>{
  s1.style.transform="rotateY(180deg) scale(1.2)";
  c2.style.transform="rotate(-90deg)";
  t1.style.visibility="visible";
});

s1.addEventListener("mouseout",()=>{
  s1.style.transform="rotate(0deg) scale(1)";
  c2.style.transform="rotate(0deg)";
  t1.style.visibility="hidden";


});

s2.addEventListener("mouseover",()=>{
  s2.style.transform="rotateY(180deg) scale(1.2)";
  c2.style.transform="rotate(90deg)";

});

s2.addEventListener("mouseout",()=>{
  s2.style.transform="rotate(0deg) scale(1)";
  c2.style.transform="rotate(0deg)";

});

s3.addEventListener("mouseover",()=>{

  s3.style.transform="rotate(-180deg) scale(1.2)";
  c2.style.transform="rotate(-52deg)";
  t2.style.visibility="visible";
});

s3.addEventListener("mouseout",()=>{
  s3.style.transform="rotate(0deg) scale(1)";
  c2.style.transform="rotate(0deg)";
  t2.style.visibility="hidden";


});

s4.addEventListener("mouseover",()=>{

  s4.style.transform="rotate(30deg) scale(1.2)";
  c2.style.transform="rotate(52deg)";

});

s4.addEventListener("mouseout",()=>{
  s4.style.transform="rotate(360deg) scale(1)";
  c2.style.transform="rotate(0deg)";

});

s5.addEventListener("mouseover",()=>{

  s5.style.transform="rotateX(180deg) scale(1.2)";
  c2.style.transform="rotate(-17deg)";
  t3.style.visibility="visible";

});

s5.addEventListener("mouseout",()=>{
  s5.style.transform="rotate(0deg) scale(1)";
  c2.style.transform="rotate(0deg)";
  t3.style.visibility="hidden";

});

s6.addEventListener("mouseover",()=>{

  s6.style.transform=" scale(1.2)";
  c2.style.transform="rotate(23deg)";
  tA.style.visibility="visible";

});

s6.addEventListener("mouseout",()=>{
  s6.style.transform="rotate(0deg) scale(1)";
  c2.style.transform="rotate(0deg)";
  tA.style.visibility="hidden";

});

s7.addEventListener("mouseover",()=>{

  s7.style.transform="rotate(360deg) scale(1.2)";
  c2.style.transform="rotate(-128deg)";

});

s7.addEventListener("mouseout",()=>{
  s7.style.transform="rotate(0deg) scale(1)";
  c2.style.transform="rotate(0deg)";

});


s8.addEventListener("mouseover",()=>{

  s8.style.transform="rotate(90deg) scale(1.2)";
  c2.style.transform="rotate(125deg)";

});

s8.addEventListener("mouseout",()=>{
  s8.style.transform="rotate(0deg) scale(1)";
  c2.style.transform="rotate(0deg)";

});

s9.addEventListener("mouseover",()=>{

  s9.style.transform="rotateY(180deg) scale(1.2)";
  c2.style.transform="rotate(-160deg)";

});

s9.addEventListener("mouseout",()=>{
  s9.style.transform="rotate(0deg) scale(1)";
  c2.style.transform="rotate(0deg)";

});

s10.addEventListener("mouseover",()=>{

  s10.style.transform=" scale(1.2)";
  c2.style.transform="rotate(155deg)";

});

s10.addEventListener("mouseout",()=>{
  s10.style.transform="rotate(0deg) scale(1)";
  c2.style.transform="rotate(0deg)";

});
