import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

describe('App component', () => {
  it('should render link', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const link = getByText(/todo/i);
    expect(link).toBeInTheDocument();
  });

  it('should render', () => {
    const { queryAllByRole } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const element = queryAllByRole('link');
    expect(element).toHaveLength(3);
  });
});
