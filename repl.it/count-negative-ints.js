//Count Negative Integers in Row/Column-Wise Sorted Matrix
//Naive Solution O(n^2): nested for loop, count the number of the negative num starting from the left to right, top to bottom of the Matrix.  
//Better solution O(n): find the last Negative item in Rows starting from top to bottom. 

var Matrix = [
  [-1, -3, -2, 4], 
  [-1, -3, 2, 4],
  [1, 3, 2, 4],
  ];
  
  //First Solution: 
  function findNeg (M, n, m){
    let count = 0;
    for (let i = 0; i < n; i++){
      for (let j = 0; j < m; j++){
        if(M[i][j] < 0){
          count++;
        }else{
          j++;
        }
      };
    }
    return count; 
  }
  findNeg (Matrix, 3, 4);
  
  //Second Solution:
  
  // function findNeg (M, n, m){
  //   let count = 0;
  //   let i = 0;
  //   let j = m - 1;
  //   while(j >=0 && i < n){
  //     if(M[i][j] < 0){
  //       count += (j + 1);
  //       i++;
  //     }else{
  //       j--;
  //     }
  //   }
  //   return count; 
  // }
  // findNeg (Matrix, 3, 4);