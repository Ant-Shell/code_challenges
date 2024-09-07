/* 

https://leetcode.com/problems/valid-palindrome/description/

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

*/


// const isPalindrome = (string) => {
//   let regex = /[^a-zA-Z0-9]/g
//   let formattedString = string.toLowerCase().replace(regex, '')
//   return formattedString === formattedString.split("").reverse().join("")
// } // Brute force


const isPalindrome = (string) => {
  let formattedString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  let i = 0
  let j = formattedString.length -1 
  
  while (j >= i) {
    if(formattedString[i] !== formattedString[j]) {
      return false
    }
    i++
    j--
  }
  return true
} // Two Pointers method


/* 
Pseudocode:
Format the string parameter all lowercase and remove any non-alphanumeric characters
Initialize i to zero and j to the length of the string parameter, minus 1 (since index starts at zero, want to capture the last character)
Do a while loop that will traverse the string parameter from both ends until is meets in the middle
If at any time formatted string at index i does not equal formatted string at index j, return false
Increment index i, decrement index j to continue the check
Return true if all letters of formatted string at index i match all letters of formatted string at index j
*/

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))