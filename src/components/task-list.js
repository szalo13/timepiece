import React from 'react';
import _ from 'lodash';
import TaskListItem from './task-list-item';
import TaskListHead from './task-list-head';

export default class TaskList extends React.Component {

  renderItems() {
    return _.map(this.props.todos, (todo, index) => <TaskListItem key={index} {...todo} />);
  }

  render() {
    return(
      <table>
        <TaskListHead />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
