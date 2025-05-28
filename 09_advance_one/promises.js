// In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an
// asynchronous operation and its resulting value.

// Why Use Promises?
// Promises help you handle asynchronous tasks more cleanly than using nested callbacks (callback hell),
//  such as:
// ->>Fetching data from an API
// ->>Reading files
// ->>Waiting for timers

// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//             console.log("Aync task completed")
//             resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed")
// })



// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"manish singh",user_email: "manishsingh@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })





// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "manish singh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour.then(function(user){
//     console.log(user);
//     return user.username;
// }).then((my_username)=>{
//     console.log(my_username)
// }).catch(function(error){
//     console.log(error)
// }).finally(function(){
//     console.log("The promise is either resolved or reject")
// });




const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){  // another method to consume promises
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch (error){
        console.log(error)
    }
};
consumePromiseFive()






