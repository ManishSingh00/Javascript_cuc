const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     return acc + currval
// }, 0) // here 0 is the initial value which get assigned to the accumulator for the first time
// // console.log(myTotal)


// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal)


// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) // using arrow function
// 
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
// console.log(priceToPay);