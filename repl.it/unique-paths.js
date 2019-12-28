//https://leetcode.com/problems/unique-paths/
//A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below)
// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
// How many possible unique paths are there?
// Above is a 7 x 3 grid. How many possible unique paths are there?
// Note: m and n will be at most 100.
//Example 1: Input: m = 3, n = 2  Output: 3
//Example 2: Input: m = 7, n = 3  Output: 28

//DP solution:
function uniquePaths(m, n) {
	//there's only one way from top left corner to get to the right on the first row
	//there's only one way from top left corner to get to the bottom of the first column.
	//=> fill first row and first column with 1
	const dpArr = new Array(m).fill(new Array(n).fill(1));
	//the next number down is the sum of ways to get to the number above it plus sum of ways to get to the number on the left of it.
	//i and j start at 1 because the first row and first column (where i = 0; j = 0) have been filled with 1.
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dpArr[i][j] = dpArr[i - 1][j] + dpArr[i][j - 1];
		}
	}
	//return how many ways to get the the bottom right corner.
	return dpArr[m - 1][n - 1];
}
console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));
