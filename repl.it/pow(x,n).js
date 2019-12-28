//https://leetcode.com/problems/powx-n/
//Implement pow(x, n), which calculates x raised to the power n (xn).
//Example 1: Input: 2.00000, 10   Output: 1024.00000
//Example 2: Input: 2.10000, 3    Output: 9.26100
//Example 3: Input: 2.00000, -2   Output: 0.25000
//Explanation: 2-2 = 1/22 = 1/4 = 0.25
//Note: -100.0 < x < 100.0; n is a 32-bit signed integer, within the range [−231, 231 − 1]

//interative
function pow(x, n) {
	let res = 1;
	if (x >= 100.0 || x <= -100.0 || n > 231 - 1 || n < -231) return 0;
	if (n === 0) return 1;
	if (n === 1) return x;
	if (x === 0) return 0;
	if (n < 0) {
		x = 1 / x;
		n = n * -1;
	}
	for (let i = 1; i <= n; i++) {
		res = res * x;
	}
	return res.toFixed(5);
}
console.log(pow(2, 10));
console.log(pow(2.1, 3));
console.log(pow(2, -2));
console.log(pow(-101, -2));

//Recursion:

// var myPow = function(x, n) {
//   if (n === 0) return 1;
//   if (n === 1) return x;
//   if (x === 0) return 0;

//   if (n > 0) {
//     return (n % 2 === 1 ? x : 1) * myPow(x * x, Math.floor(n / 2));
//   } else {
//     return myPow(1 / x, -n);
//   }
// };
