//Loops

//for loop statement
// for (let x = 0; x < 10; x++) {
//   console.log(x);
// }

// for (let x = 10; x >= 1; x--) {
//   console.log(x);
// }


// for (let x = 1; x < 20; x += 3) {
//   console.log(x);
// }

for (let x = 1; x < 2; x++) {
  console.log(x);
}
console.log("The for loop has ended");
console.log("Continue code execution");

let heads = 0;
let tails = 0;
for (x = 1; x <= 10; x++) {
  if (Math.random() < 0.5) {
    tails++;
  } else {
    heads++;
  }
}

console.log("Tossed the coin ten times");
console.log(`Number of heads: ${heads}`);
console.log(`Number of tails: ${tails}`);



//while statement
// while (condition) {
//   statement;
// }

// let i = 0;

// while (i < 6) {
//   console.log(`The value of i = ${i}`);
//   i++;
// }
let i = 0;

while (i < 6) {
  console.log(`The value of i = ${i}`);
}

// let flips = 0;
// let isHeads = false;

// while (!isHeads) {
//   flips++;
//   isHeads = Math.random() < 0.5;
// }

// console.log(`It took ${flips} flips to land on heads.`);

