import { makeObservable, observable } from 'mobx';

import { Todo } from '../../components/data/todos';
import service from './todoStore.service';

class TodoStore {
  todo: Todo[] = [];

  filteredTodo: Todo[] = [];

  searchString = '';

  constructor() {
    makeObservable(this, {
      todo: observable,
      searchString: observable,
    });
    Promise.all([service.getTodos()])
      .then(([todo]) => {
        this.todo = todo;
        // eslint-disable-next-line
        this.searchString = this.searchString;
      });
  }

  setFilterVal(searchString: string): void {
    this.searchString = searchString;
    if (searchString) {
      const filteredTodo = this.todo.filter((item) => item.title.includes(searchString));
      this.filteredTodo = filteredTodo;
    } else {
      this.filteredTodo = this.todo;
    }
  }

  getTodo(): Todo[] {
    this.setFilterVal(this.searchString);
    return this.filteredTodo;
  }
}

export default new TodoStore();
