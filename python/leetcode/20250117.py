'''
https://leetcode.com/problems/path-crossing/description/

Path Crossing

Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

Example 1:

Input: path = "NES"
Output: false 
Explanation: Notice that the path doesn't cross any point more than once.


Example 2:

Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice.
 

Constraints:

1 <= path.length <= 104
path[i] is either 'N', 'S', 'E', or 'W'.

'''

class Solution:
  def isPathCrossing(self, path: str) -> bool:
    x = 0
    y = 0

    positions = set()
    positions.add((x,y))

    for direction in path:
      if direction == 'N':
        y += 1
      if direction == 'S':
        y -= 1
      if direction == 'E':
        x += 1
      if direction == 'W':
        x -= 1

      current_position = (x,y)
      if current_position in positions:
        return True
      positions.add(current_position)
    return False



solution = Solution()

print(solution.isPathCrossing("NES")) # -> False
print(solution.isPathCrossing("NESWW")) # -> True


'''
Pseudocode:
- Initialize x as zero
- Initialize y as zero
- Declare positions as an empty set
- Add initial tuple of (x,y) to positions
- Iterate through the path string
  - Update x and y based on the current direction
  -  Declare curent_position as tuple with updated x and y values
    - If the curent_position is found in the positions set (not unique):
      - Return True
    - Else:
      - Add curent_position to the positions set
- Return False
'''