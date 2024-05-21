const name = "Kratos"
const repoCount = 50

// console.log(name + repoCount + " Value");

//string interpolation - mordern way
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const gameName = new String('RSEvil-Game')

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('l'));

//substring

const newString = gameName.substring(1,5);
// console.log(newString);

//slicee
const anotherString = gameName.slice(-9,5);
console.log(anotherString)

//trim
const newStringOne = "    kratos    "
console.log(newStringOne)
console.log(newStringOne.trim())

//replace
const url = "https://localhost:2456.com/kratos%20gaming"

console.log(url.replace('%20', '-'));
//includes
console.log(url.includes(('kraos')))

console.log(gameName.split('-'))


