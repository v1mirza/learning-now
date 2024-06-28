// Array Creation and Indexing

let myArr = [1, 2, 3, 4];
let myArr2 = ["Ironman", "Batman", "Joker"];

// Array indexing starts from zero
console.log(myArr[1]);       // Accessing elements by index
console.log(myArr2[0]);      // Accessing elements by index




// Array Methods

// Adding elements
myArr.push(5);
console.log(myArr);         // Output: [1, 2, 3, 4, 5]

// Removing elements
myArr.pop();
console.log(myArr);         // Output: [1, 2, 3, 4]

// Checking existence
console.log(myArr.includes(7));   // Output: false
console.log(myArr.indexOf(4));    // Output: 3 (index of the element)

// Converting to string
console.log(myArr.join());   // Output: "1,2,3,4"







// Merging Arrays
let marvel_heros = ["Ironman", "Captain", "Spiderman"];
let dc_heros = ["Batman", "Superman", "Wonderwomen"];

// Concatenating arrays
// let allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);   // Output: ["Ironman", "Captain", "Spiderman", "Batman", "Superman", "Wonderwomen"]

// Using spread operator for merging
let all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);   // Output: ["Ironman", "Captain", "Spiderman", "Batman", "Superman", "Wonderwomen"]






// Creating Arrays from Values
// Creating arrays from values
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));   // Output: [100, 200, 300]
