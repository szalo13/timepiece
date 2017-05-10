import React from 'react';
import TaskList from './task-list';
import TaskCreateNew from './task-create-new.js';

var todos = [
    {
      task: "React",
      isCompleted: false
    },
    {
      task: "React2",
      isCompleted: true
    }
];

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  };

  render() {
    return(
      <div>
        <h1>Hello World</h1>
        <TaskCreateNew
          createTask={this.createTask.bind(this)} />
        <TaskList
          todos={this.state.todos} />
      </div>
    );
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({
      todos: this.state.todos
    });
  }
}
