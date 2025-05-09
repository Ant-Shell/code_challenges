'''
https://leetcode.com/problems/flipping-an-image/description/

Flipping an Image

Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].
 

Example 1:

Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
Example 2:

Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
 

Constraints:

n == image.length
n == image[i].length
1 <= n <= 20
images[i][j] is either 0 or 1.
'''

from typing import List

# Solution version 1:
class Solution:
  def flipAndInvertImage(self, image: List[List[int]]) -> List[List[int]]:
    binary_values = {0: 1, 1: 0} # Used for inversion
    n = len(image)

    # Step 1 - Reverse
    for i in range(n):
      left = 0
      right = len(image) - 1

      while left < right:
        left_val = image[i][left]
        right_val = image[i][right]

        image[i][left] = right_val
        image[i][right] = left_val

        left += 1
        right -= 1

    # Step 2 - Invert
    for i in range(n):
      for j in range(n):
        image[i][j] = binary_values[image[i][j]]
    
    return image


solution = Solution()

print(solution.flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])) # -> [[1,0,0],[0,1,0],[1,1,1]]
print(solution.flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])) # -> [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]


'''
Pseudocode:
- Declare a hash for binary values (keys) and the opposite binary (values)
- Declare a variable n for length of rows and columns
- Flip the values in each row
- Invert the values in each row

- Time complexity: O(n^2)
- Space complexity: O(1)
'''

# Refactor (with assistance):
# class Solution:
#   def flipAndInvertImage(self, image: List[List[int]]) -> List[List[int]]:
#     for row in image:
#       left, right = 0, len(row) -1
#       while left <= right:
#         # Swap and invert in-place (I didn't know this was a thing, nice!)
#         row[left], row[right] = 1 - row[right], 1 - row[left]
#         left += 1
#         right -= 1
#     return image

# solution = Solution()

# print(solution.flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])) # -> [[1,0,0],[0,1,0],[1,1,1]]
# print(solution.flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])) # -> [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]