
let rightEye=document.getElementById("rightEye");

let rightEyes=["rightEye0.png","rightEye1.png","rightEye2.png","rightEye3.png","rightEye4.png"];


function sliderChange(c){

  rightEye.innerHTML= "<img src="+rightEyes[c]+" width=100%>";

}
