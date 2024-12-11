'''
https://leetcode.com/problems/longest-palindrome/description/

Given a string s which consists of lowercase or uppercase letters, return the length of the longest 
palindrome
 that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

Constraints:

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
'''


class Solution:
  def longestPalindrome(self, s: str) -> int:
    occurrences = {}
    odd_count = 0
    result = 0

    for i in range(len(s)):
      if s[i] not in occurrences:
        occurrences[s[i]] = 1
      else:
        occurrences[s[i]] += 1

    for key in occurrences:
      if occurrences[key] % 2 != 0:
        result += occurrences[key] - 1
        if odd_count < 1:
          odd_count = 1
      if occurrences[key] % 2 == 0:
        result += occurrences[key]

    return result + odd_count

solution = Solution()

print(solution.longestPalindrome("abccccdd"))
print(solution.longestPalindrome("a"))
print(solution.longestPalindrome("ccc"))
print(solution.longestPalindrome("bananas"))
print(solution.longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"))

'''
Pseudocode:
- Declare an empty dictionary for occurrences
- Initialize odd_count to zero
- Initialize result to zero
- Iterate through the s string argument
  - If s at index i is not in the occurrences dict:
    - Add key of s[i] to occurrences with value of one
  - Else:
    - Increment occurrences at key of s[i] by one
- Iterate through the keys in occurrences dict
  - If occurrences at index key is odd:
    - Add the value of occurrences at index key to result, minus one
    - Reassign odd_count to a value of one
  - If occurrences at index key is even:
    - Add the value of occurrences at index key to result
- Return result + odd_count
'''