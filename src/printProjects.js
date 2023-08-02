import { getProjects } from "./getProjects";
import { switchProjects } from "./switchProjects";

function printProjects() {
  let projectBar = document.querySelector(".projects");
  projectBar.innerHTML = "";

  let projectList = getProjects();
  let i = 1;

  // print a button for each project to the sidebar
  projectList.forEach((project) => {
    // add button to sidebar
    let projectButton = document.createElement("button");
    projectButton.classList.add("project");
    projectButton.innerText = project;

    // set number for button to use in switcher & other function
    projectButton.setAttribute("project-button-number", i);
    projectBar.appendChild(projectButton);

    // create event listener to call switchProjects(i);
    projectButton.addEventListener("click", () => {
      switchProjects(projectButton.getAttribute("project-button-number"));
    });

    // increment counter
    i++;
  });
}

export { printProjects };
