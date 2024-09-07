/* 
# Sentence Capitalization - 8/15/23

Write a function that accepts a string. The function should capitalize the first letter of each word in the string and return the result.

**Examples:**

`1. capitalize('a short sentence') --> 'A Short Sentence'
2. capitalize('a lazy fox') --> 'A Lazy Fox'
3. capitalize('look, it is working!') --> 'Look, It Is Working!'`

*/

const capitalize = (str) => {
  if (!str) return 'Please Enter Your String.'
  return str.split(" ").reduce((newStringList, word) => {
    if (word.length === 1) {
      newStringList.push(word.charAt(0).toUpperCase())
    } else {
      newStringList.push(word.charAt(0).toUpperCase() + word.slice(1, word.length))
    }
    return newStringList
  }, []).join(" ")
} // O(n)

console.log(capitalize('a short sentence'))
console.log(capitalize('a lazy fox'))
console.log(capitalize(`look, it is working`))
console.log(capitalize(`Hooray, it'\s working!`))
console.log(capitalize('a'))
console.log(capitalize(''))
console.log(capitalize())

/* 

Pseudocode:

Turn string argument into an array of words
Loop through array of words
Target the first letter in each word and capitalize it
Combine capitalized letter with the rest of each word
Add capitalized words into a separate array
Turn array of capitalized words back into a string
Return the updated string

*/