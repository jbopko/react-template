import React from 'react';
import { render } from '@testing-library/react';
import { test, expect } from '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/projects/i);
  expect(linkElement).toBeInTheDocument();
});
