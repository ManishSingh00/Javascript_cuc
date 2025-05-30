// all this is after ES6
//  1. ES6 Class Syntax
class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }

    encryptPassword(){
        console.log(`${this.password}abc`)
    }
    changeUsername(){
        console.log(`${this.username.toUpperCase()}`)
    }
}

const chai = new User("chai", "chai@gmail.com", "123")

chai.encryptPassword();
chai.changeUsername();
// What’s Happening:
// 1.class User is a syntactic sugar over the traditional prototype-based system.(IMPORTANT)
// 2.The constructor initializes the instance.
// 3.Methods like encryptPassword() and changeUsername() are automatically added to the prototype of the class.
// 4.This is a cleaner and more readable syntax for defining objects and methods.





// 2.Using function constructors and prototypes (pre-ES6 way)
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

