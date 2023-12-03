//Assignment 1 - of JS Fundamental 3/dec/2023

//Question 1. create a countdown from 30 to 0
// for(let i = 30; i >=0; i--){
//   console.log("Timer : " + i);
// }

//Question 2. Calculate the time it takes between a setTimeout call and the inner function actually running
//so here as we see we giving 3ms time to excute setTimeout but still it is taking 3001 time.
// console.log("Start");
// let initialTime = new Date().getTime();
// setTimeout(()=>{
//   console.log("Inside the Settimeout function ");
//   let endTime = new Date().getTime();
//   let totalTime = Math.round(endTime - initialTime);
//   console.log("Total Time taken " + totalTime);
//   console.log("End");
// },3000);

//Question 3. Create a terminal clock (HH:MM:SS)
//setInterval take function, and time(second) after which you want to repeat this task, as here we are creating a termnial clock, so 1000ms
setInterval(() => {
  let time = new Date().toLocaleTimeString(); //this is function to print time in HH:MM:SS format
  console.log(time); //printing time here
},1000);

