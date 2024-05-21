/*Primitve Data Types 

--> String, Number, Boolean, BigInt, Null, Undefined, Symbol
*/

const score = 100
const scoreValue = 100.8

const isLoggesIn = false
const outsideTemp = null

let userEmail;

//symbol
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

//BigInt
const bigNumber = 9348982348308202239743242n



// Refrence Data Types (Non Primitve)

// -> Arrays, Object, Functions

const heroes = ["IronMan", "Batman" , "Superman"]

//objects
let myObj = {

    name:"Prashant",
    age:20,

}

//functions

const myFunction= function(){
    // console.log("Hello");
}
myFunction()

// console.log(typeof BigInt)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Memory

//Stack (Primitive Types) , Heap (Non-Primitive Types)

let myGamingname = "Kratos"

let anotherName = myGamingname
anotherName = "Gaming"

console.log(myGamingname)
console.log(anotherName)

let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "usemuse@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)