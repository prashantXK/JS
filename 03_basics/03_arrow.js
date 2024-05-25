const user = {
    username: "kratos",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }



}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function valo(){       // this context works in object
//     let username = "kratos"
//     console.log(this.username)
// }
// valo()

//----------ARROW FUNCTION---------------

const valo = () => {
    let username = "kratos"
    console.log(this)
}

// valo()

// const addTwo = (num1,num2) => {
// return num1+num2    //explicit return
// }
// console.log(addTwo(3,5))


// const addTwo = (num1,num2) =>  num1+num2  //implicit return within same line / no curly braces /no need to write return keyword because theres only one line statement

const addTwo = (num1, num2) => ({ username: "kratos" })  //for object return -> wrap the object into parenthesis
// const addTwo = (num1,num2) =>  (num1+num2)  
console.log(addTwo(4, 5))


const myArray =[2,4,5,6,7,8]

myArray.forEach(() => {})
myArray.forEach(function(){})

