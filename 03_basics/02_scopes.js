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
    console.log("Inner scope: ",x)
}

console.log("Outside scope: ",x);  //error
// console.log(y);  //error
// console.log(z);     //30

// {}  // --curly braces with functions / statements are the scope


