<h1>Hoisting in Javascript</h1>;
// Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope during the creation phase before the code runs.

// var is hoisted and initialized as undefined, while let and const are hoisted but left uninitialized in the Temporal Dead Zone.

// Function declarations are fully hoisted with their bodies, but function expressions and arrow functions behave like variables.

// Understanding hoisting requires understanding how JavaScript creates and executes execution contexts.

// 2. How JavaScript Executes Code
// JS executes in 2 phases:--
// 1️⃣ Memory Creation Phase
// Variables declared
// Functions declared
// Scope created
// var initialized as undefined
// let & const created but NOT initialized (TDZ)

// 2️⃣ Execution Phase
// Code runs line-by-line
// Variables get real values
// Functions executed

//🔵 4. Hoisting Rules for
console.log(a); // undefined
var a = 10;
console.log(a);
let a = 10; // ReferenceError
console.log(x);
const x = 5; // ReferenceError

// ✔ Function Declaration
greet(); //Hello
function greet() {
  console.log("Hello");
}

//❌ Function Expression
hello(); // ❌ TypeError: hello is not a function
var hello = function() {};
// ❌ Arrow Function
hello(); // ❌ Cannot access 'hello' before initialization
let hello = () => {};
//***fuction declaration and var can be used before declarations */


// 🔵 5. Temporal Dead Zone (TDZ)
// TDZ is the time between:

// Hoisting of let/const
// Their declared line
// Variables in TDZ cannot be accessed.
