// function greet() {
    // function body here
//     console.log("Hello!");
// }
// greet();

// function greet(name) {
//   console.log(`Hello, ${name}!`);
//   console.log("Nice weather today, right?");
// }
// greet("Peter");

// function greet(name, weather) {
//   console.log(`Hello, ${name}!`);
//   console.log(`It's ${weather} today, right?`);
// }

// greet("Nathan", "rainy");

// function greet(name = "Nathan") {
//   console.log(`Hello, ${name}!`);
//   console.log("Nice weather today, right?");
// }

// greet();
// greet("Jack");

// function greet(weather, name = "Nathan") {
//   console.log(`Hello, ${name}!`);
//   console.log(`It's ${weather} today, right?`);
// }

// greet("sunny");

// function greet(name = "Nathan", weather) {
//   console.log(`Hello, ${name}!`);
//   console.log(`It's ${weather} today, right?`);
// }

// greet(undefined, "sunny");


// function greet(name = "John"){
//   console.log(name);
// }

// greet(undefined); // John

function greet(name = "John"){
  console.log(name);
}

greet(null); // null


function sum(a, b) {
  return a + b;
}

let result = sum(3, 2);
console.log(result); // 5


function checkAge(age) {
  if (age > 18) {
    return "You may get a car license";
  }
  return "You may not get a car license yet";
}

console.log(checkAge(20));
console.log(checkAge(15));


// function greet() {
//   console.log("Hello!");
//   return;
//   console.log("Good bye!");
// }

// greet();



//Variable Scope
//Local variable
// function greet() {
//   let myString = "Hello World!";
// }

// greet();
// console.log(myString);//error

// function greet() {
//   let myString = "Hello World!";
// }

// greet();
// console.log(myString);


let myString = "Hello World!";

function greet() {
  let myString = "Morning!";
  console.log(myString);
}

greet();  // Morning!
console.log(myString); // Hello World!


//rest parameter

// function printArguments(...args){
//     console.log(args);
// }

function printArguments(...args){
    console.log(args);
}

printArguments("A", "B", "C"); 
// [ 'A', 'B', 'C' ]
printArguments(1, 2, 3, 4, 5);
// [ 1, 2, 3, 4, 5 ]