// 1.3 - URLify: Cracking the coding interview (https://www.youtube.com/watch?v=hSyou9MycTA)

// Write a method to replace all spaces in a string with '%20'.  You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string. 
// (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)

// EXAMPLE
// Input: 'Mr John Smith ', 13
// Output: 'Mr%20John%20Smith'

const urlify = (s, n = s.length) => {
  let out = '';
  let chars = 0;

  for (let i = 0; i < s.length; i++){
    if(s[i] !== ' '){
      chars++;
    }
  }

  let spaces = n - chars;

  for (let j = 0; j < s.length; j++){
    if(s[j] === ' ' && spaces > 0){
      out += '%20';
      spaces--;
    }else if(s[j] !== ' '){
      out += s[j]
    }
  }

  while(spaces > 0){
    out += '%20';
    spaces--;
  }

  return out; 
}

console.log(
urlify('Mr John Smith ', 13) === 'Mr%20John%20Smith', 
urlify('Mr%20John%20Smith') === 'Mr%20John%20Smith',
urlify('Mr John Smith ', 14) === 'Mr%20John%20Smith%20',
urlify('     hi', 7),
urlify('       hi ', 3) === '%20hi',
urlify('', 0) === '',
urlify('', 3) === '%20%20%20',
urlify('hel lo', 5) === 'hello'
)

