// Creating and Formatting Dates

let myDate = new Date();
console.log(myDate);                // Current date and time
console.log(myDate.toDateString()); // Date portion only
console.log(myDate.toLocaleString());// Localized date and time
console.log(myDate.toJSON());       // ISO format

console.log(typeof myDate);         // Checking type of the date object






// Creating Specific Dates and Times
// Creating specific dates and times
let myCreatedDate = new Date(2024, 0, 1);       // January 1, 2024
console.log(myCreatedDate.toLocaleString());

let myCreatedDateTime = new Date(2024, 0, 1, 5, 30); // January 1, 2024, 5:30 AM
console.log(myCreatedDateTime.toLocaleString());






// Date Methods
// Other date methods
let newDate = new Date();
console.log(newDate);           // Current date and time
console.log(newDate.getMonth()); // Get month (0-11)
console.log(newDate.getDay());  // Get day of the week (0-6)




// For more methods, visit:
// https://www.w3schools.com/js/js_date_methods.asp
