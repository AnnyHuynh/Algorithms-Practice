// Cracking the Coding Interview: Question 10.1 page 149
//you are given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B. Write a method to merge B into A in sorted order. 
//solution below has O(n+m) in time complexity and O(1) space complexity
function sortMerge(A, B){
  //k is the index the last int of buffer Array A 
  let k = A.length + B.length - 1;
  // i is the index of the last int in array A
  let i = A.length - 1;
  // j is the index of the last int in array B
  let j = B.length - 1;
  // while there is still number in array B
  while(j >= 0){
    //if there's also number in array A, and last int of A is larger than last int of B
    if(i >= 0 && A[i] > B[j]){
      //move last int of A to the last index position in buffer A
      A[k] = A[i];
      // decrease last int of A by 1
      i--;
    }else{
      //if last int of A is smaller than last int of B, then set last int of buffer A equal to last int of B
      A[k] = B[j];
      //decrease last int of B by 1
      j--;
    }
    //decrease last int of buffer A by 1
    k--;
  }
  //return array A
  return A;
}
console.log(sortMerge([3, 8, 9], [-1, 0, 6, 9])); // Output: A = [-1, 0, 3, 6, 8, 9, 9]
