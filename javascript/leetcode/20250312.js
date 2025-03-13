/* 
https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/

Maximum Count of Positive Integer and Negative Integer

Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
Note that 0 is neither positive nor negative.

 

Example 1:

Input: nums = [-2,-1,-1,1,2,3]
Output: 3
Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.

Example 2:

Input: nums = [-3,-2,-1,0,0,1,2]
Output: 3
Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.

Example 3:

Input: nums = [5,20,66,1314]
Output: 4
Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.
 

Constraints:

1 <= nums.length <= 2000
-2000 <= nums[i] <= 2000
nums is sorted in a non-decreasing order.

*/

const maximumCount = (nums) => {
  let positiveNumberCount = 0
  let negativeNumberCount = 0

  for (let i = 0 ; i < nums.length ; i++) {
    if (nums[i] === 0) {
      continue
    }
    if (nums[i] > 0) {
      positiveNumberCount++
    } else {
      negativeNumberCount++
    }
  }
  return Math.max(positiveNumberCount, negativeNumberCount)
}

// ------------------------------------------------------

// const maximumCount = (nums) => {
//   const midWay = Math.floor(nums.length / 2)
//   const leftSide = nums.slice(0, midWay)
//   const rightSide = nums.slice(midWay)
//   const numberCount = {
//     positive: 0,
//     negative: 0
//   }

//   countTally(leftSide, numberCount)
//   countTally(rightSide, numberCount)

//   return Math.max(numberCount.positive, numberCount.negative)
// }

// const countTally = (numlist, numberCount) => {
//   for (let i = 0 ; i < numlist.length ; i++) {
//     if (numlist[i] === 0) {
//       continue
//     }
//     if (numlist[i] > 0) {
//       numberCount.positive++
//     } else {
//       numberCount.negative++
//     }
//   }
// }

// ------------------------------------------------------

// const maximumCount = (nums) => {
//   const positives = [];
//   const negatives = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       continue;
//     }
//     if (nums[i] > 0) {
//       positives.push(nums[i]);
//     } else {
//       negatives.push(nums[i]);
//     }
//   }
//   return Math.max(positives.length, negatives.length);
// };

// ------------------------------------------------------

// const maximumCount = (nums) => {
//   let n = nums.length
//   let negatives = 0;
//   let positives = n - negatives;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       n--
//     }
//     if (nums[i] < 0) {
//       negatives++
//     }
//     positives = n - negatives
//   }
//   return Math.max(positives, negatives);
// };

// console.log(maximumCount([-2, -1, -1, 1, 2, 3])); // 3
// console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])); // 3
// console.log(maximumCount([5, 20, 66, 1314])); // 4

/* 
Psuedocode:
- Iterate through the nums array
- If a number is less than zero increment negatives
- If a number is greater than zero, incremnt positives
- If a number is zero, continue
- Return max between positives and negatives

- Time complexity O(n)
- Space complexity O(1)
*/
