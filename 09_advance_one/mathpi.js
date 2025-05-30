const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter); // value: 3.141592653589793, writable: false, enumerable: false, configurable: false
console.log(Math.PI);

Math.PI = 5
console.log(Math.PI); // Still prints 3.141592653589793


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}






// summary Table:-
// Descriptor	         Controls...	                              When false...

// writable	             Can you change the value?	                  ❌ Can't reassign the property value

// enumerable	         Can it be seen in loops like for...in?	      ❌ Hidden from loops and Object.keys()
 
// configurable	         Can you delete or redefine the property?	  ❌ Can't delete or change descriptor
