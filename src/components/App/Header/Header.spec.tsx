import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';

describe('Header component', () => {
  test('should have h1', async () => {
    render(
      <Router>
        <Header />
      </Router>,
    );

    expect(screen.getByText(/TABLE/)).toHaveStyle('font-size: 2em');
  });
});
