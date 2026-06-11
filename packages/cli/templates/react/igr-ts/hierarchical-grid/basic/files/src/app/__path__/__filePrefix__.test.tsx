import { beforeAll, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import $(ClassName) from './$(path)';
import { setupTestMocks } from '../../setupTests';

beforeAll(() => {
  setupTestMocks();
})

test('renders $(ClassName) component', () => {
  const wrapper = render(<$(ClassName) />);
  expect(wrapper).toBeTruthy();
});
