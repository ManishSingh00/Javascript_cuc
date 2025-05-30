// class User {
//     constructor(email,password){
//         this.email = email;
//         this.password = password;
//     }

//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(value){
//         this._email = value;
//     }

//     get password(){
//         return ${this._password}manish
//     }
//     set password(value){
//         this._password = value
//     }
// }

// const userOne = new User("manish@gmail.com","abcxyz")
// console.log(userOne.email)



// NOTES:---
// What are Getters and Setters?
// ***Getters allow you to access a property like you're reading a value,
// but behind the scenes it runs a function.

// ***Setters allow you to set a property value, but again,
// it runs a function instead of directly storing the value.
// ***They are used to control access to object properties.


// ⚠ Why use email and _password( before email and password)?
// Because if you used this.email inside the getter or setter, 
// it would recursively call itself and cause a stack overflow. Prefixing with _ avoids that problem.

// 🔐 What _ really means
// ***The underscore is:  Just a naming convention, not private(it does not mean that it shows a private property/varibale).
// **Used to signal that the property is "internal" or "private-ish" 
// and should not be accessed directly from outside.











// we read above that gettter and setter runs a function behind the scenes and we will see how these
// functions look like and how they works (It's like the manual version of using get and set inside 
// a class. This works the same way as using getters and setters in ES6 classes — but written using a
// more traditional, lower-level approach.)

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);




// Getter , setter with object literal::
const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);