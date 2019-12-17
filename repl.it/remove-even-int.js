//remove all even ints in an array.
//remember that after removing one number from the array, the indexes of the next ints will decrease by 1;
// Solution 1: for loop
// function removeEvenInt(arr){
//   let len = arr.length;
//   if(len === 0) return arr;
//    for(let i = 0; i < len; i++){
//      if(arr[i] % 2 === 0) {
//        arr.splice(i, 1);
//        i = i - 1;
//      }
//    }
//    return arr;
// }


//Solution 2: filter method

  function removeEvenInt(arr){
    let len = arr.length;
    if(len === 0) return arr;
    const res = arr.filter(function(item){
      return item = item % 2 !== 0;
    }, []);

    return res;
  }

console.log(removeEvenInt([0, 2, 3, 5, 6, 8]));
console.log(removeEvenInt([-1, 0, 2, 3, 5, 6, 8]));
console.log(removeEvenInt([0]));