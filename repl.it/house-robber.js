//You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
//Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

function maxMoney(count, n) {
  //these conditions below are to prevent loop, and to return value faster if count is <= 2
  if(count === 0) return 0;
  if(count === 1) return n[0];
  if(count === 2) return Math.max(n[0], n[1]);
  
  //store maxMoney values to this map array. 
  var map = [];
  map[0] = n[0];
  map[1] = Math.max(n[0], n[1]);
  var len = n.length;
  for(var i = 2; i < len; i++) {
      map[i] = Math.max(n[i] + map[i - 2], map[i - 1]);
  }
  //when it get to the last index, return the maxMoney value of it. 
  return map[count - 1];
}

console.log(maxMoney(4, [4,3,1,2])); // maxMoney is 6
maxMoney(5, [4,5,9,2,1]); // maxMoney is 14