//you are given two sorted arrays, A and B. Write a method to merge A and B in a sorted order. 
// input: A = [3, 8]; B = [2, 6, 7]
// Output: C = [2, 3, 6, 7, 8];
function sortMerge(A, B){
  let C = [];
  let i = 0;
  let j = 0;
  let len1 = A.length;
  let len2 = B.length;
  while(i < len1 && j < len2){
    if(A[i] < B[j]){
      C.push(A[i]);
      i++;
    }else{
      C.push(B[j]);
      j++;
    }
  }
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
console.log(sortMerge([3, 8], [2, 6, 7]));