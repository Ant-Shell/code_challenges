'''
https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

Find the Index of the First Occurrence in a String

Given two strings needle and haystack, return the index of the first occurrence of needle
in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.

'''

class Solution:
  def strStr(self, haystack: str, needle: str) -> int:
    for i in range(len(haystack)):
      bound = i + len(needle)
      if haystack[i:bound] == needle:
        return i
    return -1

solution = Solution()

print(solution.strStr("sadbutsad", "sad")) # -> 0
print(solution.strStr("leetcode", "leeto")) # -> -1
print(solution.strStr("a", "a")) # -> 0

'''
Pseudocode:
- Iterate through the haystack string
  - Declare bound variable as current index "i" plus the length of the needle string
  - If the slice of haystack from i until bound is equal to the value needle
    - Return current index "i"
- Return -1 as default
'''