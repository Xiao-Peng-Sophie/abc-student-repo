
let leftEye=document.getElementById("leftEye");


let leftEyes=["leftEye0.png","leftEye1.png","leftEye2.png","leftEye3.png","leftEye4.png"];


function sliderChange(c){

  leftEye.innerHTML= "<img src="+leftEyes[c]+" width=100%>";

}
