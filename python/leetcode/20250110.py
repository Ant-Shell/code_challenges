'''
https://leetcode.com/problems/word-subsets/description/

Word Subsets


You are given two string arrays words1 and words2.

A string b is a subset of string a if every letter in b occurs in a including multiplicity.

For example, "wrr" is a subset of "warrior" but is not a subset of "world".
A string a from words1 is universal if for every string b in words2, b is a subset of a.

Return an array of all the universal strings in words1. You may return the answer in any order.

Example 1:

Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
Output: ["facebook","google","leetcode"]


Example 2:

Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["l","e"]
Output: ["apple","google","leetcode"]
 

Constraints:

1 <= words1.length, words2.length <= 104
1 <= words1[i].length, words2[i].length <= 10
words1[i] and words2[i] consist only of lowercase English letters.
All the strings of words1 are unique.
'''

from typing import List
from collections import Counter

class Solution:
  def wordSubsets(self, words1: List[str], words2: List[str]) -> List[str]:
    max_frequency = {}
    result = []

    for word in words2:
      count = Counter(word)
      for char, freq in count.items():
        max_frequency[char] = max(max_frequency.get(char, 0), freq)

    for word in words1:
      count = Counter(word)
      is_valid = True
      for key, freq in max_frequency.items():
          if count.get(key, 0) < freq:
            is_valid = False
            break
        
      if is_valid: 
        result.append(word)

    return result
          

solution = Solution()

print(solution.wordSubsets(["amazon","apple","facebook","google","leetcode"], ["e","o"]))
# -> ["facebook","google","leetcode"]

print(solution.wordSubsets(["amazon","apple","facebook","google","leetcode"], ["l","e"]))
# -> ["apple","google","leetcode"]

'''
Pseudocode:
- Declare max_frequency as an empty dict
- Declare result as an empty array
- Iterate through the words2 list:
  - Declare count as a Counter for word
    - Iterate through the key (char) / value (freq) pairs in count.items()
      - Assign max_frequency at index of char as the max between the value retreived from
      char key from max_frequency (or zero if the key does not exist), and the value of freq
- Iterate through the words1 list:
  - Declare count as a Counter for word
  - Initialize is_valid as True
  - Iterate through the key / value (freq) pairs in max_frequency.items():
    - If the value retreived from key from count (or zero if the key does not exist) is
    greater than the value of freq:
      - Reassign is_valid to False
      - break out of this iteration
  - If is_valid is truthy:
    - Append the word of the current iteration to the result list
- Return the result list

- Time complexity O(N + M)
- Note: I needed a lot of help to get to this answer, but a win is a win
'''