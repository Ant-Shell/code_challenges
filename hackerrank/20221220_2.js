// https://www.hackerrank.com/challenges/three-month-preparation-kit-mini-max-sum/problem

function miniMaxSum(arr) {
  const list_01 = new Array(...arr)
  const list_02 = new Array(...arr)
  let minSum = 0
  let maxSum = 0
  
  const minSort = list_01.sort((a, b) => {
      return a - b
  })
  
  const maxSort = list_02.sort((a, b) => {
      return b - a
  })
  
  for(let i = 0 ; i < list_01.length -1 ; i++) {
     minSum += list_01[i]
  }
  
  for(let i = 0 ; i < list_02.length -1 ; i++) {
      maxSum += list_02[i]
  }
  
  console.log(`${minSum} ${maxSum}`)
}