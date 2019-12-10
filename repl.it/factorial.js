//Write two functions that find the factorial of any number. One should use recursive. The other one should just use for loop. //Both has O(n)

// function findFactorialIterative (n){
//   var res = 1;
//   if(i === 2){
//     return res = 2;
//   }
//   for (var i = 2; i <= n; i++){
//     res = res * i;
//   }
//   return res;
// }
// findFactorialIterative(5);

function findFactorialRecursive (n){
  if(n === 2){
    return 2;
 }
  return n * findFactorialRecursive(n-1);
}
findFactorialRecursive(4);
//O(n) because the # of recursive functions equal to the number of n. 