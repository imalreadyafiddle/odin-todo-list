function openTask(task) {
  let taskOverlay = document.querySelector(".task-overlay");
  taskOverlay.setAttribute("open-task", task.taskNum);
  taskOverlay.style.zIndex = "1";
  let taskCardName = document.querySelector(".task-card-name");
  let taskCardPriority = document.querySelector(".task-card-priority-dropdown");
  let taskCardDueDate = document.querySelector(".task-card-due-date-select");
  let taskCardStatus = document.querySelector(".task-card-status-dropdown");
  let taskCardDetails = document.querySelector(".task-card-user-input-text");

  taskCardName.innerText = task.taskName;
  taskCardPriority.value = task.priority;
  taskCardDueDate.value = task.dueDate;
  taskCardStatus.value = task.status;
  taskCardDetails.value = task.taskDetails;
}

export { openTask };
