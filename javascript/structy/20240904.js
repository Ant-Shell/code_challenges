/* 
https://structy.net/problems/max-value

max value
Write a function, maxValue, that takes in array of numbers as an argument.

The function should return the largest number in the array.

Solve this without using any built-in array methods.

You can assume that the array is non-empty.
*/

const maxValue = (nums) => {
  return Math.max(...nums)
}

console.log(maxValue([4, 7, 2, 8, 10, 9]))