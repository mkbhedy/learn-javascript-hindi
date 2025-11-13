// STRINGS

/*
strings ko ham single quote aur double quotes ke sath likh sakte hai
*/

let name = "Manish"
const repoCount = 50
// console.log(name + repoCount + "values"); // outdated

// now using backticks

let nameIs = "manish"
// console.log(`hello my name is ${nameIs}`);

const anotherString = new String("Manish")
// console.log(`this is another string ${anotherString}`);
// console.log(typeof anotherString);
// console.log(anotherString[2]);


// STRING METHODS

let gameName = "Super-Mario     "
// console.log(gameName.length); // total length of string
// console.log(gameName.toUpperCase()); // For UPERCASE string
// console.log(gameName.toLowerCase()); // For LOWERCASE string
// console.log(gameName.trim()); // Remove spaces from starting and Ending point
// console.log(gameName.includes("Manish")); // string me text include hai ya nahi uske liye
console.log(gameName.startsWith("Super"));

console.log(gameName); // Stack value not changed original value
console.log(gameName.charAt(5)); // print index value
console.log(gameName.indexOf("M")); // print index
console.log(gameName.substring(2, 4));
console.log(gameName.slice(2, 5));
// console.log(gameName.slice(-2, 3));
console.log(gameName.split("-")); // string ko split karke array me de deta hai.
// console.log(gameName);

