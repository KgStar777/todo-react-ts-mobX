import React, { FC } from 'react';
import { Col, Typography, List } from 'antd';

type ListPostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const ListPost: FC<ListPostProps> = ({
  userId, id, title, body,
}) => (
  <List.Item title={title}>
    <span>{id}.</span> {body}
  </List.Item>
);

export default ListPost;
