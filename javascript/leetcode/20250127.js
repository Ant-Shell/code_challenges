/* 
https://leetcode.com/problems/find-the-encrypted-string/description/

Find the Encrypted String

You are given a string s and an integer k. Encrypt the string using the following algorithm:

For each character c in s, replace c with the kth character after c in the string (in a cyclic manner).
Return the encrypted string.


Example 1:

Input: s = "dart", k = 3

Output: "tdar"

Explanation:

For i = 0, the 3rd character after 'd' is 't'.
For i = 1, the 3rd character after 'a' is 'd'.
For i = 2, the 3rd character after 'r' is 'a'.
For i = 3, the 3rd character after 't' is 'r'.


Example 2:

Input: s = "aaa", k = 1

Output: "aaa"

Explanation:

As all the characters are the same, the encrypted string will also be the same.

Constraints:

1 <= s.length <= 100
1 <= k <= 104
s consists only of lowercase English letters.
*/

const getEncryptedString = (s,k) => {
  let result = []

  for (let i = 0 ; i < s.length ; i++) {
    const position = (i + k) % s.length
    result.push(s[position])
  }
  return result.join('')
}

console.log(getEncryptedString("dart", 3)) // 'tdar'
console.log(getEncryptedString("aaa", 1)) // 'aaa'

/* 
Pseudocode:
- How do I traverse a circular array again?
  - Formula: (i + k) % s.length

- Declare result as an empty array
- Iterate through the s string
  - Declare position as the circular index value of the s string
  - Push s at the current position to the result array
- Return the joined result

- O(n) time complexity
- O(n) space complexity
*/