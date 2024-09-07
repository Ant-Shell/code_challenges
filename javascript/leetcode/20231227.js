/* 
https://leetcode.com/problems/student-attendance-record-i/

You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

'A': Absent.
'L': Late.
'P': Present.
The student is eligible for an attendance award if they meet both of the following criteria:

The student was absent ('A') for strictly fewer than 2 days total.
The student was never late ('L') for 3 or more consecutive days.
Return true if the student is eligible for an attendance award, or false otherwise.

*/

const checkRecord = (s) => {
  const lateThreeTimesInARow = "LLL"
  const absence = /[A]/g
  const absenceList = s.match(absence)

  if (s.includes(lateThreeTimesInARow)) {
    return false
  }

  if (absenceList && absenceList.length >= 2) {
    return false
  }

  return true
}


console.log(checkRecord("PPALLP")) // true
console.log(checkRecord("PPALLL")) // false
console.log(checkRecord("PPALLPA")) // false
console.log(checkRecord("LALL")) // true
console.log(checkRecord("PPLPLPPPPLLPPLPLLLPLPPPPPPPPPP")) // false
console.log(checkRecord("LPLPPLLPPP")) // true

/*
## Peseudocode: ##
Turn the input string into an array
Loop through the array
Verify that the occurance of 'A' is less than two; if not, return false 
Verify that the occurance of 'L' does not happen three times consecutively; if not, return false 
Return true
*/

/*
First iteration:
const checkRecord = (s) => {
  const attendanceRecord = s.split("")
  let absenteeCount = 0
  let lateCount = 0

  for (let i = 0 ; i < attendanceRecord.length ; i++) {
    if (attendanceRecord[i] === 'A') {
      absenteeCount++
    } else if (attendanceRecord[i] === 'L') {
      lateCount++
    }

    if (absenteeCount >= 2) {
      return false
    }

    if (lateCount >= 2 && (attendanceRecord[i] === 'L' && attendanceRecord[i-1] === 'L' &&     attendanceRecord[i-2] === 'L')) {
      return false
    }
  }
  return true
}
*/