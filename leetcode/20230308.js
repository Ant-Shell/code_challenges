'https://leetcode.com/problems/find-pivot-index/'

const pivotIndex = (nums) => {
  let sum = 0
  let leftSum = 0
  for (let i = 0 ; i < nums.length ; i++) {
    sum += nums[i]
  } 
  for (let j = 0 ; j < nums.length ; j++) {
    if (leftSum === sum - leftSum - nums[j]) {
      return j 
    }
    leftSum += nums[j]
  }
  return -1
}