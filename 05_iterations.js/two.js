// for of loop:--

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}


// MAPS:-----

const map = new Map();

map.set("IN", "India")
map.set("Fr","france")
map.set("pk","pakistamm")
// console.log(map);

for(const [key,value] of map){
    // console.log(key,':-',value);
}



const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
} 
// error :--- OBJECT is not iterable by this for of loop
