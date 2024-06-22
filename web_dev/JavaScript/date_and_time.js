// Date
  
let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());

console.log(typeof myDate);

// to print Specific date
let myCreatedDate = new Date(2024,0,1);
console.log(myCreatedDate.toLocaleString());

// to print Specific Time
let myCreatedDateTime = new Date(2024,0,1, 5,30);
console.log(myCreatedDateTime.toLocaleString());


// othr methods
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());



