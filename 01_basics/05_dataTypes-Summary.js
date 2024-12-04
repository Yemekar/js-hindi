// primitive
// 7 types : String , Number , Boolean, null, undefined, Symbol, BigInt
// JavaScript dynamic typed or statically typed language? => dynamic typed
const score = 200
const scoreValue = 2.2
 const isLoggedIn = false
 const outsideTemp= null
 let userEmail;
const id =  Symbol('234')
const anotherId = Symbol('234')
// console.log(id=== anotherId);
const bigNumber = 12325345236274575n






// Reference (Non primitive)
// Array, Objects, Functions 
const heros = ["shaktiman", "nagraj", "doga"]
const myObj = {
    name: "dy",
    age:24,
}



const myFunction =function(params) {
    console.log("hello world");
    
}
console.log(typeof bigNumber);
console.log(outsideTemp);
console.log(myFunction);

//******************************
//Stack memory (Primitive), Heap Memory (Non Primitive)

let myYoutubename = "dychinnel"
let anothername = myYoutubename
anothername ="chaiaurcode"
console.log(anothername);
console.log(myYoutubename);



let userOne = { 
    email: "yd@gamil.com",
    upi:"user@ybl"
}

let user2 = userOne

user2.email = "google@gmail.com"

console.log(userOne.email);
console.log(user2.email);

