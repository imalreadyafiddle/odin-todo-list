import { printTasks } from "./printTasks";

function updateTask(taskNum, projectNum) {
  let allTasks = JSON.parse(localStorage.getItem("tasks"));
  let taskCardName = document.querySelector(".task-card-name");
  let taskCardPriority = document.querySelector(".task-card-priority-dropdown");
  let taskCardDueDate = document.querySelector(".task-card-due-date-select");
  let taskCardDetails = document.querySelector(".task-card-user-input-text");
  let taskCardStatus = document.querySelector(".task-card-status-dropdown");
  for (let i = 0; i < allTasks.length; i++) {
    if (
      allTasks[i].projectNum == projectNum &&
      allTasks[i].taskNum == taskNum
    ) {
      allTasks[i].taskName = taskCardName.innerText;
      allTasks[i].priority = taskCardPriority.value;
      allTasks[i].dueDate = taskCardDueDate.value;
      allTasks[i].status = taskCardStatus.value;
      allTasks[i].taskDetails = taskCardDetails.value;
      localStorage.setItem("tasks", JSON.stringify(allTasks));
      printTasks(projectNum);
    } else {
      continue;
    }
  }
}

export { updateTask };
