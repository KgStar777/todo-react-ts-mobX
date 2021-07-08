import React from 'react';
import { render, screen } from '@testing-library/react';

import TodoItem from './TodoItem';

describe('TodoItem test:', () => {
  it('should render', () => {
    render(<TodoItem title="something text" completed />);
    expect(screen.getByText(/something/)).toBeInTheDocument();
  });

  it('should render img', () => {
    render(<TodoItem title="something text" completed />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
