//cracking the coding interview 1.6 page 91.
//https://leetcode.com/problems/string-compression/
//implement a method to perform basic string compression using the counts of repeated characters. For example, string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z).

function StrComprression(str) {
	let arr = str.split('');
	let len = arr.length;
	let res = arr[0];
	let count = 1;
	let i = 1;
	console.log(arr);
	if (!str) return "where's your str?";
	if (len === 0) return str;

	while (i < len - 1) {
		if (arr[i] === res.charAt(res.length - 1)) {
			count += 1;
			i++;
		}
		if (arr[i] !== res.charAt(res.length - 1)) {
			res += count;
			res += arr[i];
			count = 1;
			i++;
		}
	}
	if (typeof res.charAt(res.length - 1) !== 'number') {
		res += 1;
	}

	return res;
}
console.log(StrComprression('aabcccccaaa')); //a2b1c5a3
