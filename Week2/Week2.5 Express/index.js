const express = require("express");

const app = express();

// function sum(n){
//   let ans = 0;
//   for(let i=1; i<=n; i++){
//     ans += i;
//   }
//   return ans;
// }
// app.get("/", (req,res)=>{
//   const n = req.query.n;
//   const ans = sum(n);
//   res.send(`<h1>Your ans is ${ans} </h1>`)
// })
const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];
app.use(express.json());
app.get("/", (req, res) => {
  const userKidney = users[0].kidneys;
  const numOfKidney = userKidney.length;
  let numOfHealthyKidney = 0;
  for (let i = 0; i < numOfKidney; i++) {
    if (userKidney[i].healthy) {
      numOfHealthyKidney++;
    }
  }
  let numoOfUnhealthyKidney = numOfKidney - numOfHealthyKidney;

  res.send({
    numOfKidney,
    numOfHealthyKidney,
    numoOfUnhealthyKidney,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

function isThereAtLeastOneUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney;
}
app.delete("/", (req, res) => {
  if (isThereAtLeastOneUnhealthyKidney()) {
    let newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i]) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "done" });
  }else{
    res.status(411).json({
      msg: "You dont have no bad kidneys"
    });
  }
});
app.listen(3030);
