import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Immutable from 'immutable';

import { ToDoType } from '../stores/ToDoStore';

export class ToDo extends React.Component<ToDoType, ToDoType> {
  constructor(props) {
    super(props);
    let { id, text, complete } = props;
    this.state = Immutable.Map({id, text, complete});
    this.setToComplete = this.setToComplete.bind(this);
  }

  setToComplete() {
    let { id, text, complete } = {
      id: this.state.get('id'),
      text: this.state.get('text'),
      complete: this.state.get('complete')
    };
    this.setState(this.state.set('complete', !complete));
  }

  render() {
    return <div>
      {this.state.get('id')}: {this.state.get('test')}
      <span onClick={this.setToComplete}>
        [{this.state.get('complete') ? "Done" : "Not Done!"}]
      </span>
    </div>
  }
}
