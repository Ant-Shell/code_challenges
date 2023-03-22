'https://www.hackerrank.com/challenges/three-month-preparation-kit-plus-minus/problem'

function plusMinus(arr) {
  const listLength = arr.length
  let positiveCount = 0
  let negativeCount = 0
  let zeroCount = 0
  arr.forEach(number => {
      if (number > 0) {
          positiveCount++
      } else if (number < 0) {
          negativeCount++
      } else {
          zeroCount++
      }
  })
  const proportionPositive = (positiveCount / listLength).toPrecision(6)
  const proportionNegative = (negativeCount / listLength).toPrecision(6)
  const proportionZero = (zeroCount / listLength).toPrecision(6)
  console.log(`${proportionPositive}\n${proportionNegative}\n${proportionZero}`)
}