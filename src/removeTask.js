import { switchProjects } from "./switchProjects";
import { renumberTasks } from "./renumberTasks";
import { renumberProjects } from "./renumberProjects";
import { printProjects } from "./printProjects";

function removeTask(projectNum, taskNum) {
  let allTasks = JSON.parse(localStorage.getItem("tasks"));
  for (let i = 0; i < allTasks.length; i++) {
    if (
      allTasks[i].projectNum == projectNum &&
      allTasks[i].taskNum == taskNum
    ) {
      allTasks.splice(i, 1);
      let remainingTasks = renumberTasks(projectNum, allTasks);
      renumberProjects(allTasks);
      localStorage.setItem("tasks", JSON.stringify(remainingTasks));
      switchProjects(projectNum);
      printProjects();
      return;
    } else {
      continue;
    }
  }
}

export { removeTask };
