/* 
https://structy.net/problems/compress

compress
Write a function, compress, that takes in a string as an argument.
The function should return a compressed version of the string where
consecutive occurrences of the same characters are compressed into the
number of occurrences followed by the character.
Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'

You can assume that the input only contains alphabetic characters.
*/

const compress = (s) => {
  let i = 0
  let j = 0
  const result = []

  while (i < s.length) {
    const letter = s[j]
    const previous = s[i]
    if (letter !== previous) {
      s.slice(i,j).length === 1 ?
      result.push(previous)
      :
      result.push(s.slice(i,j).length, previous)
      i = j
    } else {
      j++
    }
  }
  return result.join("")
}

console.log(compress('ccaaatsss')) // -> '2c3at3s'
console.log(compress('ssssbbz')) // -> '4s2bz'
console.log(compress('ppoppppp')) // -> '2po5p'
console.log(compress('nnneeeeeeeeeeeezz')) // -> '3n12e2z'
console.log(compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'))
// -> '127y'

/* 
Pseudocode:
- Initialize i with a value of zero, j with a value of one, and result as an empty array
- Start a loop that runs while i is less than the length of s (string argument)
- In the loop
  - Assign variable letter the value of s at index j
  - Assign variable previous the value of s at index i
  - If the value of letter does not strictly equal the value of previous
    - Is the length of slice of s at beginning i, and ending j strictly equal to 1?
      - If so, push previous into the result array
      - If not, push the length of slice of s at beginning i, and ending j + previous into the result array
      - Reassign i the value of j
  - Else
    - Increment j by one
- After the loop has completed, join the result array and return the resulting string
*/