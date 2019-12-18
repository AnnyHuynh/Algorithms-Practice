//https://leetcode.com/problems/longest-palindromic-substring/
//Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
//Example 1: Input: "babad"  Output: "bab" Note: "aba" is also a valid answer.
//Example 2: Input: "cbbd"   Output: "bb"

//Shorter Solution from Leetcode: 
// var longestPalindrome = function(s) {
//   let res = "";
//   let cur = "";
//   for(let i = 0; i < s.length; i ++){
//       for(let j = i; j < i + 2; j ++){
//           let left = i;
//           let right = j;
//           while(s[left] && s[left] === s[right]){
//               cur = s.substring(left, right + 1);
//               if(cur.length > res.length) res = cur;
//               left --;
//               right ++;
//           }
//       }
//   }
//   return res;
// };




function longestPalSubstr(s){
  let len = s.length;
  if(len === 0) return "No Pal Substr";
  if(len === 1) return s;
  if(len === 2){
    if(s.charAt(0) === s.charAt(1))return s;
    if(s.charAt(0) !== s.charAt(1)) return s.charAt(0);
  }
  let maxLenStr = "";
  let curr = "";
  let i = 1;
  for(i; i < len; i++){
    let left = i - 1;
    let right = i + 1;
    while(s.charAt(left) === s.charAt(right)){
      curr = s.substring(left, right + 1);
      maxLenStr = maxLenStr.length > curr.length ? maxLenStr : curr;
      left--;
      right++;
    }
    if(s.charAt(left) === s.charAt(i)){
      curr = s.substring(left, i + 1);
      maxLenStr = maxLenStr.length > curr.length ? maxLenStr : curr;
    }
    if(s.charAt(i) === s.charAt(right)){
      curr = s.substring(i, right + 1);
      maxLenStr = maxLenStr.length > curr.length ? maxLenStr : curr;
    }
  }
  return maxLenStr;
}

console.log(longestPalSubstr('babad'));
console.log(longestPalSubstr('cbbd'));
console.log(longestPalSubstr(''));
console.log(longestPalSubstr('d'));