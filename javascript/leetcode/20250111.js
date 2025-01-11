/*

https://leetcode.com/problems/construct-k-palindrome-strings/description/

Construct K Palindrome Strings

Given a string s and an integer k, return true if you can use all the characters in s to construct k palindrome strings or false otherwise.

Example 1:

Input: s = "annabelle", k = 2
Output: true
Explanation: You can construct two palindromes using all characters in s.
Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b"

Example 2:

Input: s = "leetcode", k = 3
Output: false
Explanation: It is impossible to construct 3 palindromes using all the characters of s.

Example 3:

Input: s = "true", k = 4
Output: true
Explanation: The only possible solution is to put each character in a separate string.
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
1 <= k <= 105

*/

const canConstruct = (s,k) => {
  const occurrences = {}
  let oddsCount = 0

  if (s.length < k) {
    return false
  }

  for (char in s) {
    if (!Object.hasOwn(occurrences, s[char])) {
      occurrences[s[char]] = 0
    }
    occurrences[s[char]] += 1
  }
  for (key in occurrences) {
    if (occurrences[key] % 2 !== 0) {
      oddsCount += 1
    }
  }

  return k >= oddsCount
}

console.log(canConstruct("annabelle", 2)) // true
console.log(canConstruct("leetcode", 3)) // false
console.log(canConstruct("true", 4)) // true

/* 
Pseudocode:
- Declare an empty object for storing character occurrences
- Initialize oddsCount as zero
- If the length of s is greater then k
  - Return false
- Iterate through the characters in the s string
  - If occurrences does not contain a key of the current character
    - Create key in occurrences of current character with a value of zero
  - Increment value of occurences at current character by one
- Iterate through the keys in occurrences
  - If the value of the current key is not even
    - Increase oddCount by one
- Return the boolean evaluation of k is greater than or equal to oddsCount
- Time complexity: O(n)
*/