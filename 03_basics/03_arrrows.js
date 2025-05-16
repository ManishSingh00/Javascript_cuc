const user = {
    username: "Manish",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // here this will print all the current context(all things inside the object)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()  now Sam will get printed instead of Manish bcz we have changed the context from manish to sam

// IMPORTANT:--
// console.log(this); //it will give {} here(nodeJS environment) but in browser console it will refer to window object



// function showThis() {
//   console.log(this);
// }

// showThis(); // In non-strict mode: global object




// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai() // output:- undefined



// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }  
// same output as above whuch is undefined


// Arrow function:-
const chai =  () => {
    let username = "hitesh"
    console.log(this.username); /// gives undefined
    console.log(this) /////gives {} but it normal function it gives global object
}
chai()




//ways of declaring arrow function:-
// const addTwo = (num1, num2) => {
//     return num1 + num2 // explicit return
// }
// const addTwo = (num1, num2) =>  num1 + num2 // IMPLICIT return
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) // in case of object, use of () is must


// console.log(addTwo(3, 4))