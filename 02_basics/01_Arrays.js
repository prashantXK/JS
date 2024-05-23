//array

const myArr = [0, 1, 2, 3, 4, 5];

const myHeroes = ["ironman", "aquaman", "spiderman"]


const myArr2 = new Array(1,2,3,4,5);

// console.log(myArr[3]);

//Array Methods

//  myArr.push(6)  //push -> add values in array
// console.log(myArr)

// myArr.pop() //pop -> removes last element from array
// console.log(myArr)

// myArr.unshift(8) //add an element at start of an array but it shift the other values.
// console.log(myArr)

// myArr.shift(); //remove the first element from the array
// console.log(myArr)


const newArr = myArr.join()
// console.log(myArr)
// console.log(typeof newArr)

// console.log(myArr.includes(4))
// console.log(myArr.indexOf(5))

// *********splice********* //**********slice*********


console.log("A", myArr);

const myNewArr1 = myArr.slice(1, 3) //include first element at index 1 and exclude last element at index 3

console.log(myNewArr1);
console.log("B", myArr);


const myNewArr2 = myArr.splice(1, 3) // splice manipulate the original array
console.log("C", myArr);
console.log(myNewArr2);

