/* 
https://leetcode.com/problems/happy-number/description/

Happy Number

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle 
  which does not include 1.
- Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.


Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1


Example 2:

Input: n = 2
Output: false
 

Constraints:

1 <= n <= 231 - 1
*/

const isHappy = (n) => {
  const numString = n.toString()
  const pow = 2
  const uniqueNums = new Set()

  return determineHappy(numString, pow, uniqueNums)
};

const determineHappy = (numString, pow, uniqueNums) => {
  const digitList = numString.split("")
  const sumRaisedNums = digitList.reduce((sum, currentDigit) => {
    sum += Math.pow(parseInt(currentDigit), pow)
    return sum
  }, 0);

  if (sumRaisedNums === 1) {
    return true
  }

  if (uniqueNums.has(sumRaisedNums)) {
    return false
  } else {
    uniqueNums.add(sumRaisedNums)
  }

  return determineHappy(sumRaisedNums.toString(), pow, uniqueNums)
};

console.log(isHappy(19)) // true
console.log(isHappy(2)) // false
console.log(isHappy(7)) // true

/* 
Pseudocode:
- Declare function isHappy, with n as a parameter
- Declare numString as n converted to a string
- Declare pow as 2
- Declare uniqueNums as an empty set
- Return invocation of determinHappy function, with arguments of numString, pow and uniqueNums

- Declare function determineHappy, numString, pow and uniqueNums as parameters
- Declare digitList as numString split into an array of numbers (strings)
- Declare sumRaisedNums as the result of reducing digitList, with sum as the accumulator and currentDigit
as the current number (string) in the iteration
  - In each iteration:
    - sum = sum + the current digit (converted to a number), raised to the power of pow (2)
    - return the value of sum
- If sumRaisedNums is strictly equal to 1:
  - return true
- If uniqueNums has sumRaisedNums in the set:
  - return false
  - Note: this prevents infinite loop
- Else:
  - Add sumRaisedNums to the uniqueNums set
- Return the recursive call of determineHappy with arguments sumRaisedNums (converted to string),
pow, and uniqueNums

- Time complexity: O(log n)
- Space complecity: O(log n) 
*/


/* 
Optomized solution using while loop and digit extraction (thanks ChatGPT):

const isHappy = (n) => {
  const uniqueNums = new Set();

  while (n !== 1 && !uniqueNums.has(n)) {
    uniqueNums.add(n);
    n = getSumOfSquares(n);
  }

  return n === 1;
};

const getSumOfSquares = (num) => {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;  // Extract last digit
    sum += digit * digit;  // Square the digit and add to sum
    num = Math.floor(num / 10);  // Remove last digit
  }
  return sum;
};
*/