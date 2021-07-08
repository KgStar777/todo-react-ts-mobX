import { makeObservable, observable } from 'mobx';

import { Post } from '../../components/data/todos';
import service from './postsStore.service';

class PostsStore {
  posts: Post[] = [];

  filteredPosts: Post[] = [];

  searchString = '';

  constructor() {
    makeObservable(this, {
      posts: observable,
      searchString: observable,
    });

    Promise.all([service.getPosts()])
      .then(([posts]) => {
        this.posts = posts;
        // eslint-disable-next-line
        // this.searchString = this.searchString;
      });
  }

  setFilterValue(searchString: string): void {
    this.searchString = searchString;
    if (searchString.length > 1) {
      this.filteredPosts = this.posts.filter((posts) => posts.title.includes(searchString));
    } else {
      this.filteredPosts = this.posts;
    }
  }

  getPosts(): Post[] {
    this.setFilterValue(this.searchString);
    return this.filteredPosts;
  }
}

export default new PostsStore();
