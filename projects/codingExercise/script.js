//
//document.getElementById("boxContainer").style.backgroundColor = "black";
//


function manySquares(){
  // 1. clear out the container
  document.getElementById("boxContainer").innerHTML="";

  // 2. add the right amount of boxes
  let numBoxes = document.getElementById("numberInput").value;
  for(let i=0; i<numBoxes ; i++){
    let box = document.createElement("div");
    box.className = 'box';
    document.getElementById("boxContainer").appendChild(box);
  }
}
