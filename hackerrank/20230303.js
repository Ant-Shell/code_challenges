// https://www.hackerrank.com/challenges/three-month-preparation-kit-counting-valleys/problem

const countingValleys = (steps, path) => {
  const pathList = path.split("")
  let seaLevel = 0
  let valleyCount = 0 
  for (let i = 0 ; i < steps ; i++) {
    pathList[i] === 'D' ? seaLevel-- : seaLevel++
    if (seaLevel === 0 && pathList[i] === 'U') {
      valleyCount++
    }
  }
  return valleyCount
}