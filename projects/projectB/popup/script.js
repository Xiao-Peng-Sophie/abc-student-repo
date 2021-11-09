let t=document.getElementById("test01");
let title=document.getElementById("title");
let testText=document.getElementById("text01");
t.addEventListener("click",()=>{
  chrome.tts.speak("hello");
})
title.addEventListener("mouseover",()=>{
  chrome.tts.speak("this is a test for project B");
})
let text1=testText.innerHTML;

testText.addEventListener("mouseover",()=>{
  chrome.tts.speak(text1);
})
