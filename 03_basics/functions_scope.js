// functions scopes

let name1 = 10;
const name2 = 20
var name3 = 30 // global scopes

//block scope

if(true){
   let name1 = 10;
const name2 = 20
var name3 = 30 
}

// nested function

function one(){
   const username = "manish"

   function two(){
      const website = "youtube"
      console.log(username);
   }
   two()
}
one()