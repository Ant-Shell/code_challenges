/* 
https://leetcode.com/problems/count-largest-group/description

Count Largest Group

You are given an integer n.

Each number from 1 to n is grouped according to the sum of its digits.

Return the number of groups that have the largest size.

 

Example 1:

Input: n = 13
Output: 4
Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
[1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
There are 4 groups with largest size.
Example 2:

Input: n = 2
Output: 2
Explanation: There are 2 groups [1], [2] of size 1.
 

Constraints:

1 <= n <= 104
*/

// First attempt
// const countLargestGroup = (n) => {
//   const numSums = {}
//   let result = 0

//   for (let i = 1 ; i <= n ; i++) {
//     const numsList = i.toString().split("")
//     const sum = digitSum(numsList)
//     if (!Object.hasOwn(numSums, sum)) {
//       numSums[sum] = []
//     }
//     numSums[sum].push(i) 
//   }

//   let largestSize = numSums["1"].length

//   for (const key in numSums) {
//     if (numSums[key].length > largestSize) {
//       largestSize = numSums[key].length
//       result = 0
//     }
//     if (numSums[key].length === largestSize) {
//       result++
//     } else {
//       break
//     }
//   }

//   return result
// }

// const digitSum = (nums) => {
//   return nums.reduce((sum, currentNum) => {
//     sum += parseInt(currentNum)
//     return sum
//   }, 0)
// }

// console.log(countLargestGroup(13)) // -> 4
// console.log(countLargestGroup(2)) // -> 2
// console.log(countLargestGroup(24)) // -> 5

/* 
Pseudocode:
- Create an object for key of digit sum and value of list of indices that add to digit sum
- Inialize a count for lists of largest size
- Iterate through the n array and populate the object
- Find the current largest size value
- Iterate through the keys in the object and get the lengths of the array values
  - If a array value size is larger than the current
    - Update the largest size and reset the count to zero
  - If the key value length is equal to the largest size value
    - Update the count
  - Else
    - Break out the loop
- Return the count

- Time complexity: O(n log n)
- Space complexity: O(n)
*/

// Refactor
const countLargestGroup = (n) => {
  const numSums = {}
  let largestSize = 0
  let result = 0

  for (let i = 1 ; i <= n ; i++) {
    const numsList = i.toString().split("")
    const sum = digitSum(numsList)
    if (!Object.hasOwn(numSums, sum)) {
      numSums[sum] = 0
    }

    numSums[sum]++

    if (numSums[sum] > largestSize) {
      largestSize = numSums[sum]
      result = 0
    }

    if (numSums[sum] === largestSize) {
      result++
    }
  }

  return result
}

const digitSum = (nums) => {
  return nums.reduce((sum, currentNum) => {
    sum += parseInt(currentNum)
    return sum
  }, 0)
}

console.log(countLargestGroup(13)) // -> 4
console.log(countLargestGroup(2)) // -> 2
console.log(countLargestGroup(24)) // -> 5
