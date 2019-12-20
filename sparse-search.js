//cracking the coding interview - 10.5 page 150
//Given s sorted array of strings that is interspersed with empty strings, write a method to find the location of a given string.
//input: "ball", {"at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""} -> output: 4

function binarySearch(array, t, low, high) {
	let mid = (low + high) / 2;
	if (array[mid] === '') {
		let left = mid - 1;
		let right = mid + 1;
		while (true) {
			if (left < low && right > high) return -1;
			if (array[right] !== '' && right <= high) {
				mid = right;
				break;
			} else if (array[left] !== '' && left >= low) {
				mid = left;
				break;
			} else {
				left--;
				right++;
			}
		}
	}
	if (array[mid] === t) {
		return mid;
	} else if (t < array[mid]) {
		high = mid - 1;
	} else if (t > array[mid]) {
		low = mid + 1;
	} else {
		return -1;
	}
	return binarySearch(array, t, low, high);
}

function sparseSearch(array, t) {
	let len = array.length;
	if (array === null || t === null || t === '' || len === 0) return -1;
	let low = 0;
	let high = len - 1;
	return binarySearch(array, t, low, high);
}

console.log(sparseSearch([ 'at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', '' ], 'ball'));
console.log(sparseSearch([ 'at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', '' ], 'dad'));
console.log(sparseSearch([ 'at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', '' ], 'cd'));
console.log(sparseSearch([ 'at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', '' ], ''));
