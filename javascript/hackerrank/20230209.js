// https://www.hackerrank.com/challenges/three-month-preparation-kit-diagonal-difference/problem

function diagonalDifference(arr) {
  let diagSum = 0
  let diagSumReverse = 0
  
  for (let i = 0 ; i < arr.length ; i++) {
    diagSum = diagSum + arr[i][i]
    diagSumReverse = diagSumReverse + arr[i].reverse()[i]
  }
  return Math.abs(diagSum - diagSumReverse)
}
