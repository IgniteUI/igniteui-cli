import { beforeAll, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './app';
import 'element-internals-polyfill';
import { setupTestMocks } from '../setupTests';

beforeAll(() => {
  setupTestMocks();
})

test('renders without crashing', () => {
  const wrapper = render(
  <MemoryRouter>
    <App />
  </MemoryRouter>);

  expect(wrapper).toBeTruthy();
});
