/*
https://leetcode.com/problems/number-of-segments-in-a-string/description/

Number of Segments in a String

Given a string s, return the number of segments in the string.

A segment is defined to be a contiguous sequence of non-space characters.

Example 1:

Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]


Example 2:

Input: s = "Hello"
Output: 1
 

Constraints:

0 <= s.length <= 300
s consists of lowercase and uppercase English letters, digits, or one of the following characters "!@#$%^&*()_+-=',.:".
The only space character in s is ' '.
*/

const countSegments = (s) => {
  let splitS = s.split(" ")
  let count = 0

  for (segment in splitS) {
    if (splitS[segment] !== '') {
      count++
    }
  }
  return count
}

console.log(countSegments("Hello, my name is John")); // -> 5
console.log(countSegments("Hello")); // -> 1
console.log(countSegments("")); // -> 0
console.log(countSegments("                ")) // -> 0
console.log(countSegments(", , , ,        a, eaefa")) // -> 6

/* 
Pseudocode:
- Split the string by delimiter of a space (split string into  "segments")
- Intitialize count
- Iterate through the split string
  - If the split string at the current index does not equal a space
    - Increment the count
- Return count
*/
