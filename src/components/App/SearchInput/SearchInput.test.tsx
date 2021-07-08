import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import SearchInput from './SearchInput';

describe('Search component', () => {
  test('should run callback', async () => {
    const onChange = jest.fn();

    render(<SearchInput search="" handleSearch={onChange} />);

    await userEvent.type(screen.getByRole('textbox'), 'надпись');

    expect(onChange).toHaveBeenCalledTimes(7);
  });
});
