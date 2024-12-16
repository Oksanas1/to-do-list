import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types"

const TaskItem = ({ id, isDone, text, onToggleDone, onDelete }) => {

  const itemClass = classNames('list-item', {'list-item_done': isDone});

  return (
    <li className={itemClass}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        checked={isDone}
        onChange={() => onToggleDone(id, isDone)} />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}></button>
    </li>
  );
}

TaskItem.propTypes = {
  id: PropTypes.string.isRequired,
  isDone: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
}

TaskItem.default = {
  isDone: false,
}

export default TaskItem;