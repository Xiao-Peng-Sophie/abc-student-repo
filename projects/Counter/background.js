console.log("I'm a background script");
let counter=0;
chrome.storage.local.get(['counterInStorage'],function(result){
  console.log('Value currently is '+result.counterInStorage);
  counter=result.counterInStorage;
  if(result.counterInStorage==undefined){
    counter=0;
    chrome.storage.local.set({counterInStorage:counter},function(){
      console.log("Saved",counter,"to local storage.");
    })
  }

});


function handleMessage(request,sender,sendResponse){
  //console.log(request);
  if(request.type=="increaseCounter"){
    //increase local counter
    counter++;
    //increase counter in local storage
    chrome.storage.local.set({
      counterInStorage:counter
    },()=>{
      console.log("Saved",counter)
    });
  }
  else if (request.type=="getCount"){
    sendResponse(counter);
  }
  console.log("counter in background script",counter);

}

chrome.runtime.onMessage.addListener(handleMessage); //function reference, it is chrome who calls the function when receiving message!
