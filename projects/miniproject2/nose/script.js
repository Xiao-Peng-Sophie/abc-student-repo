
let nose=document.getElementById("nose");

let noses=["nose0.png","nose1.png","nose2.png","nose3.png","nose4.png"];


function sliderChange(c){

  nose.innerHTML= "<img src="+noses[c]+" width=100%>";

}
