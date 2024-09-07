// Neetcode - Arrays & Hashing Problem 3
// https://leetcode.com/problems/two-sum/

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

const twoSum = (nums, target) => {

  for (let i = 0 ; i < nums.length ; i++) {
      for (let j = i+1 ; j < nums.length ; j++) {
        if (nums[i] + nums[j] === target) {
          return [i,j]
        }
      }
    }
  } // 102 ms
  
  
  console.log(twoSum([2,7,11,15], 9))
  console.log(twoSum([3,2,4], 6))
  console.log(twoSum([3,3], 6))
  
  // Edge cases:
  console.log(twoSum([11,2,15,7], 9))
  console.log(twoSum([2,3,4], 6))
  
  /* 
  Explanation
  The twoSums function takes two arguments an array of integers (nums) and a target integer (target)
  In order to return the indices of the integers that add up to the target integer, the following was done:
  Loop through the nums array (outer loop)
  Loop through the nums array at (i)ndex +1 (inner loop)
  If nums at index + nums at index +1 equals the target integer, return an array containing the index value and index +1 value
  */
