const tinderUser = new Object()
// const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Manish",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //    wrong or incorrect output:- { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj3 = Object.assign({}, obj1, obj2, obj4)  // {} means all object get stored in this , otherwise all will get stored in obj1 and finally obj1 == obj3

// const obj3 = {...obj1, ...obj2} // spread opeartor like we did in case of array
console.log(obj3);



// array of objects:-
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser)); // print all keys in a ARRAY
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




// OBJECT DESTRUCTURING:---
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Manish Singh"
}

// course.courseInstructor   // let's say i have to print this 5 times then it is very long to write 5 times tht's why using below technique:--


const {courseInstructor: instructor} = course  //{} curly braces here is for destructuring only

// console.log(courseInstructor);
console.log(instructor);





// JSON format (API fetching):- will study in deatil later on
// {
//     "name": "Manish",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


