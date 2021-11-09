console.log("popped up just now");
let button = document.querySelector("#button");
let count = document.querySelector("#count");
let counter=0;

//console.log(button);

let message={type:"getCount"}

chrome.runtime.sendMessage(message,(response)=>{ //send a message, once the message is received, get the resoinse
  console.log("background script sent me this",response);
  counter=response;
  count.innerHTML=counter;
});

button.addEventListener("click",()=>{
  counter++;
  //let message="hi background"

  let message={
    type:"increaseCounter"
  }
  chrome.runtime.sendMessage(message);
  count.innerHTML=counter;
});
