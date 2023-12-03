// console.log("Hello World, from 100xDevs");
// let fname = "Udai";
// let lname = "Chauhan";
// console.log("Hello Sir " + fname + " " + lname + " Good Eevening");


//Finding Biggest Age
// const ages = [19,20,17,81,24, 54, 21];
// let maxAge = Number.MIN_SAFE_INTEGER;
// for(let age of ages){
//   if(age > maxAge){
//     maxAge = age;
//   }
// }
// console.log(maxAge);

//Find even number in array
// const number = [2,3,4,66,78,10];
// const evenNum = [];
// for(let num of number){
//   if(num % 2 === 0){
//     evenNum.push(num);
//   }
// }
// console.log(evenNum);

//Reverse all the number 
let number = [2,3,4,66,78,10];
console.log("Reverse of Array")
for(let num = number.length-1 ; num >= 0 ; num--){
  console.log(number[num]);
}