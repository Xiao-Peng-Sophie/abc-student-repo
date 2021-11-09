


let mirror=document.getElementById("mirror");
//mirror.addEventListener("click",test);
let value=0;

mirror.addEventListener("click",()=>{

  chrome.tabs.query({active:true, currentWindow:true},function (tabs){
    value=value+1;
    let currentTab=tabs[0];
    
    chrome.tabs.sendMessage(currentTab.id,  {type: "buttonPressed",value:value} );
  }
  );

});
