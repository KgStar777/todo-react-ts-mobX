import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';
import Header from '../Header/Header';

describe('button should:', () => {
  test('render', () => {
    const { getByText } = render(<Button title="title" />);
    expect(getByText('title')).toBeInTheDocument();
  });
  test('root element', () => {
    render(
      <Button title="title" />,
    );
    const rootElement = document.getElementsByClassName('Button')[0];
    expect(rootElement).toBeInTheDocument();
  });
});
