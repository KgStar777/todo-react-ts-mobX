import React, { useState } from 'react';
import {
  Card, Col, Row, Collapse,
} from 'antd';

import classes from './GridPost.module.scss';

const { Panel } = Collapse;

type GridPostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const GridPost: React.FC<GridPostProps> = ({
  userId, id, title, body,
}) => (
  <Col xs={{ span: 24 }} md={8} lg={6}>
    <Card key={id} title={title} bordered={false} size="small">
      <p style={{ color: 'dodgerblue' }}> User №{userId}</p>
      {body}
    </Card>
  </Col>
);

export default GridPost;
