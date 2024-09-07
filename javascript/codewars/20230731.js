/* 

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

*/

const humanReadable = (seconds) => {
  const timeMap = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  
  if (seconds <= 59) {
    timeMap.seconds = seconds
  }
  if (seconds > 59 && seconds < 3600) {
    timeMap.minutes = Math.floor(seconds / 60)
    timeMap.seconds = seconds % 60
  }
  if (seconds >= 3600) {
    timeMap.hours = Math.floor(seconds / 3600)
    timeMap.minutes = Math.floor([seconds - timeMap.hours * 3600] / 60)
    timeMap.seconds = (seconds - timeMap.minutes * 60) % 60
  }

  const timeBuilder = () => {
    let hh = timeMap.hours.toString()
    let mm = timeMap.minutes.toString()
    let ss = timeMap.seconds.toString()
    let returnVal = ''

    hh.length < 2 ? returnVal += `${hh.padStart(2, '0')}:` : returnVal += `${hh}:`
    mm.length < 2 ? returnVal += `${mm.padStart(2, '0')}:` : returnVal += `${mm}:`
    ss.length < 2 ? returnVal += ss.padStart(2, '0') : returnVal += ss

    return returnVal
  }
  return timeBuilder()
}

console.log(humanReadable(120)) // 00:02:00
console.log(humanReadable(90)) // 00:01:30
console.log(humanReadable(3599)) // 00:59:59
console.log(humanReadable(3600)) // 01:00:00
console.log(humanReadable(3661)) // 01:01:01
console.log(humanReadable(45296)) // 12:34:56
console.log(humanReadable(359999)) // 99:59:59

/*

Explanation:
Utilize if statements to build timeMap parameter values for hours, minutes and seconds
Utilize timeBuilder function to build a human readable string, based on hh:mm:ss formatting

*/