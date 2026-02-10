import { beforeAll, expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import App from './app';
import 'element-internals-polyfill';
import ResizeObserver from 'resize-observer-polyfill'

beforeAll(() => {
  globalThis.ResizeObserver = ResizeObserver;

  HTMLElement.prototype.scrollIntoView = vi.fn();
  HTMLElement.prototype.hidePopover = vi.fn();
  HTMLElement.prototype.showPopover = vi.fn();
  HTMLElement.prototype.togglePopover = vi.fn();
})

test('renders without crashing', () => {
  const wrapper = render(<App />);
  expect(wrapper).toBeTruthy();
});
