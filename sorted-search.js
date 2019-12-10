//Cracking the coding interview 10.4 page 150
//Leetcode: https://code.dennyzhang.com/search-in-a-sorted-array-of-unknown-size
//You are given an array-like data structure Listy which lacks a size method. It does, however have an element At(i) method that returns the element at index i in O(1) time. If it is beyond the bounds of the data structure, it returns -1. (For this reason, the data structure only supports positive integers.) Given a Listy which contains sorted, positive integers, find the index at which an element x occurs. If x occurs multiple times, you may return any index.

 function binarySearch(array, t, left, right){
   let middle = Math.ceil((left + right)/2);
   let current = array[middle];
   if(t === current) return middle;
   if(left === right || left > right)return -1;
   if(t < current){
     right = current - 1;
     return binarySearch(array, t, left, right);
   }else{
     left = current + 1;
     return binarySearch(array, t, left, right);
   } 
 }

 function sortedSearch(array, t){
   let prev = 0;
   let current = 4;
   if(array[prev] === t)return prev;
   if(array[current] === t)return current;
   if(array[current] < t){
     let prev = current;
     let right = current*current;
     return binarySearch(array, t, prev, right);
   }
   if(array[current] > t){
     return binarySearch(array, t, prev, current);
   }
 }

 console.log(sortedSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 9));