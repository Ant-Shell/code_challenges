'''
https://leetcode.com/problems/count-total-number-of-colored-cells/description/

There exists an infinitely large two-dimensional grid of uncolored unit cells. You are given a positive integer n, indicating that you must do the following routine for n minutes:

At the first minute, color any arbitrary unit cell blue.
Every minute thereafter, color blue every uncolored cell that touches a blue cell.

Example 1:

Input: n = 1
Output: 1
Explanation: After 1 minute, there is only 1 blue cell, so we return 1.
Example 2:

Input: n = 2
Output: 5
Explanation: After 2 minutes, there are 4 colored cells on the boundary and 1 in the center, so we return 5. 

Below is a pictorial representation of the state of the grid after minutes 1, 2, and 3.

## Note: See https://leetcode.com/problems/count-total-number-of-colored-cells/description/ for image ##

Constraints:

1 <= n <= 105

'''
import math

class Solution:
  def coloredCells(self, n: int) -> int:
    if n == 1:
      return 1
    
    # n^2
    left_side = math.pow(n, 2)

    # (n - 1)^2
    right_side = math.pow((n - 1), 2)

    return math.floor(left_side + right_side)

solution = Solution()

print(solution.coloredCells(1))
print(solution.coloredCells(2))
print(solution.coloredCells(3))
print(solution.coloredCells(4))
print(solution.coloredCells(5))
print(solution.coloredCells(30))

# Time complexity O(1)
# Space complexity O(1)

'''
## Pseudocode:
# Hint: Derive a mathematical relation between total number of colored cells and the time elapsed in minutes.

# Visual:
n =       1    2    3     4     5
squares = 1 -> 5 -> 13 -> 25 -> 41
Diff =      (4)  (8)  (12)  (16) 

# Derived formula: n^2 + (n - 1)^2 

n = 1
squares = 1

Answer: Return 1

--- 

n = 2
squares = 2^2 + (2-1)^2 = 4 + 1 = 5

---

n = 3
squares = 3^2 + (3 - 1)^2 = 9 + 4 = 13

---

n = 4
squares = 4^2 + (4 - 1)^2 = 16 + 9 = 25

--

n = 5
squares = 5^2 + (5 - 1)^2 = 25 + 16 = 41
'''