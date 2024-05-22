//Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());  // date in string
// console.log(myDate.toDateString()) //proper date with weekday , month , date  and year
// console.log(myDate.toJSON()); //json format
// console.log(typeof myDate);  //object type

// let myCreatedDate = new Date(2024, 4, 22, 5, 2) // can create our own date
// console.log(myCreatedDate.toDateString()) // months starting from 0 in  js
// console.log(myCreatedDate.toLocaleDateString())
// console.log(myCreatedDate.toLocaleString())

let myCreatedDate = new Date("05-22-2024")  // mm-ddyy
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// // console.log(myCreatedDate.getTime())
// console.log(Math.round(Date.now()/1000)); //in second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear()) //full year
console.log(newDate.getMonth() + 1);   //get month

// `${newDate.getDate()} and the time is `  //string interpolation

newDate.toLocaleString('default',{
weekday:"long",
hour:"2-digit"


}) 



