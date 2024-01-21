// Numbers ++++++++++

const score =400
// console.log(score)
const balance = new Number(100)
// console.log(balance)
// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) // 100.00
const otherNumber = 123.63673
// console.log(otherNumber.toPrecision(3)) //124(round off)

const hundreds = 100000000

// console.log(hundreds.toLocaleString()) // US standard representation 100,000,000
// console.log(hundreds.toLocaleString('en-IN')) // Indian standard representation 100,000,000

// Maths ++++++++++++

// console.log(Math.abs(-4))
// console.log(Math.round(4.3))
// console.log(Math.ceil(4.3))
// console.log(Math.floor(4.3))
// console.log(Math.min(4, 9, 30, 2, 4))
// console.log(Math.max(4, 9, 30, 2, 4))
console.log(Math.random())
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min +1)) + min)