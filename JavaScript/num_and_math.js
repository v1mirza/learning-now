// Basic Number Operations
let score = 400;
console.log(score);           // Output: 400
console.log(typeof score);    // Output: "number"

let balance = new Number(1000);
console.log(balance);         // Output: [Number: 1000]
console.log(typeof balance);  // Output: "object"

// Convert number to string
console.log(balance.toString());  // Output: "1000"

// Format number with fixed decimal places
console.log(balance.toFixed(2));  // Output: "1000.00"

// Add commas for thousands separator
let hundreds = 100000;
console.log(hundreds.toLocaleString());    // Output: "100,000"
console.log(hundreds.toLocaleString('en-IN'));  // Output: "1,00,000"








// Math Operations
// ***** MATH ******
console.log(typeof Math);   // Output: "object"

// Absolute value
console.log(Math.abs(-4));  // Output: 4

// Round off
console.log(Math.round(4.8));   // Output: 5

// Minimum and maximum values
console.log(Math.min(4, 8, 3, 7, 1));  // Output: 1
console.log(Math.max(4, 8, 3, 7, 1));  // Output: 8

// Random number between 0 and 1
console.log(Math.random());    // Output: Random decimal between 0 (inclusive) and 1 (exclusive)

// Random number between 0 and 10
console.log(Math.random() * 10); // Output: Random decimal between 0 (inclusive) and 10 (exclusive)






