import { EventEmitter } from 'events';

import ToDo from '../models/ToDo';

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

  getAll() {
    return this.todos;
  }
}

const todoStore = new ToDoStore();
export default todoStore;
