let words=document.getElementById("content");
let control=document.getElementById("myRange");
let w=words.innerHTML;
let angle=45;

let letters=words.innerHTML.split("");
let containers=letters.map((l)=>{
  return "<span>"+l+"</span>";
});
let randomness=letters.map((l)=>{
  return Math.random();
});
words.innerHTML=containers.join(" ");
let split_words=words.getElementsByTagName("span");


control.addEventListener("input",()=>{
  let sliderValue=control.value;
  //let letterSize=Number(sliderValue)/2+20;
  // words.style.fontSize=letterSize+"px";
  // words.style.transform="rotate("+sliderValue+"deg)";

  for(let i=0;i<split_words.length;i+=1){
    let ls=Number(sliderValue)*Number(randomness[i])+20;
    let c=ls*2;
    let alpha=ls/100;
    split_words[i].style.display="inline-block";
    split_words[i].style.transform="rotate("+ sliderValue+"deg)";//doesn't work even if I change it to a constant
    split_words[i].style.fontSize=ls+"px";//works
    //split_words[i].style.color= "rgba(0,0,0"+alpha+")";// transparency doesn't work
    //"rgba(0,0,0,"+ls/2+")"

  }
  //words.style.transform="rotate("+ sliderValue+"deg)";


});

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
