// Arrays

let myArr = [1,2,3,4]

let myArr2 = ["Ironman", "Batman", "Joker"]

// Array's indexing start frm zero
console.log(myArr[1]);
console.log(myArr2[0]);


// Array methods

// To add another value in Array
myArr.push(5)
console.log(myArr);

// To remove last value
myArr.pop()
console.log(myArr); 

// These methods will answer in true or false
console.log(myArr.includes(7));
console.log(myArr.indexOf(4));

 
// To convert array into   string
console.log(myArr.join());


// Merging Arrays

let marvel_heros = ["Ironman", "Captain", "Spiderman"]
let dc_heros = ["Batman", "Superman", "Wonderwomen"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// let allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

let all_new_heros =  [...marvel_heros, ...dc_heros]
console.log(all_new_heros);



let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

