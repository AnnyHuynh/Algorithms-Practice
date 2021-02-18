// https://leetcode.com/problems/group-anagrams/
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
		const obj = {};
		const len = strs.length;

		if(len <= 1) return [strs];
		
		for (let i = 0; i < len; i++){
			let val = strs[i].split('').sort();

			obj[val] = obj[val] ? [...obj[val], strs[i]] : [strs[i]];
		
		}

		return Object.values(obj);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))