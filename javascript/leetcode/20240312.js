/* 
https://leetcode.com/problems/reverse-string/

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

*/

// const reverseString = (s) => {
//   const returnString = []
//  for (let i = s.length-1 ; i >= 0 ; i--) {
//    returnString.push(s[i])
//  }
//   return returnString
// } // Invalid, not done in-place

const reverseString = (s) => {
  let start = 0
  let end = s.length-1 
 for (let i = start ; start < end ; start++) {
   let removedChar = s.pop()
   s.splice(start, 0, removedChar)
 }
  console.log(s)
}

console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString(["H","a","n","n","a","h"]))

/* 
Pseudocode:
The reverseString has a parameter of s, which is an array of character strings
I want to reverse the array in place, meaning I have to use a mutator array prototype method
There should be no return (void), since the array is changed in place

- I first initialize a “start” variable at zero, and an “end” variable at the end of the "s" array.
- Then, I loop through the "s" array, starting at “start”. While “start” is less than “end”, increment
the “start” value by one on each loop.
- In the loop, I pop the character from the end of the "s" array and splice it back in at the beginning of the array. This effectively reverses the string, in place.
*/