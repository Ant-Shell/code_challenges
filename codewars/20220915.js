// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

var countBits = (n) => {
  let value = n
  let remainder = 0
  let output = 0
  let addOne = 0

  n % 2 === 0 ? null : addOne++
  
  do {
    value = value / 2
    remainder = value % 2
    output = output + Math.floor(remainder)
  } while (value > 0);
  
  return output + addOne
};