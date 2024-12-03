'''
https://leetcode.com/problems/longest-substring-without-repeating-characters

Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

'''

class Solution:
  def lengthOfLongestSubstring(self, s: str) -> int:
    if len(s) == 0: return 0
    if len(s) == 1: return 1

    start = 0
    substring_count = 0
    longest_substring_count = 0
    encountered_characters = set()

    while start < len(s):
      for i in range(start, len(s)):
        if s[i] not in encountered_characters:
          encountered_characters.add(s[i])
          substring_count += 1
        else:
          longest_substring_count = max(longest_substring_count, substring_count)
          encountered_characters.clear()
          substring_count = 0
          break

      start +=1

    return longest_substring_count

solution = Solution()

print(solution.lengthOfLongestSubstring("abcabcbb")) # -> 3
print(solution.lengthOfLongestSubstring("bbbbb")) # -> 1
print(solution.lengthOfLongestSubstring("pwwkew")) # -> 3
print(solution.lengthOfLongestSubstring("ohomm")) # -> 3
print(solution.lengthOfLongestSubstring(" ")) # -> 1
print(solution.lengthOfLongestSubstring("jbpnbwwd")) # -> 4


'''
Pseudocode:
- If the length of s is zero, return zero
- If the length of s is one, return one
- Initialize start variable as zero
- Initialize substring_count variable as zero
- Initialize longest_substring_count variable as zero
- While start is less than the length of s:
  - Iterate through the list of characters, ranging from start until the end of the string:
    - If s at index i is not in the set
      - Add the character to the set
      - Increment substring_count by one
    - Else:
      - Reassign longest_substring_count to the max between longest_substring_count and substring_count
      - Clear the encountered_characters set
      - Re initialize substring_count to zero
      - break out of the for loop
  - Increment start by one
- Return longest_substring_count
'''