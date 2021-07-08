import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import ButtonWrapper from './ButtonWrapper';

describe('ButtonWrapper should', () => {
  it('be root element', () => {
    render(
      // eslint-disable-next-line
      <ButtonWrapper children={<div>куку</div>} />,
    );
    const rootElement = document.getElementsByClassName('ButtonWrapper')[0];
    expect(rootElement).toBeInTheDocument();
  });

  it('have text', () => {
    // eslint-disable-next-line
    render(<ButtonWrapper children={<div>куку</div>} />);

    expect(screen.getByText('куку')).toBeInTheDocument();
  });
});
