// https://leetcode.com/problems/running-sum-of-1d-array/

const runningSum = (nums) => {
  let sum = 0
 return nums.map(num => sum += num)
}