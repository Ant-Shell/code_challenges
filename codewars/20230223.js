// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
  const numList = value.toString().split('')

  const narcissismCheck = numList.reduce((acc, curr) => {
    acc += Math.pow(curr, numList.length)
    return acc
  }, 0)

  return value === narcissismCheck ? true : false
}