import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import $(ClassName) from './index';

test('renders $(ClassName) component', () => {
  const wrapper = render(<$(ClassName) />);
  expect(wrapper).toBeTruthy();
});
