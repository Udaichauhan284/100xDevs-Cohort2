const express = require('express');

const app = express();

app.use(express.json());

app.get('/health-checkup', (req,res) =>{
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send("You have " + kidneyLength + " kidneys");
})

/*Global catches help you give the user a
Better error message */
app.use((err,req,res, next) =>{
  res.json({
    msg: "Something is wrong with your inputs"
  });
})

app.listen(3030, ()=>{
  console.log("Server is Running Good");
})