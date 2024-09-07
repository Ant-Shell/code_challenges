/* 
https://leetcode.com/problems/to-be-or-not-to-be/

Write a function expect that helps developers test their code. 
It should take in any value val and return an object with the following two functions:

toBe(val) accepts another value and returns true if the two values === each other. 
If they are not equal, it should throw an error "Not Equal".

notToBe(val) accepts another value and returns true if the two values !== each other. 
If they are equal, it should throw an error "Equal".

*/

var expect = function(val) {
  return expectObj = {
   toBe: function(val2) {
     if(val === val2) {
       return true
     } else {
       throw new Error("Not Equal")
     }
   },
   notToBe: function(val3) {
     if (val !== val3) {
       return true
     } else {
       throw new Error("Equal")
     }
   }
 }
}

// console.log(expect(5).toBe(5)) // true
// console.log(expect(5).toBe(null)) // throws Error: Not Equal
// console.log(expect(5).notToBe(5)) // throws Error: Equal
// console.log(expect(5).notToBe(null)) // true

/* 
Pseudocode:
Create functions toBe and notToBe, per description
Return an object with functions toBe and notToBe
*/