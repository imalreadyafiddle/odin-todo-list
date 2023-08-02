function getProjects() {
  let projects = [];
  let allTasks = JSON.parse(localStorage.getItem("tasks"));
  allTasks.forEach((task) => {
    if (projects.indexOf(task.projectName) == -1) {
      projects.push(task.projectName);
    }
  });
  return projects;
}

export { getProjects };
