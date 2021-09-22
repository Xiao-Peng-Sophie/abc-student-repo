let moveBox=document.getElementById('movemouse');
function move(event){
  let x=event.pageX;
  let y=event.pageY;
  moveBox.style.top=y+'px';
  moveBox.style.left=x+'px';
}
moveBox.addEventListener("mousemove",move);
