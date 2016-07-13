import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ToDoItem from '../models/ToDo';

export class ToDo extends React.Component<ToDoItem, {}> {
  render() {
    return <div>
      {this.props.id}: {this.props.text} [{this.props.complete ? "Done" : "Not Done!"}]
    </div>
  }
}
