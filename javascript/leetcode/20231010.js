/*
https://leetcode.com/problems/plus-one/

You are given a large integer represented as an integer array digits, where 
each digits[i] is the ith digit of the integer. The digits are ordered from 
most significant to least significant in left-to-right order. 
The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/

const plusOne = (digits) => {
  const numberString = digits.join("")
  const numberPlusOne = BigInt(numberString) + BigInt(1)

  return numberPlusOne.toString()
    .split("")
    .map(number => {
      return Number(number)
  })
}

console.log(plusOne([1,2,3]))
console.log(plusOne([4,3,2,1]))
console.log(plusOne([9]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))

/* 
Pseudocode:
Turn input array into an integer
Add one to the integer
Turn the integer back into an array
Return the array

Note: Needed to take BigInt into consideration
*/