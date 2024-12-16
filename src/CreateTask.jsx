import React, { PureComponent } from "react";

class CreateTask extends PureComponent {
  state = {
    text: ''
  }

  changeTextTask = (value) => {
    this.setState({
      text: value
    });
  }

  onSubmit = () => {
    this.props.onCreateTask(this.state.text);
    this.setState({
      text: '',
    });
  }
  
  render() {
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={this.state.text}
          onChange={e => this.changeTextTask(e.target.value)} />
        <button
          className="btn create-task__btn"
          onClick={this.onSubmit}>Create</button>
      </div>
    );
  }
}

export default CreateTask;