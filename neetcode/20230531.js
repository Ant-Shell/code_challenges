// Neetcode - Arrays & Hashing Problem 4
// https://leetcode.com/problems/group-anagrams


/* 
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

const groupAnagrams = (strs) => {
  const hashObj = {}

  for (let i = 0 ; i < strs.length ; i++) {
    const letters = strs[i].split("").sort().join()
    Object.hasOwn(hashObj, letters) ? hashObj[letters].push(strs[i]) : hashObj[letters] = [strs[i]]
  }
  return Object.values(hashObj)
} // 134 ms


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))

/* 

Explanation:

Function “groupAnagrams” takes one argument, “strs”, which is an array of strings; lowercase from a -z

The contents of function “groupAnagrams” is as follows:

First, we create the variable “hashObj”, which is an empty object

Next, we loop through the “strs” array of strings

Inside of the loop, for each string in the array we create a variable called “letters”, which is “strs” at the current index, which is then split, sorted and joined. This allows for easier comparison of the strings.

We then use a ternary to verify if “hashObj” has a key which is consisted of “letters”
If it does, we push the string at the current index into the array value of property “letters” in the “hashObj”
If it does not, we create property “letters” in the “hashObj” and give it a value of an array which contains the string at the current array value

After the loop has completed, we return the values of the “hashOb”j; this gives us the formatting of the return value that is expected

*/