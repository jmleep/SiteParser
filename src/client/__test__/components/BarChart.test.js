import React from 'react';
import { render } from '@testing-library/react';
import BarChart from '../../components/BarChart/BarChart';
import { words } from '../testData';

test('BarChart renders when supplied a wordlist', () => {
  const { getByTestId } = render(<BarChart words={words} />);

  expect(getByTestId('chip')).toBeDefined();
  expect(getByTestId('bar')).toBeDefined();
});

test('BarChart renders error view when given empty wordlist', () => {
  const emptyWords = [];
  const { queryByTestId } = render(<BarChart words={emptyWords} />);

  expect(queryByTestId('error')).toBeDefined();
  expect(queryByTestId('bar')).toBeNull();
  expect(queryByTestId('chip')).toBeNull();
});
