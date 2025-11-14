// ARRAYS

const myArray = [0, 1, 2, 3, 4, 5, true, 'Manish'] // arrays are resizable, jo array me hai value hai unko elements bolte hai.
const myHero = ["Shaktiman", "Naagraj"]
const myHero2 = new Array(1,2,3,4)
// deep copy => Objects (refrence)
// shallow copy => Arryas (copy)

// console.log(myArray[7]);

// Methods

// console.log(myArray.length);
// console.log(myArray);

// myArray.push("MKumar") // add new value
// myArray.pop() // last value ko delete kr deta hai.
// myArray.unshift(9) // first placeholder par value dene ke liye.
// myArray.shift() // first placeholder ko remove kr deta hai.
// console.log(myArray.includes(5)) // array me ye value hai kya [ boolean type result]
// console.log(myArray.indexOf(5)); // array me value ka index dekhne ke liye
const newArray = myArray.join()
console.log(typeof newArray);

console.log(newArray);

// SLICE , SPLICE
/*
slice me array ki copy new variable me store ho jaati hai, original array pe koi effect nahi padta hai.
Splice me array ki jo range di hai wo original array me se nikal jaati hai.
*/


