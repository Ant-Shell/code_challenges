// https://leetcode.com/problems/fizz-buzz/

const fizzBuzz = (n) => {
  const resultList = []
    for (let i = 1 ; i <= n ; i++ ) {
      if ( i % 3 === 0 && i % 5 === 0 ) {
        resultList.push("FizzBuzz")
      } else if ( i % 3 === 0 ) {
        resultList.push("Fizz")
      } else if ( i % 5 === 0 ) {
        resultList.push("Buzz")
      } else {
        resultList.push(i.toString())
      }
    }
    return resultList
};