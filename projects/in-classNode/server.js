const express = require('express')
const app = express()
const port=3000

function ifSomeoneAskForRoot(req,res){
  console.log(req);
  res.send("hellooo")
}
app.get('/',ifSomeoneAskForRoot)

app.get('/',(req,res)=>{
  res.send('Hello World!')
})

app.get('/something',(req,res)=>{
  res.send("Ohhhhh")
})

app.listen(port,()=>{
  console.log(`Example app listening at http://localhost:${port}`)
})
