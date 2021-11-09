
// function receivedTabsFromChrome(tabs){
//   let currentTab=tabs[0];
//   chrome.tabs.sendMessage(currentTab.id,  {type: "buttonPressed", buttonIndex: 0} );
// }
//
// chrome.tabs.query({active:true, currentWindow:true},receivedTabsFromChrome);
//
//
// chrome.tabs.sendMessage(currentTab.id,  {type: "replaceWords", find: "...", repl:"..."} );



// function receivedTabsFromChrome(tabs){
//   let currentTab=tabs[0];
//   chrome.tabs.sendMessage(currentTab.id,  {type: "buttonPressed"} );
// }





window.resizeTo(400,400);

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
