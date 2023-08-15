import { printProjects } from "./printProjects";

function renameProject() {
  let projectInfo = document.querySelector(".project-indicator");
  let projectName = projectInfo.innerText;
  let projectNumber = projectInfo.getAttribute("project-number");
  let allTasks = JSON.parse(localStorage.getItem("tasks"));
  allTasks.forEach((tasks) => {
    if (tasks.projectNum == projectNumber) {
      tasks.projectName = projectName;
    }
  });
  localStorage.setItem("tasks", JSON.stringify(allTasks));
  printProjects();
}

export { renameProject };
