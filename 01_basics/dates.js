let myDate = new Date();
console.log(myDate);

// BASICS
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// let myNewDate = new Date(2025, 0, 25, 12, 2, 45, 44)
// console.log(myNewDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myNewDate.getTime());

let NewMyDate = new Date();
console.log(NewMyDate.getFullYear());

console.log(NewMyDate.toLocaleDateString('default', {
    day: "numeric",
    month: "long"
}))


