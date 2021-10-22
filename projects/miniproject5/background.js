// chrome.idle.setDetectionInterval(15);
//
// chrome.idle.onStateChanged.addListener((newState)=>{
//   console.log("STATE CHANGED", newState);
// })


let windows = [];

// chrome.windows.getAll({}, (currentWindows)=>{
//   for(let i = 0; i< currentWindows.length; i++){
//     windows.push({
//       id: currentWindows[i].id,
//       window: currentWindows[i]
//     })
//   }
//   console.log("windows", windows)
//
// })
//
// chrome.windows.onCreated.addListener((newWindow)=>{
//   windows.push({
//     id: newWindow.id,
//     window: newWindow
//   })
//   console.log("new window", windows)
// })
//
// chrome.windows.onRemoved.addListener((windowId)=>{
//   let idxToDelete = windows.findIndex(w => w.id == windowId);
//   windows.splice(idxToDelete, 1);
//   console.log("deleted window with id", windowId, windows)
// })


// when new tab is created
chrome.tabs.onCreated.addListener((tab)=>{
  console.log("newTab", tab);
  let windowId = tab.windowId;
  let windowIdx = windows.findIndex((window) => {
    return window.windowId == windowId
  });
  if(windowIdx == -1){
    // window didn't exist yet adding a new object into windows array
    windows.push({
      windowId: windowId,
      tabs: [tab]
    })
  }else{
    let windowObject = windows[windowIdx];
    windowObject.tabs.push(tab)
    windowObject.tabs.sort((tabA, tabB)=>{
      return tabA.index - tabB.index;
    })
  }
  console.log(windows);
})


function sortWindowTabs(windowId){
  let windowIdx = windows.findIndex((window) => {
    return window.windowId == windowId
  });
  if(windowIdx != -1){
    windowObject.tabs.sort((tabA, tabB)=>{
      return tabA.index - tabB.index;
    })
  }
}

// when tab is moved
chrome.tabs.onMoved.addListener((tabId, moveInfo)=>{
  console.log("tab moved", moveInfo);
  let windowId = moveInfo.windowId;
  sortWindowTabs(windowId)
})


// when tab is attached

// when tab is deleted

// // when last tab and whole window are deleted


let letters=["C","L","O","V","E","R"];

let counter = 0;
setInterval(()=>{
  for(let i = 0; i < windows.length; i++){
    let w = windows[i];
    console.log(w.windowId)
    let tabs = w.tabs;
    for(let j = 0; j<tabs.length; j++){
      let tab = tabs[j];
      console.log(tab)

      string = ""


      for(let g = 0; g<10;g++){

        if((g>=counter-1)&&(g<=counter+1)){

          string+=letters[j%letters.length]+"🎁";
        }else{
          string+="☘️";
        }
      }

      chrome.tabs.executeScript(tab.id, {
        code: `document.title = "`+string+`"`
      })



    }

     counter++;
    if(counter >10){
      counter = 0;
    }

    console.log("------")
  }
}, 500)
