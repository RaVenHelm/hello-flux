import * as React from 'react';

import { ToDoStore, ToDoType } from '../stores/ToDoStore';

import { ToDo } from '../components/ToDo';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export interface HelloState {
  todos: ToDoItem[]
}

export class Hello extends React.Component<HelloProps, HelloState> {

  constructor() {
    super();
    this.state = {
      todos: ToDoStore.getAll()
    };
  }

  componentWillMount() {
    ToDoStore.on('change', () => {
      this.setState({
        todos: ToDoStore.getAll()
      });
    });
  }

  render() {
    const { todos } = this.state;

    const toDoComponents = todos.map(todo => {
      return <div key={todo.id}><ToDo id={todo.id} text={todo.text} complete={todo.complete} /></div>
    });
    return <div>
      <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
      {toDoComponents}
    </div>
  }
}
