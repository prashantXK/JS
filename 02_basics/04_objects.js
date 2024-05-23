//singleton //constructor
// const tinderUser1 = {}   --> non singleton object
// console.log(tinderUser1)

const tinderUser = new Object()
tinderUser.id = "123xyz"
tinderUser.name = "Kratos"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "any@github.com",    //nested objects
    fullname: {
        userfullname: {
            firstname: "Kratos",
            lastname: "Gaming"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}
const obj2 = {
    4: "d",
    5: "e",
    6: "f"
}
const obj5 = {
    7: "g",
    8: "h",
    9: "i"
}

// 
const obj4 = { ...obj1, ...obj2 }  // spread  operator
const obj3 = Object.assign({}, obj1, obj2, obj5) //merging two objects , {}-> optional parameter
console.log(obj4)
console.log(obj3)


const users = [
    {
        id:1,
        email:"abc@gmail.com"    //----------array separated objects--------
    },
    {
        id:2,
        email:"abcc@gmail.com"
    },
    {
        id:3,
        email:"abcdc@gmail.com"
    },
]

console.log(users[2].email)

console.log(tinderUser);

console.log(Object.keys((tinderUser)));
console.log(Object.values((tinderUser)));
console.log(Object.entries((tinderUser)));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //property available or not