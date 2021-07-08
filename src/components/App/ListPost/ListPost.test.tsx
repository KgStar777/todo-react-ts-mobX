import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import ListPost from './ListPost';

describe('ListPost should', () => {
  it('have body', () => {
    render(
      <ListPost id={1} userId={1} title="title" body="body" />,
    );
    expect(screen.getByText(/body/)).toBeInTheDocument();
  });

  it('have id', () => {
    render(
      <ListPost id={1} userId={1} title="title" body="body" />,
    );
    expect(screen.getByText(/1/)).toBeInTheDocument();
  });
});
