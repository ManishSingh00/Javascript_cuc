// let myName = "Manish     "
// let myLastName = "Singh     "

// console.log(myName.trueLength);

// I want to make this trueLength as a method which returns the actual 
// length of strings always.....


let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.manish = function(){ // this is present in all object
    console.log(`manish is present in all objects`);
}

Array.prototype.heymanish = function(){
    console.log(`manish says hello`);
}

// heroPower.manish()
// myHeros.manish() // same output because arrays also inherit from Object in JS

//Let’s visualize the prototype chain of both:
// heroPower (a plain object): heroPower → Object.prototype → null
// myHeros (an array): myHeros → Array.prototype → Object.prototype → null


myHeros.heymanish()
heroPower.heymanish()  // it will give error bcz heropower is an object



// inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  // If a property is not found in TASupport, JS will look in TeachingSupport (PROTOTYPAL INHERITANCE)
}

Teacher.__proto__ = User



// MODERN SYNTAX:--
Object.setPrototypeOf(TeachingSupport, Teacher) //"If a property is not found in TeachingSupport, go look in Teacher."

let anotherUsername = "ChaiAurCode     "

// answer of question arises in first paragraph:--
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
