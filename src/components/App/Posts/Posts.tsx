import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Col, Row, List,
} from 'antd';

import GridPost from '../GridPost';
import { Post } from '../../data/todos';
import classes from './Posts.module.scss';
import Button from '../Button';
import ButtonWrapper from '../ButtonWrapper';

export type View = 'list' | 'grid';

export type PostsProps = {
  data: Post[];
  view?: View;
};

const Posts: React.FC<PostsProps> = ({ data }) => {
  const { view = 'list' } = useParams<{ view?: string }>();

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  if (view === 'list') {
    return (
      <>
        <Col
          xs={{ span: 21, offset: 1 }}
          md={{ span: 18, offset: 2 }}
          lg={{ span: 12, offset: 6 }}
        >
          <List
            size="small"
            itemLayout="horizontal"
            dataSource={data}
            pagination={{
              simple: true,
              defaultPageSize: 14,
              showSizeChanger: true,
              pageSizeOptions: ['10', '20', '40', '60'],
            }}
            renderItem={(item) => (
              <List.Item title={item.title}>
                <span style={{ color: 'dodgerblue' }}>
                  {item.id}.
                </span>
                {item.title}
              </List.Item>
            )}
          />
        </Col>

      </>
    );
  }
  if (view === 'grid') {
    return (
      <>
        <Row gutter={0}>
          {data.map((post) => (
            <GridPost key={post.id} {...post} />
          ))}
        </Row>
        <ButtonWrapper>
          <Button title="Scroll to top" onClick={goToTop} />
        </ButtonWrapper>
      </>
    );
  }

  return null;
};

export default Posts;
