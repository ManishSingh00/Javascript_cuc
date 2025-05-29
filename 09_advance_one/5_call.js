function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);




// summmary:---
// 🔍 What .call(this, username) is doing:
// You are using .call() to explicitly set this inside SetUsername() to the current instance being created by new createUser(...).
// So this line:   SetUsername.call(this, username);
// Makes sure that:
// this.username = username runs on the new object being created by createUser
// So that chai.username ends up being "chai"


// 🧨 What happens if you remove .call(this, username) and just write:
// SetUsername(username); // ❌ No this binding
// Then:
// SetUsername() is still called
// But it runs as a regular function, not bound to the object being created
// In non-strict mode, this becomes the global object (window in browsers)
// In strict mode, this inside SetUsername() is undefined
// So this line:
// this.username = username; // inside SetUsername
// fails to attach username to your chai object — because this doesn't point to it.