const express = require('express');
const app = express();
const {createTodo, updateTodo} = require("./types");

app.use(express.json());

app.post("/todo", (req,res)=>{
  const createPlayload = req.body;
  const parsedPayload = createTodo.safeParse(createPlayload);
  if(!parsedPayload.success){
    res.status(411).json({
      msg: "You sent the wrong inputs",
    })
    return;
  }
});

app.get("/todo", (req,res)=> {

});

app.put("/completed",(req,res)=>{
  const updatePlayLoad = req.body;
  const createPayload = updateTodo.safeParse(updatePlayLoad);
  if(!updatePlayLoad.success){
    req.status(411).json({
      msg: "You sent the wrong inputs",
    })
    return;
  }
});

app.listen(()=> {
  console.log("Server chl rha bahut tej");
}, 3030);