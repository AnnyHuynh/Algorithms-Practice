//https://leetcode.com/problems/sort-colors/
//Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
//Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
//Input: [2,0,2,1,1,0]
//Output: [0,0,1,1,2,2]
//Two pointers Solution
function colorSort(arr){
  let len = arr.length;
  if(len === 0 || len === 1) return;
  let start = 0, end = len - 1, i = 0;
  while(i <= end && start < end){
    if(arr[i] === 0){
      arr[i] = arr[start];
      arr[start] = 0;
      start++;
      i++;
    }else if(arr[i] === 2){
      arr[i] = arr[end];
      arr[end] = 2;
      end--;
    }else{
      i++;
    }
  }
  return arr;
}
console.log(colorSort([2,0,2,1,1,0]));