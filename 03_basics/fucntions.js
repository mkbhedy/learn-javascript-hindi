// functions
 
/*
ek package bnaate jisko multiple jagah par easily istemaal ksar sakte hai. usi ko functions bolte hai 

function function_name(parameter1, parameter2) {
logic and commands
}

function_name(arguments1, agruments2)

*/

// function addMyNumber(num1, num2) {
//     // let result = num1 + num2
//     // return result // result ko dene ke baad ka kuch bhi print nahi hota hai
//     return num1 + num2
// }
// let myResult = addMyNumber(2,3)
// console.log(myResult);

// rest and spred operator ...num1

const user = {
    name:"manish",
    age: 15
}
function myFun(anyobject){
    console.log(`name is: ${anyobject.name}, and age is: ${anyobject.age}`);
}
myFun(user) 
