console.log("hello");

let elements=document.querySelectorAll("p, a, li, h1, h2, h3, img, video");

let titles=document.getElementsByTagName('span');
let images=document.getElementsByTagName('img');




for (let i=0;i<elements.length;i+=1){
elements[i].style.transform="rotateY(180deg)";


}


function gotMessage(request, sender,sendResponse){
  console.log(request);

  let angle=540;
  if(request.type == "buttonPressed" ){
    let a=request.value*180+180;
    console.log(a);

    for (let i=0;i<elements.length;i+=1){
      let rotateTime=1+Math.random()*3;

      elements[i].style.transition=rotateTime+"s";

    elements[i].style.transform="rotateY("+a+"deg)";




    }

    
  }

}

chrome.runtime.onMessage.addListener(gotMessage);
