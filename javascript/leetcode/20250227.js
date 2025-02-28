/* 
https://leetcode.com/problems/number-of-valid-clock-times/description/

Number of Valid Clock Times

You are given a string of length 5 called time, representing the current time on a digital clock in the format "hh:mm". 

The earliest possible time is "00:00" and the latest possible time is "23:59".

In the string time, the digits represented by the ? symbol are unknown, and must be replaced with a digit from 0 to 9.

Return an integer answer, the number of valid clock times that can be created by replacing every ? with a digit from 0 to 9.
*/

const countTime = (time) => {
  let answer = 1
  let hourMark = 0
  let minuteMark = time.length -1
  const hours = time.slice(0,2)

  while (hourMark < minuteMark) {
    if (hourMark === 0 && time[hourMark] === '?') {
      if (time[hourMark+1] <= 3 || time[hourMark+1] === '?') {
        answer *= 3
      } else {
        answer *= 2
      }
    }

    if (hourMark === 1 && time[hourMark] === '?') {
      if (time[hourMark-1] < 2) {
        answer *= 10
      } else {
        answer *= 4
      }
    }

    if (minuteMark === 4 && time[minuteMark] === '?') {
      answer *= 10
    }

    if (minuteMark === 3 && time[minuteMark] === '?') {
      answer *= 6
    }

    hourMark += 1
    minuteMark -= 1
  }
  return hours === '??' ? answer * 2 : answer;
};

console.log(countTime("?5:00")); // 2
console.log(countTime("0?:0?")); // 100
console.log(countTime("??:??")); // 1440
console.log(countTime("?2:16")) // 3
console.log(countTime("07:?3")) // 6
console.log(countTime("2?:??")) // 240
console.log(countTime("??:2?")) // 240

/* 
Pseudocode:
- Initialze answer as value of 1
- Initialize hourMark as value of 0
- Initialize minuteMark as value of 4 (time.length -1)
- Declare hours as the time sliced from index 0 to index 2(-1)
- While hourMark is less than minuteMark:
  - If hourMark is equal to zero and time[hourMark] is equal to '?':
    - If time[hourMark+1] is less than or equal to three or time[hourMark+1] is equal to '?':
      - answer = answer * 3
        - Note: time[0] can be value of 0, 1, or 2
    - Else:
      - answer = answer * 2
        - Note: time[0] can be value of 0 or 1
  
  - If hourMark is equal to 1 and time[hourMark] is equal to '?':
    - If time[hourMark-1] is less than 2:
      - answer = answer * 10
      - Note: time[1] can be value of 0 -> 9
    - Else:
      - answer = answer * 4
      - Note: time[1] can be value of 0 -> 3

  - If minuteMark is equal to 4 and time[minuteMark] is equal to '?':
    - answer = answer * 10
    - Note: time[4] can be value of 0 -> 9

  - If minuteMark is equal to 3 and time[minuteMark] is equal to '?':
    - answer = answer * 6
    - Note: time[4] can be value of 0 -> 5

  - Increment hourMark by 1
  - Decrement minuteMark by 1

- If hour is equal to '??':
  - return answer * 2
- Else:
  - return answer
- Note: This accounts for 24 hours, if necessary
*/
