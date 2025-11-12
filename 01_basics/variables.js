const accountId= 123; // Value change nahi ho sakti.
let accountName="Manish K"; // changable
var accountPassowrd="123"; // outdated
accountCity="Hisar"; // bina koi variable diye bhi reserver kar sakte hai but its not recomanded
let accountState; // Future me variable ko use krne ke liye
console.log(accountState); // output undefined


// Investigation
// const, var, let pre-defined variables hai.

// accountId=2 // not allowed
// console.log(accountId);

/* 
Prefer not to use var
Because of issue in block scope and functional scope.
*/

accountName="Amit"
accountPassowrd="121212"
accountCity="Barwala"

console.table([accountId, accountName, accountPassowrd, accountCity])