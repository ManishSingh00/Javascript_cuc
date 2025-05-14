// singleton
// Object.create


// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Manish",
    "full name": "Manish Kumar Singh",
    [mySym]: "mykey1", // imp :- to represent symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) // only way to access if key is in form of string
// console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "manish@chatgpt.com"
// Object.freeze(JsUser)   // now changes will not reflect

JsUser.email = "manish@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());