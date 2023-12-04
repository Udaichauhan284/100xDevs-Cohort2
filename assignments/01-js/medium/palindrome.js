/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let mainStr = str.toLowerCase();
  let len = mainStr.length;
  if(len<=1) return true;
  
  for(let i=0 ; i < Math.floor(len/2) ; i++){
    if(mainStr[i] === mainStr[len - 1 - i]) return true;
  }
  return false;
}

module.exports = isPalindrome;
