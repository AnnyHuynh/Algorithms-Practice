//You are climbing a stair case. It takes n steps to reach to the top.
//Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//Note: Given n will be a positive integer.
//fibonacci
function climbStairs(n) {
  let map = {};
  if(n === 0)return 1;
  if(n >= 1 && n <= 3) return n;
  for (i = 4; i <= n; i++){
    if(map[i]){
      return map[i];
    }else{
      map[i] = climbStairs(i-1) + climbStairs(i-2)
    }
  }
  return map[n];
};
console.log(climbStairs(4));

// 1 2 3 4 5 => 12345 135 1245 1345 2345 245 235 35 

// var climbStairs = function(n) {
//   var W = [0, 1, 2];
//   for (var i = 3; i <= n; i++) {
//       W[i] = W[i - 2] + W[i - 1];
//   }

//   return W[n];
// };