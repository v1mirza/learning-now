// Object Literals: Directly define objects with key-value pairs
let user1 = {
    name: "mirza",
    age: 20,
    addr: "lucknow",
    email: "mirza@example.com",
    isLoggedIn: false,
    lastLoginDate: ["Monday", "Saturday"]
};


console.log(user1.name);  // Accessing properties
console.log(user1.email);
console.log(user1.lastLoginDate);
console.log(user1["name"]);  // Recommended for dynamic property access
user1.email = "hello@google.com";  // Updating values
console.log(user1.email);


// Object Singleton: Create an object instance using assignment
let tinderUser = {};
tinderUser.id = "abc123";
tinderUser.name = "mirza";
tinderUser.isLoggedIn = false;  // Typically boolean values are set without quotes
console.log(tinderUser);


// Nested Objects: Objects can have nested structures
let regularUser = {
    email: "user@google.com",
    fullname: {
        userfullname: {
            firstname: "mirza",
            lastname: "neo"
        }
    }
};
console.log(regularUser.fullname.userfullname.firstname);  // Accessing nested properties


// Merging Objects: Combine objects using various methods
let obj1 = { 1: "a", 2: "b" };
let obj2 = { 3: "c", 4: "e" };

// Using spread operator
let obj3 = { ...obj1, ...obj2 };
console.log(obj3);  // { 1: "a", 2: "b", 3: "c", 4: "e" }
