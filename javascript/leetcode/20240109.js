/* 
https://leetcode.com/problems/replace-all-digits-with-characters/description/

You are given a 0-indexed string s that has lowercase English letters in its even 
indices and digits in its odd indices.

There is a function shift(c, x), where c is a character and x is a digit, that returns 
the xth character after c.

For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.
*/

const shift = (c, x) => {
  const alphabet = [
                  'a','b','c','d','e','f','g','h',
                  'i','j','k','l','m','n','o','p','q',
                  'r','s','t','u','v','w','x','y','z'
                  ]

  let shiftIndex = parseInt(alphabet.indexOf(c)) + parseInt(x)
  return alphabet[shiftIndex]
}

 const replaceDigits = (s) => {
   let stringList = s.split('')

   return stringList.map((string, i) => {
     let previousVal = stringList[i-1]
     let currentVal = string

     if (!isNaN(currentVal)) {
       return shift(previousVal, currentVal)
     }
     return currentVal
   }).join('')
 }

console.log(replaceDigits("a1c1e1"))
console.log(replaceDigits("a1b2c3d4e"))

/* 
## Pseudocode: ##

Loop through the input string
If the value of the current index is a number:
    - Run the shift function on the index value and replace it with the outcome
Else:
    - Leave the letter in place
# Note: Shift function rules can be seen in the overview #
Do this until the loop has completed
Return the updated string value
*/
