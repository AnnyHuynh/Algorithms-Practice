//https://leetcode.com/problems/sort-colors/
//Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
//Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
//Input: [2,0,2,1,1,0]
//Output: [0,0,1,1,2,2]
//Counting indexes solution:
function sortColor(arr){
  let len = arr.length;
  if(len === 0 || len === 1) return;
  let countArr = new Array(3); //length is 3 because we know number in arr is 0-2
  countArr.fill(0);
  let len2 = countArr.length;
  let resultArr = [];
  for(let i = 0; i < len; i++){
    countArr[arr[i]] += 1;
  }
  for(let j = 0; j < len2; j++){
    for(let k = 0; k < countArr[j]; k++){
      resultArr.push(j);
    }
  }
return resultArr;
}
console.log(sortColor([2,0,2,1,1,0]));