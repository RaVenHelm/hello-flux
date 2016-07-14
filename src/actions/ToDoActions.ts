import Dispatcher from '../dispatchers/dispatcher';

export function createToDo(text: string) {
  Dispatcher.dispatch({
    type: 'CREATE_TODO',
    text
  });
}

export function deleteToDo(id: number) {
  Dispatcher.dispatch({
    type: 'DELETE_TODO',
    id
  });
}
