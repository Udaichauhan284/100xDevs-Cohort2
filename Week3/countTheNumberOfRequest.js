const express = require('express');

const app = express();

app.use(express.json());

let numberOfReq = 0;

app.get('/calculate', (req,res) =>{
  numberOfReq++;
  console.log(numberOfReq);

  res.status(201).json({
    msg : "Request DONE",
    numberOfReq : numberOfReq
  });
})
app.listen(3030, ()=>{
  console.log("Server is listening to 3030");
})