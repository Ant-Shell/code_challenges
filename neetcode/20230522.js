// Neetcode - Arrays & Hashing #2
// https://leetcode.com/problems/valid-anagram/

/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false
  const hashBuilder = (string) => {
    const sortedHashBuilder = string.split('').sort().reduce((acc, curr) => {
      Object.hasOwn(acc, curr) ? acc[curr]++ : acc[curr] = 1
      return acc
      }, {})
      return JSON.stringify(sortedHashBuilder)
    }
  return hashBuilder(s) === hashBuilder(t)
} // 109 ms

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))
console.log(isAnagram("leet", "teel"))

/* 
Explanation:
The isAnagram function takes string arguments “s” and “t” and does the following:
- If the string arguments “s” and “t” do not have the same length, return false

- The hashBuilder function takes “string” as an argument

- It has a variable named sortedHashBuilder, which is the result of the following:
  - Split, sort and reduce the “string” argument
  - In the reduce we use a ternary which determines if the accumulator (acc) 
    contains a property of the current value (curr). If it does, we increment the value 
    of the property value (which represents the occurrence count). If not, we add the 
    property/key and initialize the value to the number 1.
  - After looping through all indices of the split and sorted string, we return a JSON.stringified 
    version of sortedHashBuilder
    
- We then return a strict equality comparison of evoked functions hashBuilder(s) and hashBuilder(t), 
  which will be either true or false, depending on if both have the same letters as keys and numerical (count) values.
*/