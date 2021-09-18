
let mouth=document.getElementById("mouth");

let mouths=["mouth0.png","mouth1.png","mouth2.png","mouth3.png","mouth4.png"];


function sliderChange(c){

  mouth.innerHTML= "<img src="+mouths[c]+" width=100%>";

}
