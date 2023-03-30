// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

const removeDuplicates = (nums) => {
  let counter = 1
  for (let i = 1 ; i < nums.length ; i++) {
    if (nums[i-1] !== nums[i]) {
      nums[counter] = nums[i]
      counter++
    }
  }
  return counter
}