import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../../components/App/App';
import fetchSite from '../../service/fetchSite';

jest.mock('../../service/fetchSite', () => {
  const { words, images } = require('../testData');
  return function() {
    return { words, images };
  };
});

test('App renders with only textfield and button by default', () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId('button')).toBeDefined();
  expect(getByTestId('textfield')).toBeDefined();
});

test('App renders spinner when user searches for site', () => {
  const { getByTestId } = render(<App />);

  fireEvent.click(getByTestId('button'));

  expect(getByTestId('circle')).toBeDefined();
});
