// ============================================
// REDUCE FUNCTION - LEVEL 2
// ============================================

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1
----------
Given the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use reduce() to calculate 
the sum of only the even numbers.

Hint: You can check if a number is even inside the reduce function.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Your solution here (one-line arrow function):
const exercise1Result1 = exercise1Array.reduce((acc, n) => acc + n, 0);
console.log("Example 1 - One-line:", exercise1Result1);

// Your solution here (regular arrow function):
const exercise1Result2 = exercise1Array.reduce((acc, n) => {
  return acc + n;
}, 0);
console.log("Example 1 - Regular:", exercise1Result2);

// Uncomment to test:
// console.log("Exercise 1 - One-line:", exercise1Result1);
// console.log("Exercise 1 - Regular:", exercise1Result2);
// Expected: 30 (2 + 4 + 6 + 8 + 10)

/*
EXERCISE 2
----------
Given the array of objects:
[
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
]

Use reduce() to calculate the total age of all people.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise2Array = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

// Your solution here (one-line arrow function):
const exercise2Result1 = exercise2Array.reduce((acc, n) => n > acc ? n : acc, numbers2[0]);
console.log("Example 2 - One-line:", exercise2Array);

// Your solution here (regular arrow function):
const exercise2Result2 = exercise2Array.reduce((acc, n) => {
  return n > acc ? n : acc;
}, numbers2[0]);
console.log("Example 2 - Regular:", exercise2Result2);

// Uncomment to test:
// console.log("Exercise 2 - One-line:", exercise2Result1);
// console.log("Exercise 2 - Regular:", exercise2Result2);
// Expected: 90

/*
EXERCISE 3
----------
Given the array ["hello", "world", "javascript"], use reduce() to create 
a single string with all words in uppercase, separated by " - ": 
"HELLO - WORLD - JAVASCRIPT".

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise3Array = ["hello", "world", "javascript"];

// Your solution here (one-line arrow function):
const exercise3Result1 = exercise3Array.reduce((acc, n) => acc + " " + word, "");
console.log("Example 3 - One-line:", exercise3Result1.trim());

// Your solution here (regular arrow function):
const exercise3Result2 = exercise3Array.reduce((acc, n) => {
  return acc + " " + word;
}, "");
console.log("Exmaple 3 - Regular:", exercise3Result2.trim());

// Uncomment to test:
// console.log("Exercise 3 - One-line:", exercise3Result1);
// console.log("Exercise 3 - Regular:", exercise3Result2);
// Expected: "HELLO - WORLD - JAVASCRIPT"

/*
EXERCISE 4
----------
Given the array [12, 45, 8, 23, 56, 9], use reduce() to find the minimum number.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise4Array = [12, 45, 8, 23, 56, 9];

// Your solution here (one-line arrow function):
const exercise4Result1 = exercise4Array.reduce((acc, n) => n > acc ? n : acc, numbers[0]);
console.log("Example 4 - One-line:", exercise4Result1);

// Your solution here (regular arrow function):
const exercise4Result2 = exercise4Array.reduce((acc, n) => {
  return n > acc ? n : acc;
}, numbers2[0]);
console.log("Example 4 - Regular:", exercise4Result1);

// Uncomment to test:
// console.log("Exercise 4 - One-line:", exercise4Result1);
// console.log("Exercise 4 - Regular:", exercise4Result2);
// Expected: 8

/*
EXERCISE 5
----------
Given the array [1, 2, 3, 4, 5], use reduce() to count how many numbers 
are greater than 2.

Write your solution using:
- One-line arrow function
- Regular arrow function
*/

const exercise5Array = [1, 2, 3, 4, 5];

// Your solution here (one-line arrow function):
const exercise5Result1 = exercise5Array.reduce((acc, n) => acc + n, 0);
console.log("Example 5 - One-line:", exercise5Result1);

// Your solution here (regular arrow function):
const exercise5Result2 = exercise5Array.reduce((acc, n) => {
  return acc + n;
}, 0);
console.log("Example 5 - Regular:", exercise5Result2);

// Uncomment to test:
// console.log("Exercise 5 - One-line:", exercise5Result1);
// console.log("Exercise 5 - Regular:", exercise5Result2);
// Expected: 3

