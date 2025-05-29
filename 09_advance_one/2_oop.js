const user = {
    username : "manish singh",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

console.log(user.username)
console.log(user.getUserDetails());
console.log(this);


// Constructor:--
// A constructor function is a regular function used to create multiple objects with the same structure.
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    return this
}

const userOne = new User("Manish Singh", 12, true)
const userTwo = new User("Youtube", 11, false)
console.log(userOne);
console.log(userTwo);
