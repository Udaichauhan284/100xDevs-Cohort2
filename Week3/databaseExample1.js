const mongoose = require('mongoose');
const express = require('express');
const app = express();
mongoose.connect(process.env.MONGO_URL);


// const User = mongoose.model('Users', {
//   name : String,
//   email: String,
//   password : String
// });

// const user = new User({
//   name : "Udai Chauhan",
//   email : "udai@gmail.com",
//   password : "123321"
// });
// user.save();

//Making a method for signup
//First create a Model
const User = mongoose.model('Users', {
  name : String,
  email: String,
  password : String
})

app.use(express.json());
//now API endpoints
app.post('/signup', async (req, res) =>{
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({email : username});
  if(existingUser){
    res.status(403).json({
      msg : "Username Already Exists"
    });
  }
  const user = new User({
    name : name,
    email : username,
    password : password
  });
  res.status(201).json({
    msg : "User Created Successfully"
  });
  user.save();
  
})

app.listen(3030, ()=>{
  console.log('Server chl rha bahut tejj');
})