import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { createTask } from '../tasks.actions';

const CreateTaskInput = ({createTask}) => {
  const [newTaskText, setNewTaskText] = useState('');

  const handleChange = (value) => {
    setNewTaskText(value);
  };

  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={newTaskText}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className="btn create-task__btn" onClick={() => createTask({ text: newTaskText, isDone: false, })}>Create</button>
    </div>
  );
};

CreateTaskInput.propTypes = {
  createTask: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  createTask,
};

export default connect(null, mapDispatchToProps)(CreateTaskInput);
