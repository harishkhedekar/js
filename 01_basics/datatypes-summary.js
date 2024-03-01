// Primitive

// 7 types : String, Number, Boolean, null, undefined,Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34562572919789090n

// Reference (Non Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "Naagraj", "doga"];

let myObj = {
    name: "Harish",
    age: 24,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myObj);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack Memory(Primitive), Heap Memory(Non-Primitive)

let myYotubeName = "XYZ"

let anotherName = myYotubeName
anotherName = "ABC"

console.log(myYotubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

