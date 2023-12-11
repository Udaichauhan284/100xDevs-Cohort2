//creating counter without using the setInternal
let counter = 0;
function counterFunc(){
  counter++;
  console.log(counter);
  setTimeout(counterFunc,1000);
}
counterFunc();