/* 
https://leetcode.com/problems/modify-the-matrix/description/

Modify the Matrix

Given a 0-indexed m x n integer matrix matrix, create a new 0-indexed matrix called answer. Make answer equal to matrix, then replace each element with the value -1 with the maximum element in its respective column.

Return the matrix answer.

 

Example 1:


Input: matrix = [[1,2,-1],[4,-1,6],[7,8,9]]
Output: [[1,2,9],[4,8,6],[7,8,9]]
Explanation: The diagram above shows the elements that are changed (in blue).
- We replace the value in the cell [1][1] with the maximum value in the column 1, that is 8.
- We replace the value in the cell [0][2] with the maximum value in the column 2, that is 9.
Example 2:


Input: matrix = [[3,-1],[5,2]]
Output: [[3,2],[5,2]]
Explanation: The diagram above shows the elements that are changed (in blue).
 

Constraints:

m == matrix.length
n == matrix[i].length
2 <= m, n <= 50
-1 <= matrix[i][j] <= 100
The input is generated such that each column contains at least one non-negative integer.
*/

// Solution (with assistance)
const modifiedMatrix = (matrix) => {
  const answer = []
  const colMaxValues = []

  for (let i  = 0 ; i < matrix.length ; i++) {
    answer.push(matrix[i].slice())
  }

  for (let j = 0 ; j < matrix[0].length ; j++) {
    let maxVal = -Infinity
    for (let i = 0 ; i < matrix.length ; i++) {
      maxVal = Math.max(maxVal, matrix[i][j])
    }
    colMaxValues.push(maxVal)
  }

  for (let i = 0 ; i < matrix.length ; i++) {
    for (let j = 0 ; j < matrix[0].length ; j++) {
      if (answer[i][j] === -1) {
        answer[i][j] = colMaxValues[j]
      }
    }
  }

  return answer
}

console.log(modifiedMatrix([[1,2,-1],[4,-1,6],[7,8,9]])) // -> [[1,2,9],[4,8,6],[7,8,9]]
console.log(modifiedMatrix([[3,-1],[5,2]])) // -> [[3,2],[5,2]]
console.log(modifiedMatrix([[-1,0,0,2,2],[2,0,0,2,1],[4,3,2,1,1],[-1,-1,0,2,4],[1,0,3,-1,0]])) // ->
// [[4,0,0,2,2],[2,0,0,2,1],[4,3,2,1,1],[4,3,0,2,4],[1,0,3,2,0]]

/*
Pseudocode:
- Declare answer and colMaxValues as empty arrays

- Iterate through the matrix array (1st time)
  - For each row in matrix
    - Create a deep copy of the matrix array by pushing a slice of the row into the answer array

- Iterate through the matrix array (2nd time)
  - For each column index j from 0 to number of columns - 1
    - Declare maxVal as negative infinity
    - For each row index i from 0 to number of rows - 1
      - Reassign maxVal as the maximum between maxVal and matrix[i][j]
    - Push maxVal to colMaxValues

- Iterate through the matrix array (3rd time)
  - For each row index i from 0 to number of rows - 1
    - For each column index j from 0 to number of columns - 1
      - If answer[i][j] is -1
        - Update answer[i][j] to colMaxValues[j]

- Return answer

- Time complexity: O(m x n)
- Space complexity: O(m x n)

- Note: I found this to be very challenging, need to keep practicing ...
*/