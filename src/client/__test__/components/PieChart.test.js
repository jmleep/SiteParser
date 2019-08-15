import React from 'react';
import { render } from '@testing-library/react';
import PieChart from '../../components/PieChart/PieChart';
import { words } from '../testData';

test('PieChart renders when supplied a wordlist', () => {
  const { getByTestId } = render(<PieChart words={words} />);

  expect(getByTestId('chip')).toBeDefined();
  expect(getByTestId('pie')).toBeDefined();
});

test('PieChart renders error view when given empty wordlist', () => {
  const emptyWords = [];
  const { queryByTestId } = render(<PieChart words={emptyWords} />);

  expect(queryByTestId('error')).toBeDefined();
  expect(queryByTestId('pie')).toBeNull();
  expect(queryByTestId('chip')).toBeNull();
});
