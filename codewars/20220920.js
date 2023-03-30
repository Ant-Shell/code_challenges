// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

function DNAtoRNA(dna) {
  const dnaArray = dna.split("")
  
  const rnaArray = dnaArray.map(letter => {
    if(letter === "T") {
     return letter.replace("T", "U")
    } else {
      return letter
    }
  })
  return(rnaArray.join(""))
}