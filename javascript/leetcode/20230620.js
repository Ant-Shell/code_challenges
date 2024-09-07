// Array Prototype Last
// https://leetcode.com/problems/array-prototype-last/
/* 

Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

You may assume the array is the output of JSON.parse.

*/

Array.prototype.last = function() {
  return this.length ? this[this.length-1] : -1  
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

const arr = [1, 2, 3]
const arr2 = []

console.log(arr.last());
console.log(arr2.last())

/* 

Explanation:

A ternary is used to verify if “this” (array) has length
If it does, we return the value of “this” at index “this.length -1” which provides the last index value
If it does not, we return a -1, per the description

*/