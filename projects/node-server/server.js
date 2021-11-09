// console.log("hello !!!!!")
// let x=20;
// console.log(x*x)
const express = require('express')
const app = express()
const port=3000
let rt=0;

app.get('/',  (req, res)=>{
  rt++;
  console.log("someone requested /"+rt+"times");
  //res.send('Hello World') //send messages
  res.sendFile(__dirname + '/sophiePages/index.html');
})

app.get('/sophie',  (req, res)=>{
  rt++;
  console.log("someone requested /sophie");
  res.send('Hello Sophie')
})

app.listen(port,()=>{
  console.log(`Example app listening at http://localhost:${port}`)
})
