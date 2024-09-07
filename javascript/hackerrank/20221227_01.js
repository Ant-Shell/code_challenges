// https://www.hackerrank.com/challenges/three-month-preparation-kit-camel-case/problem

function processData(input) {
  const inputValueSplit = input.split('\r\n')
  
  const inputValueConversion = inputValueSplit.map(input => {
   const action = input.slice(0,1)
   const type = input.slice(2,3)
   const inputIsolate = input.substring(4)
   const inputSplit = input.substring(4).split(" ") 
   const separateWords = inputIsolate.split(/(?=[A-Z])/).join(" ").toLowerCase()
   
       if (action === "C" && type === "M") {
           let methodBuild = inputSplit[0]
           for (let i = 1 ; i < inputSplit.length ; i++) {
               methodBuild += inputSplit[i].charAt(0).toUpperCase() + inputSplit[i].slice(1)
           }
           return methodBuild + "()"
       } else if (action === "C" && type === "C") {
           let classBuild = ''
           for (let i = 0 ; i < inputSplit.length ; i++) {
               classBuild += inputSplit[i].charAt(0).toUpperCase() + inputSplit[i].slice(1)
           }
           return classBuild
       } else if (action === "C" && type === "V") {
           let variableBuild = inputSplit[0]
           for (let i = 1 ; i < inputSplit.length ; i++) {
               variableBuild += inputSplit[i].charAt(0).toUpperCase() + inputSplit[i].slice(1)
           }
           return variableBuild
       } else if (action === "S" && type === "M") { 
           return separateWords.slice(0, -2)
       } else {    
           return separateWords
       }
  })
   console.log(inputValueConversion.join(('\r\n'))) 
} 