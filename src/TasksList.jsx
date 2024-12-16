import React, { Component } from "react";
import TaskImem from "./TaskItem";
import PropTypes from "prop-types";

class TasksList extends Component {
  shouldComponentUpdate(nextProps) {
    return !(nextProps.todos === this.props.todos);
  }

  render() {
    const { todos, onToggleDone, onDelete } = this.props;
    return (
      <ul className="list">
        {todos.map(todo => 
          <TaskImem key={todo.id} {...todo} onDelete={onDelete} onToggleDone={onToggleDone} />
        )}
      </ul>
    );
  };
}

TasksList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
}

export default TasksList;