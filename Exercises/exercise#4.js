// Create the array
let colors = ['red', 'green', 'blue'];

// Add 'black' color
colors.push('black');
console.log(colors); // Output: ['red', 'green', 'blue', 'black']

// Remove 'red' and swap 'green' and 'blue'
colors.splice(colors.indexOf('red'), 1); // Remove 'red'
[colors[1], colors[2]] = [colors[2], colors[1]]; // Swap 'green' and 'blue'
console.log(colors); // Output: ['green', 'blue', 'black']

// Add 'yellow' at the first index
colors.unshift('yellow');
console.log(colors); // Output: ['yellow', 'green', 'blue', 'black']
