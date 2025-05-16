// Immediately Invoked Function Expressions (IIFE)

// why IIFE?
// 1) immediately invoked (i.e., run) — right after it's defined.
// 2) IIFEs is used to create isolated scopes and avoid polluting the global namespace.
// 3)If multiple scripts are loaded, variables inside an IIFE won't interfere with other scripts.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();/// if you will not put semi colon(;) at the end of IIFEs then you will get error if you try to execute
// some other functions after that IIFEs bcz IIFEs by its own did not understand where they have to end;

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('manish')  // here manish is passed as an argument to the function




// After this read about  " How javascript work behind the scenes, url :- https://youtu.be/ByhtOgF6uYM?si=cJRUkCTy_iwkMM-6
