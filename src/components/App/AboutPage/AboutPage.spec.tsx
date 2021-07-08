import React from 'react';
import { screen, render } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('should have img', () => {
    render(<AboutPage />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
