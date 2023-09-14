import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
    render(<App />);
    const home = screen.getByRole('link');
    expect(home).toBeTruthy();
});
