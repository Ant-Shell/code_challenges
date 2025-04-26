/* 
https://leetcode.com/problems/valid-perfect-square/description/

Valid Perfect Square

Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.

 

Example 1:

Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
Example 2:

Input: num = 14
Output: false
Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.
 

Constraints:

1 <= num <= 231 - 1
*/

const isPerfectSquare = (num) => {
  let left = 1
  let right = num

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const square = mid * mid

    if (square === num) {
      return true
    }

    if (square < num) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  
  return false
}

console.log(isPerfectSquare(16))
console.log(isPerfectSquare(14))


/* 
Pseudocode:
- Initialize a left pointer as 1
- Initialize a right pointer as num
- While left is less than or equal to right
  - Declare mid as left plus right divided by two and rounded down
  - Declare square as mid times mid
  - If square is striclty equal to num
    - Return true
  - If square is less than num
    - Reassign left as the value of mid plus 1
  - Else
    - Reassign right as the value of mid minus 1
- Return false as default


- Time complexity: O(log n)
- Space complexity: O(n)
*/