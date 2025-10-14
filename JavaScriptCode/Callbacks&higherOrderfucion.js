// 1️⃣ What is a Callback Function?
// A callback is simply a function that is passed as an argument to another function and executed later.
function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // call the callback
}

function sayBye() {
  console.log("Goodbye!");
}
greet("Shadab", sayBye);
//sayBye is passed without parentheses → so it’s not executed immediately.
// It’s executed inside greet() only when callback() is called.

//2️⃣ Why Callbacks Are Important--Callbacks let you:
// Execute code after another function finishes.
// Handle asynchronous tasks (like loading data, animations, etc.).
// Write reusable logic.
function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

console.log(calculate(5, 3, add));      // 8
console.log(calculate(5, 3, multiply)); // 15
// 👉 Output will be different based on the callback used.


// 🧠 3️⃣ Higher-Order Functions (HOF)
// A Higher-Order Function is a function that:
// Takes another function as an argument, OR
// Returns a function. 
function welcomeMessage(language) {
  return function(name) {
    if (language === "en") {
      console.log("Welcome, " + name);
    } else if (language === "hi") {
      console.log("स्वागत है, " + name);
    }
  };
}

const englishWelcome = welcomeMessage("en");
englishWelcome("Shadab"); // Welcome, Shadab

const hindiWelcome = welcomeMessage("hi");
hindiWelcome("Shadab");   // स्वागत है, Shadab
// Here, welcomeMessage returns another function, making it a Higher-Order Function.

// Mini Exercise 2 - Reusable Logger
function createLogger(type) {
  return function(message) {
    console.log(`[${type.toUpperCase()}] ${message}`);
  };
}

const info = createLogger("info");
const error = createLogger("error");

info("Portfolio loaded successfully");
error("Failed to fetch project data");

// 🧩 4️⃣ Callbacks in Real DOM Example
function handleClick(callback) {
  document.getElementById("myBtn").addEventListener("click", callback);
}

function sayHello() {
  alert("Hello from callback!");
}

handleClick(sayHello);
// ✅ The callback sayHello runs only when the button is clicked.

// JavaScript — The Callback Logic
// Step 1: Main function that accepts a callback
function handleAction(callback) {
  callback(); // Execute the callback when triggered
}

// Step 2: Define specific callback actions
function showAlert() {
  alert("Hello, Shadab! Callback is working 🎯");
}

function logMessage() {
  console.log("Callback executed successfully ✅");
}

function changeBackground() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
}

// Step 3: Add event listeners for each button
document.getElementById("alertBtn").addEventListener("click", () => handleAction(showAlert));
document.getElementById("logBtn").addEventListener("click", () => handleAction(logMessage));
document.getElementById("colorBtn").addEventListener("click", () => handleAction(changeBackground));

