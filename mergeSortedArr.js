//you are given two sorted arrays, A and B. Write a method to merge A and B in sorted order. 
// input: A = [3, 8]; B = [2, 6, 7]
// Output: C = [2, 3, 6, 7, 8];
//solution below Time: O(n+m), Space: O(n+m)
function sortMerge(A, B){
  // given a variable empty array C to hold result
  let C = [];
  let i = 0;
  let j = 0;
  let len1 = A.length;
  let len2 = B.length;
  while(i < len1 && j < len2){
    //traversal through A and B, compare each number in A to each number in B. 
    // if int of A is less than or equal to int of B, then push int of A into C, and increment i in A. Otherwise, push int of B into C, and increment j in B.
    if(A[i] <= B[j]){
      C.push(A[i]);
      i++;
    }else{
      C.push(B[j]);
      j++;
    }
  }
  //if len1 and len2 are not equal, then check if there's any element left in A or B, and push the rest of elements into C. 
  while(i < len1 || j < len2){
    if(A[i]){
      C.push(A[i]);
      i++;
    }
    if(B[j]){
      C.push(B[j]);
      j++;
    }
  }
  return C;
}
console.log(sortMerge([3, 6, 8], [2, 6, 7])); //C = [2, 3, 6, 6, 7, 8];