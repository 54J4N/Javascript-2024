//If we have one of the num as a string ,js joins them together instead of adding:
let x = "6";
let y = 50;

console.log(x + y);
//here to add the 2 numbers properly , i need to convert the x var into int :
//changing the data from one type to another is also knows as type conversion or type casting.
//There are 3 fun frequently used to do type conversion:
//- Number()
//-String()
//Boolean()

let f = "6";
let g = 6;
//convert x to integer
f = Number(f);
console.log(f + g);
