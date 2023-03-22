'https://www.hackerrank.com/challenges/three-month-preparation-kit-divisible-sum-pairs/problem'

function divisibleSumPairs(n, k, ar) {
  const listLength = n
  const divisor = k
  const list = ar
  let counter = 0

  for (let i = 0 ; i < listLength ; i++) {
      for (let j = 0 ; j < listLength ; j++) {
          if(i != j && i < j) {
              if ((list[i] + list[j]) % k === 0) {
                  counter++
              } 
          }
      } 
  }
  return counter
}