/* 
https://structy.net/problems/uncompress

uncompress
Write a function, uncompress, that takes in a string as an argument.
The input string will be formatted into multiple groups according to the following pattern:

<number><char>

for example, '2c' or '3a'.

The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively.
You may assume that the input string is well-formed according to the previously mentioned pattern.

*/

const uncompress = (s) => {
  let i = 0
  let j = 0
  let result = ""

  for (j ; j < s.length ; j++) {
    let character = s[j]
    if (!parseInt(character)) {
      let number = parseInt(s.slice(i, j))
      result += character.repeat(number)
      i = j+1
    }
  }
  return result
}

console.log(uncompress("2c3a1t")) // -> 'ccaaat'
console.log(uncompress("3n12e2z")) // -> 'nnneeeeeeeeeeeezz'
console.log(uncompress("127y")) // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'

/* 
Pseudocode:
- Initialize i as zero, j as zero and result as an empty string
- Loop through the s string argument 
  - Assign character the value of s at index j
  - If the result turning character into an integer is falsy (tests for NaN)
    - Assign number the numerical value of s sliced at index i (starting), j (ending)
    - Append the result string with character, repeated number times
    - Assign i the value of j+1 (this will line up with the next numerical character in the s string)
- Return result
*/