// Arrow Functions(=>) -JS
    // Traditional function
function sub(a, b) {
    return a - b;
}

// Arrow function
//A shorthand for writing functions. They don’t bind their own this context, making them useful for callbacks or functional programming.
const add = (a, b) => a + b;

console.log(add(3, 4)); // 7

//Destructuring Assignment
//Allows to unpack values from arrays or properties from objects into distinct var.
// Array destructuring
const [x, y] = [10, 20];
console.log(x); // 10
console.log(y); // 20

// Object destructuring
const person = { name: 'yogesh', age: 21 };
const { name, age } = person;
console.log(name); // Alice
console.log(age); // 30

//Template Literals
// Template literals use backticks (`) to allow multi-line strings and string interpolation using ${}.
const f_name = 'kabish';
const greeting = `Hello, ${f_name}!`; // String interpolation
console.log(greeting); 

//Default Parameters
//Allows to define default values for function parameters.
function greet(name = 'Guest') {
    console.log(`Hello, ${name}`);
}

greet(); // Hello, Guest
greet('Bishnu'); 

//Rest & Spread Operators (...)
//reset :Used to represent an indefinite num of args as an array.
//Spread: Expands an arry or object into individual elements.
// Rest ex
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Spread ex
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // Expanding arr into individual elements
console.log(newArr); // [1, 2, 3, 4, 5]

//BigInt
//Used to work with numbers beyond the JavaScript number limit (larger than Number.MAX_SAFE_INTEGER).
const bigNumber = BigInt(9007199254740991);
console.log(bigNumber + 1n); // 2n
console.log(bigNumber + 9n); //0n
console.log(bigNumber + 5n); //6n
//Note1_So, BigInt can safely handle operations on huge numbers without losing precision.