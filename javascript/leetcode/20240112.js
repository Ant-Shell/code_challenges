/* 
Determine if String Halves Are Alike
https://leetcode.com/problems/determine-if-string-halves-are-alike/

You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.
*/

 // Solution #1
 const halvesAreAlike = (s) => {
  const stringFirstHalf = s.split('').slice(0, s.length/2)
  const stringSecondHalf = s.split('').slice(s.length/2)
  let firstHalfVowelCount = 0
  let secondHalfVowelCount = 0
  let vowels = /[AEIOUaeiou]/

  for (let i = 0 ; i < stringFirstHalf.length ; i++) {
    if (stringFirstHalf[i].match(vowels)) {
      firstHalfVowelCount++
    }
  }
  for (let i = 0 ; i < stringSecondHalf.length ; i++) {
    if (stringSecondHalf[i].match(vowels)) {
      secondHalfVowelCount++
    }
  }
  return firstHalfVowelCount === secondHalfVowelCount
} // Runtime: 53ms / Memory: 44.18 


// Solution #2
const halvesAreAlike2 = (s) => {
  const vowels = /[AEIOUaeiou]/g
  const stringFirstHalfVowelMatch = [...s.slice(0, s.length/2).matchAll(vowels)]
  const stringSecondHalfVowelMatch = [...s.slice(s.length/2).matchAll(vowels)]

  return stringFirstHalfVowelMatch.length === stringSecondHalfVowelMatch.length
} // Runtime: 55ms / Memory: 44.38 - "clever" solution was slower / used more memory

console.log(halvesAreAlike('book'))
console.log(halvesAreAlike('textbook'))

console.log(halvesAreAlike2('book'))
console.log(halvesAreAlike2('textbook'))

/* 
## Pseudocode: ##
Split the input sting into two halves
Loop through each half
Count the varables in each half
Compare the counts
Return the comparison value
*/