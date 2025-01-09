/* 
https://leetcode.com/problems/counting-words-with-a-given-prefix

Counting Words With a Given Prefix

You are given an array of strings words and a string pref.

Return the number of strings in words that contain pref as a prefix.

A prefix of a string s is any leading contiguous substring of s.


Example 1:

Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2
Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".


Example 2:

Input: words = ["leetcode","win","loops","success"], pref = "code"
Output: 0
Explanation: There are no strings that contain "code" as a prefix.
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length, pref.length <= 100
words[i] and pref consist of lowercase English letters.
*/

// const prefixCount = (words, pref) => {
//   const prefixLength = pref.length
//   let count = 0

//   for (let i = 0 ; i < words.length ; i++) {
//     const prefix = words[i].slice(0, prefixLength)
//     if (prefix === pref) {
//       count += 1
//     }
//   }
//   return count
// } // O(N * M)

const prefixCount = (words, pref) => {
  return words.filter(word => word.startsWith(pref)).length
} // Refactor

console.log(prefixCount(["pay","attention","practice","attend"], "at"))
console.log(prefixCount(["leetcode","win","loops","success"], "code"))

/* 
Pseudocode 1:
- Declare prefixLength as the length of pref
- Initialize count as zero
- Loop through the words array
  - If words at current index first two letters is equal to perf
    - Increment count by one
- Return count
*/


/* 
Pseudocode 2:
- Filter words in the words array that start with pref
- Return the length of the filtered array
- Note: Today I learned String prototype startsWith is a thing
- Note 2: Learn about tries
  - https://www.geeksforgeeks.org/introduction-to-trie-data-structure-and-algorithm-tutorials/
*/