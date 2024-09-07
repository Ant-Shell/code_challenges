/*

https://www.codewars.com/kata/55908aad6620c066bc00002a

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

const XO = (str) => {
  let x_Occurance = 0
  let o_Occurance = 0

  for (let i = 0 ; i < str.length ; i++) {
  const charList = str.split("")[i].toLowerCase()
    if (charList === 'x') {
      x_Occurance++
    }
    if (charList === 'o') {
      o_Occurance++
    }
  }
  return x_Occurance === o_Occurance
} // O(n)

console.log(XO("ooxx"))
console.log(XO("xooxx"))
console.log(XO("ooxXm"))
console.log(XO("zpzpzpp"))
console.log(XO("zzoo"))

/* 
Pseudocode:
Initialize separate counters for occurances of "X" and "O"
Loop through the characters in the argument string
If an "X" or an "O" is encountered (case insensitive), increment the respective counter
After completely looping through the argument string, compare the counter values
Return true if the same, false if not
*/