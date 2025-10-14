// 1️⃣ Arrow Functions — The Modern Way to Write Functions
//Regular function
function greet(name) {
  return "Hello, " + name + "!";
}

// Arrow funcions
const greet = (name) => "Hello, " + name + "!";
// ✅ Shorter, cleaner, and more expressive.

/* 🔍 1.1 Arrow Function Syntax Variants

| Type                | Example                       | Notes                      |
| ------------------- | ----------------------------- | -------------------------- |
| One parameter       | `name => "Hi " + name`        | No parentheses needed      |
| No parameter        | `() => console.log("Hello!")` | Empty parentheses required |
| Multiple parameters | `(a, b) => a + b`             | Use parentheses            |
| Multiple lines      |                               |                            |*/

(a, b) => {
  const sum = a + b;
  return sum;
};
// | Must include return if using {} |

// excercise - Convert these regular functions to arrow functions 👇
function square(num) {
  return num * num;
}

function fullName(first, last) {
  return `${first} ${last}`;
}

function greetUser() {
  console.log("Welcome, Shadab!");
}
// 2️⃣ Default Parameters -If a value isn’t passed, JS uses the default.
const greet = (name = "Guest") => {
  console.log(`Hello, ${name}!`);
};

greet("Shadab");  // Hello, Shadab!
greet();          // Hello, Guest!
// ✅ Helps prevent “undefined” bugs.

// 3️⃣ Understanding Scope (local vs global)
// Global Scope Variables declared outside any function are global.
let username = "Shadab";

function showName() {
  console.log(username); // Accessible
}
showName(); // Shadab
// Local Scope - Variables declared inside functions are local.
function test() {
  let age = 25;
  console.log(age); // 25
}
console.log(age); // ❌ Error (not accessible outside)

// Block Scope (let and const)
if (true) {
  let score = 90;
  const grade = "A";
}
console.log(score); // ❌ undefined


//ex: 
let x = 10;
function demo() {
  let x = 5;
  console.log("Inside:", x);
}
demo();
console.log("Outside:", x);
