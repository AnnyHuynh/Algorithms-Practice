//check if two strs are permutation.
//use array sort method || use hash table

// function isPermutation(str1, str2) {
//   //if the length are not equal then they are not permutation strings
//   if (str1.length !== str2.length){
//     return false;
//   }
//   //convert strs to Array, then sort it, then convert the sorted array back to strs.
//   str1 = str1.split('').sort().join('');
//   str2 = str2.split('').sort().join('');
//   //compare two sorted strs, return false if they are not the same,and return true if they are the same. 
//   if(str1 !== str2){
//     return false;
//   }
//     return true;
// }
// isPermutation("catt", "ttca");
// // Time complexity of this solution is O(n)

function isPermutation(str1, str2) {
  //if two strs are not the same length then return false
  if (str1.length !== str2.length){
    return false;
  }
  // set a hash table named map
  let map = {};
  // Loop through the str1, and add each element in str1 to map table and assign values.
  for (var i = 0; i < str1.length; i++){
  if(!map[str1[i]]){
    map[str1[i]] = 1;
    }else{
    map[str1[i]] += 1;
  }
  }
  // loop through str2 and check if elements in str2 already exist in map table. If it does, minute the value of that element by one. If it doesn't exist in the map table which mean that element is not in str1, which mean the two strs are not permutation. 
  for (var j = 0; j < str2.length; j++){
  if(map[str2[j]]){
    map[str2[j]] -= 1;
  }else{
    return false;
  }
  }
  console.log(map)
  // Iterate through map table and check the value of each key. All values should be equal 0 to indicate that two strs are permutation. If value are not equal to 0 then return false. 
  Object.keys(map).forEach(function (key) { 
    if(map[key] >0){
      return false;
    }  
  })
  //return true if all value in map table equal 0
  return true;
}
console.log(isPermutation("catt", "tact"));
console.log(isPermutation("catt", "katt"));
isPermutation("catt", "ttca");

var permute = function(nums) {
    
  let hash = {};
  let len = nums.length;
  
  let helper = (starter, numbers) => { return numbers.filter((num) => num !== starter)};
  
  for (let i = 0; i < len; i++){
      const numsArr = helper(nums[i], nums);
      console.log(numsArr);
      console.log(nums[i]);
    
      if(!hash[i]){
          hash[i] = [[nums[i], ...numsArr], [nums[i], ...numsArr.reverse()]];
          console.log(hash[i]);
      }
  }
  
  const result = Object.values(hash);
  return result;
  
};

console.log(permute([1,2,3]));