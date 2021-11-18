console.log("!!!!!!")

let socket=io();

// let namebox=document.getElementById('name');
// let chatbox=document.getElementById('chat');
// let messagebox=document.getElementById('message');
// let sendbutton=document.getElementById('send');

// let slider1=document.getElementById('slider1');
// let flower=document.getElementById('flower');
// let shit=document.getElementById('shit');
// let finger=document.getElementById('finger');

let spiral=document.getElementById('spiral');



let r=document.getElementById('r');
let g=document.getElementById('g');
let b=document.getElementById('b');



//document.body.style.backgroundColor = "rgb("+r.value+","+g.value+","+b.value+")";





// sendbutton.addEventListener("click",()=>{
//   console.log("click!");
//   let name=namebox.value.trim();
//   if(name.trim()==""){
//     name="anonymous";
//   }
//
//   let message=messagebox.value.trim();
//   //console.log(message);
//   if(message!=""){
//     let data={name:name, message:message}
//     socket.emit('message',data); //send out the message
//
//     console.log(data);
//   }
//   messagebox.value="";
//
//
//   //console.log("name is: ",name);
// })

// slider1.addEventListener("input",()=>{
//   let data={sliderValue:slider1.value}
//   socket.emit('message2',data);
//
// })

r.addEventListener("input",()=>{
  let data={red:r.value}
  socket.emit('redColor',data);

})

g.addEventListener("input",()=>{
  let data={green:g.value}
  socket.emit('greenColor',data);

})
b.addEventListener("input",()=>{
  let data={blue:b.value}
  socket.emit('blueColor',data);

})

socket.on("incoming",(data)=>{
  console.log(data);
  // let name=data.name;
  // let message=data.message;

  //let sliderV=data.sliderValue;

  // let li=document.createElement("li");
  // let p=document.createElement("p");
  // p.innerHTML="<span class='semder'>"+name+":</span> "+message;
  //slider1.value=sliderV;
  //flower.style.fontSize=150+sliderV*2+"px";
  // li.appendChild(p);
  // chatbox.appendChild(li);
})

socket.on("users",(data)=>{
  console.log("*********");
  console.log(data);
  let n=data.length;
  //shit.style.fontSize=50*n+"px";

//finger.style.animationDuration = 1+n*2+"s";
if(n<=7){
spiral.style.animationDuration = 4-n*0.7+"s";
}
else{
  spiral.style.animationDuration = "0.5s";

}


spiral.style.width=45+n*4+"vw";


})

socket.on("Rvalue",(data)=>{
  console.log("!!!!!*********");
  console.log(data.red);
  r.value=data.red;
  // g.value=data.green;
  // b.value=data.blue;
  document.body.style.backgroundColor = "rgb("+data.red+","+g.value+","+b.value+")";


})

socket.on("Gvalue",(data)=>{
  console.log("!!!!!*********");
  console.log(data.green);
  g.value=data.green;
  // g.value=data.green;
  // b.value=data.blue;
  document.body.style.backgroundColor = "rgb("+r.value+","+data.green+","+b.value+")";


})

socket.on("Bvalue",(data)=>{
  console.log("!!!!!*********");

  b.value=data.blue;
  // g.value=data.green;
  // b.value=data.blue;
  document.body.style.backgroundColor = "rgb("+r.value+","+g.value+","+data.blue+")";


})
document.body.style.backgroundColor = "rgb("+r.value+","+g.value+","+b.value+")";
