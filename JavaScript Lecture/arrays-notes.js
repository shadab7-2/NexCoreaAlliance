/********************************************************************
 * JAVASCRIPT ARRAYS — COMPLETE NOTES (BEGINNER → ADVANCED)
 * Author: Shadab Ansari
 * Purpose: Daily Revision + Interview Prep
 ********************************************************************/


// =====================================================
// 1. INTRODUCTION TO ARRAYS
// =====================================================

/*
An Array is a special type of object in JavaScript
used to store multiple values inside a single variable.

Example:
*/
let numbers = [10, 20, 30, 40];

/*
Features:
- Ordered collection
- Index starts from 0
- Can store mixed data types
- Dynamic size
*/

let mixed = [1, "Hello", true, null, { name: "JS" }];


// =====================================================
// 2. ARRAY IS A SPECIAL OBJECT
// =====================================================

/*
In JavaScript, array is internally an object.
*/

console.log(typeof numbers);        // object
console.log(Array.isArray(numbers)); // true

/*
JavaScript stores array like this internally:

{
  "0": 10,
  "1": 20,
  "2": 30,
  length: 3
}
*/


// =====================================================
// 3. BASIC OPERATIONS
// =====================================================

// ADD / REMOVE ELEMENTS
let arr = [10, 20];

// push → add at end
arr.push(30);

// pop → remove from end
arr.pop();

// unshift → add at start
arr.unshift(5);

// shift → remove from start
arr.shift();

console.log(arr);


// =====================================================
// 4. ACCESS ELEMENTS
// =====================================================
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]);   // Apple
console.log(fruits[2]);   // Banana


// =====================================================
// 5. LOOPING ARRAYS
// =====================================================

/*
For Loop
*/
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

/*
for...of → best for arrays
*/
for (let fruit of fruits) {
  console.log(fruit);
}


// =====================================================
// 6. IMPORTANT ARRAY METHODS
// =====================================================

let nums = [1, 2, 3, 4, 5];

/*
map → transform data
returns new array
*/
let doubled = nums.map(n => n * 2);

/*
filter → select data
returns new array
*/
let evens = nums.filter(n => n % 2 === 0);

/*
reduce → combines to single value
*/
let sum = nums.reduce((acc, curr) => acc + curr, 0);

/*
forEach → loop only (no return)
*/
nums.forEach(num => console.log(num));


// =====================================================
// 7. SLICE vs SPLICE (VERY IMPORTANT)
// =====================================================

let data = [10, 20, 30, 40];

/*
slice(start, end)
DOES NOT change original array
*/
data.slice(1, 3);   // [20,30]

/*
splice(start, count)
CHANGES original array
*/
data.splice(1, 2);   // removes 20,30

console.log(data);


// =====================================================
// 8. SPREAD OPERATOR (...)
/*
Used for copying and merging arrays
*/
let a = [1, 2];
let b = [...a];          // copy
let c = [...a, 3, 4];    // extend
let merged = [...a, ...c];

console.log(merged);


// =====================================================
// 9. SHALLOW COPY vs DEEP COPY
// =====================================================

let shallowArr = [{ value: 100 }];
let shallowCopy = [...shallowArr];

shallowCopy[0].value = 500;

console.log("Original:", shallowArr);
console.log("Copy:", shallowCopy);


/*
Deep Copy
*/
let deepCopy = JSON.parse(JSON.stringify(shallowArr));
deepCopy[0].value = 999;

console.log("Deep Original:", shallowArr);
console.log("Deep Copy:", deepCopy);


// =====================================================
// 10. ARRAY AS OBJECT (INTERVIEW TRAPS)
// =====================================================

let test = [1, 2, 3];
test.name = "MyArray";

/*
length does not increase for object properties
*/
console.log(test.length); // 3


// =====================================================
// 11. REMOVE DUPLICATES
// =====================================================

let dup = [1, 2, 2, 3];
let unique = [...new Set(dup)];

console.log(unique);


// =====================================================
// 12. FIND MAX, MIN
// =====================================================

let marks = [90, 40, 20, 100];

let max = Math.max(...marks);
let min = Math.min(...marks);

console.log("Max:", max);
console.log("Min:", min);


// =====================================================
// 13. REVERSE / SORT
// =====================================================

marks.reverse();
marks.sort((a, b) => a - b);

console.log(marks);


// =====================================================
// 14. ARRAY INTERVIEW CHEAT ANSWER
// =====================================================

console.log(`
INTERVIEW ANSWER:
Arrays in JavaScript are special objects because they store elements
as key-value pairs internally with numeric keys. Arrays provide ordered
storage, automatic length tracking, and built-in methods like map,
filter, and reduce, making them optimized for list-type data.
`);


/********************************************************************
 * END OF NOTES
 ********************************************************************/
