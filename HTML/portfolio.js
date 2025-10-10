const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio built with HTML, CSS, and JavaScript showcasing my projects and skills.",
    image: "https://images.pexels.com/photos/17789647/pexels-photo-17789647.jpeg",
    liveDemo: "https://example.com/portfolio",
    codeLink: "https://github.com/username/portfolio",
  },
  {
    id: 2,
    title: "Kth Smallest Element Finder",
    description:
      "A JavaScript program that finds the Kth smallest element using Max Heap and sorting techniques.",
    image: "https://images.pexels.com/photos/17840844/pexels-photo-17840844.jpeg",
    liveDemo: "https://example.com/kth-smallest",
    codeLink: "https://github.com/username/kth-smallest",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "A responsive weather application using OpenWeather API to display real-time weather information.",
    image: "https://images.pexels.com/photos/17840844/pexels-photo-17840844.jpeg",
    liveDemo: "https://example.com/weather-app",
    codeLink: "https://github.com/username/weather-app",
  },
  {
    id: 4,
    title: "Todo List App",
    description:
      "A simple and elegant to-do list app with local storage functionality built in JavaScript.",
    image: "https://images.pexels.com/photos/17840844/pexels-photo-17840844.jpeg",
    liveDemo: "https://example.com/todo-app",
    codeLink: "https://github.com/username/todo-app",
  },
  {
    id: 5,
    title: "MERN Blog Platform",
    description:
      "A full-stack blogging platform built using MongoDB, Express, React, and Node.js.",
    image: "https://images.pexels.com/photos/17840844/pexels-photo-17840844.jpeg",
    liveDemo: "https://example.com/mern-blog",
    codeLink: "https://github.com/username/mern-blog",
  },
  {
    id: 5,
    title: "MERN Blog Platform",
    description:
      "A full-stack blogging platform built using MongoDB, Express, React, and Node.js.",
    image: "https://images.pexels.com/photos/17840844/pexels-photo-17840844.jpeg",
    liveDemo: "https://example.com/mern-blog",
    codeLink: "https://github.com/username/mern-blog",
  },
];
const projectContainer = document.getElementById("projeccts");

for (let project of projects) {
  const card = document.createElement("li");
  card.innerHTML = `
   <img src = "${project.image}" alt = "${project.title}" >
   <div class = "project-content" id = "image">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
        <div class = "buttons">
            <a href = "${project.liveDemo}" class = "btn" target = "_blank">Live Demo</a>
            <a href = "${project.codeLink}" class = "btn" target = "_blank">Source Code</a>
        </div>
   </div>
  `;
  projectContainer.appendChild(card);
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
    menuToggle.textContent = "❌";
  } else {
    menuToggle.textContent = "☰";
  }
});
