
//var is the keyword that tells JavaScript you're declaring a variable.
//Avoid var as it can lead to bugs due to its function scope and hoisting behavior, making code less readable and prone to errors.
//Use let to declare variables when you need block-level scope and safer, more predictable code.
if (true) {
    let name = "sajan";
}
console.log(name); //Error:name is not defined because the variable name is declared with let inside the block{}created by the if (true)

//To fixed this:move the var outside the block
let gender;
if (true) {
    gender = "Male";
}
console.log(gender);


//we can use if needed within the block
if (true) {
    let name = "sajan";
    console.log(name);
}