import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();
});
