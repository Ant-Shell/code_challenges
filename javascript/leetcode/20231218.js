/*
You own a Goal Parser that can interpret a string command. 
The command consists of an alphabet of "G", "()" and/or "(al)" in some order. 
The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". 
The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.
*/

const interpret = (command) => {
  let returnStr = ''
  let commandList = command.split('')

 for (let i = 0 ; i < commandList.length ; i++) {
   if (commandList[i] === "G") {
     returnStr += "G"
   }
   if (commandList[i] + commandList[i+1] === "()") {
     returnStr+= "o"
   }
   if (commandList[i] + commandList[i+1] === "(a") {
      returnStr+= "al"
    }
  }
  return returnStr
}

/* 
## Pseudocode: ##
How to determine each string and value?
Initalize an empty string for a return value
Loop through split command string
Check indices looking forward in the array and concatenate a comparison string
If comparison string is a "G", "()", "(a" - add interpreted value to return string
Note: checking for just "(a" works in this case because the command can only consist of "G", "()" or "(al)"
*/

console.log(interpret("G()(al)")) // Goal
console.log(interpret("G()()()()(al)")) // Gooooal
console.log(interpret("(al)G(al)()()G")) // alGalooG