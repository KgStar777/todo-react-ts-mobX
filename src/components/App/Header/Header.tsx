import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Layout, Menu } from 'antd';

import classes from './Header.module.scss';

const { Header } = Layout;
type PropsHeader = {
  title?: string
};

const HeaderComponent: FC<PropsHeader> = ({ children }) => (
  <Header className={classes.Header}>
    <h1>My TABLE</h1>
    <Col md={{ offset: 15 }} lg={{ offset: 4 }}>

      <Menu className={classes.Menu} mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <NavLink to="/posts/list">Posts</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/todo">Todo</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/about">About</NavLink>
        </Menu.Item>
      </Menu>

    </Col>
  </Header>
);

export default HeaderComponent;
