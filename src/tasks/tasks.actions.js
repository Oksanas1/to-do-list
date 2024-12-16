import { getTasksFromDB, createTaskInDB, updateTaskInDB, deleteTaskInDB } from './tasks.getawey';

export const TASKS_DATA_RECIEVED = 'TASKS_DATA_RECIEVED';
export const TASKS_UPDATE = 'TASKS/UPDATE';
export const TASKS_DELETE = 'TASKS/DELETE';
export const TASKS_CREATE = 'TASKS/CREATE';

export const tasksDataRecieved = tasksList => ({type: TASKS_DATA_RECIEVED, payload: {tasksList}});

export const getTasksList = () => dispatch => {
  getTasksFromDB()
    .then(tasksList => dispatch(tasksDataRecieved(tasksList)));
};

export const createTask = newTask => dispatch => {
  createTaskInDB(newTask)
    .then(task => dispatch({type: TASKS_CREATE, payload: {task},}));
};

export const toggleIsFinish = newTask => dispatch => {
  updateTaskInDB(newTask)
    .then(task => dispatch({type: TASKS_UPDATE, payload: {task}}));
};

export const handleDelete = id => dispatch => {
  deleteTaskInDB(id)
    .then(() => dispatch({type: TASKS_DELETE, payload: {id}}));
};
