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

// Test Case 1: Basic example with two numbers adding up to the target
console.log(twoSum([2, 7, 11, 15], 9)); 
// Expected Output: [0, 1]

// Test Case 2: Target achieved with the last two numbers
console.log(twoSum([1, 2, 3, 6, 8], 14)); 
// Expected Output: [3, 4]

// Test Case 3: No solution exists
console.log(twoSum([1, 5, 3, 7], 10)); 
// Expected Output: []

// Test Case 4: Array contains negative numbers
console.log(twoSum([-3, 4, 3, 90], 0)); 
// Expected Output: [0, 2]

// Test Case 5: Target is achieved with the same number used twice
console.log(twoSum([3, 3], 6)); 
// Expected Output: [0, 1]

// Test Case 6: Larger array with multiple pairs
console.log(twoSum([10, 20, 10, 40, 50, 60, 70], 50)); 
// Expected Output: [1, 3]

// Test Case 7: Target achieved with numbers at the first and last positions
console.log(twoSum([2, 4, 6, 8, 10, 14], 16)); 
// Expected Output: [0, 5]
