const getNoZeroIntegers = (n) => {
  let divisor = 2
  let roundedDivide = Math.floor(n / divisor)
  let remain = n - roundedDivide

  while (divisor < n) {
    if (!roundedDivide.toString().includes("0") && !remain.toString().includes("0")) {
      break
    }
    divisor += 1;
    roundedDivide = Math.floor(n / divisor);
    remain = n - roundedDivide;
  }
  return [roundedDivide, remain]
}

console.log(getNoZeroIntegers(2))
console.log(getNoZeroIntegers(11))
console.log(getNoZeroIntegers(10000))

/* 
Pseudocode:
- Intitialize divisor as 2
- Declare roundedDivide as the rounded down result of n divided by divisor
- Declare remain as the reslt of n minus roundedDivide
- While divisor is less than n
  - If the string version of roundedDivide and the string version of remain do not include a zero
    - Break out of the loop
  - Otherwise increment divisor by one, and reassign both roundedDivide and remain, taking into account the updated
    divisor
- Once the loop has been broken, return an array containing the values of roundedDivide and remain
*/

