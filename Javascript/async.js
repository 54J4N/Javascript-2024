// Define an asynchronous function
async function sajan() {
    console.log("Ghimire learn Javascript!");
    await new Promise(resolve => setTimeout(resolve, 2000));  // Simulate a 2-second delay
    console.log("And also")
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    console.log("DotNet");
}
// Call the asynchronous function
sajan();
