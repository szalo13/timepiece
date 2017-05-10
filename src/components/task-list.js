import React from 'react'

export default class TaskList extends React.Component {

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

        </tbody>
      </table>
    );
  }
}
