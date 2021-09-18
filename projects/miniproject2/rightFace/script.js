
let rightFace=document.getElementById("rightFace");

let rightFaces=["rightFace0.png","rightFace1.png","rightFace2.png","rightFace3.png","rightFace4.png"];


function sliderChange(c){

  rightFace.innerHTML= "<img src="+rightFaces[c]+" id='RF'"+"width=100%>";

}
