const projects = [
  "Portfolio Website",
  "Weather App",
  "Calculator App",
  "To-Do List",
  "Formizo",
];
const projectList = document.getElementById("project-list");

for (let project of projects) {
  const li = document.createElement("li");
  li.textContent = project;
  projectList.appendChild(li);
}

//Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  //doubt asking
  body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});


//mobile nav toggle

let menuToggle = document.getElementById("menuToggle");
//let navMenu = document.querySelector("nav ul li");
let navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => {
   navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    menuToggle.textContent = "❌"
  }else{
    menuToggle.textContent = "☰"
  }
});
