// map() -- Transform Arrays
// Concept:

// map() creates a new array by transforming every element of an existing array.

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
// Mini Exercise
const names = ["shadab", "ali", "ravi"];
// Convert all names to uppercase using map()
let newName = names.map(name => name.toUpperCase());
console.log(newName)


// filter() — Extract Array Items by Condition
// 📘 Concept: filter() creates a new array with only elements that pass a condition.
const numbers1 = [1, 2, 3, 4, 5];

const evenNumbers = numbers1.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]
// Use case:--Select all active users, completed tasks, or products in stock

//Mini Exercise
const tasks = [
  { title: "Task 1", completed: true },
  { title: "Task 2", completed: false },
  { title: "Task 3", completed: true }
];
// Get only completed tasks
const completedTask = tasks.filter(task=>task.completed === true)
console.log(completedTask);
// Use case: Select all active users, completed tasks, or products in stock

//3️⃣ reduce() — Aggregate Array Items
//Concept: reduce() combines all elements of an array into a single value.
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((total,num) => total + num, 0);
console.log(sum); // [2, 4]

const prices = [100, 200, 300];
// Use reduce to get total price + 10;
const totalPrie  = prices.reduce((toat,price)=>toat + price, 10);
console.log(totalPrie);



// 4️⃣ JSON — JavaScript Object Notation
// Used to store/send structured data
// Convert object/array → string: JSON.stringify(obj)
// Convert string → object/array: JSON.parse(str)

const user = { name: "Shadab", age: 21 };

// Object to string
const jsonString = JSON.stringify(user);
console.log(jsonString)

// String back to object
const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.age); // "Shadab"


// 🧠 5️⃣ LocalStorage — Store Data in Browser
// Key–value storage in browser, persists after refresh
// Methods: setItem(), getItem(), removeItem()
localStorage.setItem("name", "Shadab");
console.log(localStorage.getItem("name")); // Shadab
localStorage.removeItem("name");
