// Primitive DataType

/* 7 Type
Call by Value

String
Number
Boolean
Null
Undefined
Symbol // kisi bhi value ko unique bnaane ke liye
BigInt // bahut badi values ke liye

*/
const name = "Manish"
const rollNo = 25
const isLoggedIn = false
const currentTemp = null
let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 3154415644645153456n

// Non-Primitive DataType (Reference)
/*
Arryas
Objects
Functions
*/

const heros = ["Spiderman", "Shaktiman", "Doga", "Naagraj"] // Array
const names = {
    name: "Manish",
    class: 12,
    rollNo: 2145
} // Object

const myID = function(){
console.log("Hello World");
}
// console.log(myID);



// Javascript is a dynamictally Typed.
// Another brother is TypeScript


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// MEMORY
// ++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (primitive) => copy milta hai value ka
// Heap (non-primitive memory) => reference milta hai value ka, original value change hota hai.

let myBlogName = "manishjangra.dev"
let anotherName = myBlogName
console.log(anotherName);
anotherName = "chaiaurcode"
console.log(anotherName);

let user = {
    email: "manishjangra97@gmail.com",
    upi: "manishjangra97@upi"
}
let userTwo = user;
userTwo.email = "amit@gmail.com"
console.log(user.email);
console.log(userTwo.email);

