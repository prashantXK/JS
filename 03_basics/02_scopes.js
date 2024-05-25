//xxxxxxxxx--SCOPES--xxxxxxxxxxx

// let x = 10
// const y = 20
// var z = 30

// var z = 300
let x = 300

if (true) {
    let x = 10
    const y = 20
    // var z = 30
    // console.log("Inner scope: ",x)
}

// console.log("Outside scope: ",x);  //error
// console.log(y);  //error
// console.log(z);     //30

// {}  // --curly braces with functions and statements are the scope

//---------NESTED SCOPES-----------

function one() {
    const username = "kratos"

    function two() {
        const website = "instagram"
        console.log(username)
    }
    // console.log(website)

    two()
}
// one()

if (true) {
    const username = "kratos"

    if (username === "kratos") {
        const website = " youtube"
        // console.log(username+ website);
    }
    // console.log(website)
}
// console.log(username)

//++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++
console.log(addOne(5))
function addOne(num) {
    return num + 1
}

addTwo(5)
const addTwo
    = function (num) {
        return num + 2
    }
