// two types of data types are there in js:
// 1) PRIMITIVE :-  Number,string,boolean,undefined, null,symbol,Bigint  // non mutable(IMP)

//2) Non-Primitive :- Array, function , Object  // (mutable)

//IMP:- JS is dynamically typed language
//You don't have to declare a variable's type when you write your code.
//The type is determined at runtime, based on the value assigned.

const id = Symbol("123");
const newId = Symbol("123")

console.log(id === newId) // output == False   // both id  and newId have different value or  symbol