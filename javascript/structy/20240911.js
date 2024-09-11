/* 
https://structy.net/problems/pair-sum

pair sum
Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.
*/

const pairSum = (numbers, targetSum) => {
  const previous = {}

  for (let index in numbers) {
    let complement = targetSum - numbers[index]
    
    if (Object.hasOwn(previous, complement)) {
      return [parseInt(previous[complement]), parseInt(index)]
    }
    previous[numbers[index]] = index
  }
}

console.log(pairSum([3, 2, 5, 4, 1], 8)) // -> [0, 2]
console.log(pairSum([9, 9], 18)) // -> [0, 1]
console.log(pairSum([6, 4, 2, 8 ], 12)) // -> [1, 3]

/*
Pseudocode:
- Initialize an hashmap object named previous
- Loop through the numbers array and for each value, subtract the targetSum by the current value in the loop; assign to complement variable
- If compliment appears as a key in previous
  - Return an array that is the value of: [previous with key compliment, index of the current iteration in the numbers loop]
- Add a key/value pair to previous: {current value in the loop: current index in the loop}
*/
