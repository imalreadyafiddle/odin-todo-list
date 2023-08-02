import { getTasks } from "./getTasks";
import { findTask } from "./findTask";

function printTasks(projectNumber) {
  let tasks = getTasks(projectNumber);
  let i = 1;
  let taskList = document.querySelector(".task-bar");
  taskList.innerHTML = "";

  // set project name
  let projectIndicator = document.querySelector(".project-indicator");
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

    taskNameDiv.classList.add("task-name");
    priorityDiv.classList.add("priority");
    dueDateDiv.classList.add("due-date");
    statusDiv.classList.add("status");

    taskNameDiv.innerText = task.taskName;
    priorityDiv.innerText = task.priority;
    dueDateDiv.innerText = task.dueDate;
    statusDiv.innerText = task.status;

    taskList.appendChild(taskDiv);
    taskDiv.appendChild(taskNameDiv);
    taskDiv.appendChild(priorityDiv);
    taskDiv.appendChild(dueDateDiv);
    taskDiv.appendChild(statusDiv);

    taskDiv.setAttribute("task-number", i);
    i++;

    taskDiv.addEventListener("click", () => {
      findTask(
        projectIndicator.getAttribute("project-number"),
        taskDiv.getAttribute("task-number")
      );
    });
  });
}

export { printTasks };
