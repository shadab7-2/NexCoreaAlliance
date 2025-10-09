// let hours = new Date().getHours();
// console.log(parseInt(hours))
// let greeting;

// if(hours < 12){
//     greeting = "Good Morning 🌞"
// }else if (hours < 18){
//     greeting = "Good Afternoon ☀️"
// }else{
//     greeting  = "Good Evening 🌙"
// }
// document.querySelector("div h1").textContent += `${greeting}`

// function greetUser(name) {
//   console.log("Hello, " + name + "!");
// }

// greetUser("Shadab"); 
// greetUser("Ali");    
//👉 name is a parameter
//👉 "Shadab" and "Ali" are arguments
//Functions can return results.

/*
function Expressions (Anonymous Functions):
You can also store a function in a variable:
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(4, 2)); 

Arrow Functions (Modern ES6+)
Shorter and cleaner syntax:
const divide = (a, b) => a / b;
console.log(divide(10, 2)); // 5

*/

// function Age(birthyear){
//     let curren_tyear = new Date().getFullYear();
//     let age = curren_tyear - birthyear;
//     return age;
// }
// document.writeln(Age(1973))


// const projects = [
//   "Portfolio Website",
//   "Weather App",
//   "Calculator App",
//   "To-Do List"
// ];

// const projectList = document.getElementById("project-list");
// for(let project of projects){
//     const li = document.createElement("li");
//     li.textContent = project;
//     projectList.appendChild(li)
// }

//count character in my name

// let myName = prompt("Enter your name");
// let count = 0;
// for(let i = 0; i < myName.length; i++){
//     if(myName[i] !== 0){
//         count++;
//     }
// }

//Query Selectors
// let header = document.getElementById("title");
// header.textContent = "welcome to shadab Ansari portfolio";
// header.style.color = "tomato"


//Event Listner
// let button = document.getElementById("click-me");

// button.addEventListener("click", function(){
//     alert("Button clicked");
// })


//Toogle button 
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
//You built a small working project (contact form validation + nav toggle).  need to work on this