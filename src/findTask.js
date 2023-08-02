import { openTask } from "./openTask";

function findTask(projectNum, taskNum) {
  let allTasks = JSON.parse(localStorage.getItem("tasks"));
  for (let i = 0; i < allTasks.length; i++) {
    if (
      allTasks[i].projectNum == projectNum &&
      allTasks[i].taskNum == taskNum
    ) {
      openTask(allTasks[i]);
    } else {
      continue;
    }
  }
}

export { findTask };
