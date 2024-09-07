// https://www.codewars.com/kata/515e271a311df0350d00000f
// Square(n) Sum

/* 

Complete the square sum function so that it squares each number passed into it and then sums the results together.

*/

const squareSum = (numbers) => {
  return numbers.reduce((acc, curr) => {
    acc += Math.pow(curr, 2)
    return acc
  },0)
}


console.log(squareSum([1,2,2]))
console.log(squareSum([1,2]))
console.log(squareSum([0,3,4,5]))
console.log(squareSum([]))
console.log(squareSum([4,2,9]))
console.log(squareSum([11,5,22]))

/* 

Explanation:

Function “squareSum” takes an array of integers as an argument
We use the reduce array prototype to do the following:
Initialize the accumulator (acc) value to zero
Loop through the numbers array
At each index of the numbers array, add the squared value of the curr (current) index to the accumulator (acc)
Return the accumulator (acc)

Once the reduce has completed looping through the numbers array, the result of the squared sums is returned.

*/