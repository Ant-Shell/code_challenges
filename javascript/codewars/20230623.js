// Moving Zeroes To The End
// https://www.codewars.com/kata/52597aa56021e91c93000cb0/
/* 

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

*/

const moveZeros = (arr) => {
  const prefix = []
  const postfix = []
  
  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] === 0) {
      postfix.push(arr[i])
    } else {
      prefix.push(arr[i])
    }
  }
  return prefix.concat(postfix)
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
console.log(moveZeros([ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ]))
console.log(moveZeros([ '8', '8', '1', '8', '1', '1', false, '0', 1, 5, {}, 2, {}, 3, 6, null, {}, +0, 3, '9', 9, '6', +0 ]))

/* 

Explanation:

Set variables “prefix” and “postfix” values to empty arrays
Loop through arr array
If the current index value is strictly equal to zero, push the value into the postfix array
If the current index value is not strictly equal to zero, push the value into the prefix array
Return the result of the prefix array concatenated with the postfix array

*/