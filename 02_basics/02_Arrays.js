const marvelHeroes = ["thor", "ironman", "spiderman"]
const dcHeroes = ["superman", "batman", "flash"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const allHeroes = marvelHeroes.concat(dcHeroes);  //merge two arrays.
// console.log(allHeroes)

const allNewHeroes = [...marvelHeroes, ...dcHeroes]  //spread operator , spread out values
// console.log(allNewHeroes)

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const outputArr = anotherArr.flat(Infinity) //automatically spread out all array values //flat method
console.log(outputArr);




console.log(Array.isArray("Kratos"))
console.log(Array.from("Kratos"))  // convert all values inot array
console.log(Array.from({name:"Kratos"}))  //returns empty array. cannot convert directly into array in case of objects.


let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2, score3))  //of() -> returns a new array from set of elements