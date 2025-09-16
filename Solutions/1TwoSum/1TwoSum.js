// 1.Two Sum.js

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = new Map();

    

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if(numMap.has(complement)) {
            return [numMap.get(complement), i]
        }
        numMap.set(nums[i], i)
    }
    return []    
};

console.log("Test Case 1:", twoSum([2, 7, 11, 15], 9));       // [0, 1]
console.log("Test Case 2:", twoSum([3, 2, 4], 6));            // [1, 2]
console.log("Test Case 3:", twoSum([3, 3], 6));               // [0, 1]
console.log("Test Case 4:", twoSum([1, 2, 3, 4, 5], 8));      // [2, 4]
console.log("Test Case 5:", twoSum([0, 4, 3, 0], 0));         // [0, 3]
console.log("Test Case 6:", twoSum([-1, -2, -3, -4, -5], -8)); // [2, 4]
console.log("Test Case 7:", twoSum([1, 5, 7, 1], 8));         // [1, 2]
console.log("Test Case 8:", twoSum([2, 7, 11, 15], 22));      // [1, 3]
console.log("Test Case 9:", twoSum([10, 20, 30, 40], 50));    // [1, 2]
console.log("Test Case 10:", twoSum([1, 1, 1, 1], 2));        // [0, 1]
console.log("Test Case 11:", twoSum([2, 4, 6, 8, 10], 14));   // [2, 3]
console.log("Test Case 12:", twoSum([], 0));                  // []
console.log("Test Case 13:", twoSum([1], 1));                 // []
console.log("Test Case 14:", twoSum([1, 2], 3));              // [0, 1]
console.log("Test Case 15:", twoSum([1, 2, 3], 7));           // []

