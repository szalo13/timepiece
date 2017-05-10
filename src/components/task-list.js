import React from 'react';
import _ from 'lodash';
import TaskListItem from './task-list-item';

export default class TaskList extends React.Component {

  renderItems() {
    console.log("xxx");
    return _.map(this.props.todos, (todo, index) => <TaskListItem key={index} {...todo} />);
  }

  render() {

    console.log(this.props);
    return(
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>isCompleted</th>
          </tr>
        </thead>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
