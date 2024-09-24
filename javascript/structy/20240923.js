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
- Initialize variable i as zero and j as the length of the nums array argument minus one
- While i is less than j
  - If nums at index i strictly equals 5
    - Call the swap function with nums, i and j as arguments
  - Else
    - Increment i
  - If nums at index j strictly equals 5
    - Increment j
- Return nums

The swap function has arr, i and j as parameters and swaps the values of arr at index i and
arr at index j, in place
*/