//  Primitive
// 7types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.4
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id1 =Symbol("123")
const id2 =Symbol("123")
console.log(id1==id2)
const bigNumber =81232623732792223792292n

// Reference (Non Primitive)
// Array, Objects, Functions

const heroes =["saktiman","naagraj"]
let myObj ={
    name : "Jyoti Singh",
    age : 23
}

let myFunc = function(){

}
// console.log(typeof heroes)
// console.log(typeof myObj)
// console.log(typeof myFunc)
// console.log(typeof null)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive) and heap (non - primitive) memory!!

let myutube= "jyotisingh.com"
let anotherName = myutube
anotherName = "roshni"

console.log(anotherName, myutube)

let userOne ={
    email : "jyotisingh82000@gmail.com",
    age: 23
}
console.log(userOne.email)
let userTwo = userOne
userTwo.email ="roshnisingh882000@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)