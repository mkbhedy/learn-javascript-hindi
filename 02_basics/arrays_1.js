const marvelHero = ["thor", "spidemen" , "ironman"]
const dcHero = ["superman", "flash", "batman"]
// const anotherHero = marvelHero.concat(dcHero)
// console.log(anotherHero);

// const allNewHeros = [...marvelHero, ...dcHero] //spread operator
// console.log(allNewHeros);

const anotherArr = [1,2,3,[2,3,4],8,4,[7,6,5]]
const realAnotherArr = anotherArr.flat(Infinity) // array me array ko simple bnaane ke liye
console.log(realAnotherArr);

console.log(Array.isArray("Manish"));
console.log(Array.from("Manish"));
console.log(Array.from({name: "Manish"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));




