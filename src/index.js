import _ from "lodash";
import "./style.css";
import { createHeader } from "./createHeader";
import { printTasks } from "./printTasks";
import { printProjects } from "./printProjects";
import { taskCloseButton } from "./taskCloseButton";
import { addTask } from "./addTask";
import { addProject } from "./addProject";
import { renameProject } from "./renameProject";

createHeader();
printTasks(1);
printProjects();
taskCloseButton();
const addTaskButton = document.querySelector(".add-task");
addTaskButton.addEventListener("click", () => {
  addTask();
});
const addProjectButton = document.querySelector(".add-project");
addProjectButton.addEventListener("click", () => {
  addProject();
});
const projectNamer = document.querySelector(".project-indicator");
let projectObserverOptions = {
  childList: true,
  attributes: true,
  characterData: true,
  subtree: true,
};
const observer = new MutationObserver(pCallback);

function pCallback(mutations) {
  for (let mutation of mutations) {
    if (mutation.type === "characterData") {
      renameProject();
    }
  }
}

observer.observe(projectNamer, projectObserverOptions);
