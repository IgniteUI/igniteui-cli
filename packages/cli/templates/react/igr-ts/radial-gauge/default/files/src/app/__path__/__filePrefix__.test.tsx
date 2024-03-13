import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import $(ClassName) from './$(path)';

test('renders $(ClassName) component', () => {
    const wrapper = render(<$(ClassName) />);
    expect(wrapper).toBeTruthy();
});
