import React from 'react';

export default class TaskListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    }
  }
  render() {
    return(
      <tr>
        <td>{this.props.task}</td>
        <td>{this.props.isCompleted.toString()}</td>
      </tr>
    );
  }
}
