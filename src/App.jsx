import React, { Component } from "react";
import TasksList from "./TasksList";
import CreateTask from "./CreateTask";
const baseUrl = 'https://666441d2932baf9032aa81f9.mockapi.io/api/v1/tasks';

export default class App extends Component {
  state = {
    todos: [],
  }
  
  componentDidMount() {
    this.updateTasks();
  }

  updateTasks = () => {
    fetch(baseUrl)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return new Error(`Response status: ${response.status}`);
      })
      .then( data => {this.setState({ todos: data })})
      .catch(err => console.error(err));
  }

  addTask = newTask => {
    fetch(baseUrl, {
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(newTask)
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      return new Error(`Response status: ${response.status}`);
    }).then(() => {
      this.updateTasks();
    }).catch(error => console.error(error));
  }

  onToggleDone = (value, isDone) => {
    fetch(`${baseUrl}/${value}`, {
      method: 'PUT',
      headers: {'content-type':'application/json'},
      body: JSON.stringify({isDone: !isDone})
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      return new Error(`Response status: ${response.status}`);
    }).then(() => {
      this.updateTasks();
    }).catch(error => console.error(error));
  }

  onDelete = value => {
    fetch(`${baseUrl}/${value}`, {
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      return new Error(`Response status: ${response.status}`);
    }).then(() => {
      this.updateTasks();
    }).catch(error => console.error(error));
  }

  onCreateTask = (value) => {
    const newTask = {
      isDone: false,
      text: value,
    };

    this.addTask(newTask)
  }

  render() {
    const sortTask = this.state.todos.slice();
    sortTask.sort((a, b) => a.isDone - b.isDone);

    return (
      <div id="root">
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTask onCreateTask={this.onCreateTask} />
          <TasksList todos={sortTask} onToggleDone={this.onToggleDone} onDelete={this.onDelete}/>
        </main>
      </div>
    );
  }
}