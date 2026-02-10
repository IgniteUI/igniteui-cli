import { beforeAll, expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import $(ClassName) from './$(path)';
import ResizeObserver from 'resize-observer-polyfill';

beforeAll(() => {
  globalThis.ResizeObserver = ResizeObserver;

  HTMLElement.prototype.scrollIntoView = vi.fn();
  HTMLElement.prototype.hidePopover = vi.fn();
  HTMLElement.prototype.showPopover = vi.fn();
  HTMLElement.prototype.togglePopover = vi.fn();
})

test('renders $(ClassName) component', () => {
  const wrapper = render(<$(ClassName) />);
  expect(wrapper).toBeTruthy();
});
