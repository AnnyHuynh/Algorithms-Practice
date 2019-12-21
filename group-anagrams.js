//Write a method to sort an array of strings so that all the anagrams are next to each other.
//input [god, dog, abc, cab, man]

function sortAnagrams(array) {
	let len = array.length;
	let map = {};
	let result = [];
	if (len <= 1) return;
	for (let i = 0; i < len; i++) {
		let key = array[i].split('').sort().join();
		if (!map[key]) {
			map[key] = [ array[i] ];
		} else {
			map[key].push(array[i]);
		}
	}
	let ans = Object.values(map);
	for (let j = 0; j < ans.length; j++) {
		result = result.concat(ans[j]);
	}

	return result;
}
console.log(sortAnagrams([ 'abc', 'dog', 'cab', 'god', 'man' ]));
console.log(sortAnagrams([ 'abc', 'man', 'dog', 'cab', 'god' ]));
