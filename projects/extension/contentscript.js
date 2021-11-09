console.log("hello");


// setTimeout(()=>{
//   document.body.innerHTML = document.body.innerHTML.replace(/Today/g, "1");
// }, 3000);
//let paragraphs=document.getElementsByTagName('p');
let elements=document.querySelectorAll("p, a, li, h1, h2, h3, img, video");

let titles=document.getElementsByTagName('span');
let images=document.getElementsByTagName('img');


// for (let i=0;i<paragraphs.length;i+=1){
//
// paragraphs[i].style.transform="rotateY(180deg)";
// }

// for (let i=0;i<titles.length;i+=1){
//
//  titles[i].style.transform="rotateY(180deg)";
//
// }
for (let i=0;i<elements.length;i+=1){
elements[i].style.transform="rotateY(180deg)";


}

// for (let i=0;i<titles.length;i+=1){
// titles[i].style.transform="rotateY(180deg)";
//
//
// }

function gotMessage(request, sender,sendResponse){
  console.log(request);
  // let findWord=request.find;
  // let replaceWord=request.replace;
  // repl(findWord,replaceWord);
  let angle=540;
  if(request.type == "buttonPressed" ){
    let a=request.value*180+180;
    console.log(a);
    //angle+=360;
    for (let i=0;i<elements.length;i+=1){
      let rotateTime=1+Math.random()*3;

      elements[i].style.transition=rotateTime+"s";

    elements[i].style.transform="rotateY("+a+"deg)";

  //  paragraphs[i].style.color="red";


    }

    // makes things move
  }

}

chrome.runtime.onMessage.addListener(gotMessage);
