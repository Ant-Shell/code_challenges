/* 
https://structy.net/problems/five-sort

five sort
Write a function, fiveSort, that takes in an array of numbers as an argument.

The function should rearrange elements of the array such that all 5s appear at the end.

Your function should perform this operation in-place by mutating the original array.

The function should return the array.

Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.
*/

// const fiveSort = (nums) => {
//   let fiveCount = 0

//   for (let i = 0 ; i < nums.length; i++) {
//     if (nums[i] === 5) {
//       nums.splice(i, 1)
//       i--
//       fiveCount++
//     }
//   }
//   while (fiveCount > 0) {
//     nums.push(5)
//     fiveCount--
//   }
//   return nums
// }

const fiveSort = (nums) => {
  let i = 0
  let j = nums.length - 1

  while (i < j) {
    if (nums[i] === 5) {
      swap(nums, i, j)
    } else {
      i++
    }

    if (nums[j] === 5) {
      j--
    }
  }
  return nums
}

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

console.log(fiveSort([12, 5, 1, 5, 12, 7])) // -> [12, 7, 1, 12, 5, 5] 
console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5])) // -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 
console.log(fiveSort([5, 5, 5, 1, 1, 1, 4])) // -> [4, 1, 1, 1, 5, 5, 5] 
console.log(fiveSort([5, 5, 6, 5, 5, 5, 5])) // -> [6, 5, 5, 5, 5, 5, 5] 
console.log(fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5])) // -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5]

/* 
Pseudocode:
- Initialize fiveCount as zero

# Note - This removes all 5s from the array and counts occurences:
- Loop through the nums array argument
  - If nums at index i strictly equals 5
    - Splice the nums array at index i by one
    - Decrement i
    - Increment fiveCount

# Note, this adds the 5s to the end of the nums array, in place:
- While fiveCount is greater than zero
  - Push the number 5 to then end of the nums array
  - Decrememt fiveCount

- Return nums
*/