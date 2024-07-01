// Detailed Note on Functions in JavaScript

// 1. Basic Function Declaration and Calling
// Function that prints each letter of the name "mirza" on a new line
function myName() {
    console.log("m");
    console.log("i");
    console.log("r");
    console.log("z");
    console.log("a");    
}
myName(); // Call the function to print the name




// 2. Function with Parameters
// Function that takes two numbers and prints their sum
function sumThis(num1, num2) {
    console.log(num1 + num2);
}
sumThis(4, 7); // Call the function with arguments 4 and 7



// 3. Function with Conditional Logic
// Function that takes a username and returns a login message
// If no username is provided, it logs a message requesting the username
function loginUserMsg(username) {
    if (username === undefined) {
        console.log("Please enter username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMsg("mirza")); // Call the function with a username
console.log(loginUserMsg()); // Call the function without a username to see the error message




// 4. Function with Rest Operator
// Function using the rest operator to accept any number of arguments
// The rest operator collects all remaining arguments into an array
function calculateCartPrice(...prices) {
    return prices;
}
console.log(calculateCartPrice(200, 400, 700)); // Call the function with multiple arguments




// 5. Function with Objects
// Function that takes an object as an argument and logs its properties
let user = {
    username: "mirza",
    price: 799
};

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user); // Call the function with the user object





// 6. Function with Default Parameters
// Function with Default Parameters
// If the second parameter is not provided, it defaults to 10
function multiply(a, b = 10) {
    return a * b;
}
console.log(multiply(5)); // Output: 50 (5 * 10)
console.log(multiply(5, 2)); // Output: 10 (5 * 2)





// 7. Function Expressions
// Function expression to define a function
const divide = function(a, b) {
    return a / b;
};
console.log(divide(10, 2)); // Output: 5



// 8. Function with Return Statement
// Function that calculates the area of a rectangle and returns the result
function calculateArea(width, height) {
    return width * height;
}
let area = calculateArea(5, 10); // The result (50) is stored in the variable 'area'
console.log(area); // Output: 50
































