import React, { FC } from 'react';
import {
  Input, Row, Col, Button,
} from 'antd';
import { SearchOutlined, ClearOutlined } from '@ant-design/icons';

type SearchProps = {
  search: string;
  handleSearch: React.ChangeEventHandler<HTMLInputElement>;
  clearValue?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  placeholder?: string;
};

const SearchInput: FC<SearchProps> = (props) => {
  const {
    search,
    handleSearch,
    clearValue,
    placeholder = 'Search',
  } = props;
  return (

    <Input
      size="middle"
      type="text"
      value={search}
      onChange={handleSearch}
      placeholder={placeholder}
      prefix={<SearchOutlined className="site-form-item-icon" />}
      suffix={(
        <Button
          size="middle"
          icon={<ClearOutlined />}
          onClick={clearValue}
        />
               )}
    />

  );
};
export default SearchInput;
