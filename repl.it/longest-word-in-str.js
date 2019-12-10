//Return the length of the longest word in the provided sentence. Respond should be a number. 
// For loop || Sort() || reduce method. 

// var str = "Im the tall girl"
// //result shoudl be 7.

// function findLongestWord (str){
//   var res = 0;
//   var arr1 = str.split(' ');
//   console.log(arr1);
//   for (var i = 0; i < arr1.length; i++){
//     if(arr1[i].length > res){
//       res = arr1[i].length; 
//     }
//   }
//   return res; 
// }
// findLongestWord(str);

// function findLongestWord (str){
//   var splitArr = str.split(' ');
//   var resArr = splitArr.sort((a, b)=>           b.length - a.length
//   )
//   return resArr[0].length;
// }
// findLongestWord("Im the tallest!")

function findLongestWord (str){
  var splitArr = str.split(' ');
  var longestWord = splitArr.reduce((longest, current)=>{
    if(current.length > longest.length){
      return current;
    }else{
      return longest;
    }
    }, "")
  return longestWord.length;
}
findLongestWord("Im the tallest!")