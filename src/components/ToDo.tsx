import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ToDoItem from '../models/ToDo';

export class ToDo extends React.Component<ToDoItem, ToDoItem> {
  constructor(props) {
    super(props);
    let { id, text, complete } = props;
    this.state = {
      id,
      text,
      complete
    };
    this.setToComplete = this.setToComplete.bind(this);
  }

  setToComplete() {
    let { id, text, complete } = this.state;
    complete = !complete;
    this.setState({
      id,
      text,
      complete
    });
  }

  render() {
    return <div>
      {this.state.id}: {this.state.text}
      <span onClick={this.setToComplete}>
        [{this.state.complete ? "Done" : "Not Done!"}]
      </span>
    </div>
  }
}
