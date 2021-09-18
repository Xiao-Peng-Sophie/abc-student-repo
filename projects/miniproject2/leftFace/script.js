
let leftFace=document.getElementById("leftFace");

let leftFaces=["leftFace0.png","leftFace1.png","leftFace2.png","leftFace3.png","leftFace4.png"];


function sliderChange(c){

  leftFace.innerHTML= "<img src="+leftFaces[c]+" id='LF'"+"width=100%>";

}
