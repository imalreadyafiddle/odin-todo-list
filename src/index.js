import _ from "lodash";
import "./style.css";
import { createHeader } from "./createHeader";
import { printTasks } from "./printTasks";
import { printProjects } from "./printProjects";
import { taskCloseButton } from "./taskCloseButton";
import { addTask } from "./addTask";

createHeader();
printTasks(1);
printProjects();
taskCloseButton();
let addTaskButton = document.querySelector(".add-task");
addTaskButton.addEventListener("click", () => {
  addTask();
});
