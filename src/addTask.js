import { getTasks } from "./getTasks";
import { printTasks } from "./printTasks";

function addTask() {
  let projectNumber = document
    .querySelector(".project-indicator")
    .getAttribute("project-number");

  let projectName = document.querySelector(".project-indicator").innerText;

  let projectTaskCount = getTasks(projectNumber).length;

  let today = new Date().toLocaleString("sv-SE").split(" ")[0];

  let newTask = {
    projectNum: projectNumber,
    taskNum: projectTaskCount + 1,
    projectName: projectName,
    taskName: "New Task",
    priority: "Medium",
    dueDate: today,
    status: "Not Started",
    taskDetails: "Placeholder text...",
  };

  let allTasks = JSON.parse(localStorage.getItem("tasks"));
  allTasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(allTasks));
  printTasks(projectNumber);
}

export { addTask };
