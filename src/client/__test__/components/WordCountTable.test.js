import React from 'react';
import { render } from '@testing-library/react';
import WordCountTable from '../../components/WordCountTable/WordCountTable';
import { words } from '../testData';

test('WordCountTable renders when supplied a wordlist', () => {
  const { getByTestId } = render(<WordCountTable words={words} />);

  expect(getByTestId('chip')).toBeDefined();
  expect(getByTestId('table')).toBeDefined();
});

test('WordCountTable renders error view when given empty wordlist', () => {
  const emptyWords = [];
  const { queryByTestId } = render(<WordCountTable words={emptyWords} />);

  expect(queryByTestId('error')).toBeDefined();
  expect(queryByTestId('table')).toBeNull();
  expect(queryByTestId('chip')).toBeNull();
});
