//singleton -> any constructor

//object literals

// Object.create  //constructor method to crete objects - singleton


const mySymbol = Symbol("key1")    // declaring symbol


const jsUser = {  //object creation through literals
    name: "Kratos",
    "full-name" : "Kratos Gaming",
    [mySymbol]:"mykey1", //symbol should be in square brackets - correct syntax
    age: 18,
    location: "Delhi",
    email: "kratos@google.com",
    isLoggesIn: false,
    lastLoginDays: ["Mon", "Sat"]

}
// console.log(jsUser.age) //accessing objects

// console.log(jsUser["email"]) //2nd method accessing objects

// console.log(jsUser."full-name") // xx not working
// console.log(jsUser["full-name"])

// console.log(jsUser.mySymbol)
// console.log( jsUser[mySymbol]) //symbol is of string type

// jsUser.email = "kratos@chatgpt.com"

// Object.freeze(jsUser) //freeze the object, cant change the value


// jsUser.email = "kratos12@claude.com" //override values - change the values
// console.log(jsUser.email)
// console.log(jsUser)


//functionsss

jsUser.greeting = function(){
    console.log("WELCOME JS USER")
}
console.log(jsUser.greeting())



jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

