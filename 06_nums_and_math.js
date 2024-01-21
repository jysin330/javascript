// Numbers ++++++++++

const score =400
console.log(score)
const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2)) // 100.00
const otherNumber = 123.63673
console.log(otherNumber.toPrecision(3)) //124(round off)

const hundreds = 100000000

console.log(hundreds.toLocaleString()) // US standard representation 100,000,000
console.log(hundreds.toLocaleString('en-IN')) // Indian standard representation 100,000,000

// Maths ++++++++++++

