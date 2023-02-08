/** @jest-environment jsdom */
import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App.js';

describe('App component', () => {
  it('renders correct heading', () => {
    const { getByRole } = render(<App />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByRole('heading').textContent).toMatch(/our first test/i);
  });
});
