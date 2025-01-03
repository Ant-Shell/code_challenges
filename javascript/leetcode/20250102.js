/* 
  Count Vowel Strings in Ranges
  You are given a 0-indexed array of strings words and a 2D array of integers queries.

  Each query queries[i] = [li, ri] asks us to find the number of strings present in the range li to ri 
  (both inclusive) of words that start and end with a vowel.

  Return an array ans of size queries.length, where ans[i] is the answer to the ith query.

  Note that the vowel letters are 'a', 'e', 'i', 'o', and 'u'.


  Example 1:

  Input: words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]]
  Output: [2,3,0]
  Explanation: The strings starting and ending with a vowel are "aba", "ece", "aa" and "e".
  The answer to the query [0,2] is 2 (strings "aba" and "ece").
  to query [1,4] is 3 (strings "ece", "aa", "e").
  to query [1,1] is 0.
  We return [2,3,0].


  Example 2:

  Input: words = ["a","e","i"], queries = [[0,2],[0,1],[2,2]]
  Output: [3,2,1]
  Explanation: Every string satisfies the conditions, so we return [3,2,1].


  Constraints:

  1 <= words.length <= 105
  1 <= words[i].length <= 40
  words[i] consists only of lowercase English letters.
  sum(words[i].length) <= 3 * 105
  1 <= queries.length <= 105
  0 <= li <= ri < words.length
*/

const vowelStrings = (words, queries) => {
  const vowels = new Set(["a", "e", "i", "o", "u"])
  const prefixSum = []
  const result = []
  let count = 0
  

  for (let i = 0 ; i < words.length ; i++) {
    if (vowels.has(words[i].charAt(0)) && vowels.has(words[i].charAt(words[i].length - 1))) {
      count += 1
    }
    prefixSum.push(count)
  }

  for (let i = 0 ; i < queries.length ; i++) {
    let left = queries[i][0]
    let right = queries[i][1]

    if (left === 0) {
      result.push(prefixSum[right])
    } else {
      result.push(prefixSum[right] - prefixSum[left - 1])
    }
  }
  return result
}

console.log(vowelStrings(["aba", "bcb", "ece", "aa", "e"],[[0, 2],[1, 4],[1, 1],])) // -> [2,3,0]
console.log(vowelStrings(["a","e","i"], [[0,2],[0,1],[2,2]])) // -> [3,2,1]

/* 
Pseudocode:
- How can I detect whether a string begins and ends with a vowel or not?
  - Create a set of vowels and verify based on the first character of the string and the last character of the string
- After a timeout when attempting to brute force, I learned that creating a prefix sum helps find the
number of strings that contain vowels
  - Itereate through the words array
  - Create a count variable and increment based on when a vowel string is encountered
  - Push the count at the curent iteration to the prefixSum array
- How can I iterate through queries array and detect the ranges of words[i]?
  - Capture the left and right value at the current iteration
  - If the left value is zero, push the value of prefixSum at index "right" to the result array
  - Else, push the evaluation of prefixSum index "right", minus prefixSum index ("left" - 1) to the result array
- Return result

- Note: I needed a lot of help on this one, need to come back and study
- For refrence: https://leetcode.com/problems/count-vowel-strings-in-ranges/editorial/
*/
