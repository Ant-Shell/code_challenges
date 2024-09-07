/* 
https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
*/


// ## Method 1 ##
/* 
const reverseString = (newString) => {
  let reversedString = ''

  for (let character of newString) {
    reversedString = character + reversedString
  }
  return reversedString
}

const reverseWords = (s) => {
  const wordsList = s.split(" ")

  const reversedWordList = wordsList.map(word => {
    return reverseString(word)
  })
  return reversedWordList.join(" ")
}
*/

// ## Method 2 ##
// const reverseWords = (s) => {
//   const wordsList = s.split(" ")

//   const reversedWordList = wordsList.map(word => {
//     let reversedWord = ''
//     let wordLength = word.length
    
//     while (wordLength+1 > 0) {
//       reversedWord += word.charAt(wordLength)
//       wordLength--
//     }
//     return reversedWord
//   })
//   return reversedWordList.join(" ")
// }

// ## Method 3 ##
const reverseWords = (s) => {
  const wordsList = s.split(" ")
  return wordsList.map(word => word.split("").reverse().join("")).join(" ")
};


console.log(reverseWords("Let's take LeetCode contest"))
console.log(reverseWords("Mr Ding"))

/* 
## Pseudocode: ##
Split the string by whitespace
For each word, reverse the word, and add/return an array of reversed words
Rejoin by whitespace
*/