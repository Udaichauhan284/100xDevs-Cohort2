const fs = require('fs');

fs.readFile("file.txt", "utf-8", (err, data) => {
  if(err){
    console.log(err);
  }else{
  console.log(data);
  }
})

let res = 0
for(let i=0; i<1000000000; i++){
  res +=i;
}
console.log("After the Expensive task");