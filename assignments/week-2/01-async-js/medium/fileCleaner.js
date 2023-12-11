const fs = require('fs');

fs.readFile("file.txt", "utf-8" , (err, data) =>{
  if(err){
    console.log("Error Occur while reading the file ", err);
  }else{
    let newData = data.split(' ').filter(Boolean).join(' '); //here filter will return true for non empty spaces
    console.log(newData);
  }
})
console.log("Data Read Successfully");