import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  window.URL.createObjectURL = jest.fn();
  afterEach(() => {
    window.URL.createObjectURL.mockReset();
  });
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
