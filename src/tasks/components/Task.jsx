import React from 'react';
import PropTypes from "prop-types";

const Task = ({task, toggleCheckboxIsFinish, handleDelete}) => {
  const nameClass = task.isDone ? "list-item list-item_done" :  "list-item";
  
  return (
    <li className={nameClass}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        onChange={() => toggleCheckboxIsFinish({...task, isDone: !task.isDone})}
        checked={task.isDone}
      />
      {task.text}
      <button className="list-item__delete-btn" onClick={() => handleDelete(task.id)}></button>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }),
  toggleCheckboxIsFinish: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Task;
