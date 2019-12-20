//Cracking the coding interview: 10.11
//In an array of integers, a "peak" is an element which is greater than or equal to the adjacent integers and a "valey" is an element which is less than or equal to the adjacent integers. For example, in the array {5, 8, 6, 2, 3, 4, 6}, {8, 6} are peaks and {5, 2} are valleys. Given an array of integers, sort the array into analternating sequence of peaks and valleys.
//Input: {5, 3, 1, 2, 3} -> Output: {5, 1, 3, 2, 3}
//Time Complexity O(n); space O(1)
function PeakValley(array) {
	if (!Array.isArray(array)) return 'Where is your array!';
	let len = array.length;
	if (len <= 1) return array;
	let i = 0;
	let j = i + 1;
	while (i < len - 1 && j < len) {
		if (array[i] >= array[j]) {
			i++;
		} else if (array[i] < array[j]) {
			let temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}
	return array;
}
console.log(PeakValley([ 5, 3, 1, 2, 3 ]));
