/* 
https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/

Convert Integer to the Sum of Two No-Zero Integers

No-Zero integer is a positive integer that does not contain any 0 in its decimal representation.

Given an integer n, return a list of two integers [a, b] where:

a and b are No-Zero integers.
a + b = n
The test cases are generated so that there is at least one valid solution. If there are many valid solutions, you can return any of them.


Example 1:

Input: n = 2
Output: [1,1]
Explanation: Let a = 1 and b = 1.
Both a and b are no-zero integers, and a + b = 2 = n.


Example 2:

Input: n = 11
Output: [2,9]
Explanation: Let a = 2 and b = 9.
Both a and b are no-zero integers, and a + b = 11 = n.
Note that there are other valid answers as [8, 3] that can be accepted.
 

Constraints:

2 <= n <= 104
*/



const getNoZeroIntegers = (n) => {
  let divisor = 2
  let roundedDivide = Math.floor(n / divisor)
  let remain = n - roundedDivide

  while (divisor < n) {
    if (!roundedDivide.toString().includes("0") && !remain.toString().includes("0")) {
      break
    }
    divisor += 1;
    roundedDivide = Math.floor(n / divisor);
    remain = n - roundedDivide;
  }
  return [roundedDivide, remain]
}

console.log(getNoZeroIntegers(2))
console.log(getNoZeroIntegers(11))
console.log(getNoZeroIntegers(10000))

/* 
Pseudocode:
- Intitialize divisor as 2
- Declare roundedDivide as the rounded down result of n divided by divisor
- Declare remain as the reslt of n minus roundedDivide
- While divisor is less than n
  - If the string version of roundedDivide and the string version of remain do not include a zero
    - Break out of the loop
  - Otherwise increment divisor by one, and reassign both roundedDivide and remain, taking into account the updated
    divisor
- Once the loop has been broken, return an array containing the values of roundedDivide and remain
*/

