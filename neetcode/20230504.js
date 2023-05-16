// https://neetcode.io/roadmap - Arrays & Hashing 1

// https://leetcode.com/problems/contains-duplicate/

/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

// const containsDuplicate = (nums) => {
//   const duplicateDetector = nums.reduce((acc, curr) => {
//     if (!acc.includes(curr)) {
//       acc.push(curr)
//       }
//     return acc
//   }, [])
//   return duplicateDetector.length !== nums.length
// } // Runtime 7746 ms

// const containsDuplicate = (nums) => {
//   const intList = []
//   for (i in nums) {
//     if (!intList.includes(nums[i])) {
//       intList.push(nums[i])
//     } else {
//       return true
//     }
//   }
//   return false
// } // Runtime 7337 ms

// const containsDuplicate = (nums) => {
//   const sortedNums = nums.sort((a,b) => a - b)
  
//   for (let i = 0 ; i < sortedNums.length ; i++) {
//     if (sortedNums[i] === sortedNums[i+1]) {
//       return true
//     }
//   }
//   return false
// } // 173 ms

const containsDuplicate = (nums) => {
  const hashset = new Set()

  for (i in nums) {
    if (hashset.has(nums[i])) {
      return true
    }
    hashset.add(nums[i])
  }
  return false
} // 131 ms

// 

/* 
Explanation:
- Create variable hashset, which is a new Set
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
- Loop through the integer array nums
- If the hashset contains the number at nums[i], return true
- It no duplicate is detected, add the number at nums[i] to the hashset
- If no duplicates are detected after looping through the array nums, return false
*/

// Test cases
console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
console.log(containsDuplicate([]))