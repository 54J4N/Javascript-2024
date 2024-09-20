//Object in JS

// let bookTitle = "JavaScript Introduction";
// let bookAuthor = "Nathan Sebhastian";

// let myBook = {
//   title: "JavaScript Introduction",
//   author: "Nathan Sebhastian",
// };

// let myBook = {
//   title: "JavaScript Introduction",
//   author: "Nathan Sebhastian",
//   describe: function () {
//     console.log(`Book title: ${this.title}`);
//     console.log(`Book author: ${this.author}`);
//     },
// };

// let myBook = {
//   title: "JavaScript Introduction",
//   author: "Nathan Sebhastian",
// };

// console.log(myBook.title);
// console.log(myBook.author);

// let myBook = {
//   title: "JavaScript Introduction",
//   author: "Nathan Sebhastian",
// };

// console.log(myBook["title"]);
// console.log(myBook["author"]);

//Add a new property
// let myBook = {
//   title: "JavaScript Introduction",
//   author: "Nathan Sebhastian",
// };

// add release year property
// myBook.year = 2023;

// add publisher property
// myBook["publisher"] = "CodeWithNathan";

// console.log(myBook);


// let myBook = {
//   title: "JavaScript Introduction",
//   author: "Nathan Sebhastian",
// };

// // change the author property
// myBook.author = "John Doe";

// console.log(myBook);

//Delete
let myBook = {
  title: "JavaScript Introduction",
  author: "Nathan Sebhastian",
};

delete myBook.author;

console.log(myBook);

//Check if property exists
// propertyName in myObject

let person = {
  firstName: "Nathan",
  lastName: "Sebhastian"
}

// check if firstName exists
console.log('firstName' in person); // true

// check if age exists
console.log('age' in person); // false