function getProjects() {
  let projects = [];
  let projectNames = [];
  let allTasks = JSON.parse(localStorage.getItem("tasks"));
  allTasks.forEach((task) => {
    if (projects.indexOf(task.projectNum) == -1) {
      projects.push(task.projectNum);
      projectNames.push(task.projectName);
    }
  });
  return projectNames;
}

export { getProjects };
