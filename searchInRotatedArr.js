//Given a sorted array of n integers that has been rotated an unknown number of times, write code to find an element in the array. You may assume that the array was originally sorted in increasing order. 
//example: input: find 5 in [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14] --> output: 8 (the index of 5 in the array)
//if n doesn't exist in the array then return -1;
function findPeak(array, l = 0, h = array.length){
  let midIndex = Math.floor((h + l)/2);
  while(array[midIndex - 1] > array[midIndex]|| array[midIndex + 1] > array[midIndex]){
    array[0] > array[midIndex] ? (h = midIndex) : (l = midIndex);
    midIndex = Math.floor((h + l)/2);
  }
    return midIndex;
  }

function binarySearch(array, t, l = 0, h = array.length){
  let midIndex = Math.floor((h + l)/2);
  while(array[midIndex] != t && Math.abs(h-l) > 1){
    array[midIndex] > t ? (h = midIndex) : (l = midIndex);
    midIndex = Math.floor((h + l)/2)
  }
  return array[midIndex] === t ? midIndex : -1;
  }

function searchResult(array, t){
  const peak = findPeak(array);

  return array[0] > t 
  ? binarySearch(array, t, peak + 1, array.length)
  : binarySearch(array, t, 0, peak + 1)
}

console.log(searchResult([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 1));



