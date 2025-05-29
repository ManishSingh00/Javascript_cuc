// In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an
// asynchronous operation and its resulting value.

// Why Use Promises?
// Promises help you handle asynchronous tasks more cleanly than using nested callbacks (callback hell),
//  such as:
// ->>Fetching data from an API
// ->>Reading files
// ->>Waiting for timers

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
            console.log("Aync task completed")
            resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed")
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"manish singh",user_email: "manishsingh@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})





const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "manish singh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then((my_username)=>{
    console.log(my_username)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("The promise is either resolved or reject")
});




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




async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');  // fetch will return a promise, so here response is a promise object
        const data = await response.json()   // This calls the json() method on the Response object.
        //response.json() reads the body stream, converts it into a string, then parses it using JSON.parse() internally.
        //So you don’t need to use JSON.parse() yourself here — fetch handles it.
        console.log(data);
        // console.log(typeof data)
    } catch (error) {
        console.log("E : error")
    }
}

 getAllUsers()






 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response)=>{
    return response.json();
 })
 .then((data)=>{
    console.log(data);
 })
.catch((error)=>{
    console.log(error)
})
//  fetch() seems to be  executed immediately because fetch is related to micro-task queue
// OR priority queue  which have very high priority as compared to normal task queue. 




// Promise.all()
// Promise.all() is a method that takes an array of promises and returns a single promise that: Resolves when all the promises resolve

// 🔧 Syntax:
Promise.all([promise1, promise2, promise3])
  .then(results => {
    // results is an array: [result1, result2, result3]
  })
  .catch(error => {
    // if any one promise fails, you catch it here
  });


// Or with async/await:
try {
  const results = await Promise.all([promise1, promise2, promise3]);
  console.log(results); // Array of resolved values
} catch (error) {
  console.error("One of the promises failed:", error);
}





