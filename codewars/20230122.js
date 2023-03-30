// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript

const parse = (data) => {
  const dataList = data.split("")
  const output = new Array()
  let value = 0

  dataList.forEach(char => {
   if (char === "i") {
     value++
   } else if (char === "d") {
     value--
   } else if (char === "s") {
     value = value * value
   } else if (char === "o") {
     output.push(value)
   }
  })
  return output
}