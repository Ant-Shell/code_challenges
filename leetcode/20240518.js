/* 
https://leetcode.com/problems/get-maximum-in-generated-array/description/

You are given an integer n. A 0-indexed integer array nums of length n + 1 is generated in the following way:

nums[0] = 0
nums[1] = 1
nums[2 * i] = nums[i] when 2 <= 2 * i <= n
nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
Return the maximum integer in the array nums.
*/

const getMaximumGenerated = function(n) {
  if (n === 0) {
    return 0
  }
  
  let nums = [0,1]
  let oddCount = 1
  
  for (let i = 2 ; i < n+1 ; i++) {
     if (i % 2 === 0) {
      nums.push(nums[i/2])
    } else {
      nums.push(nums[oddCount] + nums[i - oddCount])
      oddCount++
    }
  }
  return Math.max(...nums)
};


console.log(getMaximumGenerated(7))
console.log(getMaximumGenerated(2))
console.log(getMaximumGenerated(3))
console.log(getMaximumGenerated(0))
console.log(getMaximumGenerated(1))

/* 
Pseudocode:
The param of n is provided
Array is of length n + 1
Note: index 0 and 1 will always have values of 0 and 1 respectively

If n is zero, return zero
Initialize a nums array containing 0 at index zero and 1 at index one
Initialize oddCount at 1, which will be incremented each time an odd numbered index is encountered
  - Note: nums array already has an odd numbered index in it, hence initializing at 1
Start a loop and initialize the index counter at 2 (loop will only continue while i < n+1)
If i is even, push into the nums array the value at nums index i/2
If i is odd, push into the nums array the value at nums at index oddCount + the value of nums at index i - oddCount, and increment oddCount
Return the largest number found in the nums array
*/