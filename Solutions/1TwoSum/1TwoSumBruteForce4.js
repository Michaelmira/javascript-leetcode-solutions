
function twoSum(numbers,target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) 
            if (numbers[i] + numbers[j] === target)
                return [i,j]
    }
    return []
}


console.log(twoSum([1,2,3,4,5,6], 7))
console.log(twoSum([11,12,13,14,15,16], 29))