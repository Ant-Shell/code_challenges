// Codewars kata - Detect Pangram
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

/* 

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

// const isPangram = (string) => {
//   const occuranceHash = {}
//   const regex = /[A-Z]/g;
  
//   for (let i = 0 ; i < string.length ; i++) {
//     const upperLetter = string[i].toUpperCase()
//     if (upperLetter.match(regex)) {
//       Object.hasOwn(occuranceHash, upperLetter) ? 
//       occuranceHash[upperLetter] ++ :
//       occuranceHash[upperLetter] = 1
//     }
//   }
//   return Object.keys(occuranceHash).length === 26
// }

const isPangram = (string) => {
  const stringList = string.split("")
  const regex = /[A-Z]/g;
  
  const occuranceHash = stringList.reduce((acc, curr) => {
    let upperLetter = curr.toUpperCase()
    if (upperLetter.match(regex)) {
      Object.hasOwn(acc, upperLetter) ? 
      acc[upperLetter] ++ :
      acc[upperLetter] = 1
    }
    return acc
  }, {})
  return Object.keys(occuranceHash).length === 26
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("This is not a pangram"))

/* 
Explanation:

Loop through each letter in input string
Create hashmap of occuring letter and frequency
Get the array length of the hashmap keys
If array length === 26, return true ; if not, return false

*/