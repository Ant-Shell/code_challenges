/* 
https://structy.net/problems/sum-numbers-recursive

sum numbers recursive
Write a function sumNumbersRecursive that takes in an array of numbers and returns
the sum of all the numbers in the array.

All elements will be integers. Solve this recursively.
*/

const sumNumbersRecursive = (numbers) => {
  if (numbers.length === 0) {
    return 0
  }
  return numbers[0] + sumNumbersRecursive(numbers.slice(1))
}

console.log(sumNumbersRecursive([5, 2, 9, 10])) // -> 26
console.log(sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1])) // -> 1
console.log(sumNumbersRecursive([])) // -> 0
console.log(sumNumbersRecursive([1000, 0, 0, 0, 0, 0, 1])) // -> 1001
console.log(sumNumbersRecursive([700, 70, 7])) // -> 777
console.log(sumNumbersRecursive([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1])) // -> -55
console.log(sumNumbersRecursive([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))  // -> 0

/* 
- Check if the length of the numbers input array equals zero
  - If so, return zero
- Return numbers at index zero + the recursive call of sum_numbers_recursive with argument of
numbers array sliced from index 1
*/