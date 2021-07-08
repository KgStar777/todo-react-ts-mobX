import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import TodoPage from './TodoPage';
import PostsPage from './PostsPage';
import AboutPage from './AboutPage';
import HeaderComponent from './Header';

const { Header } = Layout;

const App: React.FC = () => (
  <>
    <HeaderComponent />

    <Switch>

      <Route path="/todo">
        <TodoPage />
      </Route>

      <Route path="/posts">
        <PostsPage />
      </Route>

      <Route path="/about">
        <AboutPage />
      </Route>

    </Switch>
  </>
);

export default App;
