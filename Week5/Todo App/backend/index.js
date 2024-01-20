const express = require('express');
const app = express();
const {createTodo, updateTodo} = require("./types");
const { todo } = require('./db');
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/todo", async (req,res)=>{
  const createPlayload = req.body;
  const parsedPayload = createTodo.safeParse(createPlayload);
  if(!parsedPayload.success){
    res.status(411).json({
      msg: "You sent the wrong inputs",
    })
    return;
  }
  //put it in mongoDB
  await todo.create({
    title : createPlayload.title,
    description : createPlayload.description,
    completed : false
  })
  res.json({
    msg : "Todo Is Created"
  })
});

app.get("/todos", async (req,res)=> {
  //get it from db
  const todos = await todo.find({});
  //conosle.log(todos); //promise, so need to await
  res.json({
    todos
  })
});

app.put("/completed", async (req,res)=>{
  const updatePlayLoad = req.body;
  const createPayload = updateTodo.safeParse(updatePlayLoad);
  if(!updatePlayLoad.success){
    req.status(411).json({
      msg: "You sent the wrong inputs",
    })
    return;
  }
  await todo.update({
    _id : req.body.id,
  }, {
    completed : true
  })
  res.json({
    msg : "todo marked is completed"
  })
});

app.listen((err)=>{
  if(err) console.log("Error in server running");
  console.log("Server Chl rhe bahut tezz");
}, 3030);