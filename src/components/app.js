import React from 'react';
import TaskList from './task-list';

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
        <TaskList todos={this.state.todos} />
      </div>
    );
  }
}
