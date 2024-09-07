/* 
https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/

A sentence is a list of tokens separated by a single space with no leading or trailing spaces. Every token is either a positive number consisting of digits 0-9 with no leading zeros, or a word consisting of lowercase English letters.

For example, "a puppy has 2 eyes 4 legs" is a sentence with seven tokens: "2" and "4" are numbers and the other tokens such as "puppy" are words.
Given a string s representing a sentence, you need to check if all the numbers in s are strictly increasing from left to right (i.e., other than the last number, each number is strictly smaller than the number on its right in s).

Return true if so, or false otherwise.
*/


const areNumbersAscending = (s) => {
  const tokensList = s.split(" ")
  let previousNum = 0
  let currentNum = 0

  for (let i = 0 ; i < tokensList.length ; i++) {
   let currentVal = tokensList[i]
    if (!isNaN(currentVal)) {
      previousNum = parseInt(currentNum)
      currentNum = parseInt(currentVal)
    }
    console.log(currentNum, previousNum)
    if (currentNum <= previousNum && (currentNum !== 0 && previousNum !== 0)) {
      return false
    }
  }
  return true
}

console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles"))
console.log(areNumbersAscending("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"))
console.log(areNumbersAscending("hello world 5 x 5"))
console.log(areNumbersAscending("1 fish 2 fish red fish blue fish"))
console.log(areNumbersAscending("a puppy has 2 eyes and 4 legs"))

/* 
Pseudocode:

Turn each word into an index value of an array
Loop through the array and verify if the index value is a number
If it is not, continue
If it is, verify that the number is greater than the previously detected number
    If it is, continue
    If it is not, return false
Return true
*/