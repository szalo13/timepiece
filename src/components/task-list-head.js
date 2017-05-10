import React from 'react';

export default class TaskListHead extends React.Component {

  render() {
    return(
        <thead>
          <tr>
            <th>Task</th>
            <th>isCompleted</th>
          </tr>
        </thead>
    );
  }
}
