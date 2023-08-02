import { printTasks } from "./printTasks";
import { updateTask } from "./updateTask";

function taskCloseButton() {
  let taskCloseButton = document.querySelector(".close-task-button > svg");
  let taskOverlay = document.querySelector(".task-overlay");

  taskCloseButton.addEventListener("click", () => {
    taskOverlay.style.zIndex = "-1";
    let closedTask = document.querySelector(".task-overlay");
    let currentProject = document.querySelector(".project-indicator");
    updateTask(
      closedTask.getAttribute("open-task"),
      currentProject.getAttribute("project-number")
    );
  });
}

export { taskCloseButton };
