'https://www.hackerrank.com/challenges/three-month-preparation-kit-time-conversion/problem'

function timeConversion(s) {
  const morning = 'AM'
  const afternoon = 'PM'
  const hours = parseInt(s.slice(0, 2))
  const subHours = s.slice(2, 8)
  const hoursConversion_01 = '00'
  const hoursConversion_02 = parseInt(s.slice(0, 2)) + 12
  const hoursConversion_03 = '12'
  const morningHours = s.slice(0, 8)
  const noonHours = hoursConversion_03 + subHours
  const afternoonHours = hoursConversion_02.toString() + subHours
  const midnightHours = hoursConversion_01 + subHours
  
  if (s.includes(morning) && hours === 12) {
      return midnightHours
  } else if (s.includes(afternoon) && hours === 12) {
      return noonHours
  } else if (s.includes(morning)) {
      return morningHours
  } else {
      return afternoonHours
  }
}