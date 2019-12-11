//Cracking the coding interview 10.4 page 150
//Leetcode: https://code.dennyzhang.com/search-in-a-sorted-array-of-unknown-size
//You are given an array-like data structure Listy which lacks a size method. It does, however have an element At(i) method that returns the element at index i in O(1) time. If it is beyond the bounds of the data structure, it returns -1. (For this reason, the data structure only supports positive integers.) Given a Listy which contains sorted, positive integers, find the index at which an element x occurs. If x occurs multiple times, you may return any index.

function sortedSearch(array, t){
  let prev = 0;
  let current = 1;
  if(array[prev] === -1 && array[current] === -1) {
    return 0;
  }
  while(array[current] === -1 && array[prev] < t){
    current -= 1;
  }
  while(array[current] != -1 && array[current] < t){
    prev = current;
    current *= 2; 
  }
  if(array[prev] === t) return prev;
  if(array[current] === t) return current;
  return binarySearch(array, t, prev, current);
}

function binarySearch(array, t, left, right){
   let middle;
   while(left <= right){
    middle = Math.floor((left + right)/2);
    let current = array[middle];
    if(t < current || current == -1){
     right = middle - 1;
    }else if (t > current){
     left = middle + 1;
    } else{
      return middle;
    }
  }
  return -1;
}

 console.log(sortedSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 18));

 //something wrong. Code doesn't work correctly. 