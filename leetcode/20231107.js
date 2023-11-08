const slowestKey = (releaseTimes, keysPressed) => {
  let longestDuration = 0
  let buttonIndex = 0

  for (let i = 0 ; i < releaseTimes.length ; i++) {
    let duration = releaseTimes[i] - releaseTimes[i - 1]
    
    if (i === 0) {
      longestDuration = releaseTimes[i]
      continue
    }
    if (duration > longestDuration) {
      longestDuration = duration
      buttonIndex = i
    } else if (duration === longestDuration ) {
      keysPressed[buttonIndex] > keysPressed[i] ?
      buttonIndex
      :
      buttonIndex = i
    }
  }
  return keysPressed[buttonIndex]
}


console.log(slowestKey([9,29,49,50], "cbcd")) // c
console.log(slowestKey([12,23,36,46,62], "spuda")) // a
console.log(slowestKey([1,2], "ba")) // "b"
console.log(slowestKey([10,19,20,21,22,32], "abodzo")) // "o"

/* 

Pseudocode:

Initialize variable longestDuration = 0
Initilize variable buttonIndex
Loop through releaseTimes array
Record first index of releaseTimes array as longestDuration
Each subsequent index utilizes releaseTimes[i] - releaseTimes[i - 1] for its duration
Compare subtracted value with longestDuration - if greater, that number becomes longestDuration value && record the index as buttonIndex
Keep going until the end of the array
Return the buttonIndex value

*/