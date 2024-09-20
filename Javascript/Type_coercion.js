//Process where a value of one type is implicitly converted into another type
//This is automatically done by js so that our code won't cause an error.
console.log(1 + "1"); //js consider the num as a string and join two letters as 11 instead of adding them
//type coercion doesn't cause any errors, the output is actually something you don't want either .


-//Type corcion rules
//string conversion
//when js encounters different data types in a operation, it often tries to convert the value to strings.
    
console.log(4 + "7")//"47"
console.log([9, 3] + "0")//"9,30"
console.log(true + "8") //"true"

//above js converts num ,arr,booleans into string before concatenationg them: means:
//concatenation: the process of  joining two or more values into a single string.
// js converts the non-string value into a string first ,& then it combines them.
//Note: Before concatenating ,js checks if any of the values aren't strings.if it finds non-string values, it converts them to string ,& only then does it join them together.
console.log(6 + "6") //"66"

//js can calulate between boolean & numeric types.
//bcs boolean val true & false implicity has the numberic val of 1 & 0.s
console.log(true + 3);
console.log(false + 6);

//explict type conversion
let price = "50"; // string
let tax = 5;      // number

let totalPrice = Number(price) + Number(tax); // Explicitly convert to numbers
console.log(totalPrice); // 55
//so avoid type coercion : This leads to clearer and more predictable code.




