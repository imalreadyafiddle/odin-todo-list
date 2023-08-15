import { printTasks } from "./printTasks";
import { getTasks } from "./getTasks";
function switchProjects(projectNumber) {
  if (JSON.parse(localStorage.getItem("tasks")).length == 0) {
    getTasks("reset");
    return;
  }
  printTasks(projectNumber);
}

export { switchProjects };
