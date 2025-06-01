// Print something on console
console.log("Hello World");
console.log("Abhishek Kumar");

// "Abhishek Kumar" -> String
// 7 -> Number
// true -> Boolean

const a = 10; // a is variable ... const keyword won't let us change the value of a
const b = 20;

const sum = a + b;
const multiply = a * b; // Semicolon(;) is not really necessary in JS

console.log(sum, multiply);

let x = 10; // using let you can change the value later
x = 20;

let firstName = "Abhishek";
let lastName = "Kumar";

let fullName = firstName + " " + lastName; // concatenation
console.log(fullName);

let arr = [2, 6, 10, 2, 232, 12];
console.log(arr);
console.log(arr[[0]]);

let mixedArr = ["abhishek", 7, [5, 10]];

let obj = {
    a: 10,
    name: "Abhishek",
};

console.log(obj.a, obj.name);
