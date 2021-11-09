function receivedTabsFromChrome(tabs){
  let currentTab=tabs[0];
  chrome.tabs.sendMessage(currentTab.id,  {type: "buttonPressed", buttonIndex: 0} );
}

chrome.tabs.query({active:true, currentWindow:true},receivedTabsFromChrome);


chrome.tabs.sendMessage(currentTab.id,  {type: "replaceWords", find: "...", repl:"..."} );
