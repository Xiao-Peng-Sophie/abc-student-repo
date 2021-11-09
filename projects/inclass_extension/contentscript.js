console.log("hello");

function repl(find, replace){
  let finder= new RegExp(find,"g");
  document.body.innerHTML=document.body.innerHTML.replace(finder,replace);


}
function gotMessage(request, sender,sendResponse){
  console.log(request);
  let findWord=request.find;
  let replaceWord=request.replace;
  repl(findWord,replaceWord);
  if(request.type == "buttonPressed" && request.buttonIndex == 0){
    // makes things move
  }else if(request.type == "buttonPressed" && request.buttonIndex == 1){
    // color things randomly
  }else if(request.type == "replaceWords"){
    // replaces words with
    request.find...
    request.repl...
  }

}
chrome.runtime.onMessage.addListener(gotMessage);
// setTimeout(()=>{repl("browser","#");
// },3000);
