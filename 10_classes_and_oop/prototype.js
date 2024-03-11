// let myName = "hitesh     "
// let myChannel = "chai     "

// console.log(myName.truelength);

let myHeroes = ["Thor", "Spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",
    
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
myHeroes.hitesh()
myHeroes.heyHitesh()
// heroPower.heyHitesh()

//Inheritance

const User = {
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUSername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUSername.trueLength()

"hitesh".trueLength()
"iceTea".trueLength()