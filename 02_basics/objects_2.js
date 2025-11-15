// Destructor a code

let users= {
    name: "manish",
    age: 15,
    mobileNo: 9876543210
}

console.log(users.name); // old method

// advance method

const {name: fname} = users
console.log(fname);

// In ReactJs Destructuring is normal aur recommanded

// API Calls
/*
json file bhi ek object type hi hota hai but isme key aur value dono string hoti hai.
*/

// // json format
// {
//     "name":"manish",
//     "age":"125",
//     "course":"codeminal"
// }

// // 2nd method of API's
// [
//     {},
//     {},
// ]