// NUMBERS

const score = 12542.421;

const balance = new Number(1452); // ye number hi hoga defined ho gya
console.log(balance);
console.log(score);
console.log(balance.toString());
console.log(balance.toFixed(2));
const anotherNumber = 264.12
console.log(anotherNumber.toPrecision(3));
const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN'));
// console.log();
// max value, max safe value, min value, min safe value

// MATH

// console.log(Math);
// console.log(Math.abs(-45)); // negative change into positive
// console.log(Math.round(4.54)); // round-off
// console.log(Math.ceil(4.6)); // upar max value
// console.log(Math.floor(4.875)); // max mini value
// console.log(Math.sqrt(25)); // square-root
// console.log(Math.min(4524,555, 545, 4548));

console.log(Math.random()); // 0 aur 1 ke bich ki value dega.
console.log((Math.random()*10) + 1); // *10 value ko shift krega aur +1 se 0 ko avoid kar diya

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min +1)) + min));





