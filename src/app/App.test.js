import React from 'react';
import render from '@testing-library/react';
import { test, expect } from '@testing-library/jest-dom/extend-expect';
import App from './App';

function RandomArrayData() {
  return Array.from({ length: 50 }, () => Math.floor(Math.random() * 50));
}

test('Test array map', () => {
  const result = RandomArrayData().map((value, index, array) => {
    if (index > 1) {
      return value + array[index - 1];
    }
    return value;
  }, 0);
  expect(result).toEqual();
});

test('Test array reduce', () => {
  const result = RandomArrayData().reduce((prev, curr) => {
    const newVal = prev + curr;
    return newVal;
  }, 0);
  expect(result).toEqual(expect.Anything());
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/projects/i);
  expect(linkElement).toBeInTheDocument();
});
