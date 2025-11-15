// singleton const tinderUser = new Object();
const tinderUser = {}
tinderUser.id = "M12340"
tinderUser.name = "Manish"
tinderUser.isLoggedIn = false
// console.log(tinderUser);


const regulareUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "manish",
            lastName: "kumar"
        }
    }
}

console.log(regulareUser.fullName.userFullName.firstName);

// combine objects

const obj = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}
const obj3 = Object.assign({},obj,obj2, obj4)
console.log(obj, obj2); // ye combine nahi hua hai.
const spreadValue = {...obj, ...obj2}
console.log(spreadValue);

console.log(obj3);

// maximum users ka data array ke andar object ki form me aata hai.

const userHello = [
    {
        id: 2,
        name:"Manish"
    },
    {
        id: 3,
        name:"amit"
    }
]
console.log(userHello[0].name)

// agar hame sabhi keys leni hai to uske liye hame keys ko seprate krna pdega.
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // iski help se hamne sirf keys ko access kar lioya hai, ab iske upar ham loop lgaa dete hai.
console.log(Object.values(tinderUser)); // values ko nikalne ke liye
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));





