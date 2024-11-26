
'''
https://leetcode.com/problems/length-of-last-word/description/

Length of Last Word

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.


Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.


Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

'''

class Solution:
  def lengthOfLastWord(self, s: str) -> int:
    words = s.split()
    return len(words[len(words)-1])
    
solution = Solution()

print(solution.lengthOfLastWord("Hello World")) # -> 5
print(solution.lengthOfLastWord("   fly me   to   the moon  ")) # -> 4
print(solution.lengthOfLastWord("luffy is still joyboy")) # -> 6

'''
Pseudocode:
- Initialize variable named words as a list of substrings derived from s
- Return the length of the substring in the words list at the last index
- Note: It was a rough day today, a win is a win
'''