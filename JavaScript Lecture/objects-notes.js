/* ======================================================
   JAVASCRIPT OBJECTS - INTERVIEW NOTES
   Author: Shadab Ansari
   Purpose: Learn Objects for Interview & Practice
   ====================================================== */

/* ========================
   1. What is an Object?
   ======================== */
/*
Definition:
An object in JavaScript is a collection of key-value pairs.
Each value is accessed using its key.

Example:
*/
let person = {
  name: "Shadab",
  age: 23,
  city: "Delhi"
};


/* ========================
   2. Why Use Objects?
   ======================== */
/*
Objects are used to group related data and behavior together.
Example:
*/
let car = {
  brand: "BMW",
  price: 5000000,
  start: function () {
    console.log("Car started");
  }
};


/* ============================
   3. Ways to Create an Object
   ============================ */

/* Method 1: Object Literal */
let user1 = {
  name: "Aman",
  age: 25
};

/* Method 2: new Object() */
let user2 = new Object();
user2.name = "Ravi";
user2.age = 22;

/* Method 3: Constructor Function */
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let p1 = new Person("Ali", 21);

/* Method 4: Object.create() */
let proto = { greet: "Hello" };
let user3 = Object.create(proto);

/* Method 5: ES6 Class */
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let u1 = new User("Zoya", 20);


/* ========================
   4. Access Object Data
   ======================== */

/* Dot Notation */
console.log(person.name);

/* Bracket Notation */
console.log(person["city"]);


/* =====================
   5. Add / Update / Delete
   ===================== */

/* Add */
person.country = "India";

/* Update */
person.age = 24;

/* Delete */
delete person.city;


/* =====================
   6. Nested Objects
   ===================== */
let employee = {
  name: "Kiran",
  address: {
    city: "Mumbai",
    pincode: 400001
  }
};

console.log(employee.address.city);


/* ========================
   7. Object Destructuring
   ======================== */
let student = { id: 1, course: "MERN" };
let { id, course } = student;


/* ========================
   8. this Keyword
   ======================== */
let user = {
  name: "Ankit",
  greet: function () {
    console.log(this.name); // refers to current object
  }
};

user.greet();


/* ============================
   9. Looping Through Objects
   ============================ */

/* for...in */
for (let key in person) {
  console.log(key, person[key]);
}

/* Object keys, values, entries */
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


/* ============================
   10. Check Property Exists
   ============================ */
console.log("name" in person);
console.log(person.hasOwnProperty("age"));


/* ============================
   11. Shallow vs Deep Copy
   ============================ */

let original = {
  name: "Shadab",
  address: {
    city: "Delhi"
  }
};

/* Shallow Copy */
let shallow = { ...original };

/* Deep Copy */
let deep = JSON.parse(JSON.stringify(original));


/* ========================
   12. Object.freeze & seal
   ======================== */

Object.freeze(person);   // cannot modify, add, delete
Object.seal(person);     // can modify only existing


/* ============================
   13. Interview Quick Notes
   ============================ */
/*
✅ Object stores data in key-value format.
✅ Objects are reference types.
✅ Object literal is the most used approach.
✅ Shallow copy copies top-level only.
✅ Deep copy copies everything.
✅ "this" refers to calling object.
✅ in vs hasOwnProperty difference.
✅ freeze = no changes
✅ seal = update allowed
*/


/* ===================
   14. Practice Tasks
   =================== */

/*
Q1:
const obj = { a: 1 };
const copy = obj;
copy.a = 5;
console.log(obj.a); // ???

Q2:
Convert to destructuring:
let emp = { name: "Raj", dept: "IT" };
*/


/* ===========================
   END OF NOTES
   =========================== */
