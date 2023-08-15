import { getTasks } from "./getTasks";
import { findTask } from "./findTask";
import { removeTask } from "./removeTask";
import { printProjects } from "./printProjects";
import { switchProjects } from "./switchProjects";
import { renameProject } from "./renameProject";

function printTasks(projectNumber) {
  let tasks = getTasks(projectNumber);
  let i = 1;
  let taskList = document.querySelector(".task-bar");
  let projectIndicator = document.querySelector(".project-indicator");
  let addTaskButton = document.querySelector(".add-task");
  addTaskButton.setAttribute("style", "opacity:1;");
  projectIndicator.setAttribute("contenteditable", true);
  projectIndicator.addEventListener("change", renameProject);
  taskList.innerHTML = "";

  if (tasks[0] == undefined || projectNumber == "reset") {
    switchProjects(1);
    printProjects();
    return;
  } else {
    // set project name
    projectIndicator.innerText = tasks[0].projectName;
    projectIndicator.setAttribute("project-number", tasks[0].projectNum);

    // create and print tasks to the task area
    tasks.forEach((task) => {
      let taskDiv = document.createElement("div");
      taskDiv.classList.add("task");

      let taskNameDiv = document.createElement("div");
      let priorityDiv = document.createElement("div");
      let dueDateDiv = document.createElement("div");
      let statusDiv = document.createElement("div");
      let removeDiv = document.createElement("button");

      taskNameDiv.classList.add("task-name");
      priorityDiv.classList.add("priority");
      dueDateDiv.classList.add("due-date");
      statusDiv.classList.add("status");
      removeDiv.classList.add("remove-task");

      taskNameDiv.innerText = task.taskName;
      priorityDiv.innerText = task.priority;
      dueDateDiv.innerText = task.dueDate;
      statusDiv.innerText = task.status;
      removeDiv.innerText = "X";

      taskList.appendChild(taskDiv);
      taskDiv.appendChild(taskNameDiv);
      taskDiv.appendChild(priorityDiv);
      taskDiv.appendChild(dueDateDiv);
      taskDiv.appendChild(statusDiv);
      taskDiv.appendChild(removeDiv);

      taskDiv.setAttribute("task-number", i);
      i++;

      let taskDivItems = [taskNameDiv, priorityDiv, dueDateDiv, statusDiv];

      taskDivItems.forEach((taskDivItem) => {
        taskDivItem.addEventListener("click", () => {
          findTask(
            projectIndicator.getAttribute("project-number"),
            taskDiv.getAttribute("task-number")
          );
        });
      });

      removeDiv.addEventListener("click", () => {
        removeTask(
          projectIndicator.getAttribute("project-number"),
          taskDiv.getAttribute("task-number")
        );
      });
    });
  }
}

export { printTasks };
