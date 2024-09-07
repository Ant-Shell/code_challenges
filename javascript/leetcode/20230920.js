// https://leetcode.com/problems/optimal-partition-of-string

var partitionString = function(s) {
  let substringObj = {}
  let sList = s.split('')
  let counter = 1

  for (let i = 0 ; i < sList.length ; i++) {
    if (!Object.hasOwn(substringObj, counter)) {
      substringObj[counter] = [sList[i]]
    } else if (Object.hasOwn(substringObj, counter) && !substringObj[counter]
      .includes(sList[i])) {
      substringObj[counter].push(sList[i])
    } else {
      counter++
      substringObj[counter] = [sList[i]]
    }
  }
  return Object.keys(substringObj).length
}; // O(n^2)

console.log(partitionString("abacaba"))
console.log(partitionString("ssssss"))

/* 
Pseudocode:

Create a hash where keys are numbers (converted to strings?) and values are (array of?) characters
For each key, add a character from string input and verify if the array includes the next character
- If it does not, add a new character
- If it does, make a new key and add the next character
Return the value of the last key as an integer
(Might be able to use a counter instead)

Notes: 
Tried using Set as propety values, but it was slower
There's definitely a way to refactor without actually storing values in an object
*/