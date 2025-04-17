/* 
https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/description

Count Equal and Divisible Pairs in an Array

Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.
 

Example 1:

Input: nums = [3,1,2,2,2,1,3], k = 2
Output: 4
Explanation:
There are 4 pairs that meet all the requirements:
- nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
- nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
- nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
- nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.
Example 2:

Input: nums = [1,2,3,4], k = 1
Output: 0
Explanation: Since no value in nums is repeated, there are no pairs (i,j) that meet all the requirements.
 

Constraints:

1 <= nums.length <= 100
1 <= nums[i], k <= 100
*/

// ## First attempt:
// const countPairs = (nums, k) => {
//   let divisiblePairsCount = 0
//   let n = nums.length

//   for (let i = 0 ; i < nums.length ; i++) {
//     let j = i + 1
//     while (j < n) {
//       if (nums[i] == nums[j] && (i * j) % k === 0) {
//         divisiblePairsCount++
//       }
//       j++
//     }
//   }
//   return divisiblePairsCount
// } Time Complexity: O(n^2), Space Complexity: O(1)

/* 
Pseudocode:
- Declare a counter
- Iterate through nums array
  - If pair is valid, increase count
- Return count
*/

// Slight Optimization:
const countPairs = (nums, k) => {
  const numIndices = {}
  let divisiblePairsCount = 0

  for (let i = 0 ; i < nums.length ; i++) {
    if (!Object.hasOwn(numIndices, nums[i])) {
      numIndices[nums[i]] = []
    }
    numIndices[nums[i]].push(i)
  }

  for (const key in numIndices) {
    const indices = numIndices[key]

    for (let i  = 0 ; i < indices.length - 1; i++) {
      for (let j = i + 1 ; j < indices.length ; j++) {
        if ((indices[i] * indices[j]) % k === 0) {
          divisiblePairsCount++
        }
      }
    }
  }
  return divisiblePairsCount
}

console.log(countPairs([3,1,2,2,2,1,3], 2)) // -> 4
console.log(countPairs([1,2,3,4], 1)) // -> 0

/* 
Pseudocode:
- Declare numIndices object
- Initalize divisiblePairsCount
- Iterate through nums array
  - Add keys of nums[i] to numIndices with value of empty array if key does not exist
  - Push index into numIndices[nums[i]] array value
- For key in numIndices
  - Declare indices as array value of numIndices[key]
  - Iterate throguh the pairs (i,j) via nested loop
    - If the condition is met: indices[i] * indices[j]) % k === 0
      - Increment divisiblePairsCount
- Return divisiblePairsCount

Time Complexity: O(n^2), Space Complexity: O(1)
*/