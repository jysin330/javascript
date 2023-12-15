const obj = { a: 1, b: 2 };
const arr =[1,2,3,4,5,6]

const sumWithInitial =  Object.keys(obj).reduce((acc, key) => (acc[key] = obj[key], acc), {})
let arr1= arr.reduce(((acc, num)=>acc+num))
console.log(typeof arr1);
console.log(arr1);
console.log(sumWithInitial);

