//Cracking the coding interview 1.7 page 203
//https://leetcode.com/problems/rotate-image/
//Given an image represented by an N * N matrix, where each pixel in the image is represented by an integer, write a method to rotate the image by 90 degrees. Can you do this in place?
// Given input matrix =
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
function rotateMatrix(matrix, M, N) {
	if (M === 0 || N === 0) return matrix;
	let i = 0;
	let j = 0;
	while (i < M) {
    while(j < N){
		let temp = matrix[i][N - 1 - j];
		matrix[i][N - 1 - j] = matrix[i][N - 1 - j];
		matrix[i][i] = matrix[j][i];
		matrix[j][i] = matrix[j][j];
		matrix[j][j] = temp;
    j++;
    i++;
    }
    i++;
	}
	return matrix;
}
console.log(rotateMatrix([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ], 3, 3));
