
let icon1=document.getElementById("icon01");
let icon2=document.getElementById("icon02");
icon1.addEventListener("mouseover",()=>{
  icon1.style.transform="rotate(360deg) scale(1.3)";

});

icon1.addEventListener("mouseout",()=>{
  icon1.style.transform="scale(1)";
});

icon2.addEventListener("mouseover",()=>{
  icon2.style.transform="rotate(360deg) scale(1.3) ";

});

icon2.addEventListener("mouseout",()=>{
  icon2.style.transform="scale(1)";
});