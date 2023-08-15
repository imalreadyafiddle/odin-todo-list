function renumberProjects(tasks) {
  let currentProjectNums = [];
  let newProjectNums = [];
  tasks.forEach((task) => {
    if (currentProjectNums.indexOf(task.projectNum) == -1) {
      currentProjectNums.push(task.projectNum);
    }
  });
  for (let i = 1; i < currentProjectNums.length + 1; i++) {
    newProjectNums.push(i);
  }

  tasks.forEach((task) => {
    let currentIndex = currentProjectNums.indexOf(task.projectNum);
    task.projectNum = newProjectNums[currentIndex];
  });
}

export { renumberProjects };
