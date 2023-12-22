const express = require('express');
const app = express();

function userMiddleWare(username, password){
  if(username!= "udai" || password!="pass"){
    return false;
  }
  return true;
}
function kidneyValidation(kidneyId){
  if(kidneyId !=1 && kidneyId !=2){
    return false;
  }
  return true;
}
app.use(express.json());
app.get('/health-checkup', function(req,res){
  

  if(!userMiddleWare(req.headers.username, req.headers.password)){
    res.status(403).json({
      msg: "User doesnt exist",
    });
    return;
  }else{
    res.status(201).json({
      msg: "User exist"
    })
  }
})

app.get('/kidney-checkup', (req,res)=>{
  const kidneyId = +req.query.kidneyId;
  if(!kidneyValidation(kidneyId)){
    res.status(403).json({
      msg: "Wrong Inputs"
    });
  }else{
    res.status(201).json({
      msg: "You are healthy"
    })
  }
})
app.listen(3030);
