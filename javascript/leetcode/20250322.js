/* 
https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/description/

Find Nearest Point That Has the Same X or Y Coordinate

You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y). You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi). A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.

Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location. If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.

The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).

 

Example 1:

Input: x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]]
Output: 2
Explanation: Of all the points, only [3,1], [2,4] and [4,4] are valid. Of the valid points, [2,4] and [4,4] have the smallest Manhattan distance from your current location, with a distance of 1. [2,4] has the smallest index, so return 2.
Example 2:

Input: x = 3, y = 4, points = [[3,4]]
Output: 0
Explanation: The answer is allowed to be on the same location as your current location.
Example 3:

Input: x = 3, y = 4, points = [[2,3]]
Output: -1
Explanation: There are no valid points.
 

Constraints:

1 <= points.length <= 104
points[i].length == 2
1 <= x, y, ai, bi <= 104
*/

const nearestValidPoint = (x, y, points) => {
  let smallestDistance = Number.POSITIVE_INFINITY
  let smallestDistanceIndex = -1

  for (let i = 0 ; i < points.length ; i++) {
    const current = points[i]
    if (current[0] === x || current[1] === y) {
      const manhattanDistance = manhattanDistanceFinder(x, current[0], y, current[1])
      if (manhattanDistance < smallestDistance) {
        smallestDistance = manhattanDistance
        smallestDistanceIndex = i
      }
    }
  }
  
  return smallestDistanceIndex
}

const manhattanDistanceFinder = (x, x2, y, y2) => {
  return Math.abs(x - x2) + Math.abs(y - y2)
}

console.log(nearestValidPoint(3, 4, [[1,2],[3,1],[2,4],[2,3],[4,4]])) // 2
console.log(nearestValidPoint(3, 4, [[3,4]])) // -> 0
console.log(nearestValidPoint(3, 4, [[2,3]])) // -> -1

/* 
Pseudocode:
- Declare function nearestValidPoint with parameters x, y and points
- Delcare smallestDistance as positive infinity
- Declare smallestDistanceIndex as -1
- Iterate through the points array
  - Declare current as points[i]
  - If current[0] is strictly equal to x or current[1] is strictly equal to y
    - Declare manhattanDistance as the result of invoking manhattanDistanceFinder
      with arguments of x, current[0], y, and current[1]
    - If manhattanDistance < smallestDistance
      - smallestDistance is reassigned as manhattanDistance
      - smallestDistanceIndex is reassigned as i
- Return smallestDistanceIndex

- Time complexity: O(n)
- Space complexity: O(1)
*/