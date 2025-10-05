const projects = [
  "Portfolio Website",
  "Weather App",
  "Calculator App",
  "To-Do List",
  "Formizo"
];
const projectList = document.getElementById("project-list")

for(let project of projects){
    const li = document.createElement("li");
    li.textContent = project;
    projectList.appendChild(li);
}