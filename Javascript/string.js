//String are simply data defined as a series of characters.
//String needs to encolosed in quotations ,can use double or single.

let message = " Hello its me Sajan Ghimrie!";
console.log(message); 

//let mesage = "Hello its me Sajan Ghimire'; //but if i used unmatch quotations then its through error
//console.log(message);

//I can join two or more strings with the Plus+ symbols
let conversation = "Hello "+"and " +"GoodBye! ";
console.log(conversation);

//Or we can do this too -function directly can use
let flag = "flag(4445555)";
console.log("The flag is: " + flag);

//this is useful when we have multiple string to console.log in one sentence.
let name = "Sajan";
let topic = " Dark Net";
console.log(name + " Is Learning" + topic + " today");

//Also we can use template strign formate this allows you to embed a variable directly inside the string. 
let habbit = "Being Happy Always";
let topics = "Developing Software";
console.log(`${habbit} for ${topics} at office time.`);

//Can also represent the number
let money = "100";
let walletno = "200";
console.log(money + walletno); //when we join two string no with a + sym ,js will join the two number instead of perfroming arithmetic addtion. 