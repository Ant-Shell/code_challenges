/*
https://leetcode.com/problems/second-largest-digit-in-a-string/description/

Second Largest Digit in a String

Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

An alphanumeric string is a string consisting of lowercase English letters and digits.

Example 1:

Input: s = "dfa12321afd"
Output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
Example 2:

Input: s = "abc1111"
Output: -1
Explanation: The digits that appear in s are [1]. There is no second largest digit. 
 

Constraints:

1 <= s.length <= 500
s consists of only lowercase English letters and digits.
*/

// const secondHighest = (s) => {
//   const uniqueNums = new Set();

//   for (char in s) {
//     let currentNum = parseInt(s[char]);
//     if (currentNum === 0 || currentNum && !uniqueNums.has(currentNum)) {
//       uniqueNums.add(currentNum);
//     }
//   }

//   if (uniqueNums.size < 2) {
//     return -1
//   }

//   return [...uniqueNums].sort()[uniqueNums.size-2]
// }; O(NLogN) due to the sort on line 42


const secondHighest = (s) => {
  let largestNum = -1
  let secondLargestNum = -1
  const uniqueNums = new Set();

  for (char in s) {
    let currentNum = parseInt(s[char]);

    if (uniqueNums.has(currentNum)) {
      continue
    } 

    if (Number.isInteger(currentNum)) {
      uniqueNums.add(currentNum);
      if (currentNum > largestNum) {
        secondLargestNum = largestNum
        largestNum = currentNum
      } else if (currentNum < largestNum && currentNum > secondLargestNum) {
        secondLargestNum = currentNum
      }
    }
  }

  return secondLargestNum
}

console.log(secondHighest("dfa12321afd")); // 2
console.log(secondHighest("abc1111")); // -1
console.log(secondHighest("ck077")) // 0

/* 
Pseudocode:
- Initialize largestNum at -1
- Initialize secondLargestNum at -1
- Declare uniqueNums as a Set
- Iterate through the s string argument
  - If the uniqueNums has currentNum, continue to the next iteration
  - Capture unique digits that are found during the iteration
    - If currentNum is greater then largestNum
      - Reassign secondLargestNum as the value of largestNum
      - Reassign largestNum as the value of currentNum
    - Else if currentNum is greater than largestNum and currentNum is greater than secondLargestNum
      - Reassign secontLargestNum as the value of currentNum
- Return secondLargestNum

- Note: Got help with the O(n) solution
*/
