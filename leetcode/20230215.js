// https://leetcode.com/problems/rotate-array/

const rotate = (nums, k) => {
  const rotator = (nums, low, high) => {
    while(low < high) {
      let temp = nums[low]
      nums[low] = nums[high]
      nums[high] = temp
      low++
      high--
    }
  }
  
    k %= nums.length
    rotator(nums, 0, nums.length-1)
    rotator(nums, 0, k-1)
    rotator(nums, k, nums.length-1)
};