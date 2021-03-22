// CTCI: 1.1 implement an algorithm to determine if a string has all unique characters

// 1. Assume that the string is an ASCII. Solution below has time: O(n) and space O(1). Since the string should not has more than 128 chars, it doesn't cost that much space. 
function isUnique(str) {
  if(str.length > 128) return false;

  let obj = {};

  for (let z = 0; z < str.length; z++) {
    if (obj[str[z]]) return false;
    obj[str[z]] = true;
  }

  return true;
}

console.log(isUnique("abcdefgh")); 
console.log(isUnique("aa"));

// 2. Assume that the string is a Unicode string.

let encodeArr = new Array(255).fill(false);

function isStringUnique(str){
  for (let i in str){
    if(encodeArr[i.charCodeAt(0)] == true){
      return false;
    }
    encodeArr[i.charCodeAt(0)] = true;
  }

  return true;
}

console.log(isStringUnique("abcdefgh"));
console.log(isStringUnique("aa"))





