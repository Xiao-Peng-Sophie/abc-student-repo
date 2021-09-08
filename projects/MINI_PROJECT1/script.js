let words=document.getElementById("content");
let symbol=document.getElementById("image");

let w=words.innerHTML;
//let angle=45;

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
  return Math.floor(Math.random()*60);
})
words.innerHTML=containers.join(" ");
let split_words=words.getElementsByTagName("span");

// split_words.forEach(function(word){
//   word.addEventListener("mouseover",()=>{
//     word.style.color="red";
//   });
// });
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
  //  word.style.color="pink";
  if(Math.random()<0.5){
    angle=-angle;
  }

  if(Math.random()<0.5){
    y=-y;
  }
  else{
    y=2*y;
  }

  // word.style.color="pink"
    //word.style.display="inline-block";
    //word.style.fontSize=Number(size)+"px";

    word.style.transform="rotate("+Number(angle)+"deg) translate(0,"+Number(y)*2+"px)";
    //word.style.transform= "translate(0,"+Number(y)+"px)";

    //word.style.transform="rotate(90deg)";
  });
}

for(let i=0;i<split_words.length;i+=1){
  changeColor(split_words[i],angles[i],sizes[i],yPositions[i]);
}

// control.addEventListener("input",()=>{
//   let sliderValue=control.value;
//   //let letterSize=Number(sliderValue)/2+20;
//   // words.style.fontSize=letterSize+"px";
//   // words.style.transform="rotate("+sliderValue+"deg)";
//
//   for(let i=0;i<split_words.length;i+=1){
//     let ls=Number(sliderValue)*Number(randomness[i])+20;
//     let c=ls*2;
//     let alpha=ls/100;
//
//     split_words[i].style.transform="rotate(45deg)";//doesn't work even if I change it to a constant
//     split_words[i].style.fontSize=ls+"px";//works
//     //split_words[i].style.color= "rgba(0,0,0"+alpha+")";// transparency doesn't work
//     //"rgba(0,0,0,"+ls/2+")"
//
//   }
//   //words.style.transform="rotate("+ sliderValue+"deg)";
//
//
// });

//"rotate("+ls+"deg)"

//words.style.transform="rotate(35deg)";

//words.style.transform="rotate(90deg)";
// words.addEventListener("mouseover",()=>{
//   words.style.color="red";
//   words.style.fontSize="25px";
//  words.style.transform="rotate("+sliderValue+"deg)";

//});
// words.addEventListener("mouseout",()=>{
//   words.style.color="blue";
//   words.style.fontSize="20px";
  //words.style.transform="rotate(0deg)";
  //words.style.transform="rotate("+sliderValue+"deg)";


//});
