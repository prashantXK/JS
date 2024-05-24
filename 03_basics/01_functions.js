

function sayMyName() {
    console.log("a")
    console.log("b")
    console.log("c")
    console.log("d")
    console.log("e")
}
// sayMyName()


// function addTwoNumbers (number1, number2) {   //parameters
// console.log(number1+number2)

// }


function addTwoNumbers(number1, number2) {   //parameters
    //   let result = number1 + number2
    //   return result

    return number1 + number2


}

const result = addTwoNumbers(3, 5) //arguments
// console.log("Result: ", result);

function logInUserMsg(username = "kratos") {
    if (!username) {
        console.log("please enter a username")
        return
    }

    return `${username} just logged in`


}

// console.log(logInUserMsg("Kratos"))

// console.log(logInUserMsg())

//----------shopping cart-----------

//----------infinite number of arguments-----

function calculateCartPrice(val1, val2, ...num1) {    //rest operator (...)

    return num1

}

// console.log(calculateCartPrice(250, 399, 345, 1100, 2200))

const user = {
    username: "Kratos",
    price: 150
}

function handleObject(anyobject) {

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}

// handleObject(user)
handleObject({
    username: "Krtaos",
    price: 2345
})

const newArray = [200, 400, 560, 780]

function returnSecondValue(getArray) {

    return getArray[1]

}
// console.log(returnSecondValue(newArray))
console.log(returnSecondValue([200, 400, 560, 780]))
