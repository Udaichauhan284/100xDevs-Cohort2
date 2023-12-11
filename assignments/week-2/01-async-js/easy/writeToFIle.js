// const fs = require("fs");

// const content = "This is the content to write inside the file, using the writeToFile program."

// fs.writeFile("file.txt", content, "utf-8", (err) => {
//   if(err){
//     console.error("Error while writing the content in file ", err);
//   }
//   else{
//     console.log("Successfully written");
//   }
// });

//writing this program using Promise - then and catch
// const fs = require("fs").promises;
// const content = "This is writing inside file, using promises then and catch";

// fs.writeFile("file.txt", content, "utf-8")
//   .then(() => {
//     console.log("Successfully written");
//   })
//   .catch((err) => {
//     console.log("Some Error occur while writing ", err);
//   });


//writing in file using Async and Await
const fs = require("fs").promises;

async function writingFileSync(){
  const content = "This is a content written in file, using Async and Await";
  try{
    await fs.writeFile("file.txt", content, "utf-8");
    console.log("SuccessFully Written");
  }catch(err){
    console.error("Error occur while writing the content", err);
  }
}
writingFileSync();