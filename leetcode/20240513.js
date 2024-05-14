/* 
https://leetcode.com/problems/furthest-point-from-origin/

You are given a string moves of length n consisting only of characters 'L', 'R', and '_'. 
The string represents your movement on a number line starting from the origin 0.

In the ith move, you can choose one of the following directions:

move to the left if moves[i] = 'L' or moves[i] = '_'
move to the right if moves[i] = 'R' or moves[i] = '_'
Return the distance from the origin of the furthest point you can get to after n moves.
*/

const furthestDistanceFromOrigin = function(moves) {
  let leftCount = 0
  let rightCount = 0
  let spaceCount = 0

  for (let i = 0 ; i < moves.length ; i++) {
    moves[i] === 'L' ? leftCount++ :
    moves[i] === 'R' ? rightCount++ :
    spaceCount++
  }

  if (leftCount > rightCount) {
    leftCount += spaceCount
  } else if (leftCount < rightCount) {
    rightCount += spaceCount
  } else {
    return spaceCount
  }
  
  return Math.abs(rightCount - leftCount)
};

console.log(furthestDistanceFromOrigin("L_RL__R"))
console.log(furthestDistanceFromOrigin("_R__LL_"))
console.log(furthestDistanceFromOrigin("_______"))

/* 
Pseudocode:
Initialze a counter for the number of 'L' occurrences
Initialze a counter for the number of 'R' occurrences
Initialze a counter for the number of '_' occurrences
Loop through the moves string and increment the applicable counter, upon occurance of 'L', 'R', or '_'
If number of L's is > R's, add the number of '_' occurrences to 'L' total
If number of R's is > L's, add the number of '_' occurrences to 'R' total
If number of L's and R's is a tie, return the number of '_' occurrences
Return absolute value of (R's - L's)
*/