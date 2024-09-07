/* 
https://leetcode.com/problems/single-number-iii/description/

Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.
*/

const singleNumber = (nums) => {
  let hash = {}

  for (let i = 0 ; i < nums.length ; i++) {
    if (!Object.hasOwn(hash, nums[i])) {
      hash[nums[i]] = 1
    } else {
      hash[nums[i]]++
    }
  }
  return Object.keys(hash).filter(key => hash[key] < 2)
}

/* 
# Pseudocode:
Create hash to capture occurences
Loop through array
If hash does not have a key of the current nums index value, create key and assign value of one
If it does, increase the value of the matching key by one
Return array of integers that only occur once
*/

console.log(singleNumber([1,2,1,3,2,5]))
console.log(singleNumber([-1,0]))
console.log(singleNumber([0,1]))