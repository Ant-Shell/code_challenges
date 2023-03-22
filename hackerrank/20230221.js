'https://www.hackerrank.com/challenges/three-month-preparation-kit-countingsort1/problem'

const countingSort = (arr) => {
  const occurances = new Array(arr.length).fill(0)
    for (let i = 0 ; i < arr.length ; i++) {
      occurances[arr[i]] +=1
    }
    return occurances.length <= 100 ? occurances : occurances.slice(0,100)
  }