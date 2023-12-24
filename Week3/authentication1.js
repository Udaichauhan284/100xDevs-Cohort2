const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = "123456";

const app = express();

const ALL_USERS = [
  {
    username : "udai@gmail.com",
    password : "123",
    name : "Udai Chauhan"
  },
  {
    username : "raman@gmail.com",
    password : "123321",
    name : "Raman Kumar"
  },
  {
    username : "john@gmail.com",
    password : "123321",
    name : "John Singh"
  }
];

function userExists(username, password){
  let userExist = false;
  ALL_USERS.find((user) =>{
    if(user.username === username && user.password === password){
      userExist = true;
    }
  })
  return userExist;
}

app.post("/signup", (req,res)=>{
  const username = req.body.username;
  const password = req.body.password;

  if(!userExists(username,password)){
    return res.status(403).json({
      msg : "User doesnt exist in our DB",
    });
  }

  let token = jwt.sign({username : name}, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", (req,res)=>{
  const token = req.headers.authorization;
  try{
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    //return a list of all username
    res.json(ALL_USERS);

    //return a list of all username except
    const otherUser = ALL_USERS.filter((user) => user.username != username)
    res.json(otherUser);
  }catch(err){
    return res.status(403).json({
      msg : "Invalid Token",
    });
  }
})

app.listen(3030, ()=>{
  console.log("Server Chl rha bahut tejj");
})