// objects

// singleton => constructor se jo banega

const mySym = Symbol('Key1')

// Object.create
const jsUser = {
    name: 'manish',
    [mySym]: 'manish',
    age: 18,
    location: "khedar",
    email: "google.com"
}

// console.log(jsUser.name); // not recomanded
// console.log(jsUser["name"]);
// console.log(typeof jsUser[mySym]);

// //change the value

// jsUser.email = "manish@manish.com"

// // lock the value

// Object.freeze(jsUser)
// jsUser.email = "amit@manish.com"
//  console.log(jsUser);
 
// add functions in obj

jsUser.greeting = function(){
    console.log(`Hello Js, ${this.age}`);
    
}
console.log(jsUser.greeting);

console.log(jsUser.greeting());

