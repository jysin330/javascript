let obj = {
    rohan: 40,
    mohan: 50,
    rajiv: 60,
    ganesh: 70,
    shiva: 90
}
// for (let a in obj) {
//     console.log(`${a} marks is ${obj[a]}`);

// }
for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log(" The Makrs of " + Object.keys(obj)[i] + " is " + obj[Object.keys(obj)[i]])
}