/* 
https://structy.net/problems/most-frequent-char

most frequent char

Write a function, mostFrequentChar, that takes in a string as an argument.
The function should return the most frequent character of the string.
If there are ties, return the character that appears earlier in the string.
You can assume that the input string is non-empty.
*/

const mostFrequentChar = (s) => {
  const charCount = {}
  let returnChar = ""
  
  for (char in s) {
    if (!Object.hasOwn(charCount, s[char])) {
      charCount[s[char]] = 0
    }
    charCount[s[char]]++
  }
  for (key in charCount) {
    if (returnChar === "" || charCount[key] > charCount[returnChar]) {
      returnChar = key
    }
  }
  return returnChar
}

console.log(mostFrequentChar('mississippi'))

/* 
Pseudocode:
- Initialize an empty object charCount for keeping a character count (character: occurrences)
- Initialize an empty string returnChar for the character that will be returned
- Loop through the characters in the string
  - If charCount does not have a key that is string object at index char, create the key with a value of zero
  - Increment by one
- Loop through the keys of charCount object
  - If returnChar strictly equals and empty string, or if the value of charCount[key] is greater than
  charCount[returnChar], give returnChar the value of key
  Note: If there is a tie here, returnChar will remain the character that appears earlier in the string
- Return returnChar
*/