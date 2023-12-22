const express = require('express');
const app = express();

app.use(express.json());

function userMiddleWare(req,res,next){
  const username = req.headers.username;
  const passowrd = req.headers.password;

  if(username!= "udai" || passowrd!="pass"){
    res.status(403).json({
      msg: "Incorrect Users Details"
    });
  }else{
    next();
  }
}

function kidneyMiddleWare(req,res,next) {
  const kidneyId = req.query.kidneyId;
  if(kidneyId !=1 && kidneyId!=2){
    res.status(403).json({
      msg: "Inncorect Inputs"
    });
  }else{
    next();
  }
};

app.get('/health-checkup',userMiddleWare,kidneyMiddleWare, (req,res) =>{
  res.send("Your health is good");
})
app.get('/kidney-checkup', userMiddleWare, kidneyMiddleWare, (req,res) =>{
  res.send("Your kidney is Fine");
});
app.get('/heart-checkup',userMiddleWare,(req,res) =>{
  res.send("Your heart is also fine");
});

app.listen(3030, ()=>{
  console.log("server chl rha bahut tejj");
})