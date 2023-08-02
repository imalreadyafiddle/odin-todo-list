function getTasks(projectNum) {
  // for prototyping only
  let projectlist = [
    {
      projectNum: 1,
      projectName: "Project 1",
      taskName: "Task 1",
      priority: "High",
      dueDate: "12/12/2023",
      status: "In Progress",
      taskDetails: "Detailed information about Task 1 will be stored here...",
    },
    {
      projectNum: 1,
      projectName: "Project 1",
      taskName: "Task 2",
      priority: "Medium",
      dueDate: "12/13/2023",
      status: "Not Started",
      taskDetails: "Detailed information about Task 2 will be stored here...",
    },
    {
      projectNum: 1,
      projectName: "Project 1",
      taskName: "Task 3",
      priority: "Low",
      dueDate: "12/14/2023",
      status: "Complete",
      taskDetails: "Detailed information about Task 3 will be stored here...",
    },
    {
      projectNum: 2,
      projectName: "Project 2",
      taskName: "Task 4",
      priority: "Low",
      dueDate: "12/15/2023",
      status: "Not Started",
      taskDetails: "Detailed information about Task 4 will be stored here...",
    },
  ];

  localStorage.setItem("tasks", JSON.stringify(projectlist));

  // logic that will remain in final function
  let allTasks = JSON.parse(localStorage.getItem("tasks"));
  let returnableTasks = [];
  allTasks.forEach((task) => {
    if (projectNum == task.projectNum) {
      returnableTasks.push(task);
    }
  });
  return returnableTasks;
}

export { getTasks };
