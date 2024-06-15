// Numbers and maths in Javascript

let score = 400
console.log(score);
console.log(typeof score);

let balance = new Number(1000)
console.log(balance);
console.log(typeof balance);


// Convert to string 
console.log(balance.toString());

console.log(balance.toFixed(2));
// maximum 2 numbers after dot

// Add comma bw numbers
let hundreds = 100000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));





// ***** MATH ******

let = Math
console.log(typeof Math);

// Convert to absolute/positive value
console.log(Math.abs(-4));

// Round off
console.log(Math.round(4.8));

// Find lower/upper value
console.log(Math.min(4,8,3,7,1));
console.log(Math.max(4,8,3,7,1));


// Randome valaue bw 0,1
console.log(Math.random());

// Multiply by 10 so the valaue will be bw 0,10
console.log(Math.random()*10 );
