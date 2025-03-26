/* 
https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/

Minimum Changes To Make Alternating Binary String

You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa.

The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while the string "0100" is not.

Return the minimum number of operations needed to make s alternating.


Example 1:

Input: s = "0100"
Output: 1
Explanation: If you change the last character to '1', s will be "0101", which is alternating.


Example 2:

Input: s = "10"
Output: 0
Explanation: s is already alternating.
Example 3:

Input: s = "1111"
Output: 2
Explanation: You need two operations to reach "0101" or "1010".
 

Constraints:

1 <= s.length <= 104
s[i] is either '0' or '1'.
*/

const minOperations = (s) => {
  const stringList = s.split("");
  let startingZeroFlips = 0;
  let startingOneFlips = 0
  
  for (let i = 0; i < stringList.length; i++) {
    const currentNum = stringList[i]
    // Assuming stringList starts with 0
    if (i % 2 === 0 && currentNum === "1") { // evens
      startingZeroFlips++
    }
    if (i % 2 === 1 && currentNum === "0") { // odds
      startingZeroFlips++
    }

    // Assuming stringList starts with 1
    if (i % 2 === 0 && currentNum === "0") { // evens
      startingOneFlips++
    }
    if (i % 2 === 1 && currentNum === "1") { // odds
      startingOneFlips++
    }
  }

  return Math.min(startingZeroFlips, startingOneFlips)
};

console.log(minOperations("0100")) // -> 1
console.log(minOperations("10")) // -> 0
console.log(minOperations("1111")); // -> 2
console.log(minOperations("10010100")); // -> 3

/* 
Pseudocode:
- Declare stringList as s split into an array, with index value as a character
- Initialize startingZeroFlips as zero
- Initialize startingOneFlips as zero
- Iterate through stringList
  - Declare currentNum as stringList[i]
  - If index is even and currentNum strictly equals "1"
    - Incerement startingZeroFlips
  - If index is odd and currentNum strictly equals "0"
    - Increment startingZeroFlips
  - If index is even and currentNum strictly equals "0"
    - Increment startingOneFlips
  - If index is odd and currentNum strictly equals "1"
    - Increment startingOneFlips
- Return the minimum between startingZeroFlips and startingOneFlips

- Time complexity: O(n)
- Space complexity: O(n)
*/
