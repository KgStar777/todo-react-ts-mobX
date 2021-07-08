import axios from 'axios';

import { Todo } from '../../components/data/todos';

const serviceTodo = {
  getTodos(): Promise<Todo[]> {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.data);
  },
};

export default serviceTodo;
