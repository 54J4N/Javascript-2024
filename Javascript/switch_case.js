// let age = 15;
// switch (age) {
//   case 10:
//     console.log("Age is 10");
//     break;
//   case 20:
//     console.log("Age is 20");
//     break;
//   default:
//     console.log("Age is neither 10 or 20");
// }

switch (1) {
  case "1":
    console.log("Hello World!");
    break;
}

switch (0) {
  case true:
    console.log("Hello True!");
    break;
  case false:
    console.log("Bonjour False!");
    break;
  default:
    console.log("No matching case");
}

switch (0) {
  case 1:
    console.log("Value is one");
  case 0:
    console.log("Value is zero");
  default:
    console.log("No matching case");
}

switch (20) {
  case 10 + 10:
    console.log("value is twenty");
    break;
}

let age = 5;

switch (age) {
  case age < 10:
    console.log("Value is less than ten");
    break;
  case age < 20:
    console.log("Value is less than twenty");
    break;
  default:
    console.log("Value is twenty or more");
}

// let weekdayNumber = 1;

// if (weekdayNumber === 0) {
//   console.log("Sunday");
// } else if (weekdayNumber === 1) {
//   console.log("Monday");
// } else if (weekdayNumber === 2) {
//   console.log("Tuesday");
// } else if (weekdayNumber === 3) {
//   console.log("Wednesday");
// } else if (weekdayNumber === 4) {
//   console.log("Thursday");
// } else if (weekdayNumber === 5) {
//   console.log("Friday");
// } else if (weekdayNumber === 6) {
//   console.log("Saturday");
// } else {
//   console.log("The weekday number is invalid");
// }


let weekdayNumber = 1;

switch (weekdayNumber) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("The weekday number is invalid");
}

// let myFood = "Banana";

// if (myFood === "Banana" || myFood === "Apple") {
//   console.log("Eat fruits everyday to keep you healthy.");
// }

// if (myFood === "Chocolate Cake") {
//   console.log("Enjoy the sweet treat.");
// }


let myFood = "Banana";

switch (myFood) {
  case "Banana":
  case "Apple":
    console.log("Eat fruits everyday to keep you healthy.");
    break;
  case "Chocolate Cake":
    console.log("Enjoy the sweet treat.");
    break;
}