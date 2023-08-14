import { switchProjects } from "./switchProjects";
import { renumberTasks } from "./renumberTasks";

function removeTask(projectNum, taskNum) {
  console.log(
    "Removing Task " + taskNum + " from Project " + projectNum + "..."
  );

  let allTasks = JSON.parse(localStorage.getItem("tasks"));
  for (let i = 0; i < allTasks.length; i++) {
    if (
      allTasks[i].projectNum == projectNum &&
      allTasks[i].taskNum == taskNum
    ) {
      allTasks.splice(i, 1);
      let remainingTasks = renumberTasks(projectNum, allTasks);
      localStorage.setItem("tasks", JSON.stringify(remainingTasks));
      switchProjects(projectNum);
      return;
    } else {
      continue;
    }
  }
}

export { removeTask };
