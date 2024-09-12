/* 
https://structy.net/problems/pair-product

pair product

Write a function, pair_product, that takes in a list and a target product as arguments. The function should return a tuple containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair whose product is the target.
*/

const pairProduct = (numbers, targetProduct) => {
  const previousNumbers = {}

  for (let i = 0 ; i < numbers.length ; i++) {
    const number = numbers[i]
    const complement = targetProduct / number
    if (complement in previousNumbers) {
      return [previousNumbers[complement], i]
    }
    previousNumbers[number] = i
  }
}

console.log(pairProduct([3, 2, 5, 4, 1], 8)) // -> [1, 3]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 5)) // -> [4, 5]
console.log(pairProduct([4, 6, 8, 2], 16)) // -> [2, 3]

/* 
Pseudocode:
- Initialize variable previousNumbers as an empty object (hash)
- Loop through the numbers array argument
  - Assign number variable the value of numbers at index i
  - Assign complement the value of targetProduct argument / number
  - If complement is found as a key in previousNumbers object
    - Return the array [value of previousNumbers with key complement, current index in the loop]
  - Add a new key/value pair to previousNumbers object: {number: index}
*/