// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

const pigIt = (str) => {
  const strList = str.split(" ")

  const piggy = strList.map(word => {
    const startChar = word.charAt(0)
    const symbol = word.search(/[\w]/)
    return symbol === -1 ? word : word.substring(1) + startChar + "ay"
  })
  return piggy.join(" ")
}