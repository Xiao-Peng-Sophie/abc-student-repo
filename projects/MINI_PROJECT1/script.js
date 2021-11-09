let words=document.getElementById("content");
let symbol=document.getElementById("image");

let w=words.innerHTML;


let letters=words.innerHTML.split("");
let containers=letters.map((l)=>{
  return "<span>"+l+"</span>";
});
let randomness=letters.map((l)=>{
  return Math.random();
});
let sizes=letters.map((l)=>{
  return Math.floor(Math.random()*20)+15;
});
let angles=letters.map((l)=>{
  return Math.random()*50;
})
let yPositions=letters.map((l)=>{
  return Math.floor(Math.random()*150);
})
words.innerHTML=containers.join(" ");
let split_words=words.getElementsByTagName("span");


let images=[];
for(let j=0;j<5;j+=1){
  images[j]="<img>"+symbol+"</img>";
}

symbol.addEventListener("mouseover",()=>{
  symbol.style.transform="rotate(360deg)";
});

symbol.addEventListener("mouseout",()=>{
  symbol.style.transform="rotate(0deg)";
});


function changeColor(word,angle,size,y){
  word.addEventListener("mouseover",()=>{

  if(Math.random()<0.5){
    angle=-angle;
  }

  if(Math.random()<0.5){
    y=-y*3/2;
  }
  else{
    y=y/2;
  }
    word.style.transform="rotate("+Number(angle)+"deg) translate(0,"+Number(y)*2+"px)";

  });
}

for(let i=0;i<split_words.length;i+=1){
  changeColor(split_words[i],angles[i],sizes[i],yPositions[i]);
}
