let on=document.getElementById('on');
let off=document.getElementById('off');



let context=new AudioContext();
let destination=context.destination;

let oscillator=context.createOscillator();
oscillator.frequency.value=400;

let gain=context.createGain();

oscillator.connect(gain);
gain.connect(destination);

let s=false
on.addEventListener("click",()=>{
  if(s==false){
  oscillator.start(0);
  s=true;

}
gain.gain.value=1;
})

off.addEventListener("click",()=>{
  gain.gain.value=0;
})
