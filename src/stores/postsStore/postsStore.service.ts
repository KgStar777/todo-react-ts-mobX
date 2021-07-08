import axios from 'axios';

import { Post } from '../../components/data/todos';

const service = {
  getPosts(): Promise<Post[]> {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.data);
  },
};

export default service;
