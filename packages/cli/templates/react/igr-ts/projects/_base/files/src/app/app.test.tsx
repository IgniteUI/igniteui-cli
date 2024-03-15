import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import App from './app';
import 'element-internals-polyfill';

test('renders without crashing', () => {
  const wrapper = render(<App />);
  expect(wrapper).toBeTruthy();
});
