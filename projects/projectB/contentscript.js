let alltext=document.body.innerText;
// let texts=alltext.split(" ");
// let body=document.body;

let paragraphs=document.getElementsByTagName("p");
//let w=words.innerHTML;
// let ptexts=paragraphs.map((l)=>{
//   return l.innerText;
// });
let ptexts=[];
for(let i=0;i<paragraphs.length;i++){
  ptexts.push(paragraphs[i].innerText);
}
console.log("ptexts:",ptexts);
console.log("paragraphs:",paragraphs);

//let split=w.split(" ");

for(let i=0;i<paragraphs.length;i++){
  paragraphs[i].addEventListener("mouseover",()=>{
    paragraphs[i].style.color="red";
    let sentence=ptexts[i];
    let msg={ content:sentence}
    chrome.runtime.sendMessage(msg,(response)=>{ //send a message, once the message is received, get the resoinse
      console.log("sentences sent!");

    });

  });
}

// let containers=texts.map((l)=>{ //span tags
//   return "<span>"+l+"</span>";
// });

// let split_words=document.getElementsByTagName("span");

// for(let i=0;i<split_words.length;i+=1){
//   split_words[i].addEventListener("mouseover",()=>{
//     split_words[i].style.color="red";
//   })
// }




//
// for(let i=0;i<words.length;i++){
//
// words[i].addEventListener("mouseover",()=>{
//   words[i].style.color="pink";
// })
// words[i].addEventListener("mouseout",()=>{
//   words[i].style.color="black";
// })
// }

// for(let i=0;i<texts.length;i++){
//   texts[i].addEventListener("mouseover",)
// }

// let message={firstline:"hellllo", value:alltext} //now I only send the whole texts
//
// chrome.runtime.sendMessage(message,(response)=>{ //send a message, once the message is received, get the resoinse
//   console.log("background script sent me this",response);
//
// });
