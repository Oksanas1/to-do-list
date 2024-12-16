export const taskListSelectors = state => state.tasksList.tasksList
  .sort((a, b) => a.isDone - b.isDone);
