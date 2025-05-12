// two types of data types are there in js:
// 1) PRIMITIVE :-  Number,string,boolean,undefined, null,symbol,Bigint  // non mutable(IMP)

//2) Non-Primitive :- Array, function , Object  // (mutable)

//IMP:- JS is dynamically typed language
//You don't have to declare a variable's type when you write your code.
//The type is determined at runtime, based on the value assigned.

const id = Symbol("123");
const newId = Symbol("123")

console.log(id === newId) // output == False   // both id  and newId have different value or  symbol


// ********************************************************************************
// Stack and Heap Memory in js:-

// stack(primitive data type)   nd  heap(non-primitive data type)

let my_name = "manish"
let surname = my_name
surname = "singh"

console.log(my_name)
console.log(surname)

let userone = {
    age : 20,
    gender : "male"
}
let userTwo = userone
userTwo.age=25

console.log(userone.age); // 25 values get updated due to heap memory in case of object(non-primitive)
console.log(userTwo.age);



