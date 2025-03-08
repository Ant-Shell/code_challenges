'''
https://leetcode.com/problems/rank-transform-of-an-array/description/

Rank Transform of an Array

Given an array of integers arr, replace each element with its rank.

The rank represents how large the element is. The rank has the following rules:

Rank is an integer starting from 1.
The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
Rank should be as small as possible.

Example 1:

Input: arr = [40,10,20,30]
Output: [4,1,2,3]
Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
Example 2:

Input: arr = [100,100,100]
Output: [1,1,1]
Explanation: Same elements share the same rank.
Example 3:

Input: arr = [37,12,28,9,100,56,80,5,12]
Output: [5,3,4,2,8,6,7,1,3]
 

Constraints:
  0 <= arr.length <= 105
  -10^9 <= arr[i] <= 109
'''

from typing import List

class Solution:
  def arrayRankTransform(self, arr: List[int]) -> List[int]:
    sorted_arr = sorted(set(arr))
    rank_value = 1
    rank_map = {}
    result = []

    for num in range(len(sorted_arr)):
      if sorted_arr[num] not in rank_map:
        rank_map[sorted_arr[num]] = rank_value
        rank_value +=1

    for num in range(len(arr)):
      result.append(rank_map[arr[num]])

    return result

solution = Solution()

print(solution.arrayRankTransform([40,10,20,30])) # -> [4,1,2,3]
print(solution.arrayRankTransform([100,100,100])) # -> [1,1,1]
print(solution.arrayRankTransform([37,12,28,9,100,56,80,5,12])) # -> [5,3,4,2,8,6,7,1,3]

'''
Pseudocode:
- Delare sorted_arr as a sorted set of arr
- Delcare rank_map as an empty dict
- Dcleare result as an empty list
- Initialize rank_value as 1
- Iterate through the sorted_arr list:
  - If sorted_arr[num] is not in the rank_map dict:
    - Add key of sorted_arr[num] to rank_map with value of rank_value
    - Increment rank_value by one
- Iterate through the arr list:
  - Append rank_map[arr[num]] to the result list
- Return result list

- Time complexity: O(NLogN)
- Space complexity: O(n)
'''