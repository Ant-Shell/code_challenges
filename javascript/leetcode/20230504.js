// https://leetcode.com/problems/valid-parentheses/

const isValid = (s) => {
  if (s.length % 2 !== 0) return false
  const characterStack = []

  for (let i = 0 ; i < s.length ; i++) {
    if (s.charAt(i) === "(") {
      characterStack.push("(")
    } else if (s.charAt(i) === "{") {
      characterStack.push("{")
    } else if (s.charAt(i) === "[") {
      characterStack.push("[")
    } else if (s.charAt(i) === ")") {
        if (characterStack[characterStack.length-1] === "(") {
          characterStack.pop()
        } else {
          return false
       }
    } else if (s.charAt(i) === "}") {
        if (characterStack[characterStack.length-1] === "{") {
          characterStack.pop()
        } else {
          return false
       }
    } else if (s.charAt(i) === "]") {
        if (characterStack[characterStack.length-1] === "[") {
          characterStack.pop()
        } else {
          return false
      }
    }
  } 
  return !characterStack.length
}

/*
Explanation:

First, if length of array is not an even number, return false
Next, initialize a stack (array)
Loop through the string
When an opening bracket is encountered, push it to the top (beginning) of the stack
When a closing bracket is encountered, check if the stack contains the opening for it && most it's the most recent character addition
- If yes, remove it from the stack
- If no, return false
- Account for numerous edge cases as well (Nested if statements - refactor opportunity)
*/