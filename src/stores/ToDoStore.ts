import { EventEmitter } from 'events';

import * as Immutable from 'immutable';

import Dispatcher from '../dispatchers/dispatcher';

export interface ToDoType extends Immutable.Map<string, number|string|boolean>{}

const ToDo: ToDoType = Immutable.Map({
  id: undefined,
  text: undefined,
  complete: undefined
});

class ToDoStore extends EventEmitter {
  // public todos: Immutable.List<ToDo>;
  public todos: Immutable.List<ToDoType>;
  constructor() {
    super();
    this.todos = Immutable.List([
      Immutable.Map({
        id: 12345678,
        text: "Pay Bills",
        complete: false
      }),
      Immutable.Map({
        id: 80170034778,
        text: "Buy Groceries",
        complete: false
      })
    ]);
  }

  createToDo(text: string) {
    const id = Math.random() % 10000000000 + 1000000000;
    this.todos.push();

    this.emit('change');
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createToDo(action.text);
      }
    }
  }

  getAll() {
    return this.todos;
  }
}

const todoStore = new ToDoStore();
Dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;
