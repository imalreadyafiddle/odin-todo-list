function renumberTasks(projectNum, remainingTasks) {
  let i = 1;
  remainingTasks.forEach((remainingTask) => {
    if (remainingTask.projectNum == projectNum) {
      remainingTask.taskNum = i;
      i++;
    }
  });
  return remainingTasks;
}

export { renumberTasks };
