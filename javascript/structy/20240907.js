/* 
https://structy.net/problems/anagrams

anagrams
Write a function, anagrams, that takes in two strings as arguments.
The function should return a boolean indicating whether or not the strings are anagrams.
Anagrams are strings that contain the same characters, but in any order.
*/

const anagrams = (s1, s2) => {
  const s1Sorted = s1.split("").sort().join("")
  const s2Sorted = s2.split("").sort().join("")
  return s1Sorted === s2Sorted
}

console.log(anagrams('restful', 'fluster')) // true
console.log(anagrams('cats', 'tocs')) // false

/* 
Pseudocode:
- Split the strings into an array of substrings
- Sort the substrings
- Rejoin the substrings into a sorted string
- Compare the sorted substrings
*/