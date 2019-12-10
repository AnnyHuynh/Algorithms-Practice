//Write a method that takes a collection of integers and returns the one with the greatest value.
// For Loop || reduce method || Math.max()

// function greatestValue (input){
//   var greatestNum = 0;
//   let len = input.length;
//   if(len === 0){
//     return "there is no value to compare"
//   }
//   for (var i = 0; i < len; i++){
//     if (input[i] > greatestNum){
//       greatestNum = input[i];
//     }
//   }
//   return greatestNum;
// }
// greatestValue([9,9,9,1,8,8]);


// function greatestValue (input){
//   var greatestNum = input.reduce((largest, current)=> {
//       return largest > current ? largest : current;
//   }, 0)
//   return greatestNum;
// }
// greatestValue([9,9,9,1,0,8]);

function greatestValue (input){
  return Math.max.apply(null, input);
}
greatestValue([9,4,9,1,0,8]);