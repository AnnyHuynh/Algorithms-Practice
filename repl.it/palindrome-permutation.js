//Given a string, determine if a permutation of the string could form a palindrome.
//Test cases: 
//Input: "code" Output: false
//Input: "aab" Output: true
//Input: "carerac" Output: true

function isPerPal(str){
  if(str.length === 0)return false;
  let map = {};
  let charCount = 0;
  for (var i = 0; i < str.length; i++){
    let c = str[i];
    if(c === ' '){continue};
    if(map[c]){
      delete map[c];
    }else{
      map[c] = 1;
    }
    charCount++;
  }
  console.log(charCount)
  console.log(map);
  if(charCount % 2 === 0){
    return Object.keys(map).length === 0;
  }else{
    return Object.keys(map).length === 1;
  }
}

console.log(isPerPal("code") === true);
console.log(isPerPal("aab") === true);
console.log(isPerPal("care rac") === true);
console.log(isPerPal("aabbcc") === true);