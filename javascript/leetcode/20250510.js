/*
https://leetcode.com/problems/number-of-1-bits/description/

Number of 1 Bits


Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).

 

Example 1:

Input: n = 11

Output: 3

Explanation:

The input binary string 1011 has a total of three set bits.

Example 2:

Input: n = 128

Output: 1

Explanation:

The input binary string 10000000 has a total of one set bit.

Example 3:

Input: n = 2147483645

Output: 30

Explanation:

The input binary string 1111111111111111111111111111101 has a total of thirty set bits.


Constraints:

1 <= n <= 231 - 1
 

Follow up: If this function is called many times, how would you optimize it?
*/

// Solution 1
// const hammingWeight = (n) => {
//   const binaryNum = n.toString(2)
//   let setBitCount = 0

//   for (const bit in binaryNum) {
//     if (binaryNum[bit] === "1") {
//       setBitCount += 1
//     }
//   }
//   return setBitCount
// }

// console.log(hammingWeight(11)) // -> 3
// console.log(hammingWeight(128)) // -> 1
// console.log(hammingWeight(2147483645)) // -> 30

/* 
Pseudocode:
- Convert n into binary
- Count the number of set bits in the binary value
- Return the count value

- Time complexity: O(log n)
- Space complexity: O(log n)
*/


// Solution 2
const hammingWeight = (n) => {
  let setCount = 0

  while (n > 0) {
    if (n % 2 === 1) {
      setCount += 1
    }
    n = Math.floor(n / 2)
  }
  return setCount
}

console.log(hammingWeight(11)) // -> 3
console.log(hammingWeight(128)) // -> 1
console.log(hammingWeight(2147483645)) // -> 30

/* 
Pseudocode:
- Initialize a count
- While n is greater than zero
  - If n is odd
    - Increment setCount by 1
  - Reassign n as n divided by 2 and rounded down
- Return the count value

- Time complexity: O(log n)
- Space complexity: O(1)

- Derived from:
  - https://www.geeksforgeeks.org/javascript-program-to-convert-a-number-to-binary/
*/
