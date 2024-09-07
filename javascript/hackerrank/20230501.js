// https://www.hackerrank.com/challenges/three-month-preparation-kit-mars-exploration/problem

const marsExploration = (s) => {
  if (s.length < 3 || s.length % 3 !== 0) {
    return "Invalid message"
  }

  return s.match(/.{1,3}/g).reduce((acc, curr) => {
    if (curr.charAt(0) !== 'S') {
       acc++
    }
    if (curr.charAt(1) !== 'O') {
      acc++
    }
    if (curr.charAt(2) !== 'S') {
      acc++
    }
    return acc
  }, 0)
}

/* 

Explanation:

Turn string into an array of strings, each string is three letters long (to match SOS length)

Loop through the array of strings and verify:
First character of each string in the array must be 'S'
Second character of each string in the array must be 'O'
Third character of each string in the array must be 'S'

If any of these cases do not match, increment a counter
Return the counter

Resource: https://bobbyhadz.com/blog/javascript-split-string-substrings-n-characters


*/