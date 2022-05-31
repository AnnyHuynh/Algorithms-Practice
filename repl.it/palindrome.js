//Check if input string n is a palindrome.
//use reverse Array method || two pointers. 
//https://medium.com/@stevenpaulino1/algorithm-palindrome-6d0763c2f47c

function isPalindrom(n){
  // let reverseN = n.split('').reverse().join('');
  // if(n === reverseN) return true;
  // return false;
  let arrN = n.split('');
  let len = arrN.length;
  for (let i = 0; i < len/2; i++){
    if(arrN[i] !== arrN[len - i - 1]){
      return false;
    }
  }
  return true;
}
isPalindrom("wow");