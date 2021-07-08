import React, { useCallback } from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import {
  Col, Row, Button, Radio,
} from 'antd';
import { BarsOutlined, TableOutlined } from '@ant-design/icons';

import Posts from '../Posts';
import postsStore from '../../../stores/postsStore';
import SearchInput from '../SearchInput';
import todoStore from '../../../stores/todoStore/todoStore';

const PostsPage = observer(() => {
  const { push, location: { pathname } } = useHistory();

  const handleSearchPosts = useCallback((e) => postsStore.setFilterValue(e.target.value), []);
  const clearValue: React.MouseEventHandler<HTMLButtonElement> = () => todoStore.setFilterVal('');

  return (

    <Switch>
      <Route path="/posts/:view">

        <Row>
          <Col offset={1} style={{ marginTop: '1rem' }}>
            <Button onClick={() => push('/posts/list')} value="List" size="large">
              <BarsOutlined />
            </Button>
            <Button onClick={() => push('/posts/grid')} value="Grid" size="large">
              <TableOutlined />
            </Button>
          </Col>

          <Col xs={{ span: 15, offset: 1 }} span={14} offset={2} style={{ marginTop: '1rem' }}>
            <SearchInput
              search={postsStore.searchString}
              handleSearch={handleSearchPosts}
              clearValue={clearValue}
            />
          </Col>
        </Row>

        <Posts data={postsStore.getPosts()} />

      </Route>
    </Switch>

  );
});

export default PostsPage;
