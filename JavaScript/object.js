// singleton 
// Object.create


// object literals
let user1 = {
    name: "mirza",
    age: 20,
    addr: "lucknow",
    email: "mirza@example.com",
    isLoggedIn: false,
    lastLoginDate: ["Monday", "Saturday"]
}

console.log(user1.name);
console.log(user1.email);
// Recomended way
console.log(user1["name"]);

// To update values
user1.email = "hello@google.com"
console.log(user1.email);