import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import { Col, Row } from 'antd';

import SearchInput from '../SearchInput';
import Todos from '../Todos';
import todoStore from '../../../stores/todoStore';

const TodoPage = observer(() => {
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    todoStore.setFilterVal(e.target.value);
  }, []);

  const clearValue: React.MouseEventHandler<HTMLButtonElement> = () => todoStore.setFilterVal('');

  return (
    <>

      <Row>
        <Col span={16} offset={4} style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <SearchInput
            search={todoStore.searchString}
            handleSearch={handleSearch}
            clearValue={clearValue}
          />
        </Col>
      </Row>

      <Todos data={todoStore.getTodo()} />
    </>
  );
});

export default TodoPage;
