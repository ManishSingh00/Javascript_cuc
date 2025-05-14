const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator,, for concatanating more than 2 arrays

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // infinity represents the depth upto which you want to flatten your array
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // o/p-FALSE
console.log(Array.from("Hitesh"))  // make a array of all separate characters
console.log(Array.from({name: "hitesh"})) // interesting // IMP interview point // return empty array 
// because we have to mention whether i have to convert key to array or value to array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));