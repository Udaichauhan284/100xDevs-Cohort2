const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get("/sum" , (req,res) =>{
  const num1 = +req.query.num1;
  const num2 = +req.query.num2;
  const sum = num1+num2;
  res.send(sum.toString());
});

app.get("/interset", (req,res) =>{
  const principal = +req.query.principal;
  const rate = +req.query.rate;
  const time = +req.query.time;

  const interset = (principal * rate * time)/100
  const total = interset + principal;

  res.send({
    total : total,
    interset : interset
  })
});

app.listen(3030, ()=>{
  console.log("Server Chl rhe bahut tejj");
})