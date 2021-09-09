let range = document.getElementById("myRange");
let neirong= document.getElementById("content");
//let text = contentElement.innerHTML;
let letters = neirong.innerHTML.split("");
let letterSpans=letters.map((letter)=>{return "<span>"+letter+"</span>"});
 neirong.innerHTML=letterSpans.join("");
let spanTags = neirong.getElementsByTagName("span");
let randomMultipliers1=letters.map((l)=>{return Math.random()*4});
let randomMultipliers2=letters.map((l)=>{return Math.random()*3});
range.addEventListener("input",()=>{
  let sliderValue=range.value;
  for(let i=0;i<spanTags.length;i+=1){
    let randomMultiplier1=randomMultipliers1[i];
    let randomMultiplier2=randomMultipliers2[i];
    let y=sliderValue*randomMultiplier1;
    let x=sliderValue*randomMultiplier2;
    //spanTags[i].style.color=(0,0,200);
    spanTags[i].style.left=x+"px";
    spanTags[i].style.top=y+"px";
    //spanTags[i].style.fontSize=sliderValue/2+30+ "px";
    //spanTags[i].style.color="rgb(0,100,"+sliderValue*2+",100)";
    //spanTags[i].style.color=color(0,0,200);
    //spanTags[i].style.Transform="rotate("+sliderValue+"deg)";

  }
})
//console.log(range.value);
