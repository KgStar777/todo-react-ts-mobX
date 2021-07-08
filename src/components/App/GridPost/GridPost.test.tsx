import React from 'react';
import { render, screen } from '@testing-library/react';

import GridPost from './GridPost';

describe('Card component', () => {
  it('should render', () => {
    render(<GridPost userId={1} id={1} title="title" body="body" />);

    expect(screen.getByText('body')).toBeInTheDocument();
  });

  it('should', () => {
    render(<GridPost userId={1} id={1} title="title" body="body" />);

    expect(screen.getByText(/User/)).toHaveStyle('color: dodgerblue');
  });
});
