//Implement a function that reverses a string using iteration...and then recursion!
// function reverseString(str) {
// if(str.length == 1){
//   return str;
// }
// var arr = str.split('');
// var arr2 = [];
// var len = arr.length;
// for(var i = len - 1; i >=0; i-- ){
//   arr2.push(arr[i]);
// }
// return arr2.join('');
// }

// reverseString('yoyo mastery')
// //should return: 'yretsam oyoy'

//*******recursion */

// function reverseString(str) {
//  if(str.length === 0){
//    return "";
//  }
//  return reverseString(str.substr(1)) + str.charAt(0);

// }

// reverseString('Anny Huynh')

//********Ternary recursion */

function reverseString(str) {
  return str === '' ? '' : reverseString(str.substr(1)) + str.charAt(0);
 }
 reverseString('big bang')