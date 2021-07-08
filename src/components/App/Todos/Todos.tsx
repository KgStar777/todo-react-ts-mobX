import React from 'react';
import {
  Row, Col, Table, Typography, Checkbox,
} from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

import { Todo } from '../../data/todos';

type TodosProps = {
  data: Todo[];
  search?: string;
};

const columns = [
  {
    title: 'userID',
    dataIndex: 'userId',
    key: 'userId',
    sorter: (a: any, b: any) => a.userId - b.userId,
  },
  {
    title: 'done',
    dataIndex: 'completed',
    key: 'completed',
    render: (i: boolean) => (
      <Checkbox
        checked={i}
        onChange={(e: CheckboxChangeEvent) => console.log(e.target.checked)}
      />
    ),
    filters: [
      {
        text: 'completed',
        value: true,
      },
      {
        text: 'not completed',
        value: false,
      },
    ],
  },
  {
    title: 'todo',
    dataIndex: 'title',
    key: 'title',
    render: (txt: any) => <Typography.Text copyable>{txt}</Typography.Text>,
  },
];

const Todos: React.FC<TodosProps> = ({ data, search = '' }) => (
  <Row>
    <Col xs={24} md={{ span: 18, offset: 3 }}>
      <Table
        size="small"
        dataSource={data}
        columns={columns}
        pagination={{
          simple: true,
          defaultPageSize: 12,
          showSizeChanger: false,
          pageSizeOptions: ['10', '20', '40', '60'],
          size: 'small',
        }}
      />
    </Col>
  </Row>
);

export default Todos;
