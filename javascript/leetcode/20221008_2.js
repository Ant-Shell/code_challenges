// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

const numberOfSteps = (num) => {
  let value = num
  let numOfSteps = 0
  while (value !== 0) {
    numOfSteps++
  if(value % 2 === 0 ) {
    value = value /2
  } else {
    value = value -1
  }
}
return numOfSteps
}