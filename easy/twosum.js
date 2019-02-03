/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	return nums.reduce( (acc, cur, idx, arr) => {
		let addend = target - cur;
		addend = arr.slice(idx+1).indexOf(addend);
		if(addend >= 0) acc.push(idx, addend + idx + 1);
		return acc;
	}, []);
};

console.log( twoSum([3, 6, 12, 3, 2, 5], 6) );
console.log( twoSum([3,3], 6) );
console.log( twoSum([12, 2, 23, 5, 7, 11, 15], 9) );
