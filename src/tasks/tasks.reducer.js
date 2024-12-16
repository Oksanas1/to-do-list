import { TASKS_DATA_RECIEVED, TASKS_UPDATE, TASKS_DELETE, TASKS_CREATE } from "./tasks.actions";

const initialState = {
  tasksList: [],
};

const tasksReducer = (state = initialState, action) => {
  switch(action.type) {
    case TASKS_DATA_RECIEVED:
      return ({
        ...state,
        tasksList: action.payload.tasksList,
      });
    case TASKS_UPDATE:
      const updateTaskList = state
        .tasksList.map(task => task.id === action.payload.task.id ? action.payload.task : task);
      return ({
        ...state,
        tasksList: updateTaskList,
      });
    case TASKS_DELETE:
      return ({
        ...state,
        tasksList: state.tasksList.filter(({id}) => id !== action.payload.id),
      });
    case TASKS_CREATE:
      return ({
        ...state,
        tasksList: state.tasksList.concat(action.payload.task),
      });
    default:
      return state;
  }
};

export default tasksReducer;
