// like array and string , function is also an object in JS

// function multipleBy5(num){
//     return num*5
// }

// multipleBy5.power = 2  // using dot(.), like we have used with object

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const userOne = new createUser("ManishSingh",100);
const userTwo = new createUser("AbhiSingh",200);

userOne.increment();
userOne.printMe()

// The above one is a clean example of using constructor functions with prototype methods in JavaScript.