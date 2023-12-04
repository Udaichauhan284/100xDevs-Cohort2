/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let string1 = str1.toLowerCase();
  let string2 = str2.toLowerCase();
  let count = {};
  if(string1.length !== string2.length) {
    return false;
  }
  for(let i=0; i<string1.length; i++){
    if(!count[string1[i]]) count[string1[i]] = 0;  //here i am checking if str[i] is there in count or not, if no - 0 else ++
    if(!count[string2[i]]) count[string2[i]] = 0;
    count[string1[i]]++;
    count[string2[i]]--;
  }
  for(let ch in count){
    if(count[ch] !== 0) return false;
  }
  return true;
}

module.exports = isAnagram;
