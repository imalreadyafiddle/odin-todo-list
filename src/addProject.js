const { getProjects } = require("./getProjects");
const { printProjects } = require("./printProjects");
import { getTasks } from "./getTasks";
import { renumberProjects } from "./renumberProjects";
import { switchProjects } from "./switchProjects";

function addProject() {
  let currentProjectCount = getProjects().length;
  let newProjectNumber = currentProjectCount + 1;
  let today = new Date().toLocaleString("sv-SE").split(" ")[0];

  let newProject = {
    projectNum: newProjectNumber,
    taskNum: 1,
    projectName: "New Project",
    taskName: "New Task 1",
    priority: "Medium",
    dueDate: today,
    status: "Not Started",
    taskDetails: "Placeholder text...",
  };

  let allTasks = getTasks("all");
  allTasks.push(newProject);
  renumberProjects(allTasks);
  localStorage.setItem("tasks", JSON.stringify(allTasks));
  printProjects();
  switchProjects(allTasks.pop().projectNum);
}

export { addProject };
