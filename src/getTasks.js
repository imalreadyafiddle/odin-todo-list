import { printTasks } from "./printTasks";

function getTasks(projectNum) {
  // default project list if one does not exist
  let defaultList = [
    {
      projectNum: 1,
      taskNum: 1,
      projectName: "Todoit Tutorial",
      taskName: "Click on a task",
      priority: "High",
      dueDate: "2023-12-12",
      status: "In Progress",
      taskDetails:
        "All changes to a task's info will save when the task is closed.",
    },
    {
      projectNum: 1,
      taskNum: 2,
      projectName: "Todoit Tutorial",
      taskName: "to edit details.",
      priority: "Medium",
      dueDate: "2023-12-13",
      status: "Not Started",
      taskDetails:
        "All changes to a task's info will save when the task is closed.",
    },
    {
      projectNum: 1,
      taskNum: 3,
      projectName: "Todoit Tutorial",
      taskName: "Use sidebar to switch projects.",
      priority: "Low",
      dueDate: "2023-12-14",
      status: "Complete",
      taskDetails:
        "All changes to a task's info will save when the task is closed.",
    },
    {
      projectNum: 2,
      taskNum: 1,
      projectName: "Click project name to change",
      taskName: "Empty projects are deleted.",
      priority: "Low",
      dueDate: "2023-12-15",
      status: "Not Started",
      taskDetails:
        "All changes to a task's info will save when the task is closed.",
    },
  ];

  let allTasks;
  if (projectNum == "all" && localStorage.getItem("tasks").length > 0) {
    return JSON.parse(localStorage.getItem("tasks"));
  } else if (projectNum == "reset") {
    allTasks = defaultList;
    localStorage.setItem("tasks", JSON.stringify(defaultList));
    printTasks(1);
  } else if (
    JSON.parse(localStorage.getItem("tasks")) != null &&
    localStorage.getItem("tasks").length > 0
  ) {
    allTasks = JSON.parse(localStorage.getItem("tasks"));
  } else {
    allTasks = defaultList;
    localStorage.setItem("tasks", JSON.stringify(defaultList));
  }
  let returnableTasks = [];
  allTasks.forEach((task) => {
    if (projectNum == task.projectNum) {
      returnableTasks.push(task);
    }
  });
  return returnableTasks;
}

export { getTasks };
