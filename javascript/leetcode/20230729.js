// https://leetcode.com/problems/monotonic-array

/* 
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.
*/

const isMonotonic = (nums) => {
  let increasing = false
  let decreasing = false

  for (let i = 0 ; i < nums.length -1 ; i++) {
    if (nums[i] === nums[i+1]) {
      continue
    } 
    if (nums[i] < nums[i+1]) {
      increasing = true
    } else if (nums[i] > nums[i+1]) {
      decreasing = true
    }
    if (increasing === true && decreasing === true) {
      return false
    }
  }
  return true
}

// Test Cases
console.log(isMonotonic([1,2,2,3]))
console.log(isMonotonic([6,5,4,4]))
console.log(isMonotonic([1,3,2]))
console.log(isMonotonic([1]))
console.log(isMonotonic([]))

/* 
## Pseudo Code: ##
Loop through input array of integers
Ignore if index +1 is equal to current index
Verify if array is increasing or decreasing by comparing current index to index +1
Keep comparing until the opposite is detected, then return false
Return true if opposites are not detected
*/