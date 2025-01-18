/*

https://leetcode.com/problems/guess-number-higher-or-lower/description/

Guess Number Higher or Lower

We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

Example 1:

Input: n = 10, pick = 6
Output: 6


Example 2:

Input: n = 1, pick = 1
Output: 1


Example 3:

Input: n = 2, pick = 1
Output: 1
 

Constraints:

1 <= n <= 231 - 1
1 <= pick <= n

*/

const guessNumber = (n, pick) => {
  let start = 0;
  let end = n;
  
  while (start <= end) {
    let middle = Math.floor((start + end) / 2); // Important!
    let result = guess(middle, pick)

    if (result === 0) {
      return middle;
    }
    if (result > 0) {
      // look to the right
      console.log("Higher")
      start = middle + 1; // Important!
    }
    if (result < 0) {
      // look to the left
      console.log("Lower")
      end = middle - 1; // Important!
    }
  }
  return -1;
};

const guess = (num, pick) => { // guess api simulation
  if (num > pick) {
    return -1
  }
  if (num < pick) {
    return 1
  }
  if (num === pick) {
    return 0
  }
}

console.log(guessNumber(10, 6)) // -> 6
console.log(guessNumber(1, 1)) // -> 1
console.log(guessNumber(2, 1)) // -> 1

/* 
Pseudocode:
- Initialize start as zero
  - Lower end of the number range
- Initialize end as zero
  - Higher end of the number range
- While start is less than or equal to end
  - Declare middle as (start + end) / 2
    - Note: Round this down
  - Declare result as the result of calling the guess function with middle as an argument
  - If result is strictly equal to zero (guessed correctly)
    - Return middle
  - If result is greater then zero (guessed low)
    - Reassign start as middle + 1
  - If result is less than zero (guessed high)
    - Reassign end as middle - 1
- Return -1 as default (pick is outside of range)


- Note: I needed help on this one, study binary search:
  - https://javascript.plainenglish.io/binary-search-35801fd39047
  - https://www.youtube.com/watch?v=eVuPCG5eIr4

- Time complexity: O(Log(N))
  - Since each search is effectively cut in half, rather than a linear search
*/