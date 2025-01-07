/* 
https://leetcode.com/problems/string-matching-in-an-array/description

String Matching in an Array

Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

A substring is a contiguous sequence of characters within a string

Example 1:

Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.

Example 2:

Input: words = ["leetcode","et","code"]
Output: ["et","code"]
Explanation: "et", "code" are substring of "leetcode".

Example 3:

Input: words = ["blue","green","bu"]
Output: []
Explanation: No string of words is substring of another string.
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 30
words[i] contains only lowercase English letters.
All the strings of words are unique.
*/


const stringMatching = (words) => {
  let start = 0
  const end = words.length
  const result = []

  while (start < end) {
    let currentWord = words[start]
    for (let i = 0 ; i < words.length ; i++) {
      if (start === i) {
        continue
      }
      if (words[i].includes(currentWord) && !result.includes(currentWord)) {
        result.push(currentWord)
      }
    }
    start += 1
  }
  return result
}

console.log(stringMatching(["mass","as","hero","superhero"])) // -> ["as","hero"]
console.log(stringMatching(["leetcode","et","code"])) // -> ["et","code"]
console.log(stringMatching(["blue","green","bu"])) // -> []
console.log(stringMatching(["leetcoder","leetcode","od","hamlet","am"])) // -> ['leetcode', 'od', 'am']

/* 
Pseudocode:
- Initialize start as zero
- Declare end as the length of words
  - While start is less than end
    - Declare currentWord as words at index start
    - Iterate through the words array
      - If start strictly equals the current index
        - Continue to next iteration
          - Note: This ensures there is no overlap between the current word and its occurrence in words array
      - If the words array at the current index includes currentWord and the result array does not include currentWord
        - Push current word into the result array
    - Increment start by one
- Return the result array
- Note: This is a brute force that is O(n^2); would be worth studying KMP algorithm for better time complexity
  - https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/
*/