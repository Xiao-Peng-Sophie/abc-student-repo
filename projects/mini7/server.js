const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);



let users=[];
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected',socket.id);
  users.push(socket.id);
  io.emit("users",users);

  socket.on('disconnect', () => {
    console.log('user disconnected',socket.id);
    for(let i=users.length-1;i>=0;i--){
      if(socket.id==users[i]){
        users.splice(i,1);
        io.emit("users",users);
      }
    }
    console.log("# of users: ",users);
  });
  socket.on("message",(data)=>{
    console.log(data);
    io.emit("incoming",data);
  });

  socket.on("message2",(data)=>{
    //console.log(data);
    io.emit("incoming",data);
  });

  socket.on("redColor",(data)=>{
    //console.log(data);
    io.emit("Rvalue",data);
  });

  socket.on("greenColor",(data)=>{
    //console.log(data);
    io.emit("Gvalue",data);
  });

  socket.on("blueColor",(data)=>{
    //console.log(data);
    io.emit("Bvalue",data);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
