'https://www.hackerrank.com/challenges/three-month-preparation-kit-flipping-bits/problem'

function flippingBits(n) {
  const thirtyTwoBitString = n.toString(2).padStart(32, '0')
 
  const convertedthirtyTwoBitString = thirtyTwoBitString.split("").map(bit => {
    if (bit === '0') {
      return '1'
    } else {
      return '0'
    }
  })
  return parseInt(convertedthirtyTwoBitString.join(""), 2)
}