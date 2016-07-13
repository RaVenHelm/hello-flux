import { EventEmitter } from 'events';

import ToDo from '../models/ToDo';
import Dispatcher from '../dispatchers/dispatcher';

class ToDoStore extends EventEmitter {
  public todos: ToDo[];
  constructor() {
    super();
    this.todos = [
      {
        id: 12345678,
        text: "Pay Bills",
        complete: false
      },
      {
        id: 80170034778,
        text: "Buy Groceries",
        complete: false
      }
    ];
  }

  createToDo(text: string) {
    const id = Math.random() % 10000000000 + 1000000000;
    this.todos.push({
      id,
      text,
      complete: false
    });

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
