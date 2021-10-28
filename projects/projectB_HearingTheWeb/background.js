console.log('background running!!!!');


function handleMessage(request,sender,sendResponse){
  console.log("got message!!!!!!!");
  console.log("now it is:",request);
  //let w=request.value;

  //let words=w.split(" ");
//  console.log("wordsss:",words);
  //let w1=words[0];
  let s=request.content;
  chrome.tts.speak(s);

  sendResponse();


}

chrome.runtime.onMessage.addListener(handleMessage); //function reference, it is chrome who calls the function when receiving message!
