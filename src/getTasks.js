function getTasks(projectNum) {
  //   // for prototyping only
  //   let projectlist = [
  //     {
  //       projectNum: 1,
  //       taskNum: 1,
  //       projectName: "Project 1",
  //       taskName: "Task 1",
  //       priority: "High",
  //       dueDate: "2023-12-12",
  //       status: "In Progress",
  //       taskDetails: "Detailed information about Task 1 will be stored here...",
  //     },
  //     {
  //       projectNum: 1,
  //       taskNum: 2,
  //       projectName: "Project 1",
  //       taskName: "Task 2",
  //       priority: "Medium",
  //       dueDate: "2023-12-13",
  //       status: "Not Started",
  //       taskDetails: "Detailed information about Task 2 will be stored here...",
  //     },
  //     {
  //       projectNum: 1,
  //       taskNum: 3,
  //       projectName: "Project 1",
  //       taskName: "Task 3",
  //       priority: "Low",
  //       dueDate: "2023-12-14",
  //       status: "Complete",
  //       taskDetails: "Detailed information about Task 3 will be stored here...",
  //     },
  //     {
  //       projectNum: 2,
  //       taskNum: 1,
  //       projectName: "Project 2",
  //       taskName: "Task 4",
  //       priority: "Low",
  //       dueDate: "2023-12-15",
  //       status: "Not Started",
  //       taskDetails: "Detailed information about Task 4 will be stored here...",
  //     },
  //   ];

  //   localStorage.setItem("tasks", JSON.stringify(projectlist));

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
