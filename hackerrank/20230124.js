'https://www.hackerrank.com/challenges/three-month-preparation-kit-sparse-arrays/problem'

const matchingStrings = (strings, queries) => {
  const returnVal = new Array()
  for (let i = 0 ; i < queries.length ; i++) {
    let query = queries[i]
    let counter = 0
      for (let j = 0 ; j < strings.length ; j++ ) {
        let string = strings[j]
        if (string === query) {
          counter++
        }
      }
    returnVal.push(counter)
  }
  return returnVal
}