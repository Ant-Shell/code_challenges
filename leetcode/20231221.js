/* 
https://leetcode.com/problems/baseball-game/

You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

An integer x.
Record a new score of x.
'+'.
Record a new score that is the sum of the previous two scores.
'D'.
Record a new score that is the double of the previous score.
'C'.
Invalidate the previous score, removing it from the record.
Return the sum of all the scores on the record after applying all the operations.

The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.
*/

const calPoints = (operations) => {
  const record = []

  for (let i = 0 ; i < operations.length ; i++) {
    let current = operations[i]
    if (!isNaN(current)) {
      record.push(parseInt(current))
    }
    if (current === "+") {
      record.push(parseInt(record[record.length - 2] + record[record.length - 1]))
    }
    if (current === "D") {
      record.push(parseInt(record[record.length - 1] *2))
    }
    if (current === "C") {
      record.pop()
    }
  }
  return record.reduce((sum, num) => {
    sum+= num
    return sum
  },0)
}

console.log(calPoints(["5","2","C","D","+"]))
console.log(calPoints(["5","-2","4","C","D","9","+","+"]))
console.log(calPoints(["1","C"]))

/*
## Pseudo Code: ##
Need to add integers to a list (record), based on the operations list param
interger x adds a new score to the record
"+" adds a new score to the record that is sum of the two previous scores
"D" adds a new score to the record that is doulbe the previous score
"C" removes the previous score

After applying all of the operations, sum all of the records and return that value
*/