'''
https://leetcode.com/problems/arranging-coins/description/

Arranging Coins

You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

 

Example 1:


Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.
Example 2:


Input: n = 8
Output: 3
Explanation: Because the 4th row is incomplete, we return 3.
 

Constraints:

1 <= n <= 231 - 1
'''

# Binary search
class Solution:
  def arrangeCoins(self, n: int) -> int:
    low = 0
    high = n

    while low <= high:
      mid = (low + high) // 2
      
      if mid * (mid + 1) / 2 <= n:
        low = mid + 1
      else:
        high = mid - 1

    return high


solution = Solution()

print(solution.arrangeCoins(5)) # -> 2
print(solution.arrangeCoins(8)) # -> 3

'''
Pseudocode:
- Initialize left pointer (low) as 0
- Initialize right pointer (high) as n
- While low is less than or equal to high:
  - Declare mid as low plus high divided by 2 and rounded down
  - If mid times mid plus one divided by 2 is less than or equal to n:
    - Reassign low as mid + 1
  - Else:
    - Reassign high as mid minus 1
- Return high

- Time complexity: O(log n)
- Space complexity: O(1)

- Note: I needed a lot of help on this one
'''