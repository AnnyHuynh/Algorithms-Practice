//write a method that converts a numeric string into an integer value
var myAtoi = function(str) {
	let i = 0;
	let sign = 1;
	let res = 0;
  while (str.charAt(i) == ' ') {
		i++;
	}
	if (str.charAt(i) === '+') {
		i++;
	} else if (str.charAt(i) === '-') {
		sign = -1;
		i++;
	}

	while (str.charAt(i) >= '0' && str.charAt(i) <= '9') {
		res = res * 10 + (str.charAt(i) - 0);
		// if (res * sign >= 2147483647) {
		// 	return 2147483647;
		// } else if (res * sign <= -2147483648) {
		// 	return -2147483648;
		// }
		i++;
	}
	return res * sign;
};

console.log(myAtoi("  -45 4"));
console.log(myAtoi("  454"));
console.log(myAtoi("  -45h"));
console.log(myAtoi("words and 987"));