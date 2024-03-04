// Immediately Invoked Function Expressions (IIFE)

// names IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})(); //always remember to give ; when there are two IIFE

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ("hitesh")

