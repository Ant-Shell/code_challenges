/* 
https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/

Check if Number Has Equal Digit Count and Digit Value

You are given a 0-indexed string num of length n consisting of digits.

Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.

Example 1:

Input: num = "1210"
Output: true
Explanation:
num[0] = '1'. The digit 0 occurs once in num.
num[1] = '2'. The digit 1 occurs twice in num.
num[2] = '1'. The digit 2 occurs once in num.
num[3] = '0'. The digit 3 occurs zero times in num.
The condition holds true for every index in "1210", so return true.


Example 2:

Input: num = "030"
Output: false
Explanation:
num[0] = '0'. The digit 0 should occur zero times, but actually occurs twice in num.
num[1] = '3'. The digit 1 should occur three times, but actually occurs zero times in num.
num[2] = '0'. The digit 2 occurs zero times in num.
The indices 0 and 1 both violate the condition, so return false.
 

Constraints:

n == num.length
1 <= n <= 10
num consists of digits.

*/

const digitCount = (num) => {
  const digitOccurrence = {}

  for (let i = 0 ; i < num.length ; i++) {
    if (!Object.hasOwn(digitOccurrence, num[i])) {
      digitOccurrence[num[i]] = 0
    }
    digitOccurrence[num[i]]++
  }

  for (let i = 0 ; i < num.length ; i++) {
    if (!Object.hasOwn(digitOccurrence, i)) {
      digitOccurrence[i] = 0
    }

    if (parseInt(num[i]) !== digitOccurrence[i]) {
      return false
    }
  }
  return true
}

console.log(digitCount("1210")) // -> true
console.log(digitCount("030")) // -> false

/* 
Pseudocode:
- Capture the occurrences of each digit in num
- Iterate through num and verify if the digit at the current index matches its occurrence
  - Return false if not
- Return true
*/