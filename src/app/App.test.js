import React from 'react';
import render from '@testing-library/react';
import App from './App';

const setSize = 50;
const indexToCheck = 10;

function initShuffledArray() {
  const array = new Array(setSize);
  for (let index = 0; index < setSize; index++) {
    array[index] = index;
  }

  let tmp;
  let current;
  let top = array.length;
  if (top) {
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  }
  return array;
}

test('Test Array.filter', () => {
  const data = initShuffledArray();
  expect(data).toBeDefined();
  const result = data.filter((num) => num % 2 === 0);
  expect(result).toBeDefined();
});

test('Test Array.map', () => {
  const data = initShuffledArray();
  expect(data).toBeDefined();
  const expected = data[indexToCheck] + data[indexToCheck - 1];
  const result = data.map((value, index, array) => {
    if (index > 0) {
      return value + array[index - 1];
    }
    return value;
  }, 0);
  expect(result).toBeDefined();
  expect(result[indexToCheck]).toBe(expected);
});

test('Test Array.reduce', () => {
  const data = initShuffledArray();
  expect(data).toBeDefined();

  const result = data.reduce((prev, curr) => prev + curr);
  expect(result).toBeDefined();
  expect(result).toBe(((setSize - 1) * setSize) / 2);
});

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/projects/i);
//   expect(linkElement).toBeInTheDocument();
// });
