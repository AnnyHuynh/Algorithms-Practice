//Find the longest substring without repeating characters.
//Find the length. Should return a number.
//Naive Solution: Nested loop
//Better Solution: Hashmap
// function lengthOfLongestSubstring(check){
//     var letters = check.split("");
//     var max = 0;
//     for (var i = 0; i < letters.length; i++) {
//         var result = [];
//         var j = i;
//         for(;j < letters.length; j++) {
//             if (result.indexOf(letters[j]) === -1) {
//                 result.push(letters[j]);
//             } else {
//                 break;
//             }        
//         }
//         if(j - i > max) {
//             max = j - i;
//         }
//         console.log(result);
//     }
//     return max;
// }
// console.log(lengthOfLongestSubstring("abadecb"))
// console.log(lengthOfLongestSubstring("abab"))
// lengthOfLongestSubstring("adca")

function lengthOfLongestSubstring(str){
  var result = new Map ();
  var longestStr = 0;
  var strArr = str.split('');
  var len = strArr.length;
  var i = 0; j = 0;
  while(i < len && j < len){
    if(!result.has(strArr[j])){
      result.set(strArr[j], j);
      j++;
      longestStr = Math.max(longestStr, j-i)
    }else{
      result.delete(strArr[i])
      i++;
    }
  }
  return longestStr;
}
lengthOfLongestSubstring("anny")