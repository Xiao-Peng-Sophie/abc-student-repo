// let moveBox=document.getElementById('movemouse');
// function move(event){
//   let x=event.pageX;
//   let y=event.pageY;
//   moveBox.style.top=y+'px';
//   moveBox.style.left=x+'px';
// }
// moveBox.addEventListener("mousemove",move);
document.addEventListener("mousemove", (e)=>{
    console.log(e.pageX, e.pageY);
    document.getElementById("movemouse").style.left = e.pageX-250 +"px";
    document.getElementById("movemouse").style.top = e.pageY-250 +"px";
});
