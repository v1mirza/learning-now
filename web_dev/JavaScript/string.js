const name = "mirza";
const age = 20;
const city = "lucknow";

console.log(name + age + city);

// other way is of writing string
console.log(`my name is ${name}, my age is ${age}, my city is ${city}`);


// Methods
console.log(name.length);
console.log(city.indexOf(`w`));

// Trim method
let new1 = "    variable1    ";
console.log(new1);
console.log(new1.trim());

// Replace method
let url = "github.com"
console.log(url);
console.log(url.replace('github' , 'google'));

// search words in string using 'includes' method
let url2 = "facebook.com"
console.log(url2.includes('facebook.com'));


// Others methods: https://www.w3schools.com/js/js_string_methods.asp