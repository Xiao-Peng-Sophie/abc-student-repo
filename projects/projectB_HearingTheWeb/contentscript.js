// document.body.style.transition = "all 3s";
// document.body.style.opacity = "0";
//
// document.body.style.backgroundColor = "black";

let imgs = document.body.querySelectorAll("img,video");

for(let i=0;i<imgs.length;i++){
  imgs[i].style.filter="brightness(0)";
}




let paragraphs=document.getElementsByTagName("p");
let ptexts=[];
for(let i=0;i<paragraphs.length;i++){
  ptexts.push(paragraphs[i].innerText);
}



let ptags = document.body.querySelectorAll("p");
let ignoreTags = ["SCRIPT", undefined, "PICTURE"];
function superFunctionForTags(tag){     //from LEON's sample code !
  console.log("tag", tag);
  console.log("tagname", tag.tagName);
  if(ignoreTags.includes(tag.tagName) || tag.innerHTML == ""){
    return tag.outerHTML;
  }
  let emptyTag = tag.cloneNode();
  emptyTag.innerHTML = "";
  console.log("empty", emptyTag.outerHTML)
  let outterTags = emptyTag.outerHTML.split("><");
  outterTags[0]+=">";
  outterTags[1]="<"+outterTags[1];

//   console.log("child", tag);
//   console.log("childtext", tag.innerText);
  let spanifiedString = "";
  for(let j = 0; j < tag.childNodes.length; j++){
    let cn = tag.childNodes[j];
//     console.log(cn)
    if(cn.nodeName == "#text"){
        let words = cn.textContent.trim().split(" ");
        let spans = words.map(word=>{return "<span class='split'>"+word+"</span>"})
        let spanString = spans.join(" ")
//         console.log("spanstring:", spanString);

        spanifiedString+=spanString + " "
    }else{
        let spanString = superFunctionForTags(cn);
//         console.log("nested spanstring:", spanString);

        spanifiedString+=spanString + " "
    }
  }
  return outterTags[0] + spanifiedString.substring(0,spanifiedString.length-1)  + outterTags[1]

}


document.body.innerHTML = superFunctionForTags(document.body)

let words = document.getElementsByClassName("split");
for(let i = 0; i < words.length; i++){

  words[i].style.color = "black";
  words[i].style.backgroundColor = "black";
  //words[i].style="opacity:0;";

  words[i].addEventListener("mouseover", function(){
    let word=words[i].innerText;


    console.log("one word:",words[i].innerText);

    let msg={ content:word}
    chrome.runtime.sendMessage(msg,(response)=>{ //send a message, once the message is received, get the resoinse
      console.log("Single word sent!");

    });
  });

}
