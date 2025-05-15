//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Manish"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Manish"
    if (username === "Manish") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// Method 1 of function declaration:-
console.log(addone(5)) // in this method accessing of function before its declartaion will not give any error
function addone(num){
    return num + 1
}


// Method 2 of function declaration
addTwo(5) // in this method it will give error bcz we are trying to access it before declaration
const addTwo = function(num){
    return num + 2
}