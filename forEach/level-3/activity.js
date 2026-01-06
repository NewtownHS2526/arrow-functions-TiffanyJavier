// ============================================
// FOREACH FUNCTION - LEVEL 3
// ============================================

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
----------
Given the array of objects:
[
  { product: "Laptop", price: 1000, quantity: 2 },
  { product: "Mouse", price: 25, quantity: 5 },
  { product: "Keyboard", price: 75, quantity: 3 }
]

Use forEach() to print each product's total value (price * quantity) 
in the format: "Laptop: $2000 total".

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise1Array = [
  { product: "Laptop", price: 1000, quantity: 2 },
  { product: "Mouse", price: 25, quantity: 5 },
  { product: "Keyboard", price: 75, quantity: 3 }
];

// Your solution here (one-line arrow function):
console.log("Example 1 - One-line:");
exercise1Array.forEach(name => console.log(`Hello, ${name}!`));

// Your solution here (regular arrow function):
console.log("Example 1 - Regular:");
exercise1Array.forEach((name) => {
  console.log(`Hello, ${name}!`);
});

// Expected output:
// "Laptop: $2000 total"
// "Mouse: $125 total"
// "Keyboard: $225 total"

/*
EXERCISE 2
----------
Given the array ["hello", "world", "javascript", "coding"], use forEach() 
to print only the words that have more than 5 characters.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise2Array = ["hello", "world", "javascript", "coding"];

// Your solution here (one-line arrow function):
console.log("Example 2 - One-line:");
exercise2Array.forEach(name => console.log(`Hello, ${name}!`));

// Your solution here (regular arrow function):
exercise2Array.forEach((name) => {
  console.log(`Hello, ${name}!`);
});

// Expected output: "javascript", "coding" (each on a new line)

/*
EXERCISE 3
----------
Given the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use forEach() to calculate 
the product (multiplication) of all numbers. Store the result in a variable 
and print it.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise3Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let exercise3Product = 1;

// Your solution here (one-line arrow function):
exercise3Array.forEach(n => sum += n);
console.log("Example 3 - One-line sum:", sum);

// Your solution here (regular arrow function):
exercise3Array.forEach((n) => {
  sum += n;
});
console.log("Example 3 - Regular sum", sum);

// Uncomment to test:
// console.log("Exercise 3 - Product:", exercise3Product);
// Expected: 3628800

/*
EXERCISE 4
----------
Given the array of strings ["apple", "banana", "cherry"], use forEach() 
to print each word reversed. For example, "apple" becomes "elppa".

Hint: You can use split(''), reverse(), and join('') methods.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise4Array = ["apple", "banana", "cherry"];

// Your solution here (one-line arrow function):
console.log("Example 4 - One-line:");
exercise4Array.forEach(name => console.log(`Hello ${name}!`));

// Your solution here (regular arrow function):
console.log("Example 4 - Regular:");
exercise4Array.forEach((name) => {
  console.log(`Hello ${name}!`);
});

// Expected output: "elppa", "ananab", "yrrehc" (each on a new line)

/*
EXERCISE 5
----------
Given the array [12, 45, 8, 23, 56, 9], use forEach() to find and print 
the maximum number. Store the maximum in a variable and print it.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise5Array = [12, 45, 8, 23, 56, 9];
let exercise5Max = exercise5Array[0]; // Start with first element

// Your solution here (one-line arrow function):
exercise5Array.forEach(n => sum += n);
console.log("Example 5 - One-line sum:", sum);

// Your solution here (regular arrow function):
exercise5Array.forEach((n) => {
  sum += n;
});
console.log("Example 5 - Regular sum:", sum);

// Uncomment to test:
// console.log("Exercise 5 - Maximum:", exercise5Max);
// Expected: 56

