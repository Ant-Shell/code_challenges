/* 
https://leetcode.com/problems/number-of-equivalent-domino-pairs/description

Number of Equivalent Domino Pairs

Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

 

Example 1:

Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1
Example 2:

Input: dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
Output: 3
 

Constraints:

1 <= dominoes.length <= 4 * 104
dominoes[i].length == 2
1 <= dominoes[i][j] <= 9

*/

const numEquivDominoPairs = (dominoes) => {
  const ocurrences = {}
  let result = 0

  for (let i = 0 ; i < dominoes.length ; i++) {
    const sortedDomino = dominoes[i].sort((a,b) => a - b)
    if (!Object.hasOwn(ocurrences, sortedDomino)) {
      ocurrences[sortedDomino] = 0
    }
    ocurrences[sortedDomino] += 1
  }
  for (const key in ocurrences) {
    if (ocurrences[key] > 0) {
      result += ocurrences[key] * (ocurrences[key] - 1) / 2
    }
  }
  return result
}

console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]])) // -> 1
console.log(numEquivDominoPairs([[1,2],[1,2],[1,1],[1,2],[2,2]])) // -> 3

/* 
Pseudocode:
- Create a hashmap for each occurrence
- Iterate through the array
  - Sort each domino
  - Add key of sorted domino to occurrences hashmap on initial occurrence with value of zero
  - Increase value of key by one on each subsequent occurrence
- Iterate through keys in occurrence hashmap
  - If the value of occurrences at index key is greater than zero
    - Add occurrences at index key times occurrences at index key  minus one divided by 2 to the result
- Return result

- Time complexity: O(n)
- Space complexity: O(1)

- For more info, see:
  - https://www.geeksforgeeks.org/combinations-formula-with-examples/
  - https://www.geeksforgeeks.org/permutations-and-combinations/
*/