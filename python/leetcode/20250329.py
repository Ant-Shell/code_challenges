'''
https://leetcode.com/problems/unique-number-of-occurrences/description/

Unique Number of Occurrences

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 

Constraints:

1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000
'''

from typing import List
from collections import Counter

class Solution:
  def uniqueOccurrences(self, arr: List[int]) -> bool:
    occurrences = Counter(arr)
    unique_occurrences = set()

    for key in occurrences:
      if occurrences[key] in unique_occurrences:
        return False
      else:
        unique_occurrences.add(occurrences[key])
    return True

solution = Solution()

print(solution.uniqueOccurrences([1,2,2,1,1,3])) # -> True
print(solution.uniqueOccurrences([1,2])) # -> False
print(solution.uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])) # -> True

'''
Pseudocode:
- Declare an iterable, occurrences, where keys are unique numbers in arr and values are
  number of occurrences of each key
- Declare unique_occurrences as an empty set
- Iterate through the keys in occurrences:
  - If occurrences[key] is found in unique_occurrences:
    - Return False
  - Else:
    - Add occurrences[key] to the unique_occurrences set
- Return True

- Time complexity: O(n)
- Space complexity: O(n)
'''