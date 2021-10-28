
let title=document.getElementById("title");
let testText=document.getElementById("text01");

title.addEventListener("mouseover",()=>{
  chrome.tts.speak("Welcome to Sophie's parasite project");
})
let text1=testText.innerHTML;

testText.addEventListener("mouseover",()=>{
  chrome.tts.speak(text1);
})
