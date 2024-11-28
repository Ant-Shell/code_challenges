'''
https://leetcode.com/problems/valid-anagram/description/

Valid Anagram

Given two strings s and t, return true if t is an 
anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

'''

class Solution:
   def isAnagram(self, s: str, t: str) -> bool:
    occurrence = {}

    for char in s:
        if char not in occurrence:
           occurrence[char] = 0
        occurrence[char] += 1

    for char in t:
        if char not in occurrence:
           occurrence[char] = 0
        occurrence[char] -=1

    for key in occurrence:
       if occurrence[key] != 0:
          return False
    
    return True

solution = Solution()

print(solution.isAnagram("anagram", "nagaram")) # -> True
print(solution.isAnagram("rat", "car")) # -> False

'''
Pseudocode:
- Declare an occurrence dict
- Iterate through the s string value and t string value respectively
  - Add key of s to occurrence dict and increment value by one
  - Add key of t to occurrence dict and decrement value by one
- Iterate through the keys in the occurrence dict
  - If any of the values do not equal zero, return False
- Return true as default value
'''