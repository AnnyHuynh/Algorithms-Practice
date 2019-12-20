//Given an M*N matrix in which each row and each column is sorted in ascending order, write a method to find an element.
//Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 3
// Output: true
//Solution below: search from the right corner. Time Complexity O(m+n);

function findElement(matrix, target) {
	let M = matrix.length; //M is len of row
	let N = matrix[0].length; //N is len of col
	if (!M || !N) return false;
	let row = 0;
	let col = N - 1;
	while (row < M && col >= 0) {
		if (matrix[row][col] === target) return true;
		if (matrix[row][col] > target) {
			col--;
		}
		if (matrix[row][col] < target) {
			row++;
		}
	}
	return false;
}
console.log(findElement([ [ 1, 3, 5, 7 ], [ 10, 11, 16, 20 ], [ 23, 30, 34, 50 ] ], 11));
console.log(findElement([ [ 1, 3, 5, 7 ], [ 10, 11, 16, 20 ], [ 23, 30, 34, 50 ] ], 6));
